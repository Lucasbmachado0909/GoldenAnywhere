// src/modules/exercises/components/TrueFalseExercise.tsx
import React, { useState } from 'react';
import { trueFalseExercise } from '../../lessons/data/lesson6Data';

interface TrueFalseExerciseProps {
  onComplete: (score: number) => void;
}

const TrueFalseExercise: React.FC<TrueFalseExerciseProps> = ({ onComplete }) => {
  const [answers, setAnswers] = useState<{ [key: number]: boolean | null }>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (questionId: number, answer: boolean) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const checkAnswers = () => {
    let correctCount = 0;
    trueFalseExercise.forEach(exercise => {
      if (answers[exercise.id] === exercise.isTrue) {
        correctCount++;
      }
    });
    
    setScore(correctCount);
    setShowResults(true);
    onComplete(correctCount);
  };

  const resetExercise = () => {
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-green-100 p-2 rounded-lg">
          <span className="text-2xl">✅</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-green-800">True or False Exercise</h3>
          <p className="text-gray-600">Marque se as afirmações são verdadeiras ou falsas</p>
        </div>
      </div>

      {!showResults ? (
        <>
          <div className="mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-blue-800">
                <strong>📝 Instruções:</strong> Leia as frases sobre o texto de Cristiano Ronaldo e marque T (True) ou F (False).
              </p>
            </div>

            <div className="space-y-4">
              {trueFalseExercise.map((exercise, index) => (
                <div key={exercise.id} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="mb-3">
                    <h4 className="font-medium text-gray-800 mb-2">
                      {index + 1}. {exercise.statement}
                    </h4>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => handleAnswerSelect(exercise.id, true)}
                      className={`px-6 py-2 rounded-lg border font-medium transition-colors ${
                        answers[exercise.id] === true
                          ? 'bg-green-600 text-white border-green-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-green-50'
                      }`}
                    >
                      True (T)
                    </button>
                    
                    <button
                      onClick={() => handleAnswerSelect(exercise.id, false)}
                      className={`px-6 py-2 rounded-lg border font-medium transition-colors ${
                        answers[exercise.id] === false
                          ? 'bg-red-600 text-white border-red-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-red-50'
                      }`}
                    >
                      False (F)
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={checkAnswers}
              disabled={Object.keys(answers).length < trueFalseExercise.length}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Verificar Respostas
            </button>
          </div>
        </>
      ) : (
        <div className="text-center">
          <div className={`p-6 rounded-lg mb-6 ${score === trueFalseExercise.length ? 'bg-green-50 border border-green-200' : 'bg-yellow-50 border border-yellow-200'}`}>
            <h4 className={`text-xl font-bold mb-2 ${score === trueFalseExercise.length ? 'text-green-800' : 'text-yellow-800'}`}>
              {score === trueFalseExercise.length ? '🎉 Perfeito!' : '📝 Resultado'}
            </h4>
            <p className={`text-lg ${score === trueFalseExercise.length ? 'text-green-700' : 'text-yellow-700'}`}>
              Você acertou {score} de {trueFalseExercise.length} questões
            </p>
          </div>

          {/* Respostas Detalhadas */}
          <div className="mb-6 text-left">
            <h5 className="font-bold text-gray-800 mb-4 text-center">Respostas e Explicações:</h5>
            <div className="space-y-4">
              {trueFalseExercise.map((exercise, index) => (
                <div key={exercise.id} className={`p-4 rounded-lg border ${
                  answers[exercise.id] === exercise.isTrue 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-red-50 border-red-200'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-lg ${
                      answers[exercise.id] === exercise.isTrue ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {answers[exercise.id] === exercise.isTrue ? '✅' : '❌'}
                    </span>
                    <span className="font-medium">
                      {index + 1}. {exercise.statement}
                    </span>
                  </div>
                  
                  <div className="ml-6">
                    <p className={`text-sm mb-1 ${
                      answers[exercise.id] === exercise.isTrue ? 'text-green-700' : 'text-red-700'
                    }`}>
                      <strong>Sua resposta:</strong> {answers[exercise.id] ? 'True' : 'False'}
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Resposta correta:</strong> {exercise.isTrue ? 'True' : 'False'}
                    </p>
                    <p className="text-gray-600 text-sm">
                      <strong>Explicação:</strong> {exercise.explanation}
                    </p>
                  </div>
                </div>
              ))}
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

export default TrueFalseExercise;