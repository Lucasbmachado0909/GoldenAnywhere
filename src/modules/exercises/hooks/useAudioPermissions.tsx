// src/modules/exercises/hooks/useAudioPermissions.tsx
import { useState, useEffect } from 'react';
import type { AudioPermissions } from '../../../types';

export const useAudioPermissions = () => {
  const [permissions, setPermissions] = useState<AudioPermissions>({
    granted: false,
    denied: false,
    loading: false,
    error: null
  });

  const requestPermission = async () => {
    setPermissions(prev => ({ ...prev, loading: true, error: null }));

    try {
      // Verificar se o navegador suporta getUserMedia
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Seu navegador não suporta gravação de áudio');
      }

      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100
        } 
      });

      // Parar o stream imediatamente após obter permissão
      stream.getTracks().forEach(track => track.stop());

      setPermissions({
        granted: true,
        denied: false,
        loading: false,
        error: null
      });

      return true;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro ao acessar microfone';
      
      setPermissions({
        granted: false,
        denied: true,
        loading: false,
        error: errorMessage
      });

      return false;
    }
  };

  const checkPermission = async () => {
    try {
      const result = await navigator.permissions.query({ name: 'microphone' as PermissionName });
      
      if (result.state === 'granted') {
        setPermissions(prev => ({ ...prev, granted: true, denied: false }));
      } else if (result.state === 'denied') {
        setPermissions(prev => ({ ...prev, granted: false, denied: true }));
      }
    } catch (error) {
      // Fallback se permissions API não estiver disponível
      console.log('Permissions API não disponível');
    }
  };

  useEffect(() => {
    checkPermission();
  }, []);

  return {
    permissions,
    requestPermission,
    checkPermission
  };
};