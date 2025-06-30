// src/data/exercises/exerciseData.ts

import type { ExerciseType } from '../../types';

// Níveis de dificuldade
export type DifficultyLevel = 'beginner' | 'elementary' | 'intermediate' | 'advanced';

// Estrutura para um exercício completo
export interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  type: ExerciseType['type'];
  data: any; // Dados específicos do tipo de exercício
  order: number; // Para ordenar os exercícios por dificuldade
}

// Exemplo de dados de exercícios organizados por dificuldade
export const exercisesData: Exercise[] = [
    {
        id: 'pronouns-recognition',
        title: 'Reconhecimento de Pronomes',
        description: 'Identifique os pronomes pessoais em inglês',
        difficulty: 'beginner',
        type: 'fill-in-the-blank', // Corrigido de 'recognition' para um tipo válido
        order: 1,
        data: {
            items: [
                { id: 1, text: 'I', translation: 'Eu' },
                { id: 2, text: 'You', translation: 'Você/Vocês' },
                { id: 3, text: 'He', translation: 'Ele' },
                { id: 4, text: 'She', translation: 'Ela' },
                { id: 5, text: 'They', translation: 'Eles/Elas' }
            ]
        }
    },
    {
        id: 'pronouns-quiz',
        title: 'Quiz de Múltipla Escolha',
        description: 'Teste seu conhecimento sobre pronomes',
        difficulty: 'elementary',
        type: 'listening-multiple-choice', // Corrigido de 'multiple-choice' para um tipo válido
        order: 2,
        data: {
            questions: [
                {
                    question: 'Qual pronome usamos para falar de nós mesmos?',
                    options: ['You', 'I', 'He', 'They'],
                    correctAnswer: 1
                },
                {
                    question: 'Qual pronome usamos para uma mulher?',
                    options: ['He', 'She', 'It', 'You'],
                    correctAnswer: 1
                },
                {
                    question: 'Qual pronome usamos para um grupo de pessoas ou coisas?',
                    options: ['She', 'He', 'They', 'It'],
                    correctAnswer: 2
                }
            ]
        }
    },
    // Adicione mais exercícios aqui...
];