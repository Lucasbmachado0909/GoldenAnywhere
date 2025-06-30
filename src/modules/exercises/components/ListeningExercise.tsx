// src/modules/exercises/components/ListeningExercise.tsx
import { useState } from 'react';
import type { ListeningMultipleChoiceQuestion } from '../../../types';
import AudioButton from '../../common/components/AudioButton';

interface ListeningExerciseProps {
  questions: ListeningMultipleChoiceQuestion[];
}

const ListeningExercise = ({ questions }: ListeningExerciseProps) => {
  const [userAnswers, setUserAnswers] = useState<number[]>(
    Array(questions.length).fill(-1)
  );
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const checkAnswers = () => {
    setShowFeedback(true);
    const feedbackElement = document.getElementById('listening-feedback');
    if (feedbackElement) {
      window.scrollTo({
        top: feedbackElement.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const calculateScore = () => {
    return userAnswers.filter(
      (answer, index) => answer === questions[index].correctOptionIndex
    ).length;
  };

  const resetAnswers = () => {
    setUserAnswers(Array(questions.length).fill(-1));
    setShowFeedback(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-2xl font-bold text-purple-700 mb-4">Exercício de Compreensão Auditiva</h3>
      <p className="text-gray-700 mb-6">
        Escute o áudio e escolha a opção correta para cada pergunta:
      </p>

      <div className="space-y-6">
        {questions.map((question, qIndex) => (
          <div key={qIndex} className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <span className="text-lg font-medium text-gray-800 mr-3">
                {qIndex + 1}. {question.questionText}
              </span>
              <AudioButton 
                text="Escutar" 
                audioSrc={question.audioUrl} 
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {question.options.map((option, oIndex) => (
                <button
                  key={oIndex}
                  className={`p-3 rounded-lg border ${
                    userAnswers[qIndex] === oIndex 
                      ? 'bg-purple-200 border-purple-400' 
                      : 'bg-white border-gray-300 hover:bg-purple-100'
                  } transition-colors`}
                  onClick={() => handleAnswer(qIndex, oIndex)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}

        <button
          onClick={checkAnswers}
          className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-colors"
        >
          Verificar Respostas
        </button>
        
        {/* Feedback */}
        {showFeedback && (
          <div id="listening-feedback" className="mt-6 p-6 bg-purple-50 border-l-4 border-purple-400 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-3 text-purple-800">Resultado:</h4>
            <p className="text-lg mb-4">
              Você acertou <span className="font-bold text-purple-700">{calculateScore()}</span> de {questions.length} perguntas!
            </p>
            <div className="space-y-4">
              {questions.map((question, qIndex) => {
                const isCorrect = userAnswers[qIndex] === question.correctOptionIndex;
                return (
                  <div key={qIndex} className={`p-4 rounded-md ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                    <p className="flex items-start">
                      <span className={`mr-2 mt-1 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                        {isCorrect ? '✓' : '✗'}
                      </span>
                      <span className="flex-grow">
                        <span className="font-medium block flex items-center">
                          <span className="mr-2">{qIndex + 1}. {question.questionText}</span>
                          <AudioButton 
                            text="Escutar" 
                            audioSrc={question.audioUrl} 
                          />
                        </span>
                        <span className="block mt-1">
                          Sua resposta: {userAnswers[qIndex] >= 0 ? question.options[userAnswers[qIndex]] : 'Nenhuma resposta selecionada'}
                        </span>
                        <span className="block mt-1">
                          Resposta correta: <span className="font-medium text-green-700">{question.options[question.correctOptionIndex]}</span>
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

export default ListeningExercise;