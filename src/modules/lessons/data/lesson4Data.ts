// src/modules/lessons/data/lesson4Data.ts

// Vocabulário da Lição 4
export const lesson4Vocabulary = {
  groups: [
    {
      name: 'object_pronouns',
      displayText: 'Pronomes Objeto',
      audioSrc: '/audio/lessons/lesson4/ObjectPronouns.mp3',
      items: [
        { word: 'me', translation: 'mim/me' },
        { word: 'you', translation: 'você/te' },
        { word: 'him', translation: 'ele/o' },
        { word: 'her', translation: 'ela/a' },
        { word: 'it', translation: 'isso/o/a' },
        { word: 'us', translation: 'nós/nos' },
        { word: 'them', translation: 'eles/as' }
      ]
    },
    {
      name: 'new_verbs',
      displayText: 'Novos Verbos',
      audioSrc: '/audio/lessons/lesson4/NewVerbs.mp3',
      items: [
        { word: 'want', translation: 'querer' },
        { word: 'watch', translation: 'assistir' },
        { word: 'take', translation: 'pegar/levar/tomar' },
        { word: 'know', translation: 'saber/conhecer' },
        { word: 'have', translation: 'ter' },
        { word: 'make', translation: 'fazer' },
        { word: 'prefer', translation: 'preferir' },
        { word: 'sleep', translation: 'dormir' },
        { word: 'think', translation: 'pensar/achar' },
        { word: 'wake up', translation: 'acordar' },
        { word: 'work', translation: 'trabalhar' }
      ]
    },
    {
      name: 'why_because',
      displayText: 'Why/Because',
      audioSrc: '/audio/lessons/lesson4/WhyQuestions.mp3',
      items: [
        { word: 'why', translation: 'por que' },
        { word: 'because', translation: 'porque' },
        { word: 'reason', translation: 'razão' },
        { word: 'early', translation: 'cedo' },
        { word: 'late', translation: 'tarde' },
        { word: 'need', translation: 'precisar' }
      ]
    },
    {
      name: 'daily_activities',
      displayText: 'Atividades Diárias',
      audioSrc: '/audio/lessons/lesson4/DailyActivities.mp3',
      items: [
        { word: 'drive to work', translation: 'dirigir para o trabalho' },
        { word: 'take the bus', translation: 'pegar o ônibus' },
        { word: 'talk to people', translation: 'conversar com pessoas' },
        { word: 'help them', translation: 'ajudá-los' },
        { word: 'come back home', translation: 'voltar para casa' },
        { word: 'study English', translation: 'estudar inglês' },
        { word: 'watch TV', translation: 'assistir TV' },
        { word: 'dance with friends', translation: 'dançar com amigos' }
      ]
    }
  ]
};

// Reading Comprehension - Maria's Day - ✅ CORRIGIDO
export const mariasDayReading = {
  title: "Maria's Day",
  text: "Maria wakes up early because she works in a hospital. She usually drives to work, but sometimes she takes the bus. At work, she talks to many people and helps them. After work, she comes back home and studies English. She prefers to watch TV before she sleeps. On weekends, she likes to dance with her friends.",
  questions: [
    {
      id: 1,
      question: "Why does Maria wake up early?",
      questionText: "Why does Maria wake up early?", // ✅ ADICIONADO para compatibilidade
      options: [
        "Because she likes to watch TV",
        "Because she works in a hospital",
        "Because she studies English",
        "Because she wants to dance"
      ],
      correctAnswer: "Because she works in a hospital", // ✅ CORRIGIDO para string
      explanation: "O texto diz claramente que Maria acorda cedo porque trabalha em um hospital."
    },
    {
      id: 2,
      question: "Does she usually drive to work?",
      questionText: "Does she usually drive to work?",
      options: [
        "No, she always takes the bus",
        "Yes, she usually drives",
        "No, she walks to work",
        "Yes, but only on weekends"
      ],
      correctAnswer: "Yes, she usually drives", // ✅ CORRIGIDO para string
      explanation: "O texto diz 'She usually drives to work, but sometimes she takes the bus.'"
    },
    {
      id: 3,
      question: "What does she do after work?",
      questionText: "What does she do after work?",
      options: [
        "She sleeps immediately",
        "She goes to dance with her friends",
        "She studies English",
        "She makes dinner for her family"
      ],
      correctAnswer: "She studies English", // ✅ CORRIGIDO para string
      explanation: "O texto diz 'After work, she comes back home and studies English.'"
    },
    {
      id: 4,
      question: "Does she prefer to study or watch TV before bed?",
      questionText: "Does she prefer to study or watch TV before bed?",
      options: [
        "She prefers to study",
        "She prefers to watch TV",
        "She prefers to sleep directly",
        "She prefers to talk with friends"
      ],
      correctAnswer: "She prefers to watch TV", // ✅ CORRIGIDO para string
      explanation: "O texto diz 'She prefers to watch TV before she sleeps.'"
    },
    {
      id: 5,
      question: "Why does she like weekends?",
      questionText: "Why does she like weekends?",
      options: [
        "Because she can drive to work",
        "Because she dances with her friends",
        "Because she wakes up early",
        "Because she studies English"
      ],
      correctAnswer: "Because she dances with her friends", // ✅ CORRIGIDO para string
      explanation: "O texto diz 'On weekends, she likes to dance with her friends.'"
    }
  ]
};

// Speaking Exercise Data
export const speakingExerciseData = {
  id: 'lesson4_speaking',
  title: 'Speaking Practice – Maria\'s Day',
  instruction: 'Complete as três partes do exercício de pronúncia. Leia cada pergunta em voz alta, responda com frases completas e grave sua resposta.',
  parts: [
    {
      id: 'part1_repetition',
      title: 'Parte 1 – Repetição',
      type: 'repetition' as const,
      instruction: 'Repita cada frase em voz alta após ouvir o áudio de referência:',
      items: [
        {
          id: 'rep1',
          text: 'Maria wakes up early because she works in a hospital.',
          audioReference: '/audio/lessons/lesson4/rep1.mp3',
          maxDuration: 10
        },
        {
          id: 'rep2',
          text: 'She usually drives to work, but sometimes she takes the bus.',
          audioReference: '/audio/lessons/lesson4/rep2.mp3',
          maxDuration: 10
        },
        {
          id: 'rep3',
          text: 'At work, she talks to many people and helps them.',
          audioReference: '/audio/lessons/lesson4/rep3.mp3',
          maxDuration: 10
        },
        {
          id: 'rep4',
          text: 'After work, she comes back home and studies English.',
          audioReference: '/audio/lessons/lesson4/rep4.mp3',
          maxDuration: 10
        },
        {
          id: 'rep5',
          text: 'She prefers to watch TV before she sleeps.',
          audioReference: '/audio/lessons/lesson4/rep5.mp3',
          maxDuration: 10
        },
        {
          id: 'rep6',
          text: 'On weekends, she likes to dance with her friends.',
          audioReference: '/audio/lessons/lesson4/rep6.mp3',
          maxDuration: 10
        }
      ]
    },
    {
      id: 'part2_questions',
      title: 'Parte 2 – Questions & Answers',
      type: 'questions' as const,
      instruction: 'Responda em voz alta com frases completas:',
      items: [
        {
          id: 'q1',
          text: 'Why does Maria wake up early?',
          expectedResponse: 'She wakes up early because she works in a hospital.',
          maxDuration: 15
        },
        {
          id: 'q2',
          text: 'Does Maria always drive to work?',
          expectedResponse: 'She usually drives, but sometimes she takes the bus.',
          maxDuration: 15
        },
        {
          id: 'q3',
          text: 'What does Maria do after work?',
          expectedResponse: 'After work, she comes back home and studies English.',
          maxDuration: 15
        },
        {
          id: 'q4',
          text: 'What does Maria prefer to do before bed?',
          expectedResponse: 'She prefers to watch TV before she sleeps.',
          maxDuration: 15
        },
        {
          id: 'q5',
          text: 'What does Maria like to do on weekends?',
          expectedResponse: 'On weekends, she likes to dance with her friends.',
          maxDuration: 15
        }
      ]
    },
    {
      id: 'part3_personal',
      title: 'Parte 3 – Personal Connection',
      type: 'personal' as const,
      instruction: 'Agora fale sobre você, respondendo em voz alta:',
      items: [
        {
          id: 'p1',
          text: 'Why do you wake up early?',
          maxDuration: 20
        },
        {
          id: 'p2',
          text: 'Do you usually drive, take the bus, or walk to places?',
          maxDuration: 20
        },
        {
          id: 'p3',
          text: 'What do you usually do after work or school?',
          maxDuration: 20
        },
        {
          id: 'p4',
          text: 'Do you prefer to watch TV or study at night?',
          maxDuration: 20
        },
        {
          id: 'p5',
          text: 'What do you like to do on weekends?',
          maxDuration: 20
        }
      ]
    }
  ]
};

// Exercícios práticos - ✅ CORRIGIDO
export const lesson4Exercises = {
  // Guided Practice - Complete as frases - ✅ CORRIGIDO para GrammarExercise
  guidedPractice: [
    {
      id: 1,
      sentence: "I know John. → I know _____.", // ✅ ADICIONADO 'sentence'
      options: ["he", "him", "his", "her"],
      correctAnswer: 1,
      explanation: "Usamos 'him' como pronome objeto para 'he'."
    },
    {
      id: 2,
      sentence: "She talks to my friends. → She talks to _____.", // ✅ ADICIONADO 'sentence'
      options: ["they", "them", "their", "us"],
      correctAnswer: 1,
      explanation: "Usamos 'them' como pronome objeto para 'they'."
    },
    {
      id: 3,
      sentence: "Do you watch TV at night? → Do you watch _____?", // ✅ ADICIONADO 'sentence'
      options: ["them", "it", "her", "him"],
      correctAnswer: 1,
      explanation: "Usamos 'it' para se referir a 'TV'."
    },
    {
      id: 4,
      sentence: "Why does he make coffee every morning? → Because he likes _____.", // ✅ ADICIONADO 'sentence'
      options: ["them", "it", "her", "him"],
      correctAnswer: 1,
      explanation: "Usamos 'it' para se referir a 'coffee'."
    }
  ],

  // Why Questions Practice
  whyQuestions: [
    {
      id: 1,
      question: "Why does she study English?",
      userAnswer: "",
      sampleAnswer: "Because she needs it for work."
    },
    {
      id: 2,
      question: "Why does he buy fruit?",
      userAnswer: "",
      sampleAnswer: "Because he wants to be healthy."
    },
    {
      id: 3,
      question: "Why does she sleep late?",
      userAnswer: "",
      sampleAnswer: "Because she works at night."
    },
    {
      id: 4,
      question: "Why do you study English?",
      userAnswer: "",
      sampleAnswer: "Because I want to travel."
    }
  ],

  // Listening Exercise - ✅ CORRIGIDO (removido title e instruction)
  listening: [
    {
      questionText: "Do you want pizza?",
      audioUrl: "/audio/lessons/lesson4/listening1.mp3",
      options: ["Yes, I do.", "No, I don't.", "Yes, I am.", "No, I'm not."],
      correctOptionIndex: 0
    },
    {
      questionText: "We need her at school.",
      audioUrl: "/audio/lessons/lesson4/listening2.mp3",
      options: ["We need she", "We need her", "We need hers", "We need him"],
      correctOptionIndex: 1
    }
  ]
};