import { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

// Definindo a interface para o objeto de progresso
interface Progress {
  completedLessons: string[];
  completedExercises: string[];
  level: string;
  points: number;
}

// Definindo a interface para o contexto
interface ProgressContextType {
  progress: Progress;
  updateProgress: (newProgress: Progress) => void;
}

// Criando o valor padrão para o contexto
const defaultProgressContext: ProgressContextType = {
  progress: {
    completedLessons: [],
    completedExercises: [],
    level: 'beginner',
    points: 0
  },
  updateProgress: () => {}
};

// Criando o contexto com o valor padrão
export const ProgressContext = createContext<ProgressContextType>(defaultProgressContext);

// Definindo a interface para as props do Provider
interface ProgressProviderProps {
  children: ReactNode;
}

export const ProgressProvider = ({ children }: ProgressProviderProps) => {
  const [progress, setProgress] = useState<Progress>(() => {
    // Tenta carregar o progresso do localStorage
    const savedProgress = localStorage.getItem('userProgress');
    return savedProgress 
      ? JSON.parse(savedProgress) 
      : {
          completedLessons: [],
          completedExercises: [],
          level: 'beginner',
          points: 0
        };
  });

  // Salva o progresso no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem('userProgress', JSON.stringify(progress));
  }, [progress]);

  const updateProgress = (newProgress: Progress) => {
    setProgress(newProgress);
  };

  return (
    <ProgressContext.Provider value={{ progress, updateProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};