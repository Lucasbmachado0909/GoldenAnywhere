// src/modules/lessons/components/QuizQuestion.tsx
import React from 'react';
import type { QuizQuestion as QuizQuestionType, QuizResult } from '../../../types';

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedAnswer: string | number | undefined;
  onAnswerChange: (questionId: string, answer: string | number) => void;
  showFeedback: boolean;
  quizResult?: QuizResult;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedAnswer,
  onAnswerChange,
  showFeedback,
  quizResult,
}) => {
  const isCorrect = quizResult?.isCorrect;
  const feedbackClass = showFeedback
    ? (isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50')
    : 'border-gray-200 bg-white';

  return (
    <div className={`p-6 rounded-lg shadow-md mb-6 transition-all duration-300 ${feedbackClass}`}>
      <p className="text-lg font-semibold text-gray-800 mb-4">{question.question}</p>

      {question.type === 'reading-comprehension' && question.readingText && (
        <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-4 text-sm text-blue-800">
          <h4 className="font-bold mb-2">Texto para Leitura:</h4>
          <p className="whitespace-pre-wrap">{question.readingText}</p>
        </div>
      )}

      {question.type === 'multiple-choice' || question.type === 'reading-comprehension' ? (
        <div className="space-y-3">
          {question.options?.map((option) => (
            <button
              key={option.value}
              className={`w-full text-left p-3 rounded-md border transition-colors duration-200
                ${showFeedback && quizResult
                  ? (String(option.value).trim().toLowerCase() === String(quizResult.correctAnswer).trim().toLowerCase()
                    ? 'border-green-600 bg-green-100 text-green-800'
                    : (String(option.value).trim().toLowerCase() === String(selectedAnswer).trim().toLowerCase() && !isCorrect
                      ? 'border-red-600 bg-red-100 text-red-800'
                      : 'border-gray-300 bg-white text-gray-800'))
                  : (String(selectedAnswer || '').trim().toLowerCase() === String(option.value).trim().toLowerCase()
                    ? 'border-purple-500 bg-purple-100 text-purple-800'
                    : 'border-gray-300 bg-white hover:bg-gray-50 text-gray-800')
                }`}
              onClick={() => onAnswerChange(question.id, option.value)}
              disabled={showFeedback}
            >
              {option.text}
            </button>
          ))}
        </div>
      ) : question.type === 'fill-in-the-blank' ? (
        <input
          type="text"
          className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500
            ${showFeedback && quizResult
              ? (isCorrect ? 'border-green-500' : 'border-red-500')
              : 'border-gray-300'
            }`}
          value={selectedAnswer || ''}
          onChange={(e) => onAnswerChange(question.id, e.target.value)}
          disabled={showFeedback}
          placeholder="Sua resposta"
        />
      ) : null}

      {showFeedback && quizResult && (
        <div className="mt-4 text-sm">
          {isCorrect ? (
            <p className="text-green-700 font-medium">✅ Correto!</p>
          ) : (
            <>
              <p className="text-red-700 font-medium">❌ Incorreto.</p>
              <p className="text-gray-600 mt-1">
                Sua resposta: <span className="font-semibold">{quizResult.userAnswer || '[Não respondido]'}</span>
              </p>
              <p className="text-gray-600 mt-1">
                Resposta correta: <span className="font-semibold">{quizResult.correctAnswer}</span>
              </p>
            </>
          )}
          {question.explanation && (
            <p className="text-gray-700 mt-2">
              <span className="font-medium">Explicação:</span> {question.explanation}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizQuestion; // 🔄 ADICIONAR EXPORT DEFAULT