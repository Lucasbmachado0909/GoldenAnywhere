// src/modules/lessons/components/ProgressBar.tsx
import React from 'react';
import type { ProgressBarProps } from '../types';

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, total }) => {
  const percentage = Math.min(100, Math.round((progress / total) * 100));
  
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div 
        className="bg-purple-600 h-2.5 rounded-full" 
        style={{ width: `${percentage}%` }}
      ></div>
      <div className="text-right mt-1 text-sm text-gray-600">
        {progress} de {total} completados ({percentage}%)
      </div>
    </div>
  );
};