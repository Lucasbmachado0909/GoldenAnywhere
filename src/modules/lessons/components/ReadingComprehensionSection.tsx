// src/modules/lessons/components/ReadingComprehensionSection.tsx
import type { ReadingComprehensionQuestion } from '../../../types/index'; // Corrigido
import { useReadingComprehension } from '../hooks/useReadingComprehension';

interface ReadingComprehensionSectionProps {
  title: string;
  instruction: string;
  text: string;
  questions: ReadingComprehensionQuestion[];
}

const ReadingComprehensionSection = ({ 
  title, 
  instruction, 
  text, 
  questions 
}: ReadingComprehensionSectionProps) => {
  const {
    userAnswers,
    showFeedback,
    handleAnswerChange,
    checkAnswers,
    calculateScore,
    resetAnswers
  } = useReadingComprehension({ questions });

  return (
    <section className="mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-3">
        {title}
      </h2>
      <p className="text-lg sm:text-xl text-gray-700 mb-4">
        {instruction}
      </p>
      
      {/* Text for reading */}
      <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm mb-8">
        <p className="text-lg text-gray-800 leading-relaxed">
          {text}
        </p>
      </div>
      
      {/* Questions */}
      <div className="space-y-6">
        {questions.map((question, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <p className="text-lg font-medium text-gray-800 mb-3">
              {index + 1}. {question.question}
            </p>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={userAnswers[index]}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              placeholder="Digite sua resposta..."
            />
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={checkAnswers}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors"
        >
          Verificar Respostas
        </button>
      </div>

      {/* Feedback */}
      {showFeedback && (
        <div id="reading-feedback" className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-400 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-3 text-blue-800">Resultado:</h3>
          <p className="text-xl mb-4">
            Você acertou <span className="font-bold text-blue-700">{calculateScore()}</span> de {questions.length} perguntas!
          </p>
          <div className="space-y-4">
            {questions.map((question, index) => {
              const isCorrect = userAnswers[index].trim().toLowerCase() === question.correctAnswer.toLowerCase();
              return (
                <div key={index} className={`p-4 rounded-md ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                  <p className="flex items-start">
                    <span className={`mr-2 mt-1 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                      {isCorrect ? '✓' : '✗'}
                    </span>
                    <span className="flex-grow">
                      <span className="font-medium block">
                        {index + 1}. {question.question}
                      </span>
                      <span className="block mt-1">
                        Sua resposta: {userAnswers[index]}
                      </span>
                      <span className="block mt-1">
                        Resposta correta: <span className="font-medium text-green-700">{question.correctAnswer}</span>
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
    </section>
  );
};

export default ReadingComprehensionSection;