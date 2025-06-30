// src/modules/lessons/components/LessonNavigation.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import type { LessonNavigationProps } from '../types';

const LessonNavigation: React.FC<LessonNavigationProps> = ({ 
  prevLessonId, 
  nextLessonId, 
  prevText, 
  nextText 
}) => {
  return (
    <div className="flex justify-between mt-10 pt-6 border-t border-gray-200">
      <Link 
        to={`/lessons/${prevLessonId}`} 
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors"
      >
        ← {prevText}
      </Link>
      <Link 
        to={`/lessons/${nextLessonId}`} 
        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
      >
        {nextText} →
      </Link>
    </div>
  );
};

export default LessonNavigation;