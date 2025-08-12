// src/modules/lessons/data/quizzes/lesson3Quiz.ts
import type { QuizConfig } from '../../../../types';

export const lesson3Quiz: QuizConfig = {
  id: 'lesson3-questions-do-does',
  title: 'Quiz da Lição 3: Perguntas no Presente Simples (DO/DOES)',
  description: 'Teste seus conhecimentos sobre formação de perguntas com DO/DOES, frases negativas e palavras interrogativas. Você precisa acertar pelo menos 70% para avançar.',
  passingScorePercentage: 70,
  questions: [
    // 1️⃣ Reading Comprehension (8 questões)s
    {
      id: 'q1',
      type: 'reading-comprehension',
      readingText: 'Lisa is from Brazil, but she lives in New York. She works downtown at a bank. She doesn\'t work on weekends. On Saturdays, she goes to the cinema with her friends. On Sundays, she stays at home and cooks dinner for her family.',
      question: 'Does Lisa live in Brazil?',
      options: [
        { text: 'Yes, she does.', value: 'a' },
        { text: 'No, she doesn\'t.', value: 'b' },
        { text: 'Yes, she is.', value: 'c' },
        { text: 'No, she isn\'t.', value: 'd' }
      ],
      correctAnswer: 'b',
      points: 1,
      explanation: 'Lisa is FROM Brazil, but she LIVES in New York. Portanto, ela não mora no Brasil.'
    },
    {
      id: 'q2',
      type: 'reading-comprehension',
      readingText: 'Lisa is from Brazil, but she lives in New York. She works downtown at a bank.',
      question: 'Where does Lisa work?',
      options: [
        { text: 'At a restaurant', value: 'a' },
        { text: 'At a bank downtown', value: 'b' },
        { text: 'At a school', value: 'c' },
        { text: 'At a hospital', value: 'd' }
      ],
      correctAnswer: 'b',
      points: 1,
      explanation: 'O texto diz claramente: "She works downtown at a bank."'
    },
    {
      id: 'q3',
      type: 'reading-comprehension',
      readingText: 'She doesn\'t work on weekends. On Saturdays, she goes to the cinema with her friends.',
      question: 'Does Lisa work on Saturdays?',
      options: [
        { text: 'Yes, she does.', value: 'a' },
        { text: 'No, she doesn\'t.', value: 'b' },
        { text: 'Sometimes', value: 'c' },
        { text: 'Only in the morning', value: 'd' }
      ],
      correctAnswer: 'b',
      points: 1,
      explanation: 'O texto diz "She doesn\'t work on weekends" e sábado faz parte do fim de semana.'
    },
    {
      id: 'q4',
      type: 'reading-comprehension',
      readingText: 'On Sundays, she stays at home and cooks dinner for her family.',
      question: 'What does Lisa do on Sundays?',
      options: [
        { text: 'She goes to the cinema', value: 'a' },
        { text: 'She works at the bank', value: 'b' },
        { text: 'She cooks dinner for her family', value: 'c' },
        { text: 'She goes to the park', value: 'd' }
      ],
      correctAnswer: 'c',
      points: 1,
      explanation: 'O texto diz: "On Sundays, she stays at home and cooks dinner for her family."'
    },
    {
      id: 'q5',
      type: 'reading-comprehension',
      readingText: 'Tom is from Canada. He lives in Toronto. He works at a restaurant near the park.',
      question: 'Where is Tom from?',
      options: [
        { text: 'Brazil', value: 'a' },
        { text: 'Canada', value: 'b' },
        { text: 'New York', value: 'c' },
        { text: 'Australia', value: 'd' }
      ],
      correctAnswer: 'b',
      points: 1,
      explanation: 'O texto começa dizendo: "Tom is from Canada."'
    },
    {
      id: 'q6',
      type: 'reading-comprehension',
      readingText: 'He starts work at 10 a.m. and finishes at 6 p.m.',
      question: 'What time does Tom start work?',
      options: [
        { text: 'At 6 p.m.', value: 'a' },
        { text: 'At 8 a.m.', value: 'b' },
        { text: 'At 10 a.m.', value: 'c' },
        { text: 'At 9 a.m.', value: 'd' }
      ],
      correctAnswer: 'c',
      points: 1,
      explanation: 'O texto diz: "He starts work at 10 a.m."'
    },
    {
      id: 'q7',
      type: 'reading-comprehension',
      readingText: 'On Fridays, he goes to the club.',
      question: 'What does Tom do on Fridays?',
      options: [
        { text: 'He plays soccer', value: 'a' },
        { text: 'He works at the restaurant', value: 'b' },
        { text: 'He goes to the club', value: 'c' },
        { text: 'He stays at home', value: 'd' }
      ],
      correctAnswer: 'c',
      points: 1,
      explanation: 'O texto diz: "On Fridays, he goes to the club."'
    },
    {
      id: 'q8',
      type: 'reading-comprehension',
      readingText: 'He works at a restaurant near the park.',
      question: 'Does Tom work at a bank?',
      options: [
        { text: 'Yes, he does.', value: 'a' },
        { text: 'No, he doesn\'t.', value: 'b' },
        { text: 'Sometimes', value: 'c' },
        { text: 'Only on weekends', value: 'd' }
      ],
      correctAnswer: 'b',
      points: 1,
      explanation: 'Tom trabalha em um restaurante, não em um banco: "He works at a restaurant near the park."'
    },

    // 2️⃣ Vocabulary (10 questões)
    {
      id: 'q9',
      question: 'I need to get money. I\'m going to the __________.',
      type: 'multiple-choice',
      options: [
        { text: 'bank', value: 'a' },
        { text: 'restaurant', value: 'b' },
        { text: 'cinema', value: 'c' },
        { text: 'school', value: 'd' }
      ],
      correctAnswer: 'a',
      points: 1,
      explanation: 'Para pegar dinheiro, você vai ao banco (bank).'
    },
    {
      id: 'q10',
      question: 'We want to see a movie. Let\'s go to the __________.',
      type: 'multiple-choice',
      options: [
        { text: 'park', value: 'a' },
        { text: 'cinema', value: 'b' },
        { text: 'library', value: 'c' },
        { text: 'stadium', value: 'd' }
      ],
      correctAnswer: 'b',
      points: 1,
      explanation: 'Para ver um filme, você vai ao cinema (cinema).'
    },
    {
      id: 'q11',
      question: 'Lisa is dancing with her friends at the __________.',
      type: 'multiple-choice',
      options: [
        { text: 'bank', value: 'a' },
        { text: 'school', value: 'b' },
        { text: 'club', value: 'c' },
        { text: 'library', value: 'd' }
      ],
      correctAnswer: 'c',
      points: 1,
      explanation: 'Para dançar com amigos, você vai ao clube (club).'
    },
    {
      id: 'q12',
      question: 'I\'m meeting my colleagues for lunch at a __________.',
      type: 'multiple-choice',
      options: [
        { text: 'stadium', value: 'a' },
        { text: 'restaurant', value: 'b' },
        { text: 'bank', value: 'c' },
        { text: 'cinema', value: 'd' }
      ],
      correctAnswer: 'b',
      points: 1,
      explanation: 'Para almoçar, você vai a um restaurante (restaurant).'
    },
    {
      id: 'q13',
      question: 'John\'s birthday __________ is on Saturday.',
      type: 'multiple-choice',
      options: [
        { text: 'party', value: 'a' },
        { text: 'school', value: 'b' },
        { text: 'work', value: 'c' },
        { text: 'bank', value: 'd' }
      ],
      correctAnswer: 'a',
      points: 1,
      explanation: 'Festa de aniversário = birthday party.'
    },
    {
      id: 'q14',
      question: 'Children study at __________.',
      type: 'multiple-choice',
      options: [
        { text: 'club', value: 'a' },
        { text: 'stadium', value: 'b' },
        { text: 'school', value: 'c' },
        { text: 'restaurant', value: 'd' }
      ],
      correctAnswer: 'c',
      points: 1,
      explanation: 'Crianças estudam na escola (school).'
    },
    {
      id: 'q15',
      question: 'Let\'s play soccer at the __________.',
      type: 'multiple-choice',
      options: [
        { text: 'library', value: 'a' },
        { text: 'cinema', value: 'b' },
        { text: 'restaurant', value: 'c' },
        { text: 'stadium', value: 'd' }
      ],
      correctAnswer: 'd',
      points: 1,
      explanation: 'Para jogar futebol, você vai ao estádio (stadium).'
    },
    {
      id: 'q16',
      question: 'I read books at the __________.',
      type: 'multiple-choice',
      options: [
        { text: 'library', value: 'a' },
        { text: 'club', value: 'b' },
        { text: 'stadium', value: 'c' },
        { text: 'restaurant', value: 'd' }
      ],
      correctAnswer: 'a',
      points: 1,
      explanation: 'Para ler livros, você vai à biblioteca (library).'
    },
    {
      id: 'q17',
      question: 'I\'m buying food at the __________.',
      type: 'multiple-choice',
      options: [
        { text: 'cinema', value: 'a' },
        { text: 'bank', value: 'b' },
        { text: 'supermarket', value: 'c' },
        { text: 'stadium', value: 'd' }
      ],
      correctAnswer: 'c',
      points: 1,
      explanation: 'Para comprar comida, você vai ao supermercado (supermarket).'
    },
    {
      id: 'q18',
      question: 'I usually walk in the __________ near my house.',
      type: 'multiple-choice',
      options: [
        { text: 'bank', value: 'a' },
        { text: 'park', value: 'b' },
        { text: 'cinema', value: 'c' },
        { text: 'restaurant', value: 'd' }
      ],
      correctAnswer: 'b',
      points: 1,
      explanation: 'Para caminhar, você vai ao parque (park).'
    },

    // 3️⃣ Grammar – Yes/No Questions (4 questões)
    {
      id: 'q19',
      question: '____ you work downtown?',
      type: 'multiple-choice',
      options: [
        { text: 'Does', value: 'a' },
        { text: 'Do', value: 'b' },
        { text: 'Are', value: 'c' }
      ],
      correctAnswer: 'b',
      points: 1,
      explanation: 'Use "Do" com "you". A estrutura é: Do + you + verbo base.'
    },
    {
      id: 'q20',
      question: '____ your brother study at the library?',
      type: 'multiple-choice',
      options: [
        { text: 'Do', value: 'a' },
        { text: 'Is', value: 'b' },
        { text: 'Does', value: 'c' }
      ],
      correctAnswer: 'c',
      points: 1,
      explanation: 'Use "Does" com "your brother" (he). A estrutura é: Does + he + verbo base.'
    },
    {
      id: 'q21',
      question: '____ they live in New York?',
      type: 'multiple-choice',
      options: [
        { text: 'Do', value: 'a' },
        { text: 'Does', value: 'b' },
        { text: 'Is', value: 'c' }
      ],
      correctAnswer: 'a',
      points: 1,
      explanation: 'Use "Do" com "they". A estrutura é: Do + they + verbo base.'
    },
    {
      id: 'q22',
      question: '____ she go to the cinema on Fridays?',
      type: 'multiple-choice',
      options: [
        { text: 'Does', value: 'a' },
        { text: 'Do', value: 'b' },
        { text: 'Is', value: 'c' }
      ],
      correctAnswer: 'a',
      points: 1,
      explanation: 'Use "Does" com "she". A estrutura é: Does + she + verbo base.'
    },

    // 4️⃣ Grammar – Negative Sentences (4 questões)
    {
      id: 'q23',
      question: 'I live in New York. → (forma negativa)',
      type: 'multiple-choice',
      options: [
        { text: 'I don\'t live in New York.', value: 'a' },
        { text: 'I doesn\'t live in New York.', value: 'b' },
        { text: 'I am not live in New York.', value: 'c' },
        { text: 'I not live in New York.', value: 'd' }
      ],
      correctAnswer: 'a',
      points: 1,
      explanation: 'Use "don\'t" com "I". A estrutura é: I + don\'t + verbo base.'
    },
    {
      id: 'q24',
      question: 'She works at the bank. → (forma negativa)',
      type: 'multiple-choice',
      options: [
        { text: 'She don\'t work at the bank.', value: 'a' },
        { text: 'She doesn\'t work at the bank.', value: 'b' },
        { text: 'She isn\'t work at the bank.', value: 'c' },
        { text: 'She not work at the bank.', value: 'd' }
      ],
      correctAnswer: 'b',
      points: 1,
      explanation: 'Use "doesn\'t" com "she". A estrutura é: She + doesn\'t + verbo base.'
    },
    {
      id: 'q25',
      question: 'They play soccer on Sundays. → (forma negativa)',
      type: 'multiple-choice',
      options: [
        { text: 'They doesn\'t play soccer on Sundays.', value: 'a' },
        { text: 'They don\'t play soccer on Sundays.', value: 'b' },
        { text: 'They aren\'t play soccer on Sundays.', value: 'c' },
        { text: 'They not play soccer on Sundays.', value: 'd' }
      ],
      correctAnswer: 'b',
      points: 1,
      explanation: 'Use "don\'t" com "they". A estrutura é: They + don\'t + verbo base.'
    },
    {
      id: 'q26',
      question: 'He studies in the afternoon. → (forma negativa)',
      type: 'multiple-choice',
      options: [
        { text: 'He don\'t study in the afternoon.', value: 'a' },
        { text: 'He doesn\'t study in the afternoon.', value: 'b' },
        { text: 'He isn\'t study in the afternoon.', value: 'c' },
        { text: 'He not study in the afternoon.', value: 'd' }
      ],
      correctAnswer: 'b',
      points: 1,
      explanation: 'Use "doesn\'t" com "he". A estrutura é: He + doesn\'t + verbo base.'
    },

    // 5️⃣ Grammar – Wh- Questions (6 questões)
    {
      id: 'q27',
      question: '________ do you usually have dinner? – At 8 p.m.',
      type: 'multiple-choice',
      options: [
        { text: 'What', value: 'a' },
        { text: 'Where', value: 'b' },
        { text: 'When', value: 'c' }
      ],
      correctAnswer: 'c',
      points: 1,
      explanation: 'Use "When" para perguntar sobre tempo/horário. A resposta "At 8 p.m." indica horário.'
    },
    {
      id: 'q28',
      question: '________ is the supermarket? – Next to the school.',
      type: 'multiple-choice',
      options: [
        { text: 'What', value: 'a' },
        { text: 'Where', value: 'b' },
        { text: 'When', value: 'c' }
      ],
      correctAnswer: 'b',
      points: 1,
      explanation: 'Use "Where" para perguntar sobre lugar/localização. A resposta "Next to the school" indica lugar.'
    },
    {
      id: 'q29',
      question: '________ do they go to school? – On weekdays.',
      type: 'multiple-choice',
      options: [
        { text: 'What', value: 'a' },
        { text: 'Where', value: 'b' },
        { text: 'When', value: 'c' }
      ],
      correctAnswer: 'c',
      points: 1,
      explanation: 'Use "When" para perguntar sobre tempo. A resposta "On weekdays" indica quando.'
    },
    {
      id: 'q30',
      question: '________ is in the box? – My keys.',
      type: 'multiple-choice',
      options: [
        { text: 'What', value: 'a' },
        { text: 'Where', value: 'b' },
        { text: 'When', value: 'c' }
      ],
      correctAnswer: 'a',
      points: 1,
      explanation: 'Use "What" para perguntar sobre coisas/objetos. A resposta "My keys" indica o que está na caixa.'
    },
    {
      id: 'q31',
      question: '________ does your brother play soccer? – On Saturdays.',
      type: 'multiple-choice',
      options: [
        { text: 'What', value: 'a' },
        { text: 'Where', value: 'b' },
        { text: 'When', value: 'c' }
      ],
      correctAnswer: 'c',
      points: 1,
      explanation: 'Use "When" para perguntar sobre tempo. A resposta "On Saturdays" indica quando.'
    },
    {
      id: 'q32',
      question: '________ is your English class? – In the morning.',
      type: 'multiple-choice',
      options: [
        { text: 'What', value: 'a' },
        { text: 'Where', value: 'b' },
        { text: 'When', value: 'c' }
      ],
      correctAnswer: 'c',
      points: 1,
      explanation: 'Use "When" para perguntar sobre tempo. A resposta "In the morning" indica quando.'
    }
  ]
};