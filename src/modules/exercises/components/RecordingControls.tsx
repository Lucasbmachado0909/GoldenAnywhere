// src/modules/exercises/components/RecordingControls.tsx
import React from 'react';
import type { RecordingState } from '../../../types';

interface RecordingControlsProps {
  recordingState: RecordingState;
  maxDuration: number;
  onStartRecording: () => void;
  onStopRecording: () => void;
  onClearRecording: () => void;
  formatTime: (seconds: number) => string;
}

const RecordingControls: React.FC<RecordingControlsProps> = ({
  recordingState,
  maxDuration,
  onStartRecording,
  onStopRecording,
  onClearRecording,
  formatTime
}) => {
  const { isRecording, duration, audioUrl, error } = recordingState;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-red-100 p-2 rounded-lg">
          <span className="text-2xl">🎙️</span>
        </div>
        <div>
          <h3 className="text-lg font-bold text-purple-800">Sua Gravação</h3>
          <p className="text-sm text-gray-600">
            Duração máxima: {formatTime(maxDuration)}
          </p>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 text-sm">
            <strong>Erro:</strong> {error}
          </p>
        </div>
      )}

      <div className="flex items-center gap-4 mb-4">
        {!isRecording && !audioUrl && (
          <button
            onClick={onStartRecording}
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            <span className="text-lg">🔴</span>
            Gravar
          </button>
        )}

        {isRecording && (
          <button
            onClick={onStopRecording}
            className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <span className="text-lg">⏹️</span>
            Parar
          </button>
        )}

        {audioUrl && !isRecording && (
          <button
            onClick={onClearRecording}
            className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
          >
            <span className="text-lg">🔄</span>
            Regravar
          </button>
        )}
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>{formatTime(duration)}</span>
            <span>{formatTime(maxDuration)}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                isRecording ? 'bg-red-500' : 'bg-purple-500'
              }`}
              style={{ width: `${(duration / maxDuration) * 100}%` }}
            />
          </div>
        </div>

        {isRecording && (
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm text-red-600 font-medium">Gravando...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecordingControls;