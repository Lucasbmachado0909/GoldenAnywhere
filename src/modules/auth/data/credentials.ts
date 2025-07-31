// src/modules/auth/data/credentials.ts
import type { User } from '../types/auth.types';

export const DEV_CREDENTIALS = {
  email: 'lucas.dev@goldenanywhere.com',
  password: 'GoldenDev2024!',
  user: {
    id: 'dev-001',
    name: 'Lucas (Desenvolvedor)',
    email: 'lucas.dev@goldenanywhere.com',
    role: 'developer' as const,
    avatar: '👨‍💻'
  } as User
};

export const TEST_CREDENTIALS = {
  email: 'student@goldenanywhere.com',
  password: 'Student123!',
  user: {
    id: 'student-001',
    name: 'Estudante Teste',
    email: 'student@goldenanywhere.com',
    role: 'student' as const,
    avatar: '🎓'
  } as User
};