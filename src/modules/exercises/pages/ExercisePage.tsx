import { useParams } from 'react-router-dom';

const ExercisePage = () => {
  const { exerciseId } = useParams<{ exerciseId: string }>();
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-6">Exercise: {exerciseId}</h1>
      <p>This is a placeholder for the exercise page.</p>
    </div>
  );
};

export default ExercisePage;