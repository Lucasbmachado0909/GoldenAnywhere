// src/modules/auth/hooks/useAuth.tsx
import { useState } from 'react';
import { useAuth as useAuthContext } from '../../../contexts/AuthContext';
import type { LoginCredentials } from '../types/auth.types';

interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const useAuth = () => {
  const authContext = useAuthContext();
  const [error, setError] = useState<string>('');

  const handleLogin = async (credentials: LoginCredentials) => {
    setError('');
    
    if (!credentials.email || !credentials.password) {
      setError('Email e senha são obrigatórios');
      return false;
    }

    if (!isValidEmail(credentials.email)) {
      setError('Email inválido');
      return false;
    }

    const success = await authContext.login(credentials);
    if (!success) {
      setError('Email ou senha incorretos');
    }
    
    return success;
  };

  const handleRegister = async (data: RegisterData) => {
    setError('');
    
    // Validações
    if (!data.name || !data.email || !data.password || !data.confirmPassword) {
      setError('Todos os campos são obrigatórios');
      return false;
    }

    if (!isValidEmail(data.email)) {
      setError('Email inválido');
      return false;
    }

    if (data.password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      return false;
    }

    if (data.password !== data.confirmPassword) {
      setError('As senhas não coincidem');
      return false;
    }

    // Chamar o método register do contexto
    const success = await authContext.register({
      name: data.name,
      email: data.email,
      password: data.password
    });

    if (!success) {
      setError('Este email já está em uso. Tente outro email.');
    }
    
    return success;
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return {
    ...authContext,
    handleLogin,
    handleRegister,
    error,
    clearError: () => setError('')
  };
};