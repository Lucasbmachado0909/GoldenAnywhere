// src/modules/lessons/components/LessonNavigation.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface LessonNavigationProps {
  prevLessonId: string;
  nextLessonId: string;
  prevText: string;
  nextText: string;
  isCompleted?: boolean; // Esta prop agora controla se a próxima lição está habilitada
}

const LessonNavigation: React.FC<LessonNavigationProps> = ({ 
  prevLessonId, 
  nextLessonId, 
  prevText, 
  nextText,
  isCompleted = false // Padrão para false
}) => {
  return (
    <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-200">
      <Link 
        to={prevLessonId === 'dashboard' ? '/dashboard' : `/lessons/${prevLessonId}`}
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors"
      >
        ← {prevText}
      </Link>
      
      {/* Indicador de progresso (opcional, pode ser removido se a ProgressBar já for suficiente) */}
      {isCompleted && (
        <div className="flex items-center text-green-600">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">Lição Concluída</span>
        </div>
      )}
      
      <Link 
        to={isCompleted ? `/lessons/${nextLessonId}` : '#'} // Navega apenas se estiver completo
        className={`px-4 py-2 rounded-lg transition-colors ${
          isCompleted 
            ? 'bg-purple-600 hover:bg-purple-700 text-white' 
            : 'bg-gray-400 text-gray-600 cursor-not-allowed'
        }`}
        onClick={(e) => {
          if (!isCompleted) {
            e.preventDefault(); // Previne a navegação se não estiver completo
          }
        }}
      >
        {nextText} →
      </Link>
    </div>
  );
};

export default LessonNavigation;