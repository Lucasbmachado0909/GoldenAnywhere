// src/modules/lessons/types.ts
import type { SentenceExample, PronounItem, VerbItem } from '../../types';

export interface ProgressBarProps {
  progress: number;
  total: number;
}

export interface PronounsSectionProps {
  title: string;
  items: PronounItem[];
  tip: {
    title: string;
    content: string[];
  };
}

export interface VerbsSectionProps {
  title: string;
  items: VerbItem[];
  audioSection: {
    title: string;
    description: string;
  };
}

export interface SentenceStructureSectionProps {
  title: string;
  structure: {
    parts: string[];
  };
  attention: {
    content: string;
  };
  examples: SentenceExample[];
}

export interface FinalTaskSectionProps {
  title: string;
  subtitle: string;
  tasks: string[];
}

export interface LessonNavigationProps {
  prevLessonId: string;
  nextLessonId: string;
  prevText: string;
  nextText: string;
}