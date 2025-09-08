// src/modules/lessons/data/quizzes/lesson4Quiz.ts
import type { QuizConfig } from '../../../../types';

export const lesson4Quiz: QuizConfig = {
  id: 'lesson4-object-pronouns-why',
  title: 'Quiz da Lição 4: Object Pronouns e Why Questions',
  description: 'Teste seus conhecimentos sobre pronomes objeto e perguntas com Why. Você precisa acertar pelo menos 70% (7 de 10) para avançar para a próxima lição.',
  passingScorePercentage: 70,
  questions: [
    // 1. Object Pronouns - Questão 1
    {
      id: 'q1',
      question: 'Complete: I know John. → I know ___',
      type: 'multiple-choice',
      options: [
        { text: 'he', value: 'a' },
        { text: 'him', value: 'b' },
        { text: 'his', value: 'c' },
        { text: 'her', value: 'd' }
      ],
      correctAnswer: 'b',
      points: 1,
      explanation: 'Usamos "him" como pronome objeto para "he". A estrutura é: sujeito + verbo + object pronoun.'
    },

    // 2. Object Pronouns - Questão 2
    {
      id: 'q2',
      question: 'Choose the correct answer: She talks to my friends. → She talks to ___',
      type: 'multiple-choice',
      options: [
        { text: 'they', value: 'a' },
        { text: 'them', value: 'b' },
        { text: 'their', value: 'c' },
        { text: 'us', value: 'd' }
      ],
      correctAnswer: 'b',
      points: 1,
      explanation: 'Usamos "them" como pronome objeto para "they". "My friends" = "them" quando recebem a ação.'
    },

    // 3. Why Questions - Questão 3
    {
      id: 'q3',
      question: 'What is the correct answer? Why does she study English?',
      type: 'multiple-choice',
      options: [
        { text: 'Because she needs it', value: 'a' },
        { text: 'Because she watch TV', value: 'b' },
        { text: 'Because she to study', value: 'c' },
        { text: 'Because he needs her', value: 'd' }
      ],
      correctAnswer: 'a',
      points: 1,
      explanation: 'A resposta correta usa "Because" + uma razão completa e gramaticalmente correta. "Because she needs it" está correto.'
    },

    // 4. Why Questions - Questão 4
    {
      id: 'q4',
      question: 'Why does he wake up early?',
      type: 'multiple-choice',
      options: [
        { text: 'Because he wants pizza', value: 'a' },
        { text: 'Because he works in the morning', value: 'b' },
        { text: 'Because she works in the hospital', value: 'c' },
        { text: 'Because they study English', value: 'd' }
      ],
      correctAnswer: 'b',
      points: 1,
      explanation: 'A resposta lógica e gramaticalmente correta é "Because he works in the morning" - uma razão válida para acordar cedo.'
    },

    // 5. Grammar - Questão 5
    {
      id: 'q5',
      question: 'Which sentence is correct?',
      type: 'multiple-choice',
      options: [
        { text: 'I want tea.', value: 'a' },
        { text: 'I wants tea.', value: 'b' },
        { text: 'She want pizza.', value: 'c' },
        { text: 'They wants pizza.', value: 'd' }
      ],
      correctAnswer: 'a',
      points: 1,
      explanation: 'Apenas "I want tea" está correto. "I" usa o verbo na forma base "want", sem -s.'
    },

    // 6. Object Pronouns - Questão 6
    {
      id: 'q6',
      question: 'Choose the right object pronoun: He helps ___ every day.',
      type: 'multiple-choice',
      options: [
        { text: 'they', value: 'a' },
        { text: 'them', value: 'b' },
        { text: 'their', value: 'c' },
        { text: 'us', value: 'd' }
      ],
      correctAnswer: 'b',
      points: 1,
      explanation: 'Usamos "them" como pronome objeto. A frase completa seria "He helps them every day."'
    },

    // 7. Reading Comprehension - Questão 7
    {
      id: 'q7',
      type: 'reading-comprehension',
      readingText: 'Maria wakes up early because she works in a hospital. She usually drives to work, but sometimes she takes the bus. At work, she talks to many people and helps them. After work, she comes back home and studies English. She prefers to watch TV before she sleeps. On weekends, she likes to dance with her friends.',
      question: 'Reading: Why does Maria wake up early?',
      options: [
        { text: 'Because she likes to watch TV', value: 'a' },
        { text: 'Because she works in a hospital', value: 'b' },
        { text: 'Because she studies English', value: 'c' },
        { text: 'Because she wants to dance', value: 'd' }
      ],
      correctAnswer: 'b',
      points: 1,
      explanation: 'O texto diz claramente: "Maria wakes up early because she works in a hospital."'
    },

    // 8. Reading Comprehension - Questão 8
    {
      id: 'q8',
      type: 'reading-comprehension',
      readingText: 'Maria wakes up early because she works in a hospital. She usually drives to work, but sometimes she takes the bus. At work, she talks to many people and helps them. After work, she comes back home and studies English. She prefers to watch TV before she sleeps. On weekends, she likes to dance with her friends.',
      question: 'Reading: What does Maria do after work?',
      options: [
        { text: 'She studies English', value: 'a' },
        { text: 'She sleeps immediately', value: 'b' },
        { text: 'She goes to the park', value: 'c' },
        { text: 'She dances at work', value: 'd' }
      ],
      correctAnswer: 'a',
      points: 1,
      explanation: 'O texto diz: "After work, she comes back home and studies English."'
    },

    // 9. Listening/Object Pronouns - Questão 9
    {
      id: 'q9',
      question: 'Complete: "We need ___ at school."',
      type: 'multiple-choice',
      options: [
        { text: 'she', value: 'a' },
        { text: 'her', value: 'b' },
        { text: 'hers', value: 'c' },
        { text: 'us', value: 'd' }
      ],
      correctAnswer: 'b',
      points: 1,
      explanation: 'Usamos "her" como pronome objeto para "she". A frase fica: "We need her at school."'
    },

    // 10. Reading Comprehension - Questão 10
    {
      id: 'q10',
      type: 'reading-comprehension',
      readingText: 'Maria wakes up early because she works in a hospital. She usually drives to work, but sometimes she takes the bus. At work, she talks to many people and helps them. After work, she comes back home and studies English. She prefers to watch TV before she sleeps. On weekends, she likes to dance with her friends.',
      question: 'Reading: What does Maria like to do on weekends?',
      options: [
        { text: 'Study English', value: 'a' },
        { text: 'Dance with her friends', value: 'b' },
        { text: 'Drive to work', value: 'c' },
        { text: 'Sleep early', value: 'd' }
      ],
      correctAnswer: 'b',
      points: 1,
      explanation: 'O texto termina dizendo: "On weekends, she likes to dance with her friends."'
    }
  ]
};