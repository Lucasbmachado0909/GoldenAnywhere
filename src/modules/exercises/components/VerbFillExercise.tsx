// src/modules/exercises/components/VerbFillExercise.tsx
import React from 'react';
import { useActivityCheck } from '../../lessons/hooks/useActivityCheck';
import type { FillInBlankActivity } from '../../../types';

interface VerbFillExerciseProps {
  sentences: FillInBlankActivity[];
  availableVerbs?: string[]; // Nova propriedade para os verbos disponíveis
}

const VerbFillExercise: React.FC<VerbFillExerciseProps> = ({ 
  sentences, 
  availableVerbs = ['go', 'speaks', 'live']
}) => {
  const correctAnswers = sentences.map(sentence => sentence.answer);
  
  const {
    answers,
    showFeedback,
    handleAnswerChange,
    checkAnswers,
    calculateScore,
    resetAnswers
  } = useActivityCheck({ correctAnswers });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-2xl font-bold text-purple-700 mb-4">Complete as frases com o verbo correto</h3>
      
      {/* Bloco de verbos disponíveis */}
      <div className="mb-6 p-4 bg-purple-50 rounded-lg">
        <p className="text-gray-700 mb-2 font-medium">Verbos disponíveis:</p>
        <div className="flex flex-wrap gap-2">
          {availableVerbs.map((verb, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full font-medium"
            >
              {verb}
            </span>
          ))}
        </div>
      </div>
      
      <p className="text-gray-700 mb-4">Preencha as lacunas com o verbo apropriado:</p>
      
      <div className="space-y-4">
        {sentences.map((sentence, index) => (
          <div key={index} className="flex flex-wrap items-center">
            <span className="text-lg text-gray-800">{sentence.prefix}</span>
            <input
              type="text"
              className="mx-2 w-32 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              value={answers[index]}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              placeholder="verbo"
              list={`verbs-list-${index}`} // Adiciona suporte para datalist
            />
            {/* Datalist para sugestões de verbos ao digitar */}
            <datalist id={`verbs-list-${index}`}>
              {availableVerbs.map((verb, i) => (
                <option key={i} value={verb} />
              ))}
            </datalist>
            <span className="text-lg text-gray-800">{sentence.suffix}</span>
          </div>
        ))}
        
        <button
          onClick={checkAnswers}
          className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-colors"
        >
          Verificar Respostas
        </button>
        
        {showFeedback && (
          <div id="activity-feedback" className="mt-6 p-6 bg-purple-50 border-l-4 border-purple-400 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-3 text-purple-800">Resultado:</h4>
            <p className="text-lg mb-4">
              Você acertou <span className="font-bold text-purple-700">{calculateScore()}</span> de {sentences.length} verbos!
            </p>
            
            <div className="space-y-4">
              {sentences.map((sentence, index) => {
                const isCorrect = answers[index].trim().toLowerCase() === sentence.answer.toLowerCase();
                return (
                  <div key={index} className={`p-4 rounded-md ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                    <p className="flex items-start">
                      <span className={`mr-2 mt-1 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                        {isCorrect ? '✓' : '✗'}
                      </span>
                      <span className="flex-grow">
                        <span className="block mt-1">
                          Sua resposta: {answers[index] || 'Nenhuma resposta'}
                        </span>
                        <span className="block mt-1">
                          Resposta correta: <span className="font-medium text-green-700">{sentence.answer}</span>
                        </span>
                        <span className="block mt-1">
                          Frase completa: <span className="font-medium">{sentence.prefix} {sentence.answer} {sentence.suffix}</span>
                        </span>
                      </span>
                    </p>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-6 flex justify-center">
              <button
                onClick={resetAnswers}
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

export default VerbFillExercise;