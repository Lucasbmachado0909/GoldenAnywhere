interface FeedbackMessageProps {
  userAnswer: string;
  correctAnswer: string;
}

const FeedbackMessage = ({ userAnswer, correctAnswer }: FeedbackMessageProps) => {
  const isCorrect = userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase();
  
  return (
    <div className={`p-3 rounded-md ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
      <p className="flex items-center">
        <span className={`mr-2 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
          {isCorrect ? '✓' : '✗'}
        </span>
        <span className="font-medium">
          {isCorrect 
            ? `Correto! "${correctAnswer}" é o pronome correto.` 
            : `Incorreto. O pronome correto é "${correctAnswer}".`}
        </span>
      </p>
    </div>
  );
};

export default FeedbackMessage;