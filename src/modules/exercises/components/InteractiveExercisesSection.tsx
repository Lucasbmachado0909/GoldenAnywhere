// src/modules/exercises/components/InteractiveExercisesSection.tsx
import { useState } from 'react';
import InteractiveExercises from './InteractiveExercises';
import type { ListeningMultipleChoiceQuestion } from '../../../types/index'; // Corrigido

interface InteractiveExercisesSectionProps {
  title: string;
  description: string;
  listeningQuestions?: ListeningMultipleChoiceQuestion[];
}

const InteractiveExercisesSection = ({ 
  title, 
  description, 
  listeningQuestions 
}: InteractiveExercisesSectionProps) => {
  const [showExercises, setShowExercises] = useState(false);

  const toggleExercises = () => {
    setShowExercises(!showExercises);
    if (!showExercises) {
      // Se estamos abrindo os exercícios, role até eles
      setTimeout(() => {
        const exercisesElement = document.getElementById('interactive-exercises');
        if (exercisesElement) {
          window.scrollTo({
            top: exercisesElement.offsetTop - 50,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  return (
    <section className="mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-3">
        {title}
      </h2>
      <div className="text-center">
        <p className="text-lg text-gray-700 mb-6">
          {description}
        </p>
        <button
          onClick={toggleExercises}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors"
        >
          {showExercises ? 'Ocultar Exercícios' : 'Mostrar Exercícios Interativos'}
        </button>
      </div>

      {showExercises && (
        <div id="interactive-exercises" className="mt-8">
          <InteractiveExercises listeningQuestions={listeningQuestions} />
        </div>
      )}
    </section>
  );
};

export default InteractiveExercisesSection;