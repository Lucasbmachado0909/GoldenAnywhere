// src/modules/exercises/components/TranslationExercise.tsx
import React, { useState } from 'react';

interface TranslationQuestion {
  id: number;
  portuguese: string;
  correctAnswer: string;
  acceptableAnswers?: string[]; // Para aceitar variações válidas
}

interface TranslationExerciseProps {
  title?: string;
  instruction?: string;
  questions: TranslationQuestion[];
}

const TranslationExercise: React.FC<TranslationExerciseProps> = ({
  title = "Translation Exercise",
  instruction = "Traduza para o inglês:",
  questions
}) => {
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionId: number, answer: string) => {
    if (!submitted) {
      setUserAnswers(prev => ({
        ...prev,
        [questionId]: answer
      }));
    }
  };

  const normalizeAnswer = (answer: string): string => {
    return answer
      .toLowerCase()
      .trim()
      .replace(/[.,!?;]/g, '') // Remove pontuação
      .replace(/\s+/g, ' '); // Normaliza espaços
  };

  const isAnswerCorrect = (questionId: number): boolean => {
    const userAnswer = userAnswers[questionId];
    const question = questions.find(q => q.id === questionId);
    
    if (!userAnswer || !question) return false;

    const normalizedUserAnswer = normalizeAnswer(userAnswer);
    const normalizedCorrectAnswer = normalizeAnswer(question.correctAnswer);
    
    // Verifica resposta principal
    if (normalizedUserAnswer === normalizedCorrectAnswer) return true;
    
    // Verifica respostas alternativas aceitas
    if (question.acceptableAnswers) {
      return question.acceptableAnswers.some(acceptable => 
        normalizeAnswer(acceptable) === normalizedUserAnswer
      );
    }
    
    return false;
  };

  const handleSubmit = () => {
    const allAnswered = questions.every(q => userAnswers[q.id]?.trim());
    if (allAnswered) {
      setSubmitted(true);
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setUserAnswers({});
    setShowResults(false);
    setSubmitted(false);
  };

  const getScore = () => {
    let correct = 0;
    questions.forEach(question => {
      if (isAnswerCorrect(question.id)) {
        correct++;
      }
    });
    return { correct, total: questions.length };
  };

  const score = getScore();
  const allAnswered = questions.every(q => userAnswers[q.id]?.trim());

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-purple-100 p-2 rounded-lg">
          <span className="text-2xl">🌐</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-purple-800">{title}</h3>
          <p className="text-gray-600">{instruction}</p>
        </div>
      </div>

      <div className="space-y-6">
        {questions.map((question) => {
          const isCorrect = isAnswerCorrect(question.id);
          const hasAnswer = userAnswers[question.id]?.trim();

          return (
            <div key={question.id} className="border border-gray-200 rounded-lg p-4">
              <div className="mb-3">
                <span className="font-semibold text-gray-800">
                  {question.id}. {question.portuguese}
                </span>
              </div>

              <div className="space-y-3">
                <input
                  type="text"
                  value={userAnswers[question.id] || ''}
                  onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                  disabled={submitted}
                  placeholder="Digite sua tradução aqui..."
                  className={`w-full p-3 border rounded-lg transition-all duration-200 ${
                    !submitted
                      ? 'border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200'
                      : isCorrect
                      ? 'border-green-500 bg-green-50'
                      : hasAnswer
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-300 bg-gray-50'
                  }`}
                />

                {submitted && (
                  <div className="mt-2">
                    {isCorrect ? (
                      <div className="flex items-center gap-2 text-green-700">
                        <span className="text-lg">✅</span>
                        <span className="font-medium">Correto!</span>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-red-700">
                          <span className="text-lg">❌</span>
                          <span className="font-medium">Resposta correta:</span>
                        </div>
                        <div className="bg-green-50 border border-green-200 rounded p-2 ml-6">
                          <span className="text-green-800 font-medium">
                            {question.correctAnswer}
                          </span>
                          {question.acceptableAnswers && question.acceptableAnswers.length > 0 && (
                            <div className="text-sm text-green-600 mt-1">
                              <span className="font-medium">Outras respostas aceitas: </span>
                              {question.acceptableAnswers.join(', ')}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Botões de ação */}
      <div className="mt-6 flex gap-3">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              allAnswered
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Verificar Respostas
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
          >
            Tentar Novamente
          </button>
        )}
      </div>

      {/* Resultado */}
      {showResults && (
        <div className={`mt-6 p-4 rounded-lg border-2 ${
          score.correct === score.total 
            ? 'bg-green-50 border-green-300 text-green-800' 
            : score.correct >= score.total * 0.7
            ? 'bg-yellow-50 border-yellow-300 text-yellow-800'
            : 'bg-red-50 border-red-300 text-red-800'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">
              {score.correct === score.total ? '🎉' : score.correct >= score.total * 0.7 ? '👍' : '📚'}
            </span>
            <span className="font-bold text-lg">
              Resultado: {score.correct}/{score.total} ({Math.round((score.correct / score.total) * 100)}%)
            </span>
          </div>
          <p>
            {score.correct === score.total 
              ? 'Excelente! Você traduziu todas as frases corretamente!' 
              : score.correct >= score.total * 0.7
              ? 'Bom trabalho! Continue praticando suas traduções.'
              : 'Continue estudando e tente novamente.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default TranslationExercise;