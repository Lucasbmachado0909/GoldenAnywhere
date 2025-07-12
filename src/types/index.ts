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

// Tipo para recursos de vídeo - movido para o topo para melhor organização
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

// Resto dos tipos existentes...
export interface FillInTheBlankQuestion {
  phrase: string;
  answer: string;
}

export interface SentenceCorrectionQuestion {
  originalSentence: string;
  incorrectSentence?: string;
  correctSentence: string;
  explanation?: string;
}

export interface ReadingComprehensionQuestion {
  question: string;
  questionText?: string;
  options?: string[];
  correctAnswer: string;
}

export interface ListeningTranscriptionActivity {
  audioUrl: string;
  instruction?: string;
  correctTranscription: string;
}

export interface ListeningMultipleChoiceQuestion {
  audioUrl: string;
  questionText: string;
  options: string[];
  correctOptionIndex: number;
}

export interface WritingPracticeActivity {
  instruction: string;
  prompts?: string[];
  exampleSentences?: string[];
}

export type ExerciseType = 
  | { type: 'fill-in-the-blank'; data: FillInTheBlankQuestion[] }
  | { type: 'sentence-correction'; data: SentenceCorrectionQuestion[] }
  | { type: 'reading-comprehension'; text: string; questions: ReadingComprehensionQuestion[] }
  | { type: 'listening-transcription'; data: ListeningTranscriptionActivity[] }
  | { type: 'listening-multiple-choice'; data: ListeningMultipleChoiceQuestion[] }
  | { type: 'writing-practice'; data: WritingPracticeActivity };

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FillInBlankActivity {
  prefix: string;
  suffix: string;
  answer: string;
}

export interface PronounItem {
  pronoun: string;
  translation: string;
  example?: string;
}

export interface VerbItem {
  verb: string;
  translation: string;
  example?: string;
}

export interface AudioItem {
  text: string;
  audioUrl: string;
}

export interface SentenceExample {
  english: string;
  portuguese: string;
}