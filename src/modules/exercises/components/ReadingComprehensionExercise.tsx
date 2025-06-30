// src/modules/exercises/components/ReadingComprehensionExercise.tsx
import React from 'react';
import ReadingComprehensionSection from '../../lessons/components/ReadingComprehensionSection';
import type { ReadingComprehensionQuestion } from '../../../types';

interface ReadingComprehensionExerciseProps {
  title?: string;
  instruction?: string;
  text: string;
  questions: ReadingComprehensionQuestion[];
}

const ReadingComprehensionExercise: React.FC<ReadingComprehensionExerciseProps> = ({
  title = "Compreensão de Texto",
  instruction = "Leia o texto abaixo e responda às perguntas:",
  text,
  questions
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <ReadingComprehensionSection
        title={title}
        instruction={instruction}
        text={text}
        questions={questions}
      />
    </div>
  );
};

export default ReadingComprehensionExercise;