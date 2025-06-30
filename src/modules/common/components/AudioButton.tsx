import React from 'react';

interface AudioButtonProps {
  text: string;
  audioSrc: string;
}

const AudioButton: React.FC<AudioButtonProps> = ({ text, audioSrc }) => {
  const playAudio = () => {
    const audio = new Audio(audioSrc);
    audio.play().catch(error => {
      console.error('Error playing audio:', error);
    });
  };

  return (
    <button 
      onClick={playAudio}
      className="bg-white text-green-700 border border-green-300 rounded-full px-4 py-2 text-sm font-medium hover:bg-green-100 transition-colors"
    >
      {text}
      <span className="ml-1">🔊</span>
    </button>
  );
};

export default AudioButton;