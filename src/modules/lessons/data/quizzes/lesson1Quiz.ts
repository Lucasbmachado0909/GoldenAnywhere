// src/modules/lessons/data/quizzes/lesson1Quiz.ts
import type { QuizConfig } from '../../../../types';

export const lesson1Quiz: QuizConfig = { // 🔄 ADICIONAR 'export' aqui
  id: 'lesson1-pronouns-verbs',
  title: 'Quiz Final da Lição 1: Pronomes e Verbos',
  description: 'Teste seus conhecimentos sobre pronomes sujeito, verbos de ação e estrutura de frases afirmativas. Você precisa acertar pelo menos 70% das perguntas para passar para a próxima lição.',
  passingScorePercentage: 70,
  questions: [
    // Parte 1 – Complete as frases com o pronome correto
    {
      id: 'q1',
      question: '(___) play the guitar.',
      type: 'multiple-choice',
      options: [{ text: 'He', value: 'He' }, { text: 'I', value: 'I' }, { text: 'She', value: 'She' }],
      correctAnswer: 'I',
      points: 1,
      explanation: 'O pronome "I" (Eu) é usado com o verbo "play" na forma base para a primeira pessoa do singular.'
    },
    {
      id: 'q2',
      question: '(___) studies every day.',
      type: 'multiple-choice',
      options: [{ text: 'They', value: 'They' }, { text: 'I', value: 'I' }, { text: 'He', value: 'He' }],
      correctAnswer: 'He',
      points: 1,
      explanation: 'O verbo "studies" está na terceira pessoa do singular (termina em -es), então o pronome correto é "He" (Ele).'
    },
    {
      id: 'q3',
      question: '(___) go to the gym on Saturdays.',
      type: 'multiple-choice',
      options: [{ text: 'We', value: 'We' }, { text: 'He', value: 'He' }, { text: 'It', value: 'It' }],
      correctAnswer: 'We',
      points: 1,
      explanation: 'O verbo "go" está na forma base, que é usada com "We" (Nós), "You" (Você/Vocês) e "They" (Eles/Elas).'
    },
    {
      id: 'q4',
      question: '(___) drinks water.',
      type: 'multiple-choice',
      options: [{ text: 'They', value: 'They' }, { text: 'I', value: 'I' }, { text: 'She', value: 'She' }],
      correctAnswer: 'She',
      points: 1,
      explanation: 'O verbo "drinks" está na terceira pessoa do singular (termina em -s), então o pronome correto é "She" (Ela).'
    },
    {
      id: 'q5',
      question: '(___) work in a hospital.',
      type: 'multiple-choice',
      options: [{ text: 'They', value: 'They' }, { text: 'It', value: 'It' }, { text: 'She', value: 'She' }],
      correctAnswer: 'They',
      points: 1,
      explanation: 'O verbo "work" está na forma base, que é usada com "They" (Eles/Elas).'
    },
    // Parte 2 – Escolha o verbo correto para completar a frase
    {
      id: 'q6',
      question: 'I (___) music.',
      type: 'multiple-choice',
      options: [{ text: 'eat', value: 'eat' }, { text: 'like', value: 'like' }, { text: 'go', value: 'go' }],
      correctAnswer: 'like',
      points: 1,
      explanation: 'O verbo "like" (gostar) é o mais adequado para a frase "Eu gosto de música".'
    },
    {
      id: 'q7',
      question: 'He (___) a sandwich.',
      type: 'multiple-choice',
      options: [{ text: 'play', value: 'play' }, { text: 'eat', value: 'eat' }, { text: 'go', value: 'go' }],
      correctAnswer: 'eat',
      points: 1,
      explanation: 'O verbo "eat" (comer) é o mais adequado para a frase "Ele come um sanduíche".'
    },
    {
      id: 'q8',
      question: 'They (___) English at school.',
      type: 'multiple-choice',
      options: [{ text: 'drink', value: 'drink' }, { text: 'study', value: 'study' }, { text: 'work', value: 'work' }],
      correctAnswer: 'study',
      points: 1,
      explanation: 'O verbo "study" (estudar) é o mais adequado para a frase "Eles estudam inglês na escola".'
    },
    // Parte 3 – Identifique a frase correta
    {
      id: 'q9',
      question: 'Qual destas frases está gramaticalmente correta?',
      type: 'multiple-choice',
      options: [{ text: 'She play soccer.', value: 'She play soccer.' }, { text: 'I eats breakfast.', value: 'I eats breakfast.' }, { text: 'They like pizza.', value: 'They like pizza.' }],
      correctAnswer: 'They like pizza.',
      points: 1,
      explanation: 'Para "She", o verbo deveria ser "plays". Para "I", o verbo deveria ser "eat". "They like pizza" está correto.'
    },
    {
      id: 'q10',
      question: 'Qual frase está correta?',
      type: 'multiple-choice',
      options: [{ text: 'He go to work.', value: 'He go to work.' }, { text: 'We work at a bank.', value: 'We work at a bank.' }, { text: 'It eat fish.', value: 'It eat fish.' }],
      correctAnswer: 'We work at a bank.',
      points: 1,
      explanation: 'Para "He", o verbo deveria ser "goes". Para "It", o verbo deveria ser "eats". "We work at a bank" está correto.'
    },
    // Questões de Compreensão de Leitura
    {
      id: 'rc1',
      question: "What is Ana's name?",
      type: 'reading-comprehension',
      readingText: "Hello! My name is Ana. I live in Brazil. I have a big family. I have one brother. He plays football every weekend. My sister is a doctor. She works at a hospital. My parents are teachers. They like to read books. I love my family! We eat dinner together every night.",
      options: [{ text: 'Maria', value: 'Maria' }, { text: 'Ana', value: 'Ana' }, { text: 'Carla', value: 'Carla' }],
      correctAnswer: 'Ana',
      points: 1,
      explanation: 'O texto começa com "My name is Ana".'
    },
    {
      id: 'rc2',
      question: "Where does Ana live?",
      type: 'reading-comprehension',
      readingText: "Hello! My name is Ana. I live in Brazil. I have a big family. I have one brother. He plays football every weekend. My sister is a doctor. She works at a hospital. My parents are teachers. They like to read books. I love my family! We eat dinner together every night.",
      options: [{ text: 'Portugal', value: 'Portugal' }, { text: 'Canada', value: 'Canada' }, { text: 'Brazil', value: 'Brazil' }],
      correctAnswer: 'Brazil',
      points: 1,
      explanation: 'O texto afirma "I live in Brazil".'
    },
    {
      id: 'rc3',
      question: "What does her brother do?",
      type: 'reading-comprehension',
      readingText: "Hello! My name is Ana. I live in Brazil. I have a big family. I have one brother. He plays football every weekend. My sister is a doctor. She works at a hospital. My parents are teachers. They like to read books. I love my family! We eat dinner together every night.",
      options: [{ text: 'He studies math.', value: 'He studies math.' }, { text: 'He plays football.', value: 'He plays football.' }, { text: 'He goes to the park.', value: 'He goes to the park.' }],
      correctAnswer: 'He plays football.',
      points: 1,
      explanation: 'O texto diz "He plays football every weekend".'
    },
    {
      id: 'rc4',
      question: "Where does her sister work?",
      type: 'reading-comprehension',
      readingText: "Hello! My name is Ana. I live in Brazil. I have a big family. I have one brother. He plays football every weekend. My sister is a doctor. She works at a hospital. My parents are teachers. They like to read books. I love my family! We eat dinner together every night.",
      options: [{ text: 'At a school', value: 'At a school' }, { text: 'At a bank', value: 'At a bank' }, { text: 'At a hospital', value: 'At a hospital' }],
      correctAnswer: 'At a hospital',
      points: 1,
      explanation: 'O texto menciona "She works at a hospital".'
    },
    {
      id: 'rc5',
      question: "What do her parents like to do?",
      type: 'reading-comprehension',
      readingText: "Hello! My name is Ana. I live in Brazil. I have a big family. I have one brother. He plays football every weekend. My sister is a doctor. She works at a hospital. My parents are teachers. They like to read books. I love my family! We eat dinner together every night.",
      options: [{ text: 'Watch TV', value: 'Watch TV' }, { text: 'Read books', value: 'Read books' }, { text: 'Play games', value: 'Play games' }],
      correctAnswer: 'Read books',
      points: 1,
      explanation: 'O texto diz "My parents are teachers. They like to read books".'
    },
    {
      id: 'rc6',
      question: 'What pronoun replaces "Ana and her family"?',
      type: 'reading-comprehension',
      readingText: "Hello! My name is Ana. I live in Brazil. I have a big family. I have one brother. He plays football every weekend. My sister is a doctor. She works at a hospital. My parents are teachers. They like to read books. I love my family! We eat dinner together every night.",
      options: [{ text: 'They', value: 'They' }, { text: 'We', value: 'We' }, { text: 'He', value: 'He' }],
      correctAnswer: 'We',
      points: 1,
      explanation: 'Quando Ana fala sobre "Ana and her family" do ponto de vista dela, o pronome correto é "We" (Nós).'
    },
  ],
};