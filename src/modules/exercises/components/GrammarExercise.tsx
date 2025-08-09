// src/modules/exercises/components/GrammarExercise.tsx
import React, { useState } from 'react';

interface GrammarQuestion {
  id: number;
  sentence: string;
  options: string[];
  correctAnswer: number;
}

interface GrammarExerciseProps {
  title?: string;
  instruction?: string;
  questions: GrammarQuestion[];
}

const GrammarExercise: React.FC<GrammarExerciseProps> = ({
  title = "Grammar Exercise",
  instruction = "Complete a frase com a forma correta do verbo:",
  questions
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerSelect = (questionId: number, optionIndex: number) => {
    if (!submitted) {
      setSelectedAnswers(prev => ({
        ...prev,
        [questionId]: optionIndex
      }));
    }
  };

  const handleSubmit = () => {
    if (Object.keys(selectedAnswers).length === questions.length) {
      setSubmitted(true);
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResults(false);
    setSubmitted(false);
  };

  const getScore = () => {
    let correct = 0;
    questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return { correct, total: questions.length };
  };

  const score = getScore();
  const allAnswered = Object.keys(selectedAnswers).length === questions.length;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-purple-100 p-2 rounded-lg">
          <span className="text-2xl">✏️</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-purple-800">{title}</h3>
          <p className="text-gray-600">{instruction}</p>
        </div>
      </div>

      <div className="space-y-6">
        {questions.map((question) => {
          // 🔧 REMOVIDA a variável 'isAnswered' que não estava sendo usada
          const selectedOption = selectedAnswers[question.id];
          const isCorrect = selectedOption === question.correctAnswer;

          return (
            <div key={question.id} className="border border-gray-200 rounded-lg p-4">
              <div className="mb-4">
                <span className="font-semibold text-gray-800">
                  {question.id}. {question.sentence}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {question.options.map((option, index) => {
                  const isSelected = selectedOption === index;
                  const isCorrectOption = index === question.correctAnswer;
                  
                  let buttonClass = "w-full text-left p-3 rounded-lg border transition-all duration-200 ";
                  
                  if (!submitted) {
                    buttonClass += isSelected 
                      ? "border-purple-500 bg-purple-50 text-purple-800" 
                      : "border-gray-300 bg-white text-gray-700 hover:border-purple-300 hover:bg-purple-25";
                  } else {
                    if (isCorrectOption) {
                      buttonClass += "border-green-500 bg-green-50 text-green-800";
                    } else if (isSelected && !isCorrect) {
                      buttonClass += "border-red-500 bg-red-50 text-red-800";
                    } else {
                      buttonClass += "border-gray-300 bg-gray-50 text-gray-600";
                    }
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(question.id, index)}
                      disabled={submitted}
                      className={buttonClass}
                    >
                      <span className="font-medium mr-2">
                        {String.fromCharCode(97 + index)})
                      </span>
                      {option}
                      {submitted && isCorrectOption && (
                        <span className="ml-2 text-green-600">✅</span>
                      )}
                      {submitted && isSelected && !isCorrect && (
                        <span className="ml-2 text-red-600">❌</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Botões de ação */}
      <div className="mt-6 flex gap-3">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              allAnswered
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Verificar Respostas
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
          >
            Tentar Novamente
          </button>
        )}
      </div>

      {/* Resultado */}
      {showResults && (
        <div className={`mt-6 p-4 rounded-lg border-2 ${
          score.correct === score.total 
            ? 'bg-green-50 border-green-300 text-green-800' 
            : score.correct >= score.total * 0.7
            ? 'bg-yellow-50 border-yellow-300 text-yellow-800'
            : 'bg-red-50 border-red-300 text-red-800'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">
              {score.correct === score.total ? '🎉' : score.correct >= score.total * 0.7 ? '👍' : '📚'}
            </span>
            <span className="font-bold text-lg">
              Resultado: {score.correct}/{score.total} ({Math.round((score.correct / score.total) * 100)}%)
            </span>
          </div>
          <p>
            {score.correct === score.total 
              ? 'Excelente! Você acertou todas as questões!' 
              : score.correct >= score.total * 0.7
              ? 'Bom trabalho! Continue praticando.'
              : 'Continue estudando e tente novamente.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default GrammarExercise;