// src/modules/lessons/components/ListeningTranscriptionSection.tsx
import type { ListeningTranscriptionActivity } from '../../../types/index'; // Corrigido
import { useListeningTranscription } from '../hooks/useListeningTranscription';
import AudioButton from '../../common/components/AudioButton';

interface ListeningTranscriptionSectionProps {
  title: string;
  instruction: string;
  activities: ListeningTranscriptionActivity[];
}

const ListeningTranscriptionSection = ({ 
  title, 
  instruction, 
  activities 
}: ListeningTranscriptionSectionProps) => {
  const {
    userTranscriptions,
    showFeedback,
    handleTranscriptionChange,
    checkTranscriptions,
    calculateScore,
    resetTranscriptions
  } = useListeningTranscription({ activities });

  return (
    <section className="mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-3">
        {title}
      </h2>
      <p className="text-lg sm:text-xl text-gray-700 mb-6">
        {instruction}
      </p>
      
      <div className="space-y-6">
        {activities.map((activity, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <span className="text-lg font-medium text-gray-800 mr-3">
                {index + 1}.
              </span>
              <AudioButton 
                text="Escutar áudio" 
                audioSrc={activity.audioUrl} 
              />
            </div>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={userTranscriptions[index]}
              onChange={(e) => handleTranscriptionChange(index, e.target.value)}
              placeholder="Digite o que você ouviu..."
            />
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={checkTranscriptions}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors"
        >
          Verificar Transcrições
        </button>
      </div>

      {/* Feedback */}
      {showFeedback && (
        <div id="listening-feedback" className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-400 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-3 text-blue-800">Resultado:</h3>
          <p className="text-xl mb-4">
            Você acertou <span className="font-bold text-blue-700">{calculateScore()}</span> de {activities.length} transcrições!
          </p>
          <div className="space-y-4">
            {activities.map((activity, index) => {
              const isCorrect = userTranscriptions[index].trim().toLowerCase() === activity.correctTranscription.toLowerCase();
              return (
                <div key={index} className={`p-4 rounded-md ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                  <p className="flex items-start">
                    <span className={`mr-2 mt-1 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                      {isCorrect ? '✓' : '✗'}
                    </span>
                    <span className="flex-grow">
                      <span className="font-medium block flex items-center">
                        <span className="mr-2">{index + 1}. Áudio:</span>
                        <AudioButton 
                          text="Escutar novamente" 
                          audioSrc={activity.audioUrl} 
                        />
                      </span>
                      <span className="block mt-1">
                        Sua transcrição: {userTranscriptions[index]}
                      </span>
                      <span className="block mt-1">
                        Transcrição correta: <span className="font-medium text-green-700">{activity.correctTranscription}</span>
                      </span>
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-6 flex justify-center">
            <button
              onClick={resetTranscriptions}
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

export default ListeningTranscriptionSection;