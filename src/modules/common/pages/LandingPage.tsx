// src/modules/common/pages/LandingPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Logo className="h-10" />
            </div>
            
            {/* Botões de Ação no Header */}
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
              >
                Entrar
              </Link>
              <Link
                to="/register"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm"
              >
                Cadastrar
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16 sm:py-20">
            {/* Logo Principal */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full p-6 shadow-2xl">
                  <span className="text-4xl">🏆</span>
                </div>
              </div>
            </div>

            {/* Título Principal */}
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              <span className="block">Aprenda Inglês</span>
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                do Seu Jeito
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transforme seu aprendizado de inglês com lições interativas, exercícios práticos 
              e um sistema de progresso personalizado. Comece sua jornada hoje mesmo!
            </p>

            {/* Botões de Ação Principais */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/register"
                className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                🚀 Começar Gratuitamente
              </Link>
              <Link
                to="/login"
                className="w-full sm:w-auto bg-white hover:bg-gray-50 text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-indigo-200 hover:border-indigo-300 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                👋 Já tenho uma conta
              </Link>
            </div>

            {/* Indicadores de Benefícios */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Totalmente gratuito
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Sem compromisso
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Progresso personalizado
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Por que escolher o GoldenAnywhere?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Nossa plataforma foi desenvolvida para tornar o aprendizado de inglês 
                mais eficiente e divertido.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Lições Interativas
                </h3>
                <p className="text-gray-600">
                  Aprenda com lições estruturadas que incluem vídeos, áudios e exercícios práticos.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Progresso Personalizado
                </h3>
                <p className="text-gray-600">
                  Acompanhe seu desenvolvimento com métricas detalhadas e conquistas.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Exercícios Práticos
                </h3>
                <p className="text-gray-600">
                  Pratique com exercícios interativos que reforçam o aprendizado.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Pronto para começar sua jornada?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Junte-se a milhares de estudantes que já estão aprendendo inglês conosco.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="bg-white hover:bg-gray-100 text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Criar Conta Gratuita
              </Link>
              <Link
                to="/login"
                className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Fazer Login
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Logo className="h-8 filter brightness-0 invert" />
            </div>
            <p className="text-gray-400 mb-4">
              Desenvolvido com ❤️ por Lucas
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Sobre</a>
              <a href="#" className="hover:text-white transition-colors">Contato</a>
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;