// src/types/index.ts (versão corrigida)
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
  question: string;
  questionText?: string; // Adicionado para compatibilidade
  options?: string[];
  correctAnswer: string;
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

export interface PronounItem {
  pronoun: string;
  translation: string;
}

export interface VerbItem {
  verb: string;
  translation: string;
}

export interface SentenceExample {
  english: string;
  portuguese: string;
}