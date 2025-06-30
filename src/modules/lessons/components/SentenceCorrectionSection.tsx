// src/modules/lessons/components/SentenceCorrectionSection.tsx
import type { SentenceCorrectionQuestion } from '../../../types/index';
import { useSentenceCorrection } from '../hooks/useSentenceCorrection';

interface SentenceCorrectionSectionProps {
  title: string;
  instruction: string;
  questions: SentenceCorrectionQuestion[];
}

const SentenceCorrectionSection = ({ title, instruction, questions }: SentenceCorrectionSectionProps) => {
  const {
    userCorrections,
    showFeedback,
    correctionResults, // Usando o estado dos resultados diretamente
    handleCorrectionChange,
    checkCorrections,
    calculateScore,
    resetCorrections
  } = useSentenceCorrection({ questions });

  return (
    <section className="mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-3">
        {title}
      </h2>
      <p className="text-lg sm:text-xl text-gray-700 mb-6">
        {instruction}
      </p>
      <div className="space-y-6">
        {questions.map((question, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <p className="text-lg font-medium text-gray-800 mb-3">
              Frase original: <span className="font-mono">{question.originalSentence}</span>
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center">
              <label htmlFor={`correction-${index}`} className="mb-2 sm:mb-0 sm:mr-3 text-gray-700">
                Correção:
              </label>
              <input
                id={`correction-${index}`}
                type="text"
                className="flex-grow p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={userCorrections[index]}
                onChange={(e) => handleCorrectionChange(index, e.target.value)}
                placeholder="Digite a frase corrigida..."
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={checkCorrections}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors"
        >
          Verificar Correções
        </button>
      </div>

      {/* Feedback */}
      {showFeedback && (
        <div id="correction-feedback" className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-400 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-3 text-blue-800">Resultado:</h3>
          <p className="text-xl mb-4">
            Você acertou <span className="font-bold text-blue-700">{calculateScore()}</span> de {questions.length} correções!
          </p>
          <div className="space-y-4">
            {questions.map((question, index) => {
              const isCorrect = correctionResults[index];
              return (
                <div key={index} className={`p-4 rounded-md ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                  <p className="flex items-start">
                    <span className={`mr-2 mt-1 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                      {isCorrect ? '✓' : '✗'}
                    </span>
                    <span className="flex-grow">
                      <span className="font-medium block">
                        {isCorrect 
                          ? 'Correto!' 
                          : 'Incorreto.'}
                      </span>
                      <span className="block mt-1">
                        Frase original: <span className="font-mono">{question.originalSentence}</span>
                      </span>
                      <span className="block mt-1">
                        Sua correção: <span className="font-mono">{userCorrections[index]}</span>
                      </span>
                      <span className="block mt-1">
                        Correção correta: <span className="font-mono text-green-700">{question.correctSentence}</span>
                      </span>
                      {question.explanation && (
                        <p className="mt-2 text-sm text-gray-600 italic">
                          {question.explanation}
                        </p>
                      )}
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
    </section>
  );
};

export default SentenceCorrectionSection;