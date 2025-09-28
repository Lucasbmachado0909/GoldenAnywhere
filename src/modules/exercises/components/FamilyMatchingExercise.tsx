// src/modules/exercises/components/FamilyMatchingExercise.tsx
import React, { useState } from 'react';
import { matchingExercise } from '../../lessons/data/lesson5Data';
import type { MatchingExerciseItem } from '../../../types';

interface FamilyMatchingExerciseProps {
  onComplete: (score: number) => void;
}

const FamilyMatchingExercise: React.FC<FamilyMatchingExerciseProps> = ({ onComplete }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const definitions = [
    { id: 'a', text: 'female sibling (irmã)' },
    { id: 'b', text: 'male parent (pai)' },
    { id: 'c', text: 'female parent (mãe)' },
    { id: 'd', text: 'male sibling (irmão)' },
    { id: 'e', text: 'not family, but close (amigo)' }
  ];

  const handleAnswerSelect = (word: string, definitionId: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [word]: definitionId
    }));
  };

  const checkAnswers = () => {
    let correctCount = 0;
    matchingExercise.forEach((item: MatchingExerciseItem) => {
      if (selectedAnswers[item.word] === item.correct) {
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
        <div className="bg-orange-100 p-2 rounded-lg">
          <span className="text-2xl">🔗</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-orange-800">Family Matching Exercise</h3>
          <p className="text-gray-600">Conecte as palavras com suas definições</p>
        </div>
      </div>

      {!showResults ? (
        <>
          <div className="mb-6">
            <h4 className="text-lg font-bold text-orange-700 mb-4">
              Ligue as colunas:
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Coluna das Palavras */}
              <div>
                <h5 className="font-bold text-gray-800 mb-3">Palavras:</h5>
                <div className="space-y-3">
                  {matchingExercise.map((item: MatchingExerciseItem, index: number) => (
                    <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-blue-800">
                          {index + 1}. {item.word}
                        </span>
                        <span className="text-lg">
                          {selectedAnswers[item.word] ? `→ ${selectedAnswers[item.word]}` : '?'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coluna das Definições */}
              <div>
                <h5 className="font-bold text-gray-800 mb-3">Definições:</h5>
                <div className="space-y-3">
                  {definitions.map((def) => (
                    <div key={def.id} className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-green-800 text-lg">
                          {def.id})
                        </span>
                        <span className="text-green-700 flex-1">
                          {def.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Botões de Seleção */}
          <div className="mb-6">
            <h5 className="font-bold text-gray-800 mb-3">Faça suas conexões:</h5>
            {matchingExercise.map((item: MatchingExerciseItem, index: number) => (
              <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-800 mb-2">
                  {item.word} conecta com:
                </p>
                <div className="flex gap-2 flex-wrap">
                  {definitions.map((def) => (
                    <button
                      key={def.id}
                      onClick={() => handleAnswerSelect(item.word, def.id)}
                      className={`px-3 py-1 rounded-lg border text-sm font-medium transition-colors ${
                        selectedAnswers[item.word] === def.id
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
                      }`}
                    >
                      {def.id}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={checkAnswers}
              disabled={Object.keys(selectedAnswers).length < matchingExercise.length}
              className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Verificar Respostas
            </button>
          </div>
        </>
      ) : (
        <div className="text-center">
          <div className={`p-6 rounded-lg mb-6 ${score === matchingExercise.length ? 'bg-green-50 border border-green-200' : 'bg-yellow-50 border border-yellow-200'}`}>
            <h4 className={`text-xl font-bold mb-2 ${score === matchingExercise.length ? 'text-green-800' : 'text-yellow-800'}`}>
              {score === matchingExercise.length ? '🎉 Perfeito!' : '📝 Resultado'}
            </h4>
            <p className={`text-lg ${score === matchingExercise.length ? 'text-green-700' : 'text-yellow-700'}`}>
              Você acertou {score} de {matchingExercise.length} conexões
            </p>
          </div>

          {/* Respostas Corretas */}
          <div className="mb-6 text-left">
            <h5 className="font-bold text-gray-800 mb-3 text-center">Respostas Corretas:</h5>
            <div className="space-y-2">
              {matchingExercise.map((item: MatchingExerciseItem, index: number) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">{item.word}</span>
                  <span className="text-gray-600">→</span>
                  <span className="text-green-700 font-medium">
                    {item.correct}) {definitions.find(d => d.id === item.correct)?.text}
                  </span>
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

export default FamilyMatchingExercise;