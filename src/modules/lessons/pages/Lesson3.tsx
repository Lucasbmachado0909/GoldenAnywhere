// src/modules/lessons/pages/Lesson3.tsx
import React, { useState } from 'react';
import LessonHeader from '../components/LessonHeader';
import { ProgressBar } from '../components/ProgressBar';
import VideoSection from '../components/VideoSection';
import QuestionFormationSection from '../components/QuestionFormationSection'; // 🆕 IMPORT CORRETO
import VocabularySection from '../components/VocabularySection';
import SentenceStructureSection from '../components/SentenceStructureSection';
import LessonNavigation from '../components/LessonNavigation';
import SentenceCorrectionExercise from '../../exercises/components/SentenceCorrectionExercise';
import NegativeTransformationExercise from '../../exercises/components/NegativeTransformationExercise'; // 🆕 NOVO IMPORT
import WhQuestionExercise from '../../exercises/components/WhQuestionExercise'; // 🆕 NOVO IMPORT
import GrammarExercise from '../../exercises/components/GrammarExercise';
import TranslationExercise from '../../exercises/components/TranslationExercise';
import QuizSection from '../components/QuizSection';
import { lesson3Quiz } from '../data/quizzes/lesson3Quiz'; // 🆕 IMPORT DO QUIZ (será criado)
import type {VideoResource, QuizSummary } from '../../../types';

const Lesson3: React.FC = () => {
  // Estados para o quiz (mesmo padrão da Lição 1 e 2)
  const [isQuizPassed, setIsQuizPassed] = useState(false);
  const [quizAttempted, setQuizAttempted] = useState(false);
  const [currentQuizSummary, setCurrentQuizSummary] = useState<QuizSummary | null>(null);

  // Definir recurso de vídeo para a Lição 3
  const lessonVideo: VideoResource = {
    id: 'lesson3_intro',
    title: 'Introdução à Lição 3: Perguntas no Presente Simples',
    src: '/video/lessons/lesson3/VideoLesson3.mp4',
    duration: 0,
  };

  // Dados para a seção de vocabulário da Lição 3
  const vocabularyData = {
    groups: [
      {
        name: 'daily_routines',
        displayText: 'Rotinas Diárias',
        audioSrc: '/audio/lessons/lesson3/DailyRoutines.mp3',
        items: [
          { word: 'wake up', translation: 'acordar' },
          { word: 'brush teeth', translation: 'escovar os dentes' },
          { word: 'have breakfast', translation: 'tomar café da manhã' },
          { word: 'go to work', translation: 'ir para o trabalho' },
          { word: 'have lunch', translation: 'almoçar' },
          { word: 'go home', translation: 'ir para casa' },
          { word: 'have dinner', translation: 'jantar' },
          { word: 'go to bed', translation: 'ir para a cama' },
        ],
      },
      {
        name: 'time_expressions',
        displayText: 'Expressões de Tempo',
        audioSrc: '/audio/lessons/lesson3/TimeExpressions.mp3',
        items: [
          { word: 'in the morning', translation: 'de manhã' },
          { word: 'in the afternoon', translation: 'de tarde' },
          { word: 'in the evening', translation: 'de noite (início)' },
          { word: 'at night', translation: 'de noite (tarde)' },
          { word: 'every day', translation: 'todo dia' },
          { word: 'on weekends', translation: 'nos fins de semana' },
          { word: 'usually', translation: 'geralmente' },
          { word: 'sometimes', translation: 'às vezes' },
        ],
      },
      {
        name: 'question_words',
        displayText: 'Palavras Interrogativas',
        audioSrc: '/audio/lessons/lesson3/QuestionWords.mp3',
        items: [
          { word: 'what', translation: 'o que/qual' },
          { word: 'where', translation: 'onde' },
          { word: 'when', translation: 'quando' },
          { word: 'who', translation: 'quem' },
          { word: 'why', translation: 'por que' },
          { word: 'how', translation: 'como' },
          { word: 'what time', translation: 'a que horas' },
        ],
      },
      {
        name: 'habits_frequency',
        displayText: 'Hábitos e Frequência',
        audioSrc: '/audio/lessons/lesson3/HabitsFrequency.mp3',
        items: [
          { word: 'always', translation: 'sempre' },
          { word: 'often', translation: 'frequentemente' },
          { word: 'usually', translation: 'geralmente' },
          { word: 'sometimes', translation: 'às vezes' },
          { word: 'rarely', translation: 'raramente' },
          { word: 'never', translation: 'nunca' },
        ],
      },
    ],
  };

  // Dados para o exercício de correção de frases da Lição 3
  const sentenceCorrectionQuestions = [
    {
      originalSentence: "Does you like pizza?",
      incorrectSentence: "Does you like pizza?",
      correctSentence: "Do you like pizza?"
    },
    {
      originalSentence: "Do she works here?",
      incorrectSentence: "Do she works here?",
      correctSentence: "Does she work here?"
    },
    {
      originalSentence: "Where do she live?",
      incorrectSentence: "Where do she live?",
      correctSentence: "Where does she live?"
    }
  ];

  // 🆕 NOVOS DADOS: Exercício de transformação em negativas
  const negativeTransformationQuestions = [
    {
      id: 1,
      affirmativeSentence: "I work at the club.",
      correctNegative: "I don't work at the club",
      acceptableAnswers: ["I don't work at the club", "I do not work at the club"]
    },
    {
      id: 2,
      affirmativeSentence: "He plays tennis.",
      correctNegative: "He doesn't play tennis",
      acceptableAnswers: ["He doesn't play tennis", "He does not play tennis"]
    },
    {
      id: 3,
      affirmativeSentence: "We study in the evening.",
      correctNegative: "We don't study in the evening",
      acceptableAnswers: ["We don't study in the evening", "We do not study in the evening"]
    }
  ];

  // 🆕 NOVOS DADOS: Exercício de Wh- Questions
  const whQuestionQuestions = [
    {
      id: 1,
      question: "do you eat for lunch?",
      answer: "I eat pasta.",
      correctWhWord: "What",
      options: ["What", "Where", "When"]
    },
    {
      id: 2,
      question: "is the supermarket?",
      answer: "Next to the school.",
      correctWhWord: "Where",
      options: ["What", "Where", "When"]
    },
    {
      id: 3,
      question: "do they go to the cinema?",
      answer: "On Saturdays.",
      correctWhWord: "When",
      options: ["What", "Where", "When"]
    }
  ];

  // Dados para o exercício de gramática da Lição 3
  const grammarQuestions = [
    {
      id: 1,
      sentence: "___ you go to the bank on Fridays?",
      options: ["Do", "Does", "Are", "Is"],
      correctAnswer: 0
    },
    {
      id: 2,
      sentence: "___ Lisa study at the library?",
      options: ["Do", "Does", "Are", "Is"],
      correctAnswer: 1
    },
    {
      id: 3,
      sentence: "___ they live downtown?",
      options: ["Do", "Does", "Are", "Is"],
      correctAnswer: 0
    },
    {
      id: 4,
      sentence: "He ___ (not) like coffee.",
      options: ["don't", "doesn't", "isn't", "aren't"],
      correctAnswer: 1
    }
  ];

  // Dados para o exercício de tradução da Lição 3
  const translationQuestions = [
    {
      id: 1,
      portuguese: "Você trabalha no centro?",
      correctAnswer: "Do you work downtown?",
      acceptableAnswers: ["Do you work downtown"]
    },
    {
      id: 2,
      portuguese: "Ela mora no Brasil?",
      correctAnswer: "Does she live in Brazil?",
      acceptableAnswers: ["Does she live in Brazil"]
    },
    {
      id: 3,
      portuguese: "O que você come no café da manhã?",
      correctAnswer: "What do you eat for breakfast?",
      acceptableAnswers: ["What do you eat for breakfast"]
    },
    {
      id: 4,
      portuguese: "Onde ele trabalha?",
      correctAnswer: "Where does he work?",
      acceptableAnswers: ["Where does he work"]
    },
    {
      id: 5,
      portuguese: "Quando você estuda inglês?",
      correctAnswer: "When do you study English?",
      acceptableAnswers: ["When do you study English"]
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
      <LessonHeader title="Perguntas no Presente Simples (DO/DOES)" />
      <ProgressBar progress={isQuizPassed ? 100 : 0} total={100} />
      
      <div className="space-y-12 mt-8">
        {/* Seção de vídeo */}
        <VideoSection
          title={lessonVideo.title}
          description="Bem-vindo(a) à terceira aula do seu curso de inglês! Hoje, vamos aprender a formar perguntas no Presente Simples usando os auxiliares DO e DOES, e como responder a elas. Vamos começar?"
          videoResource={lessonVideo}
        />

        {/* 🆕 SEÇÃO COMPLETA: Explicações detalhadas sobre DO/DOES */}
        <QuestionFormationSection
          title="Formação de Perguntas com DO/DOES"
          description="Aprenda a estrutura completa para fazer perguntas, frases negativas e usar palavras interrogativas no Presente Simples."
        />

        {/* Seção de vocabulário da Lição 3 */}
        <VocabularySection
          title="Vocabulário Essencial"
          description="Expanda seu vocabulário com palavras e frases comuns para fazer e responder perguntas sobre rotinas e hábitos."
          groups={vocabularyData.groups}
        />
        
        <SentenceStructureSection 
          title="Estrutura de Perguntas no Presente Simples"
          structure={{
            parts: ["Wh-word (opcional)", "Do/Does", "Sujeito", "Verbo (forma base)", "Complemento?"]
          }}
          attention={{
            content: "Lembre-se: Use 'Do' para I, you, we, they. Use 'Does' para he, she, it. O verbo principal SEMPRE fica na forma base após Do/Does."
          }}
          examples={[
            { english: "Do you work here?", portuguese: "Você trabalha aqui?" },
            { english: "Does she live in Brazil?", portuguese: "Ela mora no Brasil?" },
            { english: "What do you do?", portuguese: "O que você faz?" },
            { english: "Where does he go?", portuguese: "Onde ele vai?" }
          ]}
        />
        
        {/* Seção de exercícios interativos */}
        <section id="exercises" className="pt-6">
          <h2 className="text-3xl font-bold text-purple-800 mb-8">Exercícios Práticos</h2>
                  
          {/* Exercício de correção de frases */}
          <div className="mt-10">
            <SentenceCorrectionExercise questions={sentenceCorrectionQuestions} />
          </div>

          {/* 🆕 NOVO EXERCÍCIO: Transformação em negativas */}
          <div className="mt-10">
            <NegativeTransformationExercise questions={negativeTransformationQuestions} />
          </div>

          {/* 🆕 NOVO EXERCÍCIO: Wh- Questions */}
          <div className="mt-10">
            <WhQuestionExercise questions={whQuestionQuestions} />
          </div>

          {/* Exercício de gramática */}
          <div className="mt-10">
            <GrammarExercise 
              title="Parte 2 – Grammar (4 questões)"
              instruction="Complete a frase com a forma correta do verbo:"
              questions={grammarQuestions}
            />
          </div>
          
          {/* Exercício de tradução */}
          <div className="mt-10">
            <TranslationExercise 
              title="Exercício de Tradução"
              instruction="Traduza para o inglês:"
              questions={translationQuestions}
            />
          </div>
        </section>

        {/* Seção do Quiz Final */}
        <section id="final-quiz" className="pt-6">
          <h2 className="text-3xl font-bold text-purple-800 mb-8">🎯 Quiz Final da Lição</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-yellow-800">
              <strong>📋 Instruções:</strong> Complete o quiz abaixo para finalizar esta lição. 
              Você precisa acertar pelo menos <strong>70%</strong> das perguntas para avançar para a próxima lição.
            </p>
          </div>
          <QuizSection 
            quizConfig={lesson3Quiz} 
            onQuizComplete={handleQuizComplete} 
          />
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
          prevLessonId="lesson2"
          nextLessonId="lesson4"
          prevText="Lição Anterior: Verbos no Presente Simples"
          nextText="Próxima Lição: [TÍTULO DA PRÓXIMA LIÇÃO]"
          isCompleted={isQuizPassed}
        />
      </div>
    </div>
  );
};

export default Lesson3;