// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import type { User, LoginCredentials, AuthState } from '../modules/auth/types/auth.types';
import { DEV_CREDENTIALS, TEST_CREDENTIALS } from '../modules/auth/data/credentials';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<boolean>;
  register: (data: { name: string; email: string; password: string }) => Promise<boolean>;
  logout: () => void;
  checkAuth: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthAction = 
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGIN_FAILURE' }
  | { type: 'LOGOUT' }
  | { type: 'CHECK_AUTH'; payload: User | null };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, isLoading: true };
    case 'LOGIN_SUCCESS':
      return { 
        user: action.payload, 
        isAuthenticated: true, 
        isLoading: false 
      };
    case 'LOGIN_FAILURE':
      return { 
        user: null, 
        isAuthenticated: false, 
        isLoading: false 
      };
    case 'LOGOUT':
      return { 
        user: null, 
        isAuthenticated: false, 
        isLoading: false 
      };
    case 'CHECK_AUTH':
      return {
        user: action.payload,
        isAuthenticated: !!action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false,
    isLoading: true
  });

  const login = async (credentials: LoginCredentials): Promise<boolean> => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      let user: User | null = null;

      // Verificar credenciais de desenvolvedor
      if (credentials.email === DEV_CREDENTIALS.email && 
          credentials.password === DEV_CREDENTIALS.password) {
        user = DEV_CREDENTIALS.user;
      }
      // Verificar credenciais de teste
      else if (credentials.email === TEST_CREDENTIALS.email && 
               credentials.password === TEST_CREDENTIALS.password) {
        user = TEST_CREDENTIALS.user;
      }
      // Verificar usuários registrados no localStorage
      else {
        const registeredUsers = JSON.parse(localStorage.getItem('registered_users') || '[]');
        const foundUser = registeredUsers.find((u: any) => 
          u.email === credentials.email && u.password === credentials.password
        );
        
        if (foundUser) {
          user = {
            id: foundUser.id,
            name: foundUser.name,
            email: foundUser.email,
            role: 'student',
            avatar: '🎓'
          };
        }
      }

      if (user) {
        localStorage.setItem('auth_user', JSON.stringify(user));
        localStorage.setItem('auth_timestamp', Date.now().toString());
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
        return true;
      } else {
        dispatch({ type: 'LOGIN_FAILURE' });
        return false;
      }
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE' });
      return false;
    }
  };

  const register = async (data: { name: string; email: string; password: string }): Promise<boolean> => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Verificar se o email já existe
      const registeredUsers = JSON.parse(localStorage.getItem('registered_users') || '[]');
      const emailExists = registeredUsers.some((u: any) => u.email === data.email);
      
      // Verificar também nas credenciais predefinidas
      const predefinedEmails = [DEV_CREDENTIALS.email, TEST_CREDENTIALS.email];
      const isPredefinedEmail = predefinedEmails.includes(data.email);
      
      if (emailExists || isPredefinedEmail) {
        dispatch({ type: 'LOGIN_FAILURE' });
        return false;
      }
      
      // Criar novo usuário
      const newUser = {
        id: Date.now().toString(),
        name: data.name,
        email: data.email,
        password: data.password, // Em produção, isso deveria ser hasheado
        createdAt: new Date().toISOString()
      };
      
      // Salvar na lista de usuários registrados
      const updatedUsers = [...registeredUsers, newUser];
      localStorage.setItem('registered_users', JSON.stringify(updatedUsers));
      
      // Criar objeto de usuário para o contexto
      const user: User = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: 'student',
        avatar: '🎓'
      };
      
      // Fazer login automático após registro
      localStorage.setItem('auth_user', JSON.stringify(user));
      localStorage.setItem('auth_timestamp', Date.now().toString());
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      return true;
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE' });
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_user');
    localStorage.removeItem('auth_timestamp');
    dispatch({ type: 'LOGOUT' });
  };

  const checkAuth = () => {
    const savedUser = localStorage.getItem('auth_user');
    const timestamp = localStorage.getItem('auth_timestamp');
    
    if (savedUser && timestamp) {
      try {
        const user = JSON.parse(savedUser);
        const loginTime = parseInt(timestamp);
        const now = Date.now();
        const sessionDuration = 24 * 60 * 60 * 1000; // 24 horas

        if (now - loginTime < sessionDuration) {
          dispatch({ type: 'CHECK_AUTH', payload: user });
        } else {
          // Sessão expirada
          logout();
        }
      } catch {
        dispatch({ type: 'CHECK_AUTH', payload: null });
      }
    } else {
      dispatch({ type: 'CHECK_AUTH', payload: null });
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{
      ...state,
      login,
      register,
      logout,
      checkAuth
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};