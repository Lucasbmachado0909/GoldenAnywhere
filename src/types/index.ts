// src/types/index.ts
import React from 'react';

export interface Progress {
  completedLessons: string[];
  completedExercises: string[];
  level: string;
  points: number;
}

// Tipos para o contexto de progresso
export interface ProgressContextType {
  progress: Progress;
  updateProgress: (newProgress: Progress) => void;
}

// Tipo para recursos de vídeo
export interface VideoResource {
  id: string;
  title: string;
  src: string;
  duration?: number;
  thumbnail?: string;
}

// Tipos para os cursos
export interface Course {
  id: string;
  title: string;
  description: string;
  status: 'available' | 'coming_soon';
  colorAccent: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: number; // em minutos
  tags: string[];
}

// Tipos para as atividades de preenchimento de lacunas
export interface FillInTheBlankQuestion {
  phrase: string;
  answer: string;
}

// Tipos para atividades de correção de frases
export interface SentenceCorrectionQuestion {
  originalSentence: string;
  incorrectSentence?: string; // Adicionado para compatibilidade
  correctSentence: string;
  explanation?: string; // Tornando opcional para compatibilidade
}

// Tipos para atividades de compreensão de leitura
export interface ReadingComprehensionQuestion {
  id?: number; // ADICIONADO para compatibilidade
  question: string;
  questionText?: string; // Adicionado para compatibilidade
  options?: string[];
  correctAnswer: string;
  explanation?: string; // ADICIONADO para compatibilidade
}

// Tipos para atividades de escuta e transcrição
export interface ListeningTranscriptionActivity {
  audioUrl: string;
  instruction?: string; // Tornando opcional para compatibilidade
  correctTranscription: string;
}

// Tipos para atividades de escuta e múltipla escolha
export interface ListeningMultipleChoiceQuestion {
  audioUrl: string;
  questionText: string;
  options: string[];
  correctOptionIndex: number;
}

// Tipos para atividades de produção escrita
export interface WritingPracticeActivity {
  instruction: string;
  prompts?: string[];
  exampleSentences?: string[];
}

// Estrutura geral para um exercício
export type ExerciseType = 
  | { type: 'fill-in-the-blank'; data: FillInTheBlankQuestion[] }
  | { type: 'sentence-correction'; data: SentenceCorrectionQuestion[] }
  | { type: 'reading-comprehension'; text: string; questions: ReadingComprehensionQuestion[] }
  | { type: 'listening-transcription'; data: ListeningTranscriptionActivity[] }
  | { type: 'listening-multiple-choice'; data: ListeningMultipleChoiceQuestion[] }
  | { type: 'writing-practice'; data: WritingPracticeActivity };

// Tipos para as features
export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Tipo para atividades de preenchimento de lacunas com verbo
export interface FillInBlankActivity {
  prefix: string;
  suffix: string;
  answer: string;
}

// Tipos específicos para os componentes da aplicação
export interface PronounItem {
  pronoun: string;
  translation: string;
  example?: string; // Tornando opcional para compatibilidade
}

export interface VerbItem {
  verb: string;
  translation: string;
  example?: string; // Tornando opcional para compatibilidade
}

export interface AudioItem {
  text: string;
  audioUrl: string;
}

export interface SentenceExample {
  english: string;
  portuguese: string;
}

// 🆕 TIPOS PARA VOCABULÁRIO - COMPATÍVEIS COM VOCABULARYSECTION
export interface VocabularyItem {
  word: string;
  translation: string;
  audioSrc?: string;
}

export interface VocabularyGroup {
  name: string; // OBRIGATÓRIO para VocabularySection
  displayText: string; // OBRIGATÓRIO para VocabularySection
  audioSrc: string; // OBRIGATÓRIO para VocabularySection
  title?: string; // OPCIONAL para compatibilidade
  items: VocabularyItem[];
}

// 🆕 NOVOS TIPOS PARA O QUIZ
export interface QuizOption {
  text: string;
  value: string | number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'fill-in-the-blank' | 'reading-comprehension';
  options?: QuizOption[];
  correctAnswer: string | number;
  explanation?: string;
  points: number;
  readingText?: string; // Para questões de compreensão de leitura
}

export interface QuizConfig {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  passingScorePercentage: number; // Ex: 70 para 70%
}

export interface QuizResult {
  questionId: string;
  isCorrect: boolean;
  userAnswer: string | number;
  correctAnswer: string | number;
  questionText: string;
  options?: QuizOption[];
  explanation?: string;
}

export interface QuizSummary {
  totalQuestions: number;
  correctAnswersCount: number;
  scorePercentage: number;
  passed: boolean;
  results: QuizResult[];
}

// �� TIPOS PARA EXERCÍCIOS ESPECÍFICOS DA LIÇÃO 5 - CORRIGIDOS
export interface GrammarExerciseQuestion {
  id: number;
  question: string;
  sentence: string;
  options: string[];
  correctAnswer: number; // MUDADO PARA number (índice da resposta)
  explanation: string;
}

export interface TranslationQuestion {
  id: number;
  portuguese: string;
  correctAnswer: string;
  explanation: string;
}

export interface FamilyQuestion {
  id: number;
  question: string;
  sampleAnswer: string;
  explanation: string;
}

// 🆕 TIPO PARA MATCHING EXERCISE
export interface MatchingExerciseItem {
  word: string;
  definition: string;
  correct: string;
}

export * from './audio.types';