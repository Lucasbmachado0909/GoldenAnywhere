// src/modules/lessons/data/quizzes/lesson2Quiz.ts
import type { QuizConfig } from '../../../../types';

export const lesson2Quiz: QuizConfig = {
  id: 'lesson2-verbs-prepositions',
  title: 'Quiz da Lição 2: Verbos e Preposições Essenciais',
  description: 'Teste seu conhecimento sobre o uso correto de verbos no presente simples e preposições de lugar comuns. Você precisa acertar pelo menos 70% para avançar.',
  passingScorePercentage: 70,
  questions: [
    {
      id: 'q1',
      question: 'Qual frase está gramaticalmente correta?',
      type: 'multiple-choice',
      options: [
        { text: 'I go to home now.', value: 'a' },
        { text: 'I go home now.', value: 'b' }
      ],
      correctAnswer: 'b',
      points: 1,
      explanation: "A expressão 'go home' é uma exceção e não utiliza a preposição 'to'. 'Home' aqui funciona como um advérbio de direção."
    },
    {
      id: 'q2',
      question: 'Complete a frase: We go ___ supermarket on Saturday.',
      type: 'multiple-choice',
      options: [
        { text: 'to', value: 'a' },
        { text: 'to the', value: 'b' },
        { text: 'at the', value: 'c' }
      ],
      correctAnswer: 'b',
      points: 1,
      explanation: "Usamos 'to the' para indicar movimento em direção a um lugar físico e específico como 'supermarket'."
    },
    {
      id: 'q3',
      question: 'Escolha a opção correta para completar a frase: He ___ football on weekends.',
      type: 'multiple-choice',
      options: [
        { text: 'play', value: 'a' },
        { text: 'plays', value: 'b' },
        { text: 'playing', value: 'c' }
      ],
      correctAnswer: 'b',
      points: 1,
      explanation: " He/She/It no Presente Simples: acrescenta “-s” ao verbo. “He plays football.”"
    },
    {
      id: 'q4',
      question: 'Escolha a opção correta para completar a frase: She ___ at 8 a.m.',
      type: 'multiple-choice',
      options: [
        { text: 'goes to work', value: 'a' },
        { text: 'go to work', value: 'b' },
        { text: 'goes to the work', value: 'c' }
      ],
      correctAnswer: 'a',
      points: 1,
      explanation: "A forma correta é 'goes' para a 3ª pessoa (She). A expressão 'go to work' (ir para o trabalho como uma atividade/função) não usa o artigo 'the'."
    },
    {
      id: 'q5',
      question: 'Qual comando está correto?',
      type: 'multiple-choice',
      options: [
        { text: 'Come to here.', value: 'a' },
        { text: 'Go to there.', value: 'b' },
        { text: 'Come here.', value: 'c' }
      ],
      correctAnswer: 'c',
      points: 1,
      explanation: "As palavras 'here' e 'there' já indicam direção, por isso não usamos a preposição 'to' com elas. As formas corretas são 'Come here' e 'Go there'."
    },
    {
      id: 'q6',
      question: 'Complete a frase: She ___ chicken for dinner.',
      type: 'multiple-choice',
      options: [
        { text: 'eat', value: 'a' },
        { text: 'eats', value: 'b' },
        { text: 'eating', value: 'c' }
      ],
      correctAnswer: 'b',
      points: 1,
      explanation: "Para a 3ª pessoa do singular (He, She, It) no Presente Simples, adicionamos '-s' ao final do verbo. Portanto, 'eat' se torna 'eats'."
    },
    {
      id: 'q7',
      question: 'Complete a frase: They go ___ on weekends.',
      type: 'multiple-choice',
      options: [
        { text: 'to park', value: 'a' },
        { text: 'at the park', value: 'b' },
        { text: 'to the park', value: 'c' }
      ],
      correctAnswer: 'c',
      points: 1,
      explanation: "'Park' (parque) é um lugar físico específico. Usamos 'to the' para indicar movimento em direção a ele."
    },
    {
      id: 'q8',
      type: 'reading-comprehension',
      readingText: 'My name is Alex. I wake up at 7 a.m. every day. I drink coffee in the morning and I eat bread with cheese. I go to work by bus. I work in an office.',
      question: 'De acordo com o texto, o que Alex bebe pela manhã?',
      options: [
        { text: 'Tea', value: 'a' },
        { text: 'Coffee', value: 'b' },
        { text: 'Milk', value: 'c' }
      ],
      correctAnswer: 'b',
      points: 1,
      explanation: "O texto afirma claramente: 'I drink coffee in the morning...'"
    }
  ]
};