// src/modules/exercises/components/SentenceCorrectionExercise.tsx
// src/modules/exercises/components/SentenceCorrectionExercise.tsx
import React from 'react';
import { useSentenceCorrection } from '../../lessons/hooks/useSentenceCorrection';
import type { SentenceCorrectionQuestion } from '../../../types';

interface SentenceCorrectionExerciseProps {
  questions: SentenceCorrectionQuestion[];
}

const SentenceCorrectionExercise: React.FC<SentenceCorrectionExerciseProps> = ({ questions }) => {
  const {
    userCorrections,
    showFeedback,
    handleCorrectionChange,
    checkCorrections,
    calculateScore,
    resetCorrections
  } = useSentenceCorrection({ questions });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-2xl font-bold text-purple-700 mb-4">Corrija as frases incorretas</h3>
      <p className="text-gray-700 mb-4">Reescreva as frases abaixo corrigindo os erros:</p>
      
      <div className="space-y-6">
        {questions.map((question, index) => (
          <div key={index} className="bg-purple-50 p-4 rounded-lg">
            <p className="text-lg font-medium text-gray-800 mb-2">Frase original:</p>
            <p className="mb-4 p-3 bg-white rounded-md border border-gray-300">{question.incorrectSentence}</p>
            
            <p className="text-lg font-medium text-gray-800 mb-2">Sua correção:</p>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              rows={2}
              value={userCorrections[index]}
              onChange={(e) => handleCorrectionChange(index, e.target.value)}
              placeholder="Escreva a frase corrigida aqui..."
            />
          </div>
        ))}
        
        <button
          onClick={checkCorrections}
          className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-colors"
        >
          Verificar Correções
        </button>
        
        {showFeedback && (
          <div id="correction-feedback" className="mt-6 p-6 bg-purple-50 border-l-4 border-purple-400 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-3 text-purple-800">Resultado:</h4>
            <p className="text-lg mb-4">
              Você acertou <span className="font-bold text-purple-700">{calculateScore()}</span> de {questions.length} correções!
            </p>
            
            <div className="space-y-4">
              {questions.map((question, index) => {
                const isCorrect = userCorrections[index].trim().toLowerCase() === question.correctSentence.toLowerCase();
                return (
                  <div key={index} className={`p-4 rounded-md ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                    <p className="flex items-start">
                      <span className={`mr-2 mt-1 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                        {isCorrect ? '✓' : '✗'}
                      </span>
                      <span className="flex-grow">
                        <span className="font-medium block">Frase original:</span>
                        <span className="block mt-1">{question.incorrectSentence}</span>
                        <span className="font-medium block mt-2">Sua correção:</span>
                        <span className="block mt-1">{userCorrections[index] || 'Nenhuma correção'}</span>
                        <span className="font-medium block mt-2">Correção correta:</span>
                        <span className="block mt-1 text-green-700">{question.correctSentence}</span>
                      </span>
                    </p>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-6 flex justify-center">
              <button
                onClick={resetCorrections}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Tentar Novamente
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SentenceCorrectionExercise;