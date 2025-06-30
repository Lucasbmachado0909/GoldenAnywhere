// src/modules/common/components/AudioButton.tsx
import { useState, useRef, useEffect } from 'react';

interface AudioButtonProps {
  text: string;
  audioSrc: string;
  className?: string;
}

const AudioButton = ({ text, audioSrc, className = '' }: AudioButtonProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Criar elemento de áudio
    audioRef.current = new Audio(audioSrc);
    
    // Configurar manipuladores de eventos
    const handleEnded = () => setIsPlaying(false);
    const handleError = (e: Event) => {
      console.error("Erro ao carregar áudio:", e);
      setIsPlaying(false);
      setIsLoading(false);
      setError('Não foi possível reproduzir o áudio');
    };
    const handleCanPlayThrough = () => setIsLoading(false);
    
    audioRef.current.addEventListener('ended', handleEnded);
    audioRef.current.addEventListener('error', handleError);
    audioRef.current.addEventListener('canplaythrough', handleCanPlayThrough);
    
    // Pré-carregar o áudio
    audioRef.current.load();
    
    // Limpar manipuladores de eventos
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleEnded);
        audioRef.current.removeEventListener('error', handleError);
        audioRef.current.removeEventListener('canplaythrough', handleCanPlayThrough);
        audioRef.current.pause();
      }
    };
  }, [audioSrc]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setIsLoading(true);
      setError(null);
      
      // Tentar reproduzir com tratamento de erro melhorado
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsLoading(false);
          })
          .catch(err => {
            console.error('Erro ao reproduzir áudio:', err);
            
            // Tentar novamente com interação do usuário
            setIsPlaying(false);
            setIsLoading(false);
            setError('Clique novamente para tentar reproduzir');
          });
      }
    }
  };

  return (
    <button
      onClick={togglePlay}
      disabled={isLoading}
      className={`flex items-center px-3 py-1 rounded-md ${
        isPlaying 
          ? 'bg-blue-600 text-white' 
          : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
      } transition-colors ${className}`}
      aria-label={isPlaying ? 'Pausar áudio' : 'Reproduzir áudio'}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Carregando...
        </>
      ) : (
        <>
          {isPlaying ? (
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path>
            </svg>
          ) : (
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
            </svg>
          )}
          {text}
        </>
      )}
      {error && <span className="text-red-500 text-xs ml-2">{error}</span>}
    </button>
  );
};

export default AudioButton;