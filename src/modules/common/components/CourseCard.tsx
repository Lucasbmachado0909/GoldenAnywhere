import { Link } from 'react-router-dom';
import { type Course } from '../../../data/courses/courseData';

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const { id, title, description, status, colorAccent, estimatedTime } = course;
  
  const colorClasses = {
    indigo: 'bg-indigo-600',
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    purple: 'bg-purple-600',
    red: 'bg-red-600',
    yellow: 'bg-yellow-500'
  };
  
  const isAvailable = status === 'available';
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
      <div className={`${colorClasses[colorAccent as keyof typeof colorClasses]} h-2`}></div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <span className="text-sm text-gray-500">{estimatedTime} min</span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <Link 
            to={isAvailable ? `/lessons/${id}` : '#'} 
            className={`${
              isAvailable 
                ? 'text-indigo-600 hover:text-indigo-800' 
                : 'text-gray-400 cursor-not-allowed'
            } font-medium flex items-center`}
          >
            {isAvailable ? 'Iniciar lição' : 'Em breve'}
            {isAvailable && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            )}
          </Link>
          {!isAvailable && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              Em breve
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;