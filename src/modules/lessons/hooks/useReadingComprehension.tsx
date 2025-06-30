// src/modules/lessons/hooks/useReadingComprehension.tsx
import { useState } from 'react';
import type { ReadingComprehensionQuestion } from '../../../types';

interface UseReadingComprehensionProps {
  questions: ReadingComprehensionQuestion[];
}

export const useReadingComprehension = ({ questions }: UseReadingComprehensionProps) => {
  const [userAnswers, setUserAnswers] = useState<string[]>(Array(questions.length).fill(''));
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
  };

  const checkAnswers = () => {
    setShowFeedback(true);
    const feedbackElement = document.getElementById('reading-feedback');
    if (feedbackElement) {
      window.scrollTo({
        top: feedbackElement.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const calculateScore = () => {
    return userAnswers.filter((answer, index) => 
      answer.trim().toLowerCase() === questions[index].correctAnswer.toLowerCase()
    ).length;
  };

  const resetAnswers = () => {
    setUserAnswers(Array(questions.length).fill(''));
    setShowFeedback(false);
  };

  return {
    userAnswers,
    showFeedback,
    handleAnswerChange,
    checkAnswers,
    calculateScore,
    resetAnswers
  };
};