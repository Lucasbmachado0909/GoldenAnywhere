// src/modules/exercises/hooks/useAudioRecording.tsx
import { useState, useRef, useCallback } from 'react';
import type { RecordingState } from '../../../types';

export const useAudioRecording = (maxDuration: number = 30) => {
  const [recordingState, setRecordingState] = useState<RecordingState>({
    isRecording: false,
    isPlaying: false,
    isPaused: false,
    duration: 0,
    audioBlob: null,
    audioUrl: null,
    error: null
  });

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null); // ✅ Corrigido: usar number em vez de NodeJS.Timeout
  const streamRef = useRef<MediaStream | null>(null);

  const startRecording = useCallback(async () => {
    try {
      setRecordingState(prev => ({ ...prev, error: null }));

      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100
        } 
      });

      streamRef.current = stream;
      audioChunksRef.current = [];

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm;codecs=opus'
      });

      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm;codecs=opus' });
        const audioUrl = URL.createObjectURL(audioBlob);

        setRecordingState(prev => ({
          ...prev,
          audioBlob,
          audioUrl,
          isRecording: false
        }));

        // Limpar stream
        if (streamRef.current) {
          streamRef.current.getTracks().forEach(track => track.stop());
          streamRef.current = null;
        }
      };

      mediaRecorder.start();

      setRecordingState(prev => ({
        ...prev,
        isRecording: true,
        duration: 0,
        audioBlob: null,
        audioUrl: null
      }));

      // Timer para duração - usando window.setInterval que retorna number
      timerRef.current = window.setInterval(() => {
        setRecordingState(prev => {
          const newDuration = prev.duration + 1;
          
          // Parar automaticamente se atingir duração máxima
          if (newDuration >= maxDuration) {
            stopRecording();
            return { ...prev, duration: maxDuration };
          }
          
          return { ...prev, duration: newDuration };
        });
      }, 1000);

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro ao iniciar gravação';
      setRecordingState(prev => ({ ...prev, error: errorMessage, isRecording: false }));
    }
  }, [maxDuration]);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && recordingState.isRecording) {
      mediaRecorderRef.current.stop();
    }

    if (timerRef.current) {
      window.clearInterval(timerRef.current); // ✅ Usando window.clearInterval
      timerRef.current = null;
    }

    setRecordingState(prev => ({ ...prev, isRecording: false }));
  }, [recordingState.isRecording]);

  const clearRecording = useCallback(() => {
    if (recordingState.audioUrl) {
      URL.revokeObjectURL(recordingState.audioUrl);
    }

    setRecordingState({
      isRecording: false,
      isPlaying: false,
      isPaused: false,
      duration: 0,
      audioBlob: null,
      audioUrl: null,
      error: null
    });

    if (timerRef.current) {
      window.clearInterval(timerRef.current); // ✅ Usando window.clearInterval
      timerRef.current = null;
    }
  }, [recordingState.audioUrl]);

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, []);

  return {
    recordingState,
    startRecording,
    stopRecording,
    clearRecording,
    formatTime
  };
};