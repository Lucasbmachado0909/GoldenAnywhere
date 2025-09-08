// src/modules/exercises/hooks/useAudioPlayback.tsx
import { useState, useRef, useCallback, useEffect } from 'react';
import type { AudioPlayerState } from '../../../types';

export const useAudioPlayback = () => {
  const [playerState, setPlayerState] = useState<AudioPlayerState>({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    loading: false
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const loadAudio = useCallback((audioSrc: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setPlayerState(prev => ({ ...prev, loading: true }));

    const audio = new Audio(audioSrc);
    audioRef.current = audio;

    audio.addEventListener('loadedmetadata', () => {
      setPlayerState(prev => ({
        ...prev,
        duration: audio.duration,
        loading: false
      }));
    });

    audio.addEventListener('timeupdate', () => {
      setPlayerState(prev => ({
        ...prev,
        currentTime: audio.currentTime
      }));
    });

    audio.addEventListener('ended', () => {
      setPlayerState(prev => ({
        ...prev,
        isPlaying: false,
        currentTime: 0
      }));
    });

    audio.addEventListener('error', () => {
      setPlayerState(prev => ({
        ...prev,
        loading: false,
        isPlaying: false
      }));
    });

    return audio;
  }, []);

  const play = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.play();
      setPlayerState(prev => ({ ...prev, isPlaying: true }));
    }
  }, []);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayerState(prev => ({ ...prev, isPlaying: false }));
    }
  }, []);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setPlayerState(prev => ({
        ...prev,
        isPlaying: false,
        currentTime: 0
      }));
    }
  }, []);

  const seek = useCallback((time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setPlayerState(prev => ({ ...prev, currentTime: time }));
    }
  }, []);

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, []);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return {
    playerState,
    loadAudio,
    play,
    pause,
    stop,
    seek,
    formatTime
  };
};