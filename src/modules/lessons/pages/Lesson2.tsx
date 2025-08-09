// src/modules/lessons/pages/Lesson2.tsx
import React, { useState } from 'react';
import LessonHeader from '../components/LessonHeader';
import { ProgressBar } from '../components/ProgressBar';
import VideoSection from '../components/VideoSection';
import PresentSimpleSection from '../components/PresentSimpleSection';
import VocabularySection from '../components/VocabularySection';
import SentenceStructureSection from '../components/SentenceStructureSection';
import LessonNavigation from '../components/LessonNavigation';
import SentenceCorrectionExercise from '../../exercises/components/SentenceCorrectionExercise';
import ReadingComprehensionExercise from '../../exercises/components/ReadingComprehensionExercise';
import GrammarExercise from '../../exercises/components/GrammarExercise';
import VerbFillExercise from '../../exercises/components/VerbFillExercise';
import TranslationExercise from '../../exercises/components/TranslationExercise'; // 🆕 NOVO IMPORT
import QuizSection from '../components/QuizSection';
import { lesson2Quiz } from '../data/quizzes/lesson2Quiz';
import type { ListeningMultipleChoiceQuestion, ReadingComprehensionQuestion, VideoResource, QuizSummary } from '../../../types';

const Lesson2: React.FC = () => {
  // Estados para o quiz (mesmo padrão da Lição 1)
  const [isQuizPassed, setIsQuizPassed] = useState(false);
  const [quizAttempted, setQuizAttempted] = useState(false);
  const [currentQuizSummary, setCurrentQuizSummary] = useState<QuizSummary | null>(null);

  // Definir recurso de vídeo (placeholder por enquanto)
  const lessonVideo: VideoResource = {
    id: 'lesson2_intro',
    title: 'Introdução à Lição 2: Verbos no Presente Simples',
    src: '/video/lessons/lesson2/VideoLesson2.mp4',
    duration: 0,
  };

  // 🆕 NOVOS DADOS: Verbos no Presente Simples
  const presentSimpleData = {
    verbs: [
      { verb: 'play', translation: 'jogar/brincar' },
      { verb: 'eat', translation: 'comer' },
      { verb: 'drink', translation: 'beber' },
      { verb: 'work', translation: 'trabalhar' },
      { verb: 'study', translation: 'estudar' },
      { verb: 'like', translation: 'gostar' },
      { verb: 'go', translation: 'ir' },
    ]
  };

  // Dados para a seção de vocabulário (mantendo as cores e o restante)
  const vocabularyData = {
    groups: [
      {
        name: 'colors',
        displayText: 'Cores',
        audioSrc: '/audio/lessons/lesson2/Collors.mp3',
        items: [
          { word: 'red', translation: 'vermelho' },
          { word: 'blue', translation: 'azul' },
          { word: 'green', translation: 'verde' },
          { word: 'yellow', translation: 'amarelo' },
          { word: 'black', translation: 'preto' },
          { word: 'white', translation: 'branco' },
          { word: 'orange', translation: 'laranja' },
          { word: 'pink', translation: 'rosa' },
          { word: 'purple', translation: 'roxo' },
          { word: 'brown', translation: 'marrom' },
        ],
      },
      {
        name: 'animals',
        displayText: 'Animais',
        audioSrc: '/audio/lessons/lesson2/Animals.mp3',
        items: [
          { word: 'dog', translation: 'cachorro' },
          { word: 'cat', translation: 'gato' },
          { word: 'bird', translation: 'pássaro' },
          { word: 'fish', translation: 'peixe' },
          { word: 'horse', translation: 'cavalo' },
          { word: 'elephant', translation: 'elefante' },
          { word: 'lion', translation: 'leão' },
          { word: 'monkey', translation: 'macaco' },
          { word: 'cow', translation: 'vaca' },
          { word: 'rabbit', translation: 'coelho' },
        ],
      },
      {
        name: 'food',
        displayText: 'Comidas',
        audioSrc: '/audio/lessons/lesson2/Food.mp3',
        items: [
          { word: 'pizza', translation: 'pizza' },
          { word: 'rice', translation: 'arroz' },
          { word: 'bread', translation: 'pão' },
          { word: 'salad', translation: 'salada' },
          { word: 'chicken', translation: 'frango' },
          { word: 'apple', translation: 'maçã' },
          { word: 'banana', translation: 'banana' },
          { word: 'cheese', translation: 'queijo' },
        ],
      },
      {
        name: 'drinks',
        displayText: 'Bebidas',
        audioSrc: '/audio/lessons/lesson2/Drinks.mp3',
        items: [
          { word: 'water', translation: 'água' },
          { word: 'juice', translation: 'suco' },
          { word: 'soda', translation: 'refrigerante' },
          { word: 'coffee', translation: 'café' },
          { word: 'tea', translation: 'chá' },
          { word: 'milk', translation: 'leite' },
        ],
      },
      {
        name: 'sports',
        displayText: 'Esportes',
        audioSrc: '/audio/lessons/lesson2/Sports.mp3',
        items: [
          { word: 'football (soccer)', translation: 'futebol' },
          { word: 'basketball', translation: 'basquete' },
          { word: 'volleyball', translation: 'vôlei' },
          { word: 'tennis', translation: 'tênis' },
          { word: 'swimming', translation: 'natação' },
          { word: 'running', translation: 'corrida' },
        ],
      }
    ],
  };

  // Dados para o exercício de correção de frases (adaptados para Lição 2)
  const sentenceCorrectionQuestions = [
    {
      originalSentence: "He go to school every day.",
      incorrectSentence: "He go to school every day.",
      correctSentence: "He goes to school every day."
    },
    {
      originalSentence: "I goes to work.",
      incorrectSentence: "I goes to work.",
      correctSentence: "I go to work."
    },
    {
      originalSentence: "She like pizza.",
      incorrectSentence: "She like pizza.",
      correctSentence: "She likes pizza."
    }
  ];

  // Dados para o exercício de compreensão de texto (adaptados para Lição 2)
  const readingComprehensionData = {
    text: "Hi! My name is Lucas. I'm 20 years old. I like red and green. I eat rice, beans, and meat every day. I drink coffee in the morning and water at lunch. On weekends, I play football with my friends. My sister loves animals. She has a cat and a rabbit. She drinks tea. We go to school in the morning. We go to the supermarket on Saturday.",
    questions: [
      {
        question: "What colors does Lucas like?",
        correctAnswer: "Red and green"
      },
      {
        question: "What does he drink in the morning?",
        correctAnswer: "Coffee"
      },
      {
        question: "Where do Lucas and his sister go on Saturday?",
        correctAnswer: "To the supermarket"
      },
      {
        question: "What sport does Lucas play?",
        correctAnswer: "Football"
      },
      {
        question: "What does he eat every day?",
        correctAnswer: "Rice, beans, and meat"
      }
    ] as ReadingComprehensionQuestion[]
  };

  // Dados para o exercício de gramática
  const grammarQuestions = [
    {
      id: 4,
      sentence: "He ___ (eat) chicken.",
      options: ["eat", "eats", "eated", "eating"],
      correctAnswer: 1
    },
    {
      id: 5,
      sentence: "They ___ (go) to school.",
      options: ["goes", "goed", "go", "going"],
      correctAnswer: 2
    },
    {
      id: 6,
      sentence: "She ___ (drink) tea.",
      options: ["drinks", "drink", "drank", "drinking"],
      correctAnswer: 0
    },
    {
      id: 7,
      sentence: "I ___ (like) coffee.",
      options: ["likes", "liking", "like", "liked"],
      correctAnswer: 2
    }
  ];

  // Dados para o exercício de preenchimento com verbos (adaptados para Lição 2)
  const verbFillSentences = [
    { prefix: "She", suffix: "to school every day.", answer: "goes" },
    { prefix: "They", suffix: "pizza on Fridays.", answer: "eat" },
    { prefix: "I", suffix: "coffee in the morning.", answer: "drink" }
  ];

  // 🆕 NOVOS DADOS: Exercício de Tradução
  const translationQuestions = [
    {
      id: 1,
      portuguese: "Eu gosto de amarelo.",
      correctAnswer: "I like yellow.",
      acceptableAnswers: ["I like yellow", "I like the color yellow"]
    },
    {
      id: 2,
      portuguese: "Nós comemos arroz e feijão.",
      correctAnswer: "We eat rice and beans.",
      acceptableAnswers: ["We eat rice and beans", "We eat beans and rice"]
    },
    {
      id: 3,
      portuguese: "Ela joga vôlei.",
      correctAnswer: "She plays volleyball.",
      acceptableAnswers: ["She plays volleyball", "She plays volley"]
    },
    {
      id: 4,
      portuguese: "Meu cachorro bebe água.",
      correctAnswer: "My dog drinks water.",
      acceptableAnswers: ["My dog drinks water"]
    },
    {
      id: 5,
      portuguese: "Eles vão ao clube.",
      correctAnswer: "They go to the club.",
      acceptableAnswers: ["They go to the club", "They go to club"]
    }
  ];

  // Dados para o exercício de listening (adaptados para Lição 2)
  const listeningQuestions: ListeningMultipleChoiceQuestion[] = [
    {
      questionText: "What animal is mentioned?",
      audioUrl: "/audio/lessons/lesson2/What animal is.mp3",
      options: ["dog", "cat", "bird", "fish"],
      correctOptionIndex: 0
    },
    {
      questionText: "What drink is mentioned?",
      audioUrl: "/audio/lessons/lesson2/The drink is.mp3",
      options: ["water", "juice", "soda", "coffee"],
      correctOptionIndex: 3
    }
  ];

  // Handler para a conclusão do quiz
  const handleQuizComplete = (summary: QuizSummary) => {
    console.log('Quiz completado:', summary);
    setQuizAttempted(true);
    setCurrentQuizSummary(summary);
    setIsQuizPassed(summary.passed);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <LessonHeader title="Verbos no Presente Simples" />
      <ProgressBar progress={isQuizPassed ? 100 : 0} total={100} />
      
      <div className="space-y-12 mt-8">
        {/* Seção de vídeo */}
        <VideoSection
          title="Introdução à Lição"
          description="Bem-vindo(a) à segunda aula do seu curso de inglês! Hoje, vamos aprofundar o uso de verbos no Presente Simples, aprender vocabulário útil para o dia a dia e entender estruturas com preposições como go to, go to the. Vamos começar?"
          videoResource={lessonVideo}
        />

        {/* 🆕 NOVA SEÇÃO: Verbos no Presente Simples */}
        <PresentSimpleSection
          title="1. Verbos no Presente Simples (usamos para falar sobre rotina)"
          description="Vamos aprofundar o uso de verbos no Presente Simples e entender como usar as preposições corretamente."
          verbs={presentSimpleData.verbs}
        />

        {/* Seção de vocabulário (mantendo as cores e o restante) */}
        <VocabularySection
          title="Vocabulário Essencial"
          description="Expanda seu vocabulário com palavras comuns em diversas categorias. Clique para ouvir a pronúncia de cada grupo."
          groups={vocabularyData.groups}
        />
        
        <SentenceStructureSection 
          title="Estrutura de Frases no Presente Simples"
          structure={{
            parts: ["Sujeito", "Verbo", "Complemento"]
          }}
          attention={{
            content: "Lembre-se: para he/she/it, adicione -s ao verbo. Para lugares, use 'go to' (funções) ou 'go to the' (lugares específicos)."
          }}
          examples={[
            { english: "I go to school.", portuguese: "Eu vou para a escola." },
            { english: "She goes to the park.", portuguese: "Ela vai ao parque." },
            { english: "They like pizza.", portuguese: "Eles gostam de pizza." },
            { english: "He drinks coffee.", portuguese: "Ele bebe café." }
          ]}
        />
        
        {/* Seção de exercícios interativos */}
        <section id="exercises" className="pt-6">
          <h2 className="text-3xl font-bold text-purple-800 mb-8">Exercícios Práticos</h2>
                  
          {/* Exercício de correção de frases */}
          <div className="mt-10">
            <SentenceCorrectionExercise questions={sentenceCorrectionQuestions} />
          </div>
          
          {/* Exercício de compreensão de texto */}
          <div className="mt-10">
            <ReadingComprehensionExercise 
              title="Compreensão de Texto"
              instruction="Leia o texto abaixo e responda às perguntas:"
              text={readingComprehensionData.text}
              questions={readingComprehensionData.questions}
            />
          </div>
          
          {/* Exercício de gramática */}
          <div className="mt-10">
            <GrammarExercise 
              title="Parte 2 – Grammar (4 questões)"
              instruction="Complete a frase com a forma correta do verbo:"
              questions={grammarQuestions}
            />
          </div>
          
          {/* Exercício de preenchimento com verbos */}
          <div className="mt-10">
            <VerbFillExercise sentences={verbFillSentences} />
          </div>
          
          {/* 🆕 NOVO EXERCÍCIO: Translation Exercise */}
          <div className="mt-10">
            <TranslationExercise 
              title="Exercício de Tradução"
              instruction="Traduza para o inglês:"
              questions={translationQuestions}
            />
          </div>
        </section>

        {/* Mensagem de status do Quiz */}
        {quizAttempted && currentQuizSummary && (
          <div className={`p-6 rounded-lg text-center border-2 ${
            isQuizPassed 
              ? 'bg-green-50 text-green-800 border-green-300' 
              : 'bg-red-50 text-red-800 border-red-300'
          }`}>
            <div className="text-4xl mb-4">
              {isQuizPassed ? '🎉' : '📚'}
            </div>
            <p className="text-xl font-bold mb-2">
              {isQuizPassed 
                ? 'Quiz Final Aprovado!' 
                : 'Continue Estudando!'}
            </p>
            <p className="text-lg">
              {isQuizPassed 
                ? `Parabéns! Você acertou ${currentQuizSummary.correctAnswersCount} de ${currentQuizSummary.totalQuestions} perguntas (${currentQuizSummary.scorePercentage}%). Agora você pode seguir para a próxima lição.`
                : `Você acertou ${currentQuizSummary.correctAnswersCount} de ${currentQuizSummary.totalQuestions} perguntas (${currentQuizSummary.scorePercentage}%). Revise o conteúdo e tente novamente para atingir os 70% necessários.`}
            </p>
          </div>
        )}
        
        {/* Navegação da lição */}
        <LessonNavigation 
          prevLessonId="lesson1"
          nextLessonId="lesson3"
          prevText="Lição Anterior: Pronomes e Verbos Básicos"
          nextText="Próxima Lição: [TÍTULO DA PRÓXIMA LIÇÃO]"
          isCompleted={isQuizPassed}
        />
      </div>
    </div>
  );
};

export default Lesson2;