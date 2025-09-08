// src/modules/exercises/components/AudioPlayer.tsx
import React, { useEffect } from 'react';
import { useAudioPlayback } from '../hooks/useAudioPlayback';

interface AudioPlayerProps {
  title: string;
  audioSrc: string;
  icon?: string;
  description?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  title,
  audioSrc,
  icon = "🔊",
  description
}) => {
  const { playerState, loadAudio, play, pause, stop, seek, formatTime } = useAudioPlayback();

  useEffect(() => {
    if (audioSrc) {
      loadAudio(audioSrc);
    }
  }, [audioSrc, loadAudio]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const clickTime = (clickX / width) * playerState.duration;
    seek(clickTime);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-blue-100 p-2 rounded-lg">
          <span className="text-2xl">{icon}</span>
        </div>
        <div>
          <h3 className="text-lg font-bold text-purple-800">{title}</h3>
          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        {!playerState.isPlaying ? (
          <button
            onClick={play}
            disabled={playerState.loading}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            <span className="text-lg">▶️</span>
            {playerState.loading ? 'Carregando...' : 'Play'}
          </button>
        ) : (
          <button
            onClick={pause}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span className="text-lg">⏸️</span>
            Pause
          </button>
        )}

        <button
          onClick={stop}
          disabled={playerState.loading}
          className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50"
        >
          <span className="text-lg">⏹️</span>
          Stop
        </button>
      </div>

      {!playerState.loading && (
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>{formatTime(playerState.currentTime)}</span>
            <span>{formatTime(playerState.duration)}</span>
          </div>
          <div
            className="w-full bg-gray-200 rounded-full h-2 cursor-pointer"
            onClick={handleProgressClick}
          >
            <div
              className="h-2 bg-blue-500 rounded-full transition-all duration-150"
              style={{
                width: `${playerState.duration > 0 ? (playerState.currentTime / playerState.duration) * 100 : 0}%`
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;