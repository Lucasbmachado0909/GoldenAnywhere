// src/modules/lessons/hooks/useQuiz.tsx
import { useState, useCallback } from 'react';
import type { QuizConfig, QuizResult, QuizSummary } from '../../../types';

interface UseQuizReturn {
  currentAnswers: Record<string, string | number>;
  quizSubmitted: boolean;
  quizSummary: QuizSummary | null;
  handleAnswerChange: (questionId: string, answer: string | number) => void;
  handleSubmitQuiz: () => void;
  handleRetryQuiz: () => void;
}

export const useQuiz = (quizConfig: QuizConfig): UseQuizReturn => {
  const [currentAnswers, setCurrentAnswers] = useState<Record<string, string | number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizSummary, setQuizSummary] = useState<QuizSummary | null>(null);

  const calculateQuizSummary = useCallback((answers: Record<string, string | number>): QuizSummary => {
    let correctAnswersCount = 0;
    const results: QuizResult[] = quizConfig.questions.map(question => {
      const userAnswer = answers[question.id];
      
      // Comparação mais robusta
      let isCorrect = false;
      if (userAnswer !== undefined && userAnswer !== null && userAnswer !== '') {
        const userAnswerStr = String(userAnswer).trim().toLowerCase();
        const correctAnswerStr = String(question.correctAnswer).trim().toLowerCase();
        isCorrect = userAnswerStr === correctAnswerStr;
      }

      if (isCorrect) {
        correctAnswersCount++;
      }

      return {
        questionId: question.id,
        isCorrect,
        userAnswer: userAnswer || '',
        correctAnswer: question.correctAnswer,
        questionText: question.question,
        options: question.options,
        explanation: question.explanation,
      };
    });

    const totalQuestions = quizConfig.questions.length;
    const scorePercentage = Math.round((correctAnswersCount / totalQuestions) * 100);
    const passed = scorePercentage >= quizConfig.passingScorePercentage;

    return {
      totalQuestions,
      correctAnswersCount,
      scorePercentage,
      passed,
      results,
    };
  }, [quizConfig]);

  const handleAnswerChange = (questionId: string, answer: string | number) => {
    setCurrentAnswers(prev => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmitQuiz = () => {
    // Calcular o resumo imediatamente
    const summary = calculateQuizSummary(currentAnswers);
    setQuizSummary(summary);
    setQuizSubmitted(true);
    
    console.log('Quiz submetido:', {
      answers: currentAnswers,
      summary: summary,
      passed: summary.passed
    });
  };

  const handleRetryQuiz = () => {
    setCurrentAnswers({});
    setQuizSubmitted(false);
    setQuizSummary(null);
  };

  return {
    currentAnswers,
    quizSubmitted,
    quizSummary,
    handleAnswerChange,
    handleSubmitQuiz,
    handleRetryQuiz,
  };
};