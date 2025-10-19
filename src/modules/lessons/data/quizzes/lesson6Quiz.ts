// src/modules/lessons/data/quizzes/lesson6Quiz.ts
import type { QuizQuestion, QuizConfig } from '../../../../types';

export const lesson6Quiz: QuizQuestion[] = [
  {
    id: '1',
    type: 'multiple-choice',
    question: 'She ______ drinks coffee in the morning.',
    options: [
      { text: 'never', value: 'never' },
      { text: 'always', value: 'always' },
      { text: 'sometimes', value: 'sometimes' },
      { text: 'usually', value: 'usually' }
    ],
    correctAnswer: 'always',
    explanation: 'Para uma ação que acontece todos os dias, usamos "always" (100%).',
    points: 10
  },
  {
    id: '2',
    type: 'multiple-choice',
    question: 'Cristiano Ronaldo ______ goes to bed late.',
    options: [
      { text: 'always', value: 'always' },
      { text: 'sometimes', value: 'sometimes' },
      { text: 'never', value: 'never' },
      { text: 'usually', value: 'usually' }
    ],
    correctAnswer: 'never',
    explanation: 'No texto: "he never goes to bed late" (ele nunca vai dormir tarde).',
    points: 10
  },
  {
    id: '3',
    type: 'multiple-choice',
    question: 'I ______ take the bus to school.',
    options: [
      { text: 'never', value: 'never' },
      { text: 'sometimes', value: 'sometimes' },
      { text: 'usually', value: 'usually' },
      { text: 'always', value: 'always' }
    ],
    correctAnswer: 'usually',
    explanation: 'Para uma ação que acontece geralmente (cerca de 80%), usamos "usually".',
    points: 10
  },
  {
    id: '4',
    type: 'multiple-choice',
    question: 'Complete: I ______ study English in the evening. (todos os dias)',
    options: [
      { text: 'never', value: 'never' },
      { text: 'sometimes', value: 'sometimes' },
      { text: 'usually', value: 'usually' },
      { text: 'always', value: 'always' }
    ],
    correctAnswer: 'always',
    explanation: 'Para "todos os dias", usamos "always" (100% de frequência).',
    points: 10
  },
  {
    id: '5',
    type: 'multiple-choice',
    question: 'Complete: They ______ eat pizza on Monday. (às vezes)',
    options: [
      { text: 'always', value: 'always' },
      { text: 'usually', value: 'usually' },
      { text: 'sometimes', value: 'sometimes' },
      { text: 'never', value: 'never' }
    ],
    correctAnswer: 'sometimes',
    explanation: 'Para "às vezes", usamos "sometimes" (cerca de 50% de frequência).',
    points: 10
  },
  {
    id: '6',
    type: 'multiple-choice',
    question: 'Complete: He is ______ late for work. (nunca)',
    options: [
      { text: 'always', value: 'always' },
      { text: 'usually', value: 'usually' },
      { text: 'sometimes', value: 'sometimes' },
      { text: 'never', value: 'never' }
    ],
    correctAnswer: 'never',
    explanation: 'Para "nunca", usamos "never" (0% de frequência). Note que vem depois do verbo "to be".',
    points: 10
  },
  {
    id: '7',
    type: 'multiple-choice',
    question: 'Complete: She ______ listens to music after lunch. (geralmente)',
    options: [
      { text: 'always', value: 'always' },
      { text: 'usually', value: 'usually' },
      { text: 'sometimes', value: 'sometimes' },
      { text: 'never', value: 'never' }
    ],
    correctAnswer: 'usually',
    explanation: 'Para "geralmente", usamos "usually" (cerca de 80% de frequência).',
    points: 10
  },
  {
    id: '8',
    type: 'multiple-choice',
    question: 'Cristiano Ronaldo always wakes up late. (True or False)',
    options: [
      { text: 'True', value: 'True' },
      { text: 'False', value: 'False' }
    ],
    correctAnswer: 'False',
    explanation: 'Falso. O texto diz que ele "always wakes up early" (sempre acorda cedo).',
    points: 10
  },
  {
    id: '9',
    type: 'multiple-choice',
    question: 'He usually trains twice a day. (True or False)',
    options: [
      { text: 'True', value: 'True' },
      { text: 'False', value: 'False' }
    ],
    correctAnswer: 'True',
    explanation: 'Verdadeiro. O texto confirma: "He usually trains twice a day".',
    points: 10
  },
  {
    id: '10',
    type: 'multiple-choice',
    question: 'Where do adverbs of frequency go with normal verbs?',
    options: [
      { text: 'After the verb', value: 'After the verb' },
      { text: 'Before the verb', value: 'Before the verb' },
      { text: 'At the end', value: 'At the end' },
      { text: 'At the beginning', value: 'At the beginning' }
    ],
    correctAnswer: 'Before the verb',
    explanation: 'Com verbos normais, os advérbios de frequência vêm ANTES do verbo principal.',
    points: 10
  }
];

// Configuração do quiz
export const lesson6QuizConfig: QuizConfig = {
  id: 'lesson6-quiz',
  title: 'Quiz Final - Lição 6: Daily Routine & Adverbs of Frequency',
  description: 'Teste seus conhecimentos sobre rotina diária e advérbios de frequência',
  questions: lesson6Quiz,
  passingScorePercentage: 70
};