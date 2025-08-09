// src/modules/lessons/data/quizzes/lesson2Quiz.ts
// src/modules/lessons/data/quizzes/lesson2Quiz.ts
import type { QuizConfig } from '../../../../types';

export const lesson2Quiz: QuizConfig = {
  id: 'lesson2-nouns-articles',
  title: 'Quiz Final da Lição 2: Substantivos e Artigos',
  description: 'Teste seus conhecimentos sobre substantivos (singular/plural) e o uso correto dos artigos (a, an, the). Você precisa acertar pelo menos 70% das perguntas para passar para a próxima lição.',
  passingScorePercentage: 70,
  questions: [
    // Parte 1: Artigos (a/an/the)
    {
      id: 'q1',
      question: 'Choose the correct article: I have (___) apple.',
      type: 'multiple-choice',
      options: [{ text: 'a', value: 'a' }, { text: 'an', value: 'an' }, { text: 'the', value: 'the' }],
      correctAnswer: 'an',
      points: 1,
      explanation: 'Use "an" before words that start with a vowel sound (a, e, i, o, u).'
    },
    {
      id: 'q2',
      question: 'Choose the correct article: She is (___) doctor.',
      type: 'multiple-choice',
      options: [{ text: 'a', value: 'a' }, { text: 'an', value: 'an' }, { text: 'the', value: 'the' }],
      correctAnswer: 'a',
      points: 1,
      explanation: 'Use "a" before words that start with a consonant sound.'
    },
    {
      id: 'q3',
      question: 'Choose the correct article: (___) sun is hot today.',
      type: 'multiple-choice',
      options: [{ text: 'a', value: 'a' }, { text: 'an', value: 'an' }, { text: 'the', value: 'the' }],
      correctAnswer: 'the',
      points: 1,
      explanation: 'Use "the" for unique things, like the sun.'
    },
    {
      id: 'q4',
      question: 'Choose the correct article: He wants (___) new car.',
      type: 'multiple-choice',
      options: [{ text: 'a', value: 'a' }, { text: 'an', value: 'an' }, { text: 'the', value: 'the' }],
      correctAnswer: 'a',
      points: 1,
      explanation: 'Use "a" before words that start with a consonant sound.'
    },
    {
      id: 'q5',
      question: 'Choose the correct article: This is (___) amazing story.',
      type: 'multiple-choice',
      options: [{ text: 'a', value: 'a' }, { text: 'an', value: 'an' }, { text: 'the', value: 'the' }],
      correctAnswer: 'an',
      points: 1,
      explanation: 'Use "an" before words that start with a vowel sound.'
    },
    // Parte 2: Singular e Plural de Substantivos
    {
      id: 'q6',
      question: 'What is the plural of "cat"?',
      type: 'multiple-choice',
      options: [{ text: 'cats', value: 'cats' }, { text: 'cates', value: 'cates' }, { text: 'caties', value: 'caties' }],
      correctAnswer: 'cats',
      points: 1,
      explanation: 'Most nouns form the plural by adding -s.'
    },
    {
      id: 'q7',
      question: 'What is the plural of "child"?',
      type: 'multiple-choice',
      options: [{ text: 'childs', value: 'childs' }, { text: 'children', value: 'children' }, { text: 'childes', value: 'childes' }],
      correctAnswer: 'children',
      points: 1,
      explanation: '"Child" is an irregular noun; its plural is "children".'
    },
    {
      id: 'q8',
      question: 'What is the plural of "box"?',
      type: 'multiple-choice',
      options: [{ text: 'boxs', value: 'boxs' }, { text: 'boxes', value: 'boxes' }, { text: 'boxies', value: 'boxies' }],
      correctAnswer: 'boxes',
      points: 1,
      explanation: 'Nouns ending in -x, -ch, -s, -sh, -z add -es to form the plural.'
    },
    {
      id: 'q9',
      question: 'What is the plural of "man"?',
      type: 'multiple-choice',
      options: [{ text: 'mans', value: 'mans' }, { text: 'men', value: 'men' }, { text: 'manes', value: 'manes' }],
      correctAnswer: 'men',
      points: 1,
      explanation: '"Man" is an irregular noun; its plural is "men".'
    },
    {
      id: 'q10',
      question: 'What is the plural of "city"?',
      type: 'multiple-choice',
      options: [{ text: 'citys', value: 'citys' }, { text: 'cities', value: 'cities' }, { text: 'cityes', value: 'cityes' }],
      correctAnswer: 'cities',
      points: 1,
      explanation: 'Nouns ending in a consonant + y, change y to i and add -es.'
    },
    // Parte 3: Compreensão de Leitura com Substantivos e Artigos
    {
      id: 'rc1',
      question: 'How many cats does Sarah have?',
      type: 'reading-comprehension',
      readingText: 'Sarah has a dog and two cats. The dog is big, but the cats are small. She loves her animals very much. Every day, she gives them food and water.',
      options: [{ text: 'One', value: 'One' }, { text: 'Two', value: 'Two' }, { text: 'Three', value: 'Three' }],
      correctAnswer: 'Two',
      points: 1,
      explanation: 'The text states: "Sarah has a dog and two cats."'
    },
    {
      id: 'rc2',
      question: 'Is the dog big or small?',
      type: 'reading-comprehension',
      readingText: 'Sarah has a dog and two cats. The dog is big, but the cats are small. She loves her animals very much. Every day, she gives them food and water.',
      options: [{ text: 'Big', value: 'Big' }, { text: 'Small', value: 'Small' }],
      correctAnswer: 'Big',
      points: 1,
      explanation: 'The text states: "The dog is big."'
    },
    {
      id: 'rc3',
      question: 'What does Sarah give her animals every day?',
      type: 'reading-comprehension',
      readingText: 'Sarah has a dog and two cats. The dog is big, but the cats are small. She loves her animals very much. Every day, she gives them food and water.',
      options: [{ text: 'Toys', value: 'Toys' }, { text: 'Food and water', value: 'Food and water' }, { text: 'Beds', value: 'Beds' }],
      correctAnswer: 'Food and water',
      points: 1,
      explanation: 'The text states: "Every day, she gives them food and water."'
    },
    {
      id: 'rc4',
      question: 'Which article is used for "dog" when it\'s first mentioned?',
      type: 'reading-comprehension',
      readingText: 'Sarah has a dog and two cats. The dog is big, but the cats are small. She loves her animals very much. Every day, she gives them food and water.',
      options: [{ text: 'a', value: 'a' }, { text: 'an', value: 'an' }, { text: 'the', value: 'the' }],
      correctAnswer: 'a',
      points: 1,
      explanation: '"Sarah has a dog" uses the indefinite article "a" because it\'s the first mention of a non-specific dog.'
    },
    {
      id: 'rc5',
      question: 'Which article is used for "cats" when they are mentioned again?',
      type: 'reading-comprehension',
      readingText: 'Sarah has a dog and two cats. The dog is big, but the cats are small. She loves her animals very much. Every day, she gives them food and water.',
      options: [{ text: 'a', value: 'a' }, { text: 'an', value: 'an' }, { text: 'the', value: 'the' }],
      correctAnswer: 'the',
      points: 1,
      explanation: '"The cats are small" uses the definite article "the" because the cats have already been introduced and are now specific.'
    },
  ],
};