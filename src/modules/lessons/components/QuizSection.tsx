// src/modules/lessons/components/QuizSection.tsx
import React from 'react';
import type { QuizConfig, QuizSummary } from '../../../types';
import { useQuiz } from '../hooks/useQuiz';
import QuizQuestion from './QuizQuestion';
import QuizResults from './QuizResults';

interface QuizSectionProps {
  quizConfig: QuizConfig;
  onQuizComplete: (summary: QuizSummary) => void;
}

const QuizSection: React.FC<QuizSectionProps> = ({ quizConfig, onQuizComplete }) => {
  const {
    currentAnswers,
    quizSubmitted,
    quizSummary,
    handleAnswerChange,
    handleSubmitQuiz,
    handleRetryQuiz,
  } = useQuiz(quizConfig);

  // Chama onQuizComplete quando o quiz é submetido e temos um resumo
  React.useEffect(() => {
    if (quizSubmitted && quizSummary) {
      console.log('Chamando onQuizComplete com:', quizSummary);
      onQuizComplete(quizSummary);
    }
  }, [quizSubmitted, quizSummary, onQuizComplete]);

  // Verificar se todas as perguntas foram respondidas
  const allQuestionsAnswered = quizConfig.questions.every(
    question => currentAnswers[question.id] !== undefined && 
                currentAnswers[question.id] !== null && 
                currentAnswers[question.id] !== ''
  );

  const answeredCount = Object.keys(currentAnswers).filter(
    key => currentAnswers[key] !== undefined && 
           currentAnswers[key] !== null && 
           currentAnswers[key] !== ''
  ).length;

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{quizConfig.title}</h2>
      <p className="text-gray-700 mb-6">{quizConfig.description}</p>

      {!quizSubmitted ? (
        <div className="space-y-6">
          {/* Indicador de progresso */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-blue-800 font-medium">
              Progresso: {answeredCount} de {quizConfig.questions.length} perguntas respondidas
            </p>
            <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${(answeredCount / quizConfig.questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {quizConfig.questions.map((question) => (
            <QuizQuestion
              key={question.id}
              question={question}
              selectedAnswer={currentAnswers[question.id]}
              onAnswerChange={handleAnswerChange}
              showFeedback={false}
            />
          ))}
          
          <div className="mt-8 text-center">
            {!allQuestionsAnswered && (
              <p className="text-orange-600 mb-4 font-medium">
                ⚠️ Por favor, responda todas as perguntas antes de finalizar o quiz.
              </p>
            )}
            <button
              onClick={handleSubmitQuiz}
              disabled={!allQuestionsAnswered}
              className={`font-bold py-3 px-6 rounded-lg transition-colors shadow-md ${
                allQuestionsAnswered
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'bg-gray-400 text-gray-600 cursor-not-allowed'
              }`}
            >
              {allQuestionsAnswered ? 'Finalizar Quiz' : `Responda todas as perguntas (${answeredCount}/${quizConfig.questions.length})`}
            </button>
          </div>
        </div>
      ) : (
        quizSummary && (
          <QuizResults
            quizSummary={quizSummary}
            onRetry={handleRetryQuiz}
          />
        )
      )}
    </section>
  );
};

export default QuizSection;