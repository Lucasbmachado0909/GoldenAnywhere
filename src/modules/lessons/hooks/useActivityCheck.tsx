// src/modules/lessons/hooks/useActivityCheck.tsx
import { useState } from 'react';

interface UseActivityCheckProps {
  correctAnswers: string[];
  initialAnswers?: string[];
}

export const useActivityCheck = ({ correctAnswers, initialAnswers }: UseActivityCheckProps) => {
  // Garantir que initialAnswers tenha o mesmo comprimento que correctAnswers
  const defaultAnswers = Array(correctAnswers.length).fill('');
  const [answers, setAnswers] = useState<string[]>(
    initialAnswers && initialAnswers.length === correctAnswers.length 
      ? initialAnswers 
      : defaultAnswers
  );
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswerChange = (index: number, value: string) => {
    if (index < 0 || index >= answers.length) return; // Validação de índice
    
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const checkAnswers = () => {
    setShowFeedback(true);
    
    // Scroll para o elemento de feedback, se existir
    setTimeout(() => {
      const feedbackElement = document.getElementById('activity-feedback');
      if (feedbackElement) {
        window.scrollTo({
          top: feedbackElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    }, 100); // Pequeno delay para garantir que o elemento esteja renderizado
  };

  const calculateScore = () => {
    return answers.filter((answer, index) => 
      answer.trim().toLowerCase() === correctAnswers[index].toLowerCase()
    ).length;
  };

  const resetAnswers = () => {
    setAnswers(Array(correctAnswers.length).fill(''));
    setShowFeedback(false);
  };

  return {
    answers,
    showFeedback,
    handleAnswerChange,
    checkAnswers,
    calculateScore,
    resetAnswers
  };
};