// src/modules/auth/pages/LoginPage.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';
import Logo from '../../common/components/Logo';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/app'); // Mudança: redirecionar para /app em vez de /app/dashboard
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Logo className="h-16 mx-auto" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Bem-vindo de volta!
          </h2>
          <p className="text-gray-600">
            Faça login para continuar seus estudos
          </p>
        </div>

        {/* Card de Login */}
        <div className="bg-white py-8 px-6 shadow-xl rounded-lg border border-gray-100">
          <LoginForm onSuccess={handleLoginSuccess} />
        </div>

        {/* Footer */}
        <div className="text-center space-y-4">
          <p className="text-sm text-gray-600">
            Não tem uma conta?{' '}
            <Link 
              to="/register" 
              className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
            >
              Cadastre-se aqui
            </Link>
          </p>
          
          <Link
            to="/"
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            ← Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;