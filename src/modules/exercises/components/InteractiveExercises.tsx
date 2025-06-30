// src/modules/exercises/components/InteractiveExercises.tsx
import { useState } from 'react';
import type { ListeningMultipleChoiceQuestion } from '../../../types/index';
import DragDropExercise from './DragDropExercise';
import ListeningExercise from './ListeningExercise'; // Novo import

interface InteractiveExercisesProps {
  listeningQuestions?: ListeningMultipleChoiceQuestion[];
}

const InteractiveExercises = ({ listeningQuestions }: InteractiveExercisesProps) => {
  // Estado para as respostas do quiz de múltipla escolha
  const [quizAnswers, setQuizAnswers] = useState<number[]>(Array(3).fill(-1));
  const [showQuizFeedback, setShowQuizFeedback] = useState(false);
  
  // Estado para o exercício de arrastar e soltar
  const [dragItems] = useState([
    { id: 1, text: 'I', position: 'source', matched: false },
    { id: 2, text: 'You', position: 'source', matched: false },
    { id: 3, text: 'He', position: 'source', matched: false },
    { id: 4, text: 'She', position: 'source', matched: false },
    { id: 5, text: 'They', position: 'source', matched: false },
  ]);
  
  // Dados para o exercício de drag and drop
  const dragDropItems = [
    { id: 1, text: 'I' },
    { id: 2, text: 'You' },
    { id: 3, text: 'He' },
    { id: 4, text: 'She' },
    { id: 5, text: 'They' }
  ];
  
  const dragDropTargets = [
    { id: 1, text: 'am a student.', correctItemId: 1 },
    { id: 2, text: 'is a doctor.', correctItemId: 3 }, // Pode ser 'He' ou 'She'
    { id: 3, text: 'are my friends.', correctItemId: 5 }
  ];
  
  // MODIFICADO: Frases para o exercício de preenchimento de lacunas com múltiplas respostas possíveis
  const blankSentences = [
    { prefix: '', suffix: ' play soccer every weekend.', answer: 'I', acceptableAnswers: ['I'] },
    { prefix: '', suffix: ' works in a hospital.', answer: 'She', acceptableAnswers: ['He', 'She'] },
    { prefix: '', suffix: ' study English together.', answer: 'We', acceptableAnswers: ['We', 'They'] }
  ];
  
  // MODIFICADO: Implementação personalizada para o exercício de preenchimento de lacunas
  const [fillInBlanks, setFillInBlanks] = useState<string[]>(Array(blankSentences.length).fill(''));
  const [showBlanksFeedback, setShowBlanksFeedback] = useState(false);
  
  // Função para atualizar as respostas do preenchimento de lacunas
  const handleBlankChange = (index: number, value: string) => {
    const newAnswers = [...fillInBlanks];
    newAnswers[index] = value;
    setFillInBlanks(newAnswers);
  };
  
  // Função para verificar as respostas do preenchimento de lacunas
  const checkBlankAnswers = () => {
    setShowBlanksFeedback(true);
    // Rolar até o feedback
    setTimeout(() => {
      const feedbackElement = document.getElementById('blanks-feedback');
      if (feedbackElement) {
        window.scrollTo({
          top: feedbackElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    }, 100);
  };
  
  // MODIFICADO: Função para verificar se uma resposta é aceitável
  const isAcceptableAnswer = (index: number, answer: string): boolean => {
    const userAnswer = answer.trim().toLowerCase();
    return blankSentences[index].acceptableAnswers.some(
      acceptable => acceptable.toLowerCase() === userAnswer
    );
  };
  
  // MODIFICADO: Função para calcular a pontuação do preenchimento de lacunas
  const calculateBlanksScore = () => {
    return fillInBlanks.filter((answer, index) => 
      isAcceptableAnswer(index, answer)
    ).length;
  };
  
  // Função para resetar as respostas do preenchimento de lacunas
  const resetBlanksAnswers = () => {
    setFillInBlanks(Array(blankSentences.length).fill(''));
    setShowBlanksFeedback(false);
  };
  
  // Perguntas do quiz
  const quizQuestions = [
    {
      question: 'Qual pronome usamos para falar de nós mesmos?',
      options: ['You', 'I', 'He', 'They'],
      correctAnswer: 1
    },
    {
      question: 'Qual pronome usamos para uma mulher?',
      options: ['He', 'She', 'It', 'You'],
      correctAnswer: 1
    },
    {
      question: 'Qual pronome usamos para um grupo de pessoas ou coisas?',
      options: ['She', 'He', 'They', 'It'],
      correctAnswer: 2
    }
  ];
  
  // Função para atualizar as respostas do quiz
  const handleQuizAnswer = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = optionIndex;
    setQuizAnswers(newAnswers);
  };
  
  // Função para verificar as respostas do quiz
  const checkQuizAnswers = () => {
    setShowQuizFeedback(true);
    // Rolar até o feedback
    setTimeout(() => {
      const feedbackElement = document.getElementById('quiz-feedback');
      if (feedbackElement) {
        window.scrollTo({
          top: feedbackElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    }, 100);
  };
  
  // Função para calcular a pontuação do quiz
  const calculateQuizScore = () => {
    return quizAnswers.filter((answer, index) => 
      answer === quizQuestions[index].correctAnswer
    ).length;
  };
  
  // Função para resetar as respostas do quiz
  const resetQuizAnswers = () => {
    setQuizAnswers(Array(quizQuestions.length).fill(-1));
    setShowQuizFeedback(false);
  };

  return (
    <div className="space-y-10">
      {/* Exercício 1: Reconhecimento de Pronomes */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-2xl font-bold text-purple-700 mb-4">Exercício 1: Reconhecimento de Pronomes</h3>
        <p className="text-gray-700 mb-4">Identifique os pronomes pessoais em inglês:</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {dragItems.map(item => (
            <div 
              key={item.id} 
              className="p-3 bg-purple-50 border border-purple-300 rounded-lg text-center shadow-sm hover:bg-purple-100 transition-colors"
            >
              <span className="text-lg font-medium">{item.text}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-800">
            <span className="font-bold">Dica:</span> Estes são os pronomes pessoais básicos em inglês. 
            Familiarize-se com eles antes de avançar para os próximos exercícios.
          </p>
        </div>
      </div>
      
      {/* Exercício 2: Quiz de Múltipla Escolha */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-2xl font-bold text-purple-700 mb-4">Exercício 2: Quiz de Múltipla Escolha</h3>
        <div className="space-y-6">
          {quizQuestions.map((question, qIndex) => (
            <div key={qIndex} className="bg-purple-50 p-4 rounded-lg">
              <p className="text-lg font-medium text-gray-800 mb-3">{question.question}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {question.options.map((option, oIndex) => (
                  <button
                    key={oIndex}
                    className={`p-3 rounded-lg border ${
                      quizAnswers[qIndex] === oIndex 
                        ? 'bg-purple-200 border-purple-400' 
                        : 'bg-white border-gray-300 hover:bg-purple-100'
                    } transition-colors`}
                    onClick={() => handleQuizAnswer(qIndex, oIndex)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={checkQuizAnswers}
            className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-colors"
          >
            Verificar Respostas
          </button>
          
          {/* Feedback para o Quiz de Múltipla Escolha */}
          {showQuizFeedback && (
            <div id="quiz-feedback" className="mt-6 p-6 bg-purple-50 border-l-4 border-purple-400 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-purple-800">Resultado:</h4>
              <p className="text-lg mb-4">
                Você acertou <span className="font-bold text-purple-700">{calculateQuizScore()}</span> de {quizQuestions.length} perguntas!
              </p>
              <div className="space-y-4">
                {quizQuestions.map((question, qIndex) => {
                  const isCorrect = quizAnswers[qIndex] === question.correctAnswer;
                  return (
                    <div key={qIndex} className={`p-4 rounded-md ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                      <p className="flex items-start">
                        <span className={`mr-2 mt-1 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                          {isCorrect ? '✓' : '✗'}
                        </span>
                        <span className="flex-grow">
                          <span className="font-medium block">{question.question}</span>
                          <span className="block mt-1">
                            Sua resposta: {quizAnswers[qIndex] >= 0 ? question.options[quizAnswers[qIndex]] : 'Nenhuma resposta selecionada'}
                          </span>
                          <span className="block mt-1">
                            Resposta correta: <span className="font-medium text-green-700">{question.options[question.correctAnswer]}</span>
                          </span>
                        </span>
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 flex justify-center">
                <button
                  onClick={resetQuizAnswers}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Tentar Novamente
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Exercício 3: Preenchimento de Lacunas - MODIFICADO para aceitar múltiplas respostas */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-2xl font-bold text-purple-700 mb-4">Exercício 3: Preenchimento de Lacunas</h3>
        <p className="text-gray-700 mb-4">Complete as frases com o pronome correto:</p>
        <div className="space-y-4">
          {blankSentences.map((sentence, index) => (
            <div key={index} className="flex items-center">
              <span className="text-lg text-gray-800">{sentence.prefix}</span>
              <input
                type="text"
                className="mx-2 w-20 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                value={fillInBlanks[index]}
                onChange={(e) => handleBlankChange(index, e.target.value)}
                placeholder="?"
              />
              <span className="text-lg text-gray-800">{sentence.suffix}</span>
            </div>
          ))}
          <button
            onClick={checkBlankAnswers}
            className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-colors"
          >
            Verificar Respostas
          </button>
          
          {/* Feedback para o Preenchimento de Lacunas - MODIFICADO */}
          {showBlanksFeedback && (
            <div id="blanks-feedback" className="mt-6 p-6 bg-purple-50 border-l-4 border-purple-400 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-purple-800">Resultado:</h4>
              <p className="text-lg mb-4">
                Você acertou <span className="font-bold text-purple-700">{calculateBlanksScore()}</span> de {blankSentences.length} lacunas!
              </p>
              <div className="space-y-4">
                {blankSentences.map((sentence, index) => {
                  const isCorrect = isAcceptableAnswer(index, fillInBlanks[index]);
                  return (
                    <div key={index} className={`p-4 rounded-md ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                      <p className="flex items-start">
                        <span className={`mr-2 mt-1 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                          {isCorrect ? '✓' : '✗'}
                        </span>
                        <span className="flex-grow">
                          <span className="block mt-1">
                            Sua resposta: {fillInBlanks[index] || 'Nenhuma resposta'}
                          </span>
                          <span className="block mt-1">
                            {sentence.acceptableAnswers.length > 1 ? (
                              <>Respostas aceitáveis: <span className="font-medium text-green-700">{sentence.acceptableAnswers.join(' ou ')}</span></>
                            ) : (
                              <>Resposta correta: <span className="font-medium text-green-700">{sentence.answer}</span></>
                            )}
                          </span>
                          <span className="block mt-1">
                            Frase completa: <span className="font-medium">{sentence.answer} {sentence.suffix}</span>
                          </span>
                        </span>
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 flex justify-center">
                <button
                  onClick={resetBlanksAnswers}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Tentar Novamente
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Exercício 4: Correspondência - SUBSTITUÍDO pelo componente DragDropExercise */}
      <DragDropExercise items={dragDropItems} targets={dragDropTargets} />
      
      {/* Exercício 5: Listening (se disponível) - SUBSTITUÍDO pelo componente ListeningExercise */}
      {listeningQuestions && listeningQuestions.length > 0 && (
        <ListeningExercise questions={listeningQuestions} />
      )}
    </div>
  );
};

export default InteractiveExercises;