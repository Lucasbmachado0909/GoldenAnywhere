// src/modules/exercises/components/AudioRecordingExercise.tsx
import React, { useState } from 'react';
import { useAudioRecording } from '../hooks/useAudioRecording';
import { useAudioPermissions } from '../hooks/useAudioPermissions';
import RecordingControls from './RecordingControls';
import AudioPlayer from './AudioPlayer';
import type { SpeakingExercise, SpeakingProgress } from '../../../types';

interface AudioRecordingExerciseProps {
  exercise: SpeakingExercise;
  onComplete?: () => void;
}

const AudioRecordingExercise: React.FC<AudioRecordingExerciseProps> = ({
  exercise,
  onComplete
}) => {
  const { permissions, requestPermission } = useAudioPermissions();
  const { recordingState, startRecording, stopRecording, clearRecording, formatTime } = useAudioRecording(30);
  
  const [progress, setProgress] = useState<SpeakingProgress>({
    currentPart: 0,
    currentItem: 0,
    completedParts: [],
    completedItems: []
  });

  const [showPermissionRequest, setShowPermissionRequest] = useState(false);

  const currentPart = exercise.parts[progress.currentPart];
  const currentItem = currentPart?.items[progress.currentItem];
  const totalParts = exercise.parts.length;
  const totalItemsInCurrentPart = currentPart?.items.length || 0;

  const handleStartExercise = async () => {
    if (!permissions.granted) {
      setShowPermissionRequest(true);
      const granted = await requestPermission();
      if (!granted) {
        return;
      }
    }
    setShowPermissionRequest(false);
  };

  const handleNextItem = () => {
    const newCompletedItems = [...progress.completedItems];
    if (currentItem && !newCompletedItems.includes(currentItem.id)) {
      newCompletedItems.push(currentItem.id);
    }

    if (progress.currentItem < totalItemsInCurrentPart - 1) {
      // Próximo item na mesma parte
      setProgress(prev => ({
        ...prev,
        currentItem: prev.currentItem + 1,
        completedItems: newCompletedItems
      }));
    } else if (progress.currentPart < totalParts - 1) {
      // Próxima parte
      const newCompletedParts = [...progress.completedParts];
      if (currentPart && !newCompletedParts.includes(currentPart.id)) {
        newCompletedParts.push(currentPart.id);
      }

      setProgress(prev => ({
        ...prev,
        currentPart: prev.currentPart + 1,
        currentItem: 0,
        completedParts: newCompletedParts,
        completedItems: newCompletedItems
      }));
    } else {
      // Exercício completo
      const finalCompletedParts = [...progress.completedParts];
      if (currentPart && !finalCompletedParts.includes(currentPart.id)) {
        finalCompletedParts.push(currentPart.id);
      }

      setProgress(prev => ({
        ...prev,
        completedParts: finalCompletedParts,
        completedItems: newCompletedItems
      }));

      if (onComplete) {
        onComplete();
      }
    }

    clearRecording();
  };

  const handlePreviousItem = () => {
    if (progress.currentItem > 0) {
      setProgress(prev => ({
        ...prev,
        currentItem: prev.currentItem - 1
      }));
    } else if (progress.currentPart > 0) {
      const previousPart = exercise.parts[progress.currentPart - 1];
      setProgress(prev => ({
        ...prev,
        currentPart: prev.currentPart - 1,
        currentItem: previousPart.items.length - 1
      }));
    }
    clearRecording();
  };

  const isExerciseComplete = progress.currentPart >= totalParts - 1 && 
                            progress.currentItem >= totalItemsInCurrentPart - 1 &&
                            progress.completedParts.length === totalParts;

  if (showPermissionRequest || !permissions.granted) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
        <div className="text-center">
          <div className="bg-blue-100 p-4 rounded-lg mb-4">
            <span className="text-4xl">🎙️</span>
          </div>
          <h3 className="text-xl font-bold text-purple-800 mb-4">
            Exercício de Pronúncia
          </h3>
          
          {permissions.denied ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <p className="text-red-800 mb-2">
                <strong>Acesso ao microfone negado</strong>
              </p>
              <p className="text-red-700 text-sm">
                Para usar este exercício, você precisa permitir o acesso ao microfone. 
                Verifique as configurações do seu navegador.
              </p>
            </div>
          ) : (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-blue-800 mb-2">
                Este exercício precisa acessar seu microfone para gravar sua pronúncia.
              </p>
              <p className="text-blue-700 text-sm">
                Suas gravações ficam apenas no seu dispositivo e não são enviadas para nenhum servidor.
              </p>
            </div>
          )}

          <div className="flex gap-3 justify-center">
            <button
              onClick={handleStartExercise}
              disabled={permissions.loading}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {permissions.loading ? 'Verificando...' : 'Permitir Microfone'}
            </button>
            
            <button
              onClick={() => onComplete && onComplete()}
              className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Pular Exercício
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentPart || !currentItem) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
        <div className="text-center">
          <p className="text-gray-600">Exercício não encontrado.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-100 p-2 rounded-lg">
          <span className="text-2xl">🎙️</span>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-purple-800">{exercise.title}</h3>
          <p className="text-gray-600">{exercise.instruction}</p>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>{currentPart.title}</span>
          <span>
            Parte {progress.currentPart + 1} de {totalParts} • 
            Item {progress.currentItem + 1} de {totalItemsInCurrentPart}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="h-2 bg-blue-500 rounded-full transition-all duration-300"
            style={{
              width: `${((progress.currentPart * 100 + (progress.currentItem + 1) * (100 / totalParts)) / totalParts)}%`
            }}
          />
        </div>
      </div>

      {/* Current Part Instructions */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <h4 className="font-bold text-blue-800 mb-2">{currentPart.title}</h4>
        <p className="text-blue-700">{currentPart.instruction}</p>
      </div>

      {/* Current Item */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
        <h5 className="font-medium text-gray-800 mb-2">
          {currentPart.type === 'repetition' && '🔄 Repita:'}
          {currentPart.type === 'questions' && '❓ Pergunta:'}
          {currentPart.type === 'personal' && '�� Fale sobre você:'}
        </h5>
        <p className="text-lg font-medium text-purple-800 mb-2">
          "{currentItem.text}"
        </p>
        
        {currentItem.expectedResponse && (
          <p className="text-sm text-gray-600">
            <strong>Exemplo de resposta:</strong> "{currentItem.expectedResponse}"
          </p>
        )}
      </div>

      {/* Reference Audio (if available) */}
      {currentItem.audioReference && (
        <div className="mb-6">
          <AudioPlayer
            title="Áudio de Referência"
            audioSrc={currentItem.audioReference}
            icon="🔊"
            description="Ouça o exemplo antes de gravar"
          />
        </div>
      )}

      {/* Recording Controls */}
      <div className="mb-6">
        <RecordingControls
          recordingState={recordingState}
          maxDuration={currentItem.maxDuration || 30}
          onStartRecording={startRecording}
          onStopRecording={stopRecording}
          onClearRecording={clearRecording}
          formatTime={formatTime}
        />
      </div>

      {/* Playback */}
      {recordingState.audioUrl && (
        <div className="mb-6">
          <AudioPlayer
            title="Sua Gravação"
            audioSrc={recordingState.audioUrl}
            icon="🎧"
            description="Ouça sua pronúncia"
          />
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={handlePreviousItem}
          disabled={progress.currentPart === 0 && progress.currentItem === 0}
          className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>⬅️</span>
          Anterior
        </button>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            {isExerciseComplete ? 'Exercício concluído!' : 'Grave sua resposta e continue'}
          </p>
        </div>

        <button
          onClick={handleNextItem}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {isExerciseComplete ? (
            <>
              <span>✅</span>
              Concluir
            </>
          ) : (
            <>
              Próximo
              <span>➡️</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default AudioRecordingExercise;