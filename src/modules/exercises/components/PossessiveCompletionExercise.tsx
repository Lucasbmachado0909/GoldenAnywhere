// src/modules/exercises/components/PossessiveCompletionExercise.tsx
import React, { useState } from 'react';

interface PossessiveCompletionExerciseProps {
  onComplete: (score: number) => void;
}

interface CompletionQuestion {
  id: number;
  sentence: string;
  blank: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

const PossessiveCompletionExercise: React.FC<PossessiveCompletionExerciseProps> = ({ onComplete }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions: CompletionQuestion[] = [
    {
      id: 1,
      sentence: "I love ___ family very much.",
      blank: "___",
      options: ["my", "your", "his", "her"],
      correctAnswer: "my",
      explanation: "Para 'I' (eu), usamos 'my' como possessive adjective."
    },
    {
      id: 2,
      sentence: "She talks to ___ mother every day.",
      blank: "___",
      options: ["my", "your", "his", "her"],
      correctAnswer: "her",
      explanation: "Para 'she' (ela), usamos 'her' como possessive adjective."
    },
    {
      id: 3,
      sentence: "Do you help ___ father at home?",
      blank: "___",
      options: ["my", "your", "his", "their"],
      correctAnswer: "your",
      explanation: "Para 'you' (você), usamos 'your' como possessive adjective."
    },
    {
      id: 4,
      sentence: "He drives ___ sister to school.",
      blank: "___",
      options: ["my", "your", "his", "her"],
      correctAnswer: "his",
      explanation: "Para 'he' (ele), usamos 'his' como possessive adjective."
    },
    {
      id: 5,
      sentence: "We watch movies with ___ friends.",
      blank: "___",
      options: ["our", "your", "his", "their"],
      correctAnswer: "our",
      explanation: "Para 'we' (nós), usamos 'our' como possessive adjective."
    },
    {
      id: 6,
      sentence: "They love ___ family traditions.",
      blank: "___",
      options: ["our", "your", "his", "their"],
      correctAnswer: "their",
      explanation: "Para 'they' (eles/elas), usamos 'their' como possessive adjective."
    }
  ];

  const handleAnswerSelect = (questionId: number, answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const checkAnswers = () => {
    let correctCount = 0;
    questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });
    
    setScore(correctCount);
    setShowResults(true);
    onComplete(correctCount);
  };

  const resetExercise = () => {
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-purple-100 p-2 rounded-lg">
          <span className="text-2xl">✏️</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-purple-800">Possessive Completion Exercise</h3>
          <p className="text-gray-600">Complete as frases com o possessive adjective correto</p>
        </div>
      </div>

      {!showResults ? (
        <>
          <div className="space-y-6 mb-8">
            {questions.map((question) => (
              <div key={question.id} className="border border-gray-200 rounded-lg p-4">
                <div className="mb-4">
                  <p className="text-lg font-medium text-gray-800 mb-2">
                    {question.id}. {question.sentence}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {question.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswerSelect(question.id, option)}
                      className={`p-2 rounded-lg border text-sm font-medium transition-colors ${
                        selectedAnswers[question.id] === option
                          ? 'bg-purple-600 text-white border-purple-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-purple-50'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={checkAnswers}
              disabled={Object.keys(selectedAnswers).length < questions.length}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Verificar Respostas
            </button>
          </div>
        </>
      ) : (
        <div className="text-center">
          <div className={`p-6 rounded-lg mb-6 ${score === questions.length ? 'bg-green-50 border border-green-200' : 'bg-yellow-50 border border-yellow-200'}`}>
            <h4 className={`text-xl font-bold mb-2 ${score === questions.length ? 'text-green-800' : 'text-yellow-800'}`}>
              {score === questions.length ? '🎉 Excelente!' : '📝 Resultado'}
            </h4>
            <p className={`text-lg ${score === questions.length ? 'text-green-700' : 'text-yellow-700'}`}>
              Você acertou {score} de {questions.length} questões
            </p>
          </div>

          {/* Respostas Detalhadas */}
          <div className="mb-6 text-left">
            <h5 className="font-bold text-gray-800 mb-3 text-center">Respostas Corretas:</h5>
            <div className="space-y-3">
              {questions.map((question) => {
                const userAnswer = selectedAnswers[question.id];
                const isCorrect = userAnswer === question.correctAnswer;
                
                return (
                  <div key={question.id} className={`p-4 rounded-lg border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-lg ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                        {isCorrect ? '✅' : '❌'}
                      </span>
                      <span className="font-medium">
                        {question.sentence.replace('___', question.correctAnswer)}
                      </span>
                    </div>
                    
                    {!isCorrect && (
                      <p className="text-sm text-red-600 mb-1">
                        Sua resposta: {userAnswer || 'Não respondida'}
                      </p>
                    )}
                    
                    <p className="text-sm text-gray-600">
                      <strong>Explicação:</strong> {question.explanation}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={resetExercise}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
          >
            Tentar Novamente
          </button>
        </div>
      )}
    </div>
  );
};

export default PossessiveCompletionExercise;