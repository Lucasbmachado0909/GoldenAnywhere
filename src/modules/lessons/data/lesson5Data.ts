// src/modules/lessons/data/lesson5Data.ts
import type { 
  VocabularyGroup, 
  ReadingComprehensionQuestion,
  GrammarExerciseQuestion,
  TranslationQuestion,
  FamilyQuestion,
  MatchingExerciseItem
} from '../../../types';

// ===== INTERFACES LOCAIS =====
export interface FamilyVocabulary {
  word: string;
  translation: string;
  example: string;
  audioSrc: string;
}

export interface PossessiveAdjective {
  subject: string;
  possessive: string;
  example: string;
  translation: string;
  audioSrc: string; // 🆕 ADICIONAR audioSrc
}

export interface ReadingText {
  title: string;
  content: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

// ===== VOCABULÁRIO ESTRUTURADO PARA A LIÇÃO - COMPATÍVEL COM VOCABULARYSECTION =====
export const lesson5Vocabulary: { groups: VocabularyGroup[] } = {
  groups: [
    {
      name: "Family Members",
      displayText: "Family Members",
      audioSrc: "/audio/lessons/lesson5/family_group.mp3",
      title: "Family Members", // Para compatibilidade
      items: [
        { word: "father", translation: "pai", audioSrc: "/audio/lessons/lesson5/family_1.mp3" },
        { word: "mother", translation: "mãe", audioSrc: "/audio/lessons/lesson5/family_2.mp3" },
        { word: "brother", translation: "irmão", audioSrc: "/audio/lessons/lesson5/family_3.mp3" },
        { word: "sister", translation: "irmã", audioSrc: "/audio/lessons/lesson5/family_4.mp3" },
        { word: "friend", translation: "amigo/a", audioSrc: "/audio/lessons/lesson5/family_5.mp3" }
      ]
    },
    {
      name: "Possessive Adjectives",
      displayText: "Possessive Adjectives",
      audioSrc: "/audio/lessons/lesson5/possessive_group.mp3",
      title: "Possessive Adjectives",
      items: [
        { word: "my", translation: "meu/minha", audioSrc: "/audio/lessons/lesson5/possessive_1.mp3" },
        { word: "your", translation: "seu/sua", audioSrc: "/audio/lessons/lesson5/possessive_2.mp3" },
        { word: "his", translation: "dele", audioSrc: "/audio/lessons/lesson5/possessive_3.mp3" },
        { word: "her", translation: "dela", audioSrc: "/audio/lessons/lesson5/possessive_4.mp3" },
        { word: "our", translation: "nosso/nossa", audioSrc: "/audio/lessons/lesson5/possessive_5.mp3" },
        { word: "their", translation: "deles/delas", audioSrc: "/audio/lessons/lesson5/possessive_6.mp3" }
      ]
    },
    {
      name: "Actions with Family",
      displayText: "Actions with Family",
      audioSrc: "/audio/lessons/lesson5/actions_group.mp3",
      title: "Actions with Family",
      items: [
        { word: "drive", translation: "dirigir", audioSrc: "/audio/lessons/lesson5/actions_1.mp3" },
        { word: "take", translation: "pegar/tomar", audioSrc: "/audio/lessons/lesson5/actions_2.mp3" },
        { word: "study", translation: "estudar", audioSrc: "/audio/lessons/lesson5/actions_3.mp3" },
        { word: "watch", translation: "assistir", audioSrc: "/audio/lessons/lesson5/actions_4.mp3" },
        { word: "dance", translation: "dançar", audioSrc: "/audio/lessons/lesson5/actions_5.mp3" },
        { word: "talk", translation: "falar/conversar", audioSrc: "/audio/lessons/lesson5/actions_6.mp3" },
        { word: "help", translation: "ajudar", audioSrc: "/audio/lessons/lesson5/actions_7.mp3" }
      ]
    },
    {
      name: "Time Expressions",
      displayText: "Time Expressions",
      audioSrc: "/audio/lessons/lesson5/time_group.mp3",
      title: "Time Expressions",
      items: [
        { word: "every day", translation: "todos os dias", audioSrc: "/audio/lessons/lesson5/time_1.mp3" },
        { word: "at night", translation: "à noite", audioSrc: "/audio/lessons/lesson5/time_2.mp3" },
        { word: "in the afternoon", translation: "à tarde", audioSrc: "/audio/lessons/lesson5/time_3.mp3" },
        { word: "on Saturday", translation: "no sábado", audioSrc: "/audio/lessons/lesson5/time_4.mp3" },
        { word: "in the morning", translation: "de manhã", audioSrc: "/audio/lessons/lesson5/time_5.mp3" }
      ]
    }
  ]
};

// ===== TEXTO DE LEITURA: MARIA'S FAMILY =====
export const mariaFamilyReading = {
  title: "Maria's Family",
  text: 'Maria has a big family. Her father drives to work every day. Her mother takes the bus. Her brother studies English at night. Maria and her sister watch TV in the afternoon. They dance with their friends on Saturday.',
  questions: [
    {
      id: 1,
      question: 'Who drives to work?',
      options: ['Her father', 'Her mother', 'Her brother', 'Maria'],
      correctAnswer: 'Her father',
      explanation: 'No texto: "Her father drives to work every day"'
    },
    {
      id: 2,
      question: 'Who takes the bus?',
      options: ['Her father', 'Her mother', 'Her brother', 'Maria'],
      correctAnswer: 'Her mother',
      explanation: 'No texto: "Her mother takes the bus"'
    },
    {
      id: 3,
      question: 'When does her brother study English?',
      options: ['In the morning', 'In the afternoon', 'At night', 'On Saturday'],
      correctAnswer: 'At night',
      explanation: 'No texto: "Her brother studies English at night"'
    },
    {
      id: 4,
      question: 'What do Maria and her sister do in the afternoon?',
      options: ['Study English', 'Watch TV', 'Drive to work', 'Take the bus'],
      correctAnswer: 'Watch TV',
      explanation: 'No texto: "Maria and her sister watch TV in the afternoon"'
    },
    {
      id: 5,
      question: 'When do they dance with their friends?',
      options: ['Every day', 'At night', 'In the afternoon', 'On Saturday'],
      correctAnswer: 'On Saturday',
      explanation: 'No texto: "They dance with their friends on Saturday"'
    }
  ] as ReadingComprehensionQuestion[]
};

// ===== EXERCÍCIOS DA LIÇÃO - CORRIGIDOS PARA USAR ÍNDICES =====
export const lesson5Exercises = {
  guidedPractice: [
    {
      id: 1,
      question: 'Complete: ___ father drives to work.',
      sentence: '___ father drives to work.',
      options: ['My', 'Your', 'His', 'Her'],
      correctAnswer: 0, // Índice 0 = "My"
      explanation: 'Para "I" (eu), usamos "my" como possessive adjective.'
    },
    {
      id: 2,
      question: 'Complete: She helps ___ sister.',
      sentence: 'She helps ___ sister.',
      options: ['my', 'your', 'his', 'her'],
      correctAnswer: 3, // Índice 3 = "her"
      explanation: 'Para "she" (ela), usamos "her" como possessive adjective.'
    },
    {
      id: 3,
      question: 'Complete: We study with ___ friends.',
      sentence: 'We study with ___ friends.',
      options: ['my', 'your', 'our', 'their'],
      correctAnswer: 2, // Índice 2 = "our"
      explanation: 'Para "we" (nós), usamos "our" como possessive adjective.'
    },
    {
      id: 4,
      question: 'Complete: They watch TV with ___ family.',
      sentence: 'They watch TV with ___ family.',
      options: ['my', 'your', 'our', 'their'],
      correctAnswer: 3, // Índice 3 = "their"
      explanation: 'Para "they" (eles/elas), usamos "their" como possessive adjective.'
    },
    {
      id: 5,
      question: 'Complete: You talk to ___ mother.',
      sentence: 'You talk to ___ mother.',
      options: ['my', 'your', 'his', 'her'],
      correctAnswer: 1, // Índice 1 = "your"
      explanation: 'Para "you" (você), usamos "your" como possessive adjective.'
    },
    {
      id: 6,
      question: 'Complete: He drives ___ father to work.',
      sentence: 'He drives ___ father to work.',
      options: ['my', 'your', 'his', 'her'],
      correctAnswer: 2, // Índice 2 = "his"
      explanation: 'Para "he" (ele), usamos "his" como possessive adjective.'
    }
  ] as GrammarExerciseQuestion[],
  
  familyQuestions: [
    {
      id: 1,
      question: 'Does your father drive to work?',
      sampleAnswer: 'Yes, he does. / No, he doesn\'t.',
      explanation: 'Para perguntas com "Does", respondemos "Yes, he/she/it does" ou "No, he/she/it doesn\'t".'
    },
    {
      id: 2,
      question: 'Do you talk to your mother every day?',
      sampleAnswer: 'Yes, I do. / No, I don\'t.',
      explanation: 'Para perguntas com "Do", respondemos "Yes, I/you/we/they do" ou "No, I/you/we/they don\'t".'
    },
    {
      id: 3,
      question: 'Does her brother watch TV?',
      sampleAnswer: 'Yes, he does. / No, he doesn\'t.',
      explanation: 'Para perguntas com "Does", respondemos "Yes, he/she/it does" ou "No, he/she/it doesn\'t".'
    },
    {
      id: 4,
      question: 'Do they dance with their friends?',
      sampleAnswer: 'Yes, they do. / No, they don\'t.',
      explanation: 'Para perguntas com "Do", respondemos "Yes, I/you/we/they do" ou "No, I/you/we/they don\'t".'
    },
    {
      id: 5,
      question: 'Does your sister study English?',
      sampleAnswer: 'Yes, she does. / No, she doesn\'t.',
      explanation: 'Para perguntas com "Does", respondemos "Yes, he/she/it does" ou "No, he/she/it doesn\'t".'
    },
    {
      id: 6,
      question: 'Do you help your family?',
      sampleAnswer: 'Yes, I do. / No, I don\'t.',
      explanation: 'Para perguntas com "Do", respondemos "Yes, I/you/we/they do" ou "No, I/you/we/they don\'t".'
    }
  ] as FamilyQuestion[]
};

// ===== EXERCÍCIO DE CORRESPONDÊNCIA =====
export const matchingExercise: MatchingExerciseItem[] = [
  { word: 'father', definition: 'male parent (pai)', correct: 'b' },
  { word: 'mother', definition: 'female parent (mãe)', correct: 'c' },
  { word: 'sister', definition: 'female sibling (irmã)', correct: 'a' },
  { word: 'brother', definition: 'male sibling (irmão)', correct: 'd' },
  { word: 'friend', definition: 'not family, but close (amigo)', correct: 'e' }
];

// ===== PERGUNTAS DE TRADUÇÃO =====
export const translationQuestions: TranslationQuestion[] = [
  {
    id: 1,
    portuguese: 'Meu pai dirige para o trabalho.',
    correctAnswer: 'My father drives to work.',
    explanation: 'Use "my" para "meu" e "drives" para terceira pessoa do singular.'
  },
  {
    id: 2,
    portuguese: 'A irmã dela estuda inglês.',
    correctAnswer: 'Her sister studies English.',
    explanation: 'Use "her" para "dela" e "studies" para terceira pessoa do singular.'
  },
  {
    id: 3,
    portuguese: 'Nós assistimos TV com nossa família.',
    correctAnswer: 'We watch TV with our family.',
    explanation: 'Use "our" para "nossa" e "watch" para primeira pessoa do plural.'
  },
  {
    id: 4,
    portuguese: 'Eles dançam com os amigos deles.',
    correctAnswer: 'They dance with their friends.',
    explanation: 'Use "their" para "deles" e "dance" para terceira pessoa do plural.'
  },
  {
    id: 5,
    portuguese: 'Você ajuda sua mãe?',
    correctAnswer: 'Do you help your mother?',
    explanation: 'Use "Do" para perguntas com "you" e "your" para "sua".'
  },
  {
    id: 6,
    portuguese: 'O irmão dele assiste TV à noite.',
    correctAnswer: 'His brother watches TV at night.',
    explanation: 'Use "his" para "dele" e "watches" para terceira pessoa do singular.'
  },
  {
    id: 7,
    portuguese: 'Minha mãe pega o ônibus todos os dias.',
    correctAnswer: 'My mother takes the bus every day.',
    explanation: 'Use "my" para "minha" e "takes" para terceira pessoa do singular.'
  },
  {
    id: 8,
    portuguese: 'Vocês falam com os amigos de vocês?',
    correctAnswer: 'Do you talk to your friends?',
    explanation: 'Use "Do" para perguntas com "you" e "your" para "de vocês".'
  }
];

// ===== DADOS ADICIONAIS (mantidos para compatibilidade) =====
export const familyVocabulary: FamilyVocabulary[] = [
  {
    word: 'father',
    translation: 'pai',
    example: 'My father drives to work.',
    audioSrc: '/audio/lessons/lesson5/family_1.mp3'
  },
  {
    word: 'mother',
    translation: 'mãe',
    example: 'My mother takes the bus.',
    audioSrc: '/audio/lessons/lesson5/family_2.mp3'
  },
  {
    word: 'brother',
    translation: 'irmão',
    example: 'My brother watches TV.',
    audioSrc: '/audio/lessons/lesson5/family_3.mp3'
  },
  {
    word: 'sister',
    translation: 'irmã',
    example: 'My sister studies English.',
    audioSrc: '/audio/lessons/lesson5/family_4.mp3'
  },
  {
    word: 'friend',
    translation: 'amigo/a',
    example: 'I dance with my friend.',
    audioSrc: '/audio/lessons/lesson5/family_5.mp3'
  }
];

export const possessiveAdjectives: PossessiveAdjective[] = [
  {
    subject: 'I',
    possessive: 'my',
    example: 'I talk to my brother.',
    translation: 'Eu falo com meu irmão.',
    audioSrc: "/audio/lessons/lesson5/sentence_1.mp3"
  },
  {
    subject: 'You',
    possessive: 'your',
    example: 'You help your mother.',
    translation: 'Você ajuda sua mãe.',
    audioSrc: "/audio/lessons/lesson5/sentence_2.mp3" // 🆕 NOVO
  },
  {
    subject: 'He',
    possessive: 'his',
    example: 'He drives his father to work.',
    translation: 'Ele leva seu pai para o trabalho.',
    audioSrc: "/audio/lessons/lesson5/sentence_3.mp3"
  },
  {
    subject: 'She',
    possessive: 'her',
    example: 'She helps her sister.',
    translation: 'Ela ajuda sua irmã.',
    audioSrc: "/audio/lessons/lesson5/sentence_4.mp3" // 🆕 NOVO
  },
  {
    subject: 'We',
    possessive: 'our',
    example: 'We study with our friend.',
    translation: 'Nós estudamos com nosso amigo.',
    audioSrc: "/audio/lessons/lesson5/sentence_5.mp3" // 🆕 NOVO
  },
  {
    subject: 'They',
    possessive: 'their',
    example: 'They watch TV with their family.',
    translation: 'Eles assistem TV com sua família.',
    audioSrc: "/audio/lessons/lesson5/sentence_6.mp3" // 🆕 NOVO
  }
];
// ===== TEXTOS DE PRÁTICA ADICIONAL =====
export const readingPractice: ReadingText = {
  title: 'My Family Activities',
  content: 'I drive my father to work. My mother takes the bus. My sister studies English. My brother watches TV. We dance with our friends.',
  questions: [
    {
      question: 'Who drives the father to work?',
      answer: 'I'
    },
    {
      question: 'Who takes the bus?',
      answer: 'My mother'
    },
    {
      question: 'What does the sister study?',
      answer: 'English'
    },
    {
      question: 'Do they dance with their friends?',
      answer: 'Yes, they do'
    }
  ]
};

// ===== PERGUNTAS DO/DOES =====
export const doDoesQuestions = [
  {
    question: 'Does your father drive to work?',
    positiveAnswer: 'Yes, he does.',
    negativeAnswer: 'No, he doesn\'t.',
    audioSrc: '/audio/lessons/lesson5/question_1.mp3'
  },
  {
    question: 'Do you talk to your mother every day?',
    positiveAnswer: 'Yes, I do.',
    negativeAnswer: 'No, I don\'t.',
    audioSrc: '/audio/lessons/lesson5/question_2.mp3'
  },
  {
    question: 'Does her brother watch TV?',
    positiveAnswer: 'Yes, he does.',
    negativeAnswer: 'No, he doesn\'t.',
    audioSrc: '/audio/lessons/lesson5/question_3.mp3'
  },
  {
    question: 'Do they dance with their friends?',
    positiveAnswer: 'Yes, they do.',
    negativeAnswer: 'No, they don\'t.',
    audioSrc: '/audio/lessons/lesson5/question_4.mp3'
  }
];

// ===== EXERCÍCIOS DE COMPLETAR =====
export const completionExercises = [
  {
    sentence: 'My ______ drives to work.',
    options: ['father', 'mother', 'sister', 'brother'],
    correct: 'father'
  },
  {
    sentence: 'My ______ takes the bus.',
    options: ['father', 'mother', 'sister', 'brother'],
    correct: 'mother'
  },
  {
    sentence: 'My ______ studies English.',
    options: ['father', 'mother', 'sister', 'brother'],
    correct: 'sister'
  }
];