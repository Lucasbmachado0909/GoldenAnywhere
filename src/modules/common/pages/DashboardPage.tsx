import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProgressContext } from '../../../contexts/ProgressContext';

const DashboardPage = () => {
  const { progress } = useContext(ProgressContext);
  
  // Dados de exemplo para lições
  const availableLessons = [
    { id: 'lesson1', title: 'Introduction to Basic Greetings', level: 'beginner' },
    { id: 'lesson2', title: 'Common Everyday Vocabulary', level: 'beginner' },
    { id: 'lesson3', title: 'Simple Present Tense', level: 'beginner' },
  ];
  
  // Filtrar lições completadas
  const completedLessons = availableLessons.filter(lesson => 
    progress.completedLessons.includes(lesson.id)
  );
  
  // Encontrar próximas lições disponíveis
  const nextLessons = availableLessons.filter(lesson => 
    !progress.completedLessons.includes(lesson.id)
  );
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-6">Your Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card bg-blue-50">
          <h2 className="text-xl font-bold mb-2">Progress</h2>
          <p className="text-3xl font-bold text-primary">
            {Math.round((completedLessons.length / availableLessons.length) * 100)}%
          </p>
          <p className="text-gray-600">of lessons completed</p>
        </div>
        
        <div className="card bg-green-50">
          <h2 className="text-xl font-bold mb-2">Current Level</h2>
          <p className="text-3xl font-bold text-green-600 capitalize">
            {progress.level}
          </p>
        </div>
        
        <div className="card bg-purple-50">
          <h2 className="text-xl font-bold mb-2">Points Earned</h2>
          <p className="text-3xl font-bold text-purple-600">
            {progress.points}
          </p>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Continue Learning</h2>
        
        {nextLessons.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {nextLessons.slice(0, 2).map(lesson => (
              <Link 
                key={lesson.id} 
                to={`/lessons/${lesson.id}`}
                className="card hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-primary mb-2">{lesson.title}</h3>
                <p className="text-gray-600 mb-4">Level: {lesson.level}</p>
                <div className="flex justify-end">
                  <span className="btn-primary">Start Lesson</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="card bg-yellow-50">
            Congratulations! You've completed all available lessons.
          </p>
        )}
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Your Completed Lessons</h2>
        
        {completedLessons.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {completedLessons.map(lesson => (
              <Link 
                key={lesson.id} 
                to={`/lessons/${lesson.id}`}
                className="card bg-gray-50 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold mb-2">{lesson.title}</h3>
                <p className="text-gray-600 mb-2">Level: {lesson.level}</p>
                <div className="flex justify-end">
                  <span className="text-sm px-3 py-1 bg-green-100 text-green-800 rounded-full">
                    Completed
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="card bg-gray-50">
            You haven't completed any lessons yet. Start learning now!
          </p>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;