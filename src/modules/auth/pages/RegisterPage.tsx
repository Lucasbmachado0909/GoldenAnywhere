// src/modules/auth/pages/RegisterPage.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterForm } from '../components/RegisterForm';
import Logo from '../../common/components/Logo';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const handleRegisterSuccess = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link to="/" className="inline-block mb-6">
            <Logo className="h-16 mx-auto" />
          </Link>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Crie sua conta
          </h2>
          <p className="text-gray-600">
            Comece sua jornada de aprendizado hoje mesmo
          </p>
        </div>

        {/* Card de Registro */}
        <div className="bg-white py-8 px-6 shadow-xl rounded-lg border border-gray-100">
          <RegisterForm onSuccess={handleRegisterSuccess} />
        </div>

        {/* Footer */}
        <div className="text-center space-y-4">
          <p className="text-sm text-gray-600">
            Já tem uma conta?{' '}
            <Link 
              to="/login" 
              className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
            >
              Faça login aqui
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

export default RegisterPage;