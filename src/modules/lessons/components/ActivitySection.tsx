import React from 'react';
import FeedbackMessage from '../../common/components/FeedbackMessage';

interface ActivityQuestion {
  phrase: string;
  answer: string;
}

interface ActivitySectionProps {
  title: string;
  instruction: string;
  questions: ActivityQuestion[];
  answers: string[];
  showFeedback: boolean;
  calculateScore: () => number;
  handleAnswerChange: (index: number, value: string) => void;
  checkAnswers: () => void;
}

const ActivitySection: React.FC<ActivitySectionProps> = ({
  title,
  instruction,
  questions,
  answers,
  showFeedback,
  calculateScore,
  handleAnswerChange,
  checkAnswers
}) => {
  return (
    <section className="mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-3">
        {title}
      </h2>
      <p className="text-lg sm:text-xl text-gray-700 mb-6">
        {instruction}
      </p>
      <div className="space-y-4">
        {questions.map((question, index) => (
          <div key={index} className="flex items-center">
            <div className="mr-2 w-20">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={answers[index]}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
                placeholder="?"
              />
            </div>
            <p className="text-xl sm:text-2xl font-medium text-gray-800">{question.phrase}</p>
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

      {/* Feedback da Atividade */}
      {showFeedback && (
        <div id="activity-feedback" className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-400 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-3 text-blue-800">Resultado:</h3>
          <p className="text-xl mb-4">
            Você acertou <span className="font-bold text-blue-700">{calculateScore()}</span> de {questions.length} questões!
          </p>
          <div className="space-y-3">
            {answers.map((answer, index) => (
              <FeedbackMessage
                key={index}
                userAnswer={answer}
                correctAnswer={questions[index].answer}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ActivitySection;