// src/modules/lessons/data/lesson6Data.ts
import type { 
  VocabularyGroup, 
  ReadingComprehensionQuestion,
  GrammarExerciseQuestion,
  TranslationQuestion,
  FamilyQuestion
} from '../../../types';

// ===== INTERFACES LOCAIS =====
export interface DailyRoutineActivity {
  activity: string;
  translation: string;
  example: string;
  audioSrc: string;
}

export interface AdverbFrequency {
  adverb: string;
  translation: string;
  percentage: string;
  example: string;
  audioSrc: string;
}

export interface ReadingText {
  title: string;
  content: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

export interface TrueFalseExerciseItem {
  id: number;
  statement: string;
  isTrue: boolean;
  explanation: string;
}

// ===== VOCABULÁRIO ESTRUTURADO PARA A LIÇÃO - COMPATÍVEL COM VOCABULARYSECTION =====
export const lesson6Vocabulary: { groups: VocabularyGroup[] } = {
  groups: [
    {
      name: "Daily Routine Activities",
      displayText: "Daily Routine Activities",
      audioSrc: "/audio/lessons/lesson6/routine_group.mp3",
      title: "Daily Routine Activities",
      items: [
        { word: "wake up", translation: "acordar", audioSrc: "/audio/lessons/lesson6/routine_1.mp3" },
        { word: "take a shower", translation: "tomar banho", audioSrc: "/audio/lessons/lesson6/routine_2.mp3" },
        { word: "have breakfast", translation: "tomar café da manhã", audioSrc: "/audio/lessons/lesson6/routine_3.mp3" },
        { word: "go to school", translation: "ir para escola", audioSrc: "/audio/lessons/lesson6/routine_4.mp3" },
        { word: "go to work", translation: "ir para o trabalho", audioSrc: "/audio/lessons/lesson6/routine_5.mp3" },
        { word: "study", translation: "estudar", audioSrc: "/audio/lessons/lesson6/routine_6.mp3" },
        { word: "watch TV", translation: "assistir TV", audioSrc: "/audio/lessons/lesson6/routine_7.mp3" },
        { word: "go to bed", translation: "ir dormir", audioSrc: "/audio/lessons/lesson6/routine_8.mp3" }
      ]
    },
    {
      name: "Adverbs of Frequency",
      displayText: "Adverbs of Frequency",
      audioSrc: "/audio/lessons/lesson6/frequency_group.mp3",
      title: "Adverbs of Frequency",
      items: [
        { word: "always", translation: "sempre (100%)", audioSrc: "/audio/lessons/lesson6/frequency_1.mp3" },
        { word: "usually", translation: "geralmente (80%)", audioSrc: "/audio/lessons/lesson6/frequency_2.mp3" },
        { word: "sometimes", translation: "às vezes (50%)", audioSrc: "/audio/lessons/lesson6/frequency_3.mp3" },
        { word: "never", translation: "nunca (0%)", audioSrc: "/audio/lessons/lesson6/frequency_4.mp3" }
      ]
    },
    {
      name: "Time Expressions",
      displayText: "Time Expressions",
      audioSrc: "/audio/lessons/lesson6/timeGroup.mp3",
      title: "Time Expressions",
      items: [
        { word: "in the morning", translation: "de manhã", audioSrc: "/audio/lessons/lesson6/time_1.mp3" },
        { word: "in the afternoon", translation: "à tarde", audioSrc: "/audio/lessons/lesson6/time_2.mp3" },
        { word: "in the evening", translation: "à noite", audioSrc: "/audio/lessons/lesson6/time_3.mp3" },
        { word: "at night", translation: "à noite", audioSrc: "/audio/lessons/lesson6/time_4.mp3" },
        { word: "after midnight", translation: "depois da meia-noite", audioSrc: "/audio/lessons/lesson6/time_5.mp3" }
      ]
    },
    {
      name: "Daily Activities",
      displayText: "Daily Activities",
      audioSrc: "/audio/lessons/lesson6/activities_group.mp3",
      title: "Daily Activities",
      items: [
        { word: "eat breakfast", translation: "tomar café da manhã", audioSrc: "/audio/lessons/lesson6/activities_1.mp3" },
        { word: "train", translation: "treinar", audioSrc: "/audio/lessons/lesson6/activities_2.mp3" },
        { word: "spend time", translation: "passar tempo", audioSrc: "/audio/lessons/lesson6/activities_3.mp3" },
        { word: "rest", translation: "descansar", audioSrc: "/audio/lessons/lesson6/activities_4.mp3" },
        { word: "take the bus", translation: "pegar o ônibus", audioSrc: "/audio/lessons/lesson6/activities_5.mp3" }
      ]
    }
  ]
};

// ===== TEXTO DE LEITURA: CRISTIANO RONALDO'S ROUTINE =====
export const cristianoRoutineReading = {
  title: "Cristiano Ronaldo's Daily Routine",
  text: "Cristiano Ronaldo is a professional football player. He always wakes up early and eats a healthy breakfast. He usually trains twice a day. In the afternoon, he sometimes spends time with his family. At night, he never goes to bed late because he needs to rest for the next day.",
  questions: [
    {
      id: 1,
      question: "When does Cristiano Ronaldo wake up?",
      options: ["Late", "Early", "At noon", "In the afternoon"],
      correctAnswer: "Early",
      explanation: "No texto: 'He always wakes up early'."
    },
    {
      id: 2,
      question: "How often does he train?",
      options: ["Once a day", "Twice a day", "Three times a day", "Never"],
      correctAnswer: "Twice a day",
      explanation: "No texto: 'He usually trains twice a day'."
    },
    {
      id: 3,
      question: "Does he sometimes spend time with his family?",
      options: ["Yes, he does", "No, he doesn't", "Always", "Never"],
      correctAnswer: "Yes, he does",
      explanation: "No texto: 'he sometimes spends time with his family'."
    },
    {
      id: 4,
      question: "Does he go to bed late?",
      options: ["Yes, always", "Yes, sometimes", "No, never", "Usually"],
      correctAnswer: "No, never",
      explanation: "No texto: 'he never goes to bed late'."
    }
  ] as ReadingComprehensionQuestion[]
};

// ===== EXERCÍCIOS DA LIÇÃO - CORRIGIDOS PARA USAR ÍNDICES =====
export const lesson6Exercises = {
  guidedPractice: [
    {
      id: 1,
      question: "She ______ drinks coffee in the morning. (todos os dias)",
      sentence: "She ______ drinks coffee in the morning.",
      options: ["never", "always", "sometimes", "usually"],
      correctAnswer: 1, // Índice 1 = "always"
      explanation: "Para 'todos os dias', usamos 'always' (100%)."
    },
    {
      id: 2,
      question: "I ______ take the bus to work. (geralmente)",
      sentence: "I ______ take the bus to work.",
      options: ["never", "sometimes", "usually", "always"],
      correctAnswer: 2, // Índice 2 = "usually"
      explanation: "Para 'geralmente', usamos 'usually' (cerca de 80%)."
    },
    {
      id: 3,
      question: "They ______ eat pizza on Monday. (às vezes)",
      sentence: "They ______ eat pizza on Monday.",
      options: ["never", "sometimes", "usually", "always"],
      correctAnswer: 1, // Índice 1 = "sometimes"
      explanation: "Para 'às vezes', usamos 'sometimes' (cerca de 50%)."
    },
    {
      id: 4,
      question: "He is ______ late for school. (nunca)",
      sentence: "He is ______ late for school.",
      options: ["never", "sometimes", "usually", "always"],
      correctAnswer: 0, // Índice 0 = "never"
      explanation: "Para 'nunca', usamos 'never' (0%). Note que 'never' vem depois do verbo 'to be'."
    },
    {
      id: 5,
      question: "We ______ watch TV in the evening. (geralmente)",
      sentence: "We ______ watch TV in the evening.",
      options: ["never", "sometimes", "usually", "always"],
      correctAnswer: 2, // Índice 2 = "usually"
      explanation: "Para 'geralmente', usamos 'usually' (cerca de 80%)."
    },
    {
      id: 6,
      question: "She ______ listens to music after lunch. (geralmente)",
      sentence: "She ______ listens to music after lunch.",
      options: ["always", "usually", "sometimes", "never"],
      correctAnswer: 1, // Índice 1 = "usually"
      explanation: "Para 'geralmente', usamos 'usually' (cerca de 80% de frequência)."
    }
  ] as GrammarExerciseQuestion[],

  speakingQuestions: [
    {
      id: 1,
      question: "Do you always eat breakfast?",
      sampleAnswer: "Yes, I always eat breakfast. / No, I sometimes skip breakfast.",
      explanation: "Use 'always', 'usually', 'sometimes' ou 'never' na sua resposta."
    },
    {
      id: 2,
      question: "Do you usually watch TV at night?",
      sampleAnswer: "Yes, I usually watch TV at night. / No, I never watch TV at night.",
      explanation: "Responda com um advérbio de frequência para ser mais específico."
    },
    {
      id: 3,
      question: "Do you sometimes study English on the weekend?",
      sampleAnswer: "Yes, I sometimes study on weekends. / No, I never study on weekends.",
      explanation: "Use advérbios de frequência para expressar com que frequência você faz a atividade."
    },
    {
      id: 4,
      question: "Do you never go to bed late?",
      sampleAnswer: "I sometimes go to bed late. / I never go to bed late.",
      explanation: "Cuidado com a dupla negativa. Se a pergunta tem 'never', responda de forma positiva."
    },
    {
      id: 5,
      question: "Do you usually take a shower in the morning?",
      sampleAnswer: "Yes, I usually take a shower in the morning. / No, I usually take a shower at night.",
      explanation: "Use advérbios de frequência para expressar seus hábitos de higiene."
    },
    {
      id: 6,
      question: "Do you always wake up early?",
      sampleAnswer: "Yes, I always wake up early. / No, I sometimes wake up late.",
      explanation: "Responda sobre seus hábitos matinais usando advérbios de frequência."
    }
  ] as FamilyQuestion[],

  completionExercise: [
    {
      sentence: "I ______ drink coffee in the morning.",
      hint: "(todos os dias)",
      correctAnswer: "always",
      options: ["always", "usually", "sometimes", "never"]
    },
    {
      sentence: "She ______ goes to the gym.",
      hint: "(geralmente)",
      correctAnswer: "usually",
      options: ["always", "usually", "sometimes", "never"]
    },
    {
      sentence: "They ______ eat pizza on Monday.",
      hint: "(às vezes)",
      correctAnswer: "sometimes",
      options: ["always", "usually", "sometimes", "never"]
    },
    {
      sentence: "He is ______ late for school.",
      hint: "(nunca)",
      correctAnswer: "never",
      options: ["always", "usually", "sometimes", "never"]
    }
  ]
};

// ===== PERGUNTAS DE TRADUÇÃO =====
export const translationQuestions: TranslationQuestion[] = [
  {
    id: 1,
    portuguese: "Eu sempre acordo às 7 da manhã.",
    correctAnswer: "I always wake up at 7 a.m.",
    explanation: "Use 'always' para 'sempre' e 'wake up' para 'acordar'."
  },
  {
    id: 2,
    portuguese: "Ela geralmente toma banho de manhã.",
    correctAnswer: "She usually takes a shower in the morning.",
    explanation: "Use 'usually' para 'geralmente' e 'takes a shower' para 'toma banho'."
  },
  {
    id: 3,
    portuguese: "Nós às vezes assistimos TV à noite.",
    correctAnswer: "We sometimes watch TV at night.",
    explanation: "Use 'sometimes' para 'às vezes' e 'watch TV' para 'assistimos TV'."
  },
  {
    id: 4,
    portuguese: "Ele nunca vai dormir tarde.",
    correctAnswer: "He never goes to bed late.",
    explanation: "Use 'never' para 'nunca' e 'goes to bed' para 'vai dormir'."
  },
  {
    id: 5,
    portuguese: "Eles geralmente vão para o trabalho de ônibus.",
    correctAnswer: "They usually go to work by bus.",
    explanation: "Use 'usually' para 'geralmente' e 'by bus' para 'de ônibus'."
  },
  {
    id: 6,
    portuguese: "Você sempre toma café da manhã?",
    correctAnswer: "Do you always have breakfast?",
    explanation: "Use 'Do' para perguntas com 'you' e 'have breakfast' para 'tomar café da manhã'."
  },
  {
    id: 7,
    portuguese: "Ela às vezes estuda inglês à noite.",
    correctAnswer: "She sometimes studies English at night.",
    explanation: "Use 'sometimes' para 'às vezes' e 'studies' para terceira pessoa do singular."
  },
  {
    id: 8,
    portuguese: "Nós nunca chegamos atrasados.",
    correctAnswer: "We never arrive late.",
    explanation: "Use 'never' para 'nunca' e 'arrive late' para 'chegamos atrasados'."
  }
];

// ===== TRUE/FALSE EXERCISE SOBRE CRISTIANO RONALDO =====
export const trueFalseExercise: TrueFalseExerciseItem[] = [
  {
    id: 1,
    statement: "Cristiano Ronaldo always wakes up late.",
    isTrue: false,
    explanation: "Falso. O texto diz que ele 'always wakes up early' (sempre acorda cedo)."
  },
  {
    id: 2,
    statement: "He usually trains twice a day.",
    isTrue: true,
    explanation: "Verdadeiro. O texto diz 'He usually trains twice a day'."
  },
  {
    id: 3,
    statement: "He sometimes spends time with his family in the afternoon.",
    isTrue: true,
    explanation: "Verdadeiro. O texto diz 'he sometimes spends time with his family'."
  },
  {
    id: 4,
    statement: "He never goes to bed late.",
    isTrue: true,
    explanation: "Verdadeiro. O texto diz 'he never goes to bed late'."
  }
];

// ===== DADOS ADICIONAIS (mantidos para compatibilidade) =====
export const dailyRoutineActivities: DailyRoutineActivity[] = [
  {
    activity: 'wake up',
    translation: 'acordar',
    example: 'I always wake up at 7 a.m.',
    audioSrc: '/audio/lessons/lesson6/routine_1.mp3'
  },
  {
    activity: 'take a shower',
    translation: 'tomar banho',
    example: 'She usually takes a shower in the morning.',
    audioSrc: '/audio/lessons/lesson6/routine_2.mp3'
  },
  {
    activity: 'have breakfast',
    translation: 'tomar café da manhã',
    example: 'We always have breakfast together.',
    audioSrc: '/audio/lessons/lesson6/routine_3.mp3'
  },
  {
    activity: 'go to school',
    translation: 'ir para escola',
    example: 'They usually go to school by bus.',
    audioSrc: '/audio/lessons/lesson6/routine_4.mp3'
  },
  {
    activity: 'go to work',
    translation: 'ir para o trabalho',
    example: 'He sometimes goes to work by car.',
    audioSrc: '/audio/lessons/lesson6/routine_5.mp3'
  },
  {
    activity: 'study',
    translation: 'estudar',
    example: 'I usually study English at night.',
    audioSrc: '/audio/lessons/lesson6/routine_6.mp3'
  },
  {
    activity: 'watch TV',
    translation: 'assistir TV',
    example: 'We sometimes watch TV after dinner.',
    audioSrc: '/audio/lessons/lesson6/routine_7.mp3'
  },
  {
    activity: 'go to bed',
    translation: 'ir dormir',
    example: 'She never goes to bed late.',
    audioSrc: '/audio/lessons/lesson6/routine_8.mp3'
  }
];

export const adverbsOfFrequency: AdverbFrequency[] = [
  {
    adverb: 'always',
    translation: 'sempre',
    percentage: '100%',
    example: 'I always brush my teeth.',
    audioSrc: '/audio/lessons/lesson6/frequency_1.mp3'
  },
  {
    adverb: 'usually',
    translation: 'geralmente',
    percentage: '80%',
    example: 'She usually takes the bus.',
    audioSrc: '/audio/lessons/lesson6/frequency_2.mp3'
  },
  {
    adverb: 'sometimes',
    translation: 'às vezes',
    percentage: '50%',
    example: 'We sometimes eat pizza.',
    audioSrc: '/audio/lessons/lesson6/frequency_3.mp3'
  },
  {
    adverb: 'never',
    translation: 'nunca',
    percentage: '0%',
    example: 'He never arrives late.',
    audioSrc: '/audio/lessons/lesson6/frequency_4.mp3'
  }
];

// ===== TEXTOS DE PRÁTICA ADICIONAL =====
export const readingPractice: ReadingText = {
  title: 'My Daily Routine',
  content: 'I always wake up at 7 a.m. I usually take a shower in the morning. I sometimes have breakfast at home. I never go to work late. We usually watch TV in the evening.',
  questions: [
    {
      question: 'What time do I wake up?',
      answer: 'At 7 a.m.'
    },
    {
      question: 'When do I usually take a shower?',
      answer: 'In the morning'
    },
    {
      question: 'Do I sometimes have breakfast at home?',
      answer: 'Yes, I do'
    },
    {
      question: 'Do I ever go to work late?',
      answer: 'No, I never do'
    }
  ]
};