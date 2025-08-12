// src/modules/exercises/components/NegativeTransformationExercise.tsx
import React, { useState } from 'react';

interface NegativeTransformationQuestion {
  id: number;
  affirmativeSentence: string;
  correctNegative: string;
  acceptableAnswers: string[];
}

interface NegativeTransformationExerciseProps {
  title?: string;
  instruction?: string;
  questions: NegativeTransformationQuestion[];
}

const NegativeTransformationExercise: React.FC<NegativeTransformationExerciseProps> = ({
  title = "Transforme as frases em negativas",
  instruction = "Transforme as frases afirmativas em frases negativas:",
  questions
}) => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<{ [key: number]: boolean }>({});

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const checkAnswers = () => {
    const newResults: { [key: number]: boolean } = {};
    
    questions.forEach(question => {
      const userAnswer = answers[question.id]?.trim().toLowerCase() || '';
      const isCorrect = question.acceptableAnswers.some(
        acceptable => acceptable.toLowerCase() === userAnswer
      );
      newResults[question.id] = isCorrect;
    });
    
    setResults(newResults);
    setSubmitted(true);
  };

  const resetExercise = () => {
    setAnswers({});
    setSubmitted(false);
    setResults({});
  };

  const correctCount = Object.values(results).filter(Boolean).length;
  const totalQuestions = questions.length;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-red-100 p-2 rounded-lg">
          <span className="text-2xl">❌</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-purple-800">{title}</h3>
          <p className="text-gray-600">{instruction}</p>
        </div>
      </div>

      <div className="space-y-6">
        {questions.map((question, index) => (
          <div key={question.id} className="border border-gray-200 rounded-lg p-4">
            <div className="mb-3">
              <span className="font-medium text-gray-700">
                {String.fromCharCode(97 + index)}) {question.affirmativeSentence}
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-gray-600">→</span>
              <input
                type="text"
                value={answers[question.id] || ''}
                onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                placeholder="Digite a forma negativa..."
                disabled={submitted}
                className={`flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  submitted
                    ? results[question.id]
                      ? 'border-green-500 bg-green-50 focus:ring-green-500'
                      : 'border-red-500 bg-red-50 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-purple-500'
                }`}
              />
              {submitted && (
                <div className="flex items-center">
                  {results[question.id] ? (
                    <span className="text-green-600 text-xl">✓</span>
                  ) : (
                    <span className="text-red-600 text-xl">✗</span>
                  )}
                </div>
              )}
            </div>

            {submitted && !results[question.id] && (
              <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded">
                <p className="text-sm text-yellow-800">
                  <strong>Resposta correta:</strong> {question.correctNegative}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        {!submitted ? (
          <button
            onClick={checkAnswers}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Verificar Respostas
          </button>
        ) : (
          <button
            onClick={resetExercise}
            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Tentar Novamente
          </button>
        )}
      </div>

      {submitted && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-800">
            <strong>Resultado:</strong> {correctCount} de {totalQuestions} corretas 
            ({Math.round((correctCount / totalQuestions) * 100)}%)
          </p>
        </div>
      )}
    </div>
  );
};

export default NegativeTransformationExercise;