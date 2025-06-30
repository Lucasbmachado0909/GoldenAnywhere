import { useParams } from 'react-router-dom';

const LessonPage = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-6">Lesson: {lessonId}</h1>
      <p>This is a placeholder for the lesson page.</p>
    </div>
  );
};

export default LessonPage;