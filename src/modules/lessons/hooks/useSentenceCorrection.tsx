// src/modules/lessons/hooks/useSentenceCorrection.tsx
import { useState, useCallback } from 'react';
import type { SentenceCorrectionQuestion } from '../../../types';

interface UseSentenceCorrectionProps {
  questions: SentenceCorrectionQuestion[];
}

export const useSentenceCorrection = ({ questions }: UseSentenceCorrectionProps) => {
  const [userCorrections, setUserCorrections] = useState<string[]>(Array(questions.length).fill(''));
  const [showFeedback, setShowFeedback] = useState(false);
  // Novo estado para armazenar os resultados
  const [correctionResults, setCorrectionResults] = useState<boolean[]>(Array(questions.length).fill(false));

  const handleCorrectionChange = (index: number, value: string) => {
    const newCorrections = [...userCorrections];
    newCorrections[index] = value;
    setUserCorrections(newCorrections);
  };

  // Simplificada: Função para normalizar texto para comparação
  const normalizeText = (text: string): string => {
    return text
      .trim()                         // Remove espaços extras no início e fim
      .toLowerCase()                  // Converte para minúsculas
      .replace(/\s+/g, ' ')           // Normaliza espaços múltiplos para um único espaço
      .replace(/[.,!?;:'"()]/g, '');  // Remove toda pontuação
  };

  // Função para verificar as correções e atualizar os resultados
  const checkCorrections = () => {
    // Calcular os resultados
    const results = userCorrections.map((correction, index) => {
      const normalizedUser = normalizeText(correction);
      const normalizedCorrect = normalizeText(questions[index].correctSentence);
      return normalizedUser === normalizedCorrect;
    });
    
    // Atualizar o estado dos resultados
    setCorrectionResults(results);
    setShowFeedback(true);
    
    // Scroll para o feedback
    const feedbackElement = document.getElementById('correction-feedback');
    if (feedbackElement) {
      window.scrollTo({
        top: feedbackElement.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  // Função para calcular a pontuação baseada nos resultados armazenados
  const calculateScore = useCallback(() => {
    return correctionResults.filter(result => result).length;
  }, [correctionResults]);

  const resetCorrections = () => {
    setUserCorrections(Array(questions.length).fill(''));
    setCorrectionResults(Array(questions.length).fill(false));
    setShowFeedback(false);
  };

  return {
    userCorrections,
    showFeedback,
    correctionResults, // Exportando o estado dos resultados
    handleCorrectionChange,
    checkCorrections,
    calculateScore,
    resetCorrections
  };
};