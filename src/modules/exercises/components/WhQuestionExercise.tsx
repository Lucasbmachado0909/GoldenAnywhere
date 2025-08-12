// src/modules/exercises/components/WhQuestionExercise.tsx
import React, { useState } from 'react';

interface WhQuestionItem {
  id: number;
  question: string;
  answer: string;
  correctWhWord: string;
  options: string[];
}

interface WhQuestionExerciseProps {
  title?: string;
  instruction?: string;
  questions: WhQuestionItem[];
}

const WhQuestionExercise: React.FC<WhQuestionExerciseProps> = ({
  title = "Complete as Wh- Questions",
  instruction = "Complete as perguntas com What, Where ou When:",
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
      const userAnswer = answers[question.id] || '';
      const isCorrect = userAnswer.toLowerCase() === question.correctWhWord.toLowerCase();
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
        <div className="bg-indigo-100 p-2 rounded-lg">
          <span className="text-2xl">❓</span>
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
                {String.fromCharCode(97 + index)}) _______ {question.question} – {question.answer}
              </span>
            </div>
            
            <div className="flex gap-3">
              {question.options.map((option) => (
                <label
                  key={option}
                  className={`flex items-center gap-2 px-4 py-2 border rounded-lg cursor-pointer transition-colors ${
                    submitted
                      ? answers[question.id] === option
                        ? results[question.id]
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-red-500 bg-red-50 text-red-700'
                        : option === question.correctWhWord
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-gray-300 bg-gray-50'
                      : answers[question.id] === option
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-300 hover:border-purple-300'
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option}
                    checked={answers[question.id] === option}
                    onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                    disabled={submitted}
                    className="text-purple-600"
                  />
                  <span className="font-medium">{option}</span>
                </label>
              ))}
            </div>

            {submitted && (
              <div className="mt-3 flex items-center gap-2">
                {results[question.id] ? (
                  <span className="text-green-600 text-xl">✓</span>
                ) : (
                  <span className="text-red-600 text-xl">✗</span>
                )}
                {!results[question.id] && (
                  <span className="text-sm text-gray-600">
                    Resposta correta: <strong>{question.correctWhWord}</strong>
                  </span>
                )}
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

export default WhQuestionExercise;