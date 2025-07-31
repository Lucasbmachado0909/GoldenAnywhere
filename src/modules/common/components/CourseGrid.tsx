// src/modules/common/components/CourseGrid.tsx
import React from 'react';

interface Course {
  id: string;
  title: string;
  description: string;
  level: string;
  duration?: string; // 🔧 MUDANÇA: Tornar duration opcional
  image?: string;
}

interface CourseGridProps {
  courses: Course[];
  columns: number;
}

const CourseGrid: React.FC<CourseGridProps> = ({ courses, columns }) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid ${gridCols[columns as keyof typeof gridCols]} gap-6`}>
      {courses.map((course) => (
        <div key={course.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
          <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
          <p className="text-gray-600 mb-4">{course.description}</p>
          <div className="flex justify-between items-center mb-4">
            <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">
              {course.level}
            </span>
            {/* 🔧 MUDANÇA: Mostrar duration apenas se existir */}
            {course.duration && (
              <span className="text-gray-500 text-sm">{course.duration}</span>
            )}
          </div>
          <a 
            href={`/app/lessons/${course.id}`}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors text-center inline-block"
          >
            Começar Lição
          </a>
        </div>
      ))}
    </div>
  );
};

export default CourseGrid;