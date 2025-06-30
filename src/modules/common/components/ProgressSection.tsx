import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProgressContext } from '../../../contexts/ProgressContext';

const ProgressSection = () => {
  const { progress } = useContext(ProgressContext);
  
  // Calcular porcentagem de conclusão
  const completionPercentage = progress.completedLessons.length > 0 
    ? Math.round((progress.completedLessons.length / 6) * 100) 
    : 0;
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Seu Progresso</h3>
      
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Conclusão do curso</span>
          <span className="text-sm font-medium text-indigo-600">{completionPercentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-indigo-600 h-2.5 rounded-full" 
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
      </div>
      
      <div className="mb-6">
        <p className="text-gray-600">
          Você completou <span className="font-semibold text-indigo-600">{progress.completedLessons.length}</span> de 6 lições.
        </p>
        {progress.completedLessons.length > 0 && (
          <p className="text-gray-600 mt-1">
            Pontos acumulados: <span className="font-semibold text-indigo-600">{progress.points}</span>
          </p>
        )}
      </div>
      
      {progress.completedLessons.length === 0 ? (
        <Link 
          to="/lessons/lesson1" 
          className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Comece sua primeira lição
        </Link>
      ) : (
        <Link 
          to="/dashboard" 
          className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Ver detalhes do progresso
        </Link>
      )}
    </div>
  );
};

export default ProgressSection;