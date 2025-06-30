// src/modules/lessons/components/LessonHeader.tsx
import React from 'react';

interface LessonHeaderProps {
  title: string;
}

const LessonHeader: React.FC<LessonHeaderProps> = ({ title }) => {
  return (
    <header className="mb-8"> {/* Este é apenas um cabeçalho de seção, não um navbar global */}
      <h1 className="text-4xl font-bold text-purple-800">{title}</h1>
    </header>
  );
};

export default LessonHeader;