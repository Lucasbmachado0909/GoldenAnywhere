// src/modules/auth/types/auth.types.ts
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'developer' | 'student' | 'admin';
  avatar?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}