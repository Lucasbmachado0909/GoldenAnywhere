// src/types/audio.types.ts
export interface AudioRecordingExercise {
  id: string;
  title: string;
  instruction: string;
  referenceAudio: string;
  targetText: string;
  maxDuration: number; // em segundos
}

export interface RecordingState {
  isRecording: boolean;
  isPlaying: boolean;
  isPaused: boolean;
  duration: number;
  audioBlob: Blob | null;
  audioUrl: string | null;
  error: string | null;
}

export interface AudioPermissions {
  granted: boolean;
  denied: boolean;
  loading: boolean;
  error: string | null;
}

export interface AudioPlayerState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  loading: boolean;
}

// 🆕 NOVOS TIPOS para Speaking Exercise
export interface SpeakingItem {
  id: string;
  text: string;
  expectedResponse?: string;
  audioReference?: string;
  maxDuration?: number;
}

export interface SpeakingPart {
  id: string;
  title: string;
  type: 'repetition' | 'questions' | 'personal';
  instruction: string;
  items: SpeakingItem[];
  referenceAudio?: string;
}

export interface SpeakingExercise {
  id: string;
  title: string;
  instruction: string;
  parts: SpeakingPart[];
}

export interface SpeakingProgress {
  currentPart: number;
  currentItem: number;
  completedParts: string[];
  completedItems: string[];
}