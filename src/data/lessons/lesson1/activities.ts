import type {
  FillInTheBlankQuestion,
  SentenceCorrectionQuestion,
  ReadingComprehensionQuestion,
  ListeningTranscriptionActivity,
  ListeningMultipleChoiceQuestion,
  WritingPracticeActivity
} from '../../../types/index'; // Corrigido para apontar para index.ts
 // Corrigido para apontar para index.ts

const lucasText = `My name is Lucas. I am 21 years old. I study engineering. My sister is Anna. She works in a school. We play video games together. My parents like pizza. They eat pizza every Friday.`;

export const activities = {
  // Atividade existente (mantenha-a)
  pronounActivity: {
    title: '4. Atividade: Complete as frases',
    instruction: 'Complete com o pronome correto:',
    questions: [
      { phrase: 'eat pizza.', answer: 'I' },
      { phrase: 'works at a school.', answer: 'He' },
      { phrase: 'like music.', answer: 'They' },
      { phrase: 'plays with the dog.', answer: 'She' },
      { phrase: 'go to the park.', answer: 'We' }
    ]
  },

  // Novos exercícios interativos
  
  // 1. Complete as Frases (Verbos)
  verbFillInTheBlank: {
    title: 'Complete as Frases com o Verbo Correto',
    instruction: 'Complete as frases com o verbo adequado (play – drink – study – work – eat):',
    type: 'fill-in-the-blank',
    data: [
      { phrase: 'I ______ soccer every Sunday.', answer: 'play' },
      { phrase: 'She ______ coffee in the morning.', answer: 'drinks' },
      { phrase: 'They ______ English at night.', answer: 'study' },
      { phrase: 'He ______ at the hospital.', answer: 'works' },
      { phrase: 'We ______ sandwiches for lunch.', answer: 'eat' },
    ] as FillInTheBlankQuestion[],
  },

  // 2. Corrija as Frases Incorretas (Verbos)
  verbCorrection: {
    title: 'Corrija as Frases Incorretas (Verbos)',
    instruction: 'Corrija as frases para que estejam gramaticalmente corretas:',
    type: 'sentence-correction',
    data: [
      { originalSentence: 'He play the guitar.', correctSentence: 'He plays the guitar.', explanation: 'Para a 3ª pessoa do singular (He), o verbo "play" recebe "-s".' },
      { originalSentence: 'I eats breakfast.', correctSentence: 'I eat breakfast.', explanation: 'Com o pronome "I", o verbo não recebe "-s".' },
      { originalSentence: 'She like chocolate.', correctSentence: 'She likes chocolate.', explanation: 'Para a 3ª pessoa do singular (She), o verbo "like" recebe "-s".' },
      { originalSentence: 'They works late.', correctSentence: 'They work late.', explanation: 'Com o pronome "They", o verbo não recebe "-s".' },
      { originalSentence: 'We go to school.', correctSentence: 'We go to school.', explanation: 'Esta frase já está correta.' },
    ] as SentenceCorrectionQuestion[],
  },

  // 3. Leitura - Compreensão de Texto (Lucas)
  lucasReadingComprehension: {
    title: 'Leitura: Compreensão de Texto',
    instruction: 'Leia o texto abaixo e responda às perguntas:',
    type: 'reading-comprehension',
    text: lucasText,
    questions: [
      { question: 'What does Lucas study?', correctAnswer: 'Engineering' },
      { question: 'Who works in a school?', correctAnswer: 'Anna' },
      { question: 'What do Lucas and Anna do together?', correctAnswer: 'Play video games' },
      { question: 'What do his parents like?', correctAnswer: 'Pizza' },
      { question: 'When do they eat pizza?', correctAnswer: 'Every Friday' },
    ] as ReadingComprehensionQuestion[],
  },

  // 4. Listening - Escute e Escreva
  listeningTranscription: {
    title: 'Listening: Escute e Escreva',
    instruction: 'Escute o áudio e escreva as frases que você ouviu:',
    type: 'listening-transcription',
    data: [
      { audioUrl: '/audio/lesson1/sentence1.mp3', correctTranscription: 'I like music.' },
      { audioUrl: '/audio/lesson1/sentence2.mp3', correctTranscription: 'He plays the guitar.' },
      { audioUrl: '/audio/lesson1/sentence3.mp3', correctTranscription: 'She drinks juice.' },
      { audioUrl: '/audio/lesson1/sentence4.mp3', correctTranscription: 'We go to the park.' },
      { audioUrl: '/audio/lesson1/sentence5.mp3', correctTranscription: 'They work every day.' },
    ] as ListeningTranscriptionActivity[],
  },

  // 5. Listening - Múltipla Escolha
  listeningMultipleChoice: {
    title: 'Listening: Múltipla Escolha',
    instruction: 'Escute o áudio e escolha a opção correta:',
    type: 'listening-multiple-choice',
    data: [
      {
        audioUrl: '/audio/lesson1/question1.mp3',
        questionText: 'What does he do?',
        options: ['He eats cake', 'He plays the guitar', 'He goes to school'],
        correctOptionIndex: 1,
      },
      {
        audioUrl: '/audio/lesson1/question2.mp3',
        questionText: 'What does she drink?',
        options: ['Water', 'Juice', 'Coffee'],
        correctOptionIndex: 1,
      },
    ] as ListeningMultipleChoiceQuestion[],
  },

  // 10. Produção Escrita
  writingPractice: {
    title: 'Produção Escrita',
    instruction: 'Crie 3 frases completas usando os pronomes e verbos sugeridos:',
    type: 'writing-practice',
    data: {
      instruction: 'Crie 3 frases completas com os seguintes pronomes:',
      prompts: [
        'I + play → Ex: I play video games.',
        'He + eat → Ex: He eats breakfast.',
        'They + work → Ex: They work in a hospital.',
      ],
    } as WritingPracticeActivity,
  },

  // Seção de Tarefa Final (mantenha-a)
  finalTask: {
    title: '5. Tarefa Final',
    subtitle: 'Para praticar:',
    tasks: [
      'Grave um áudio dizendo 5 frases com pronomes e verbos.',
      'Escreva 3 frases com "I", "He" e "They".'
    ]
  },

  // Seção de exercícios interativos (mantenha-a)
  interactiveExercises: {
    title: '6. Exercícios Interativos',
    description: 'Pratique o que aprendeu com exercícios interativos de arrastar e soltar, múltipla escolha e preenchimento de lacunas.'
  }
};