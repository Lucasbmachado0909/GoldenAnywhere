// src/modules/lessons/hooks/useListeningTranscription.tsx
import { useState } from 'react';
import type { ListeningTranscriptionActivity } from '../../../types';

interface UseListeningTranscriptionProps {
  activities: ListeningTranscriptionActivity[];
}

export const useListeningTranscription = ({ activities }: UseListeningTranscriptionProps) => {
  const [userTranscriptions, setUserTranscriptions] = useState<string[]>(Array(activities.length).fill(''));
  const [showFeedback, setShowFeedback] = useState(false);

  const handleTranscriptionChange = (index: number, value: string) => {
    const newTranscriptions = [...userTranscriptions];
    newTranscriptions[index] = value;
    setUserTranscriptions(newTranscriptions);
  };

  const checkTranscriptions = () => {
    setShowFeedback(true);
    const feedbackElement = document.getElementById('listening-feedback');
    if (feedbackElement) {
      window.scrollTo({
        top: feedbackElement.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const calculateScore = () => {
    return userTranscriptions.filter((transcription, index) => 
      transcription.trim().toLowerCase() === activities[index].correctTranscription.toLowerCase()
    ).length;
  };

  const resetTranscriptions = () => {
    setUserTranscriptions(Array(activities.length).fill(''));
    setShowFeedback(false);
  };

  return {
    userTranscriptions,
    showFeedback,
    handleTranscriptionChange,
    checkTranscriptions,
    calculateScore,
    resetTranscriptions
  };
};