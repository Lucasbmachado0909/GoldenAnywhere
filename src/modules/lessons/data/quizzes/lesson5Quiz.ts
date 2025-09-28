// src/modules/lessons/data/quizzes/lesson5Quiz.ts
import type { QuizQuestion, QuizConfig } from '../../../../types';

export const lesson5Quiz: QuizQuestion[] = [
  {
    id: '1',
    type: 'multiple-choice',
    question: 'Complete: My ______ takes the bus.',
    options: [
      { text: 'father', value: 'father' },
      { text: 'mother', value: 'mother' },
      { text: 'brother', value: 'brother' },
      { text: 'friend', value: 'friend' }
    ],
    correctAnswer: 'mother',
    explanation: 'A frase completa é "My mother takes the bus" (Minha mãe pega o ônibus).',
    points: 10
  },
  {
    id: '2',
    type: 'multiple-choice',
    question: 'Complete: She studies English with ___ sister.',
    options: [
      { text: 'his', value: 'his' },
      { text: 'her', value: 'her' },
      { text: 'our', value: 'our' },
      { text: 'their', value: 'their' }
    ],
    correctAnswer: 'her',
    explanation: 'Para "she" (ela), usamos "her" como possessive adjective.',
    points: 10
  },
  {
    id: '3',
    type: 'multiple-choice',
    question: 'Who drives the father to work?',
    options: [
      { text: 'My mother', value: 'My mother' },
      { text: 'My brother', value: 'My brother' },
      { text: 'I', value: 'I' },
      { text: 'My sister', value: 'My sister' }
    ],
    correctAnswer: 'I',
    explanation: 'No texto: "I drive my father to work" (Eu levo meu pai para o trabalho).',
    points: 10
  },
  {
    id: '4',
    type: 'multiple-choice',
    question: 'Choose the correct option: We watch TV with ___ family.',
    options: [
      { text: 'her', value: 'her' },
      { text: 'his', value: 'his' },
      { text: 'our', value: 'our' },
      { text: 'my', value: 'my' }
    ],
    correctAnswer: 'our',
    explanation: 'Para "we" (nós), usamos "our" como possessive adjective.',
    points: 10
  },
  {
    id: '5',
    type: 'multiple-choice',
    question: 'Complete: Her brother studies English at ____.',
    options: [
      { text: 'night', value: 'night' },
      { text: 'afternoon', value: 'afternoon' },
      { text: 'Saturday', value: 'Saturday' },
      { text: 'morning', value: 'morning' }
    ],
    correctAnswer: 'night',
    explanation: 'No texto sobre Maria: "Her brother studies English at night".',
    points: 10
  },
  {
    id: '6',
    type: 'multiple-choice',
    question: 'Does your father drive to work? Qual é a resposta correta?',
    options: [
      { text: 'Yes, he do.', value: 'Yes, he do.' },
      { text: 'Yes, he does.', value: 'Yes, he does.' },
      { text: 'Yes, she does.', value: 'Yes, she does.' },
      { text: 'Yes, they do.', value: 'Yes, they do.' }
    ],
    correctAnswer: 'Yes, he does.',
    explanation: 'Para perguntas com "Does", respondemos "Yes, he/she/it does" ou "No, he/she/it doesn\'t".',
    points: 10
  },
  {
    id: '7',
    type: 'multiple-choice',
    question: 'Choose the correct translation: sister →',
    options: [
      { text: 'pai', value: 'pai' },
      { text: 'irmão', value: 'irmão' },
      { text: 'irmã', value: 'irmã' },
      { text: 'amigo', value: 'amigo' }
    ],
    correctAnswer: 'irmã',
    explanation: 'Sister = irmã (female sibling).',
    points: 10
  },
  {
    id: '8',
    type: 'multiple-choice',
    question: 'Complete: They dance with ___ friends.',
    options: [
      { text: 'our', value: 'our' },
      { text: 'her', value: 'her' },
      { text: 'their', value: 'their' },
      { text: 'my', value: 'my' }
    ],
    correctAnswer: 'their',
    explanation: 'Para "they" (eles/elas), usamos "their" como possessive adjective.',
    points: 10
  },
  {
    id: '9',
    type: 'multiple-choice',
    question: 'When do Maria and her sister watch TV?',
    options: [
      { text: 'At night', value: 'At night' },
      { text: 'In the afternoon', value: 'In the afternoon' },
      { text: 'On Saturday', value: 'On Saturday' },
      { text: 'In the morning', value: 'In the morning' }
    ],
    correctAnswer: 'In the afternoon',
    explanation: 'No texto: "Maria and her sister watch TV in the afternoon".',
    points: 10
  },
  {
    id: '10',
    type: 'multiple-choice',
    question: 'Complete: I talk to ___ brother every day.',
    options: [
      { text: 'his', value: 'his' },
      { text: 'my', value: 'my' },
      { text: 'her', value: 'her' },
      { text: 'their', value: 'their' }
    ],
    correctAnswer: 'my',
    explanation: 'Para "I" (eu), usamos "my" como possessive adjective.',
    points: 10
  }
];

// Configuração do quiz
export const lesson5QuizConfig: QuizConfig = {
  id: 'lesson5-quiz',
  title: 'Quiz Final - Lição 5: Family & Possessives',
  description: 'Teste seus conhecimentos sobre família e possessive adjectives',
  questions: lesson5Quiz,
  passingScorePercentage: 70
};