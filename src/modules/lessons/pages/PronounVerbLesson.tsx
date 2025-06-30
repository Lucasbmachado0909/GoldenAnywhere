// src/modules/lessons/pages/PronounVerbLesson.tsx
import React from 'react';
import LessonHeader from '../components/LessonHeader';
import { ProgressBar } from '../components/ProgressBar';
import PronounsSection from '../components/PronounsSection';
import VerbsSection from '../components/VerbsSection';
import SentenceStructureSection from '../components/SentenceStructureSection';
import FinalTaskSection from '../components/FinalTaskSection';
import LessonNavigation from '../components/LessonNavigation';
import InteractiveExercises from '../../exercises/components/InteractiveExercises';
import SentenceCorrectionExercise from '../../exercises/components/SentenceCorrectionExercise';
import ReadingComprehensionExercise from '../../exercises/components/ReadingComprehensionExercise';
import VerbFillExercise from '../../exercises/components/VerbFillExercise';
import type { ListeningMultipleChoiceQuestion, ReadingComprehensionQuestion } from '../../../types';

const PronounVerbLesson: React.FC = () => {
  // Dados para o exercício de correção de frases
  const sentenceCorrectionQuestions = [
    {
      originalSentence: "He are a doctor.",
      incorrectSentence: "He are a doctor.",
      correctSentence: "He is a doctor"
    },
    {
      originalSentence: "They is my friends.",
      incorrectSentence: "They is my friends.",
      correctSentence: "They are my friends"
    },
    {
      originalSentence: "I is a student.",
      incorrectSentence: "I is a student.",
      correctSentence: "I am a student"
    }
  ];

  // Dados para o exercício de compreensão de texto
  const readingComprehensionData = {
    text: "My name is Lucas. I am 21 years old. I study engineering.\nMy sister is Anna. She works in a school.\nWe play video games together.\nMy parents like pizza. They eat pizza every Friday.",
    questions: [
      {
        question: "What does Lucas study?",
        correctAnswer: "Engineering"
      },
      {
        question: "Who works in a school?",
        correctAnswer: "Anna"
      },
      {
        question: "What do Lucas and Anna do together?",
        correctAnswer: "Play video games"
      },
      {
        question: "What do his parents like?",
        correctAnswer: "Pizza"
      },
      {
        question: "When do they eat pizza?",
        correctAnswer: "Every Friday"
      }
    ] as ReadingComprehensionQuestion[]
  };

  // Dados para o exercício de preenchimento com verbos
  const verbFillSentences = [
    { prefix: "I", suffix: "to the park every Sunday.", answer: "go" },
    { prefix: "She", suffix: "English very well.", answer: "speaks" },
    { prefix: "They", suffix: "in London.", answer: "live" }
  ];

  // Dados para o exercício de listening
  const listeningQuestions: ListeningMultipleChoiceQuestion[] = [
    {
      questionText: "What does the speaker say about her job?",
      audioUrl: "/audio/lessons/lesson1/question1.mp3",
      options: ["She is a teacher", "She is a doctor", "She is a student", "She is an engineer"],
      correctOptionIndex: 1
    },
    {
      questionText: "Where do they live?",
      audioUrl: "/audio/lessons/lesson1/question2.mp3",
      options: ["In New York", "In London", "In Paris", "In Tokyo"],
      correctOptionIndex: 2
    }
  ];

  // Dados para a seção de verbos
  const verbItems = [
    { verb: 'to be (am/is/are)', translation: 'ser/estar', audioGroup: 'be' },
    { verb: 'to have', translation: 'ter', audioGroup: 'other' },
    { verb: 'to go', translation: 'ir', audioGroup: 'other' },
    { verb: 'to do', translation: 'fazer', audioGroup: 'other' },
    { verb: 'to like', translation: 'gostar', audioGroup: 'other' }
  ];
  
  // Grupos de áudio para os verbos com caminhos atualizados
  const verbAudioGroups = [
    {
      name: 'be',
      displayText: 'Verbo "To Be"',
      audioSrc: '/audio/lessons/lesson1/Tobeverbs.mp3'  // Caminho atualizado
    },
    {
      name: 'other',
      displayText: 'Outros Verbos',
      audioSrc: '/audio/lessons/lesson1/Toverbs.mp3'  // Caminho atualizado
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <LessonHeader title="Pronomes e Verbos Básicos" />
      <ProgressBar progress={0} total={5} />
      
      <div className="space-y-12 mt-8">
        {/* Seções de conteúdo com props necessárias */}
        <PronounsSection 
          title="Pronomes Pessoais" 
          items={[
            { pronoun: 'I', translation: 'Eu' },
            { pronoun: 'You', translation: 'Você' },
            { pronoun: 'He', translation: 'Ele' },
            { pronoun: 'She', translation: 'Ela' },
            { pronoun: 'It', translation: 'Ele/Ela (para objetos/animais)' },
            { pronoun: 'We', translation: 'Nós' },
            { pronoun: 'They', translation: 'Eles/Elas' }
          ]}
          tip={{
            title: "Dica",
            content: ["Os pronomes pessoais em inglês são usados para substituir nomes de pessoas, lugares ou coisas."]
          }}
        />
        
        <VerbsSection 
          title="Verbos Básicos"
          items={verbItems}
          audioSection={{
            title: "Pronúncia dos Verbos",
            description: "Escute a pronúncia dos verbos em inglês. Clique nos botões abaixo para ouvir cada grupo de verbos."
          }}
          audioGroups={verbAudioGroups}
        />
        
        <SentenceStructureSection 
          title="Estrutura de Frases Básicas"
          structure={{
            parts: ["Sujeito", "Verbo", "Complemento"]
          }}
          attention={{
            content: "Em inglês, o sujeito é geralmente obrigatório nas frases, diferente do português."
          }}
          examples={[
            { english: "I study English.", portuguese: "Eu estudo inglês." },
            { english: "She works in a hospital.", portuguese: "Ela trabalha em um hospital." },
            { english: "They live in London.", portuguese: "Eles moram em Londres." }
          ]}
        />
        
        {/* Seção de exercícios interativos */}
        <section id="exercises" className="pt-6">
          <h2 className="text-3xl font-bold text-purple-800 mb-8">Exercícios Práticos</h2>
          
          {/* Exercícios interativos originais */}
          <InteractiveExercises listeningQuestions={listeningQuestions} />
          
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
          
          {/* Exercício de preenchimento com verbos */}
          <div className="mt-10">
            <VerbFillExercise sentences={verbFillSentences} />
          </div>
        </section>
        
        {/* Tarefa final */}
        <FinalTaskSection 
          title="Tarefa Final"
          subtitle="Aplique o que você aprendeu nesta lição"
          tasks={["Escreva 3 frases sobre você usando pronomes e verbos diferentes."]}
        />
        
        {/* Navegação da lição */}
        <LessonNavigation 
          prevLessonId="dashboard" 
          nextLessonId="2"
          prevText="Voltar ao Dashboard"
          nextText="Próxima Lição: Substantivos e Artigos"
        />
      </div>
    </div>
  );
};

export default PronounVerbLesson;