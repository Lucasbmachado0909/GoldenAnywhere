// src/modules/common/components/Navbar.tsx
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ProgressContext } from '../../../contexts/ProgressContext';
import { useAuth } from '../../../contexts/AuthContext';
import Logo from './Logo';

const Navbar = () => {
  const { progress } = useContext(ProgressContext);
  const { user, logout, isAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
    setShowUserMenu(false);
  };
  
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/app" className="flex items-center">
            <Logo className="h-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/app" 
              className={`${isActive('/') ? 'text-indigo-600 font-medium' : 'text-gray-600 hover:text-indigo-600'} transition-colors`}
            >
              Início
            </Link>
            <a 
              href="/#courses" 
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Cursos
            </a>
            <a 
            href="/app/dashboard" // 🔧 Deve ter /app
            className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
            Dashboard
            </a>
            <a
              href="/#contact" 
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Contato
            </a>
          </nav>
          
          {/* User Info */}
          {isAuthenticated && user ? (
            <div className="hidden md:flex items-center space-x-4">
              <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                Nível: {progress.level}
              </div>
              <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {progress.points} pontos
              </div>
              
              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  <span className="text-sm font-medium">{user.name}</span>
                  <span className="text-lg">{user.avatar}</span>
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-700">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Sair
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/login"
                className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
              >
                Entrar
              </Link>
            </div>
          )}
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-indigo-600 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pb-4">
              <Link 
                to="/" 
                className={`${isActive('/') ? 'text-indigo-600 font-medium' : 'text-gray-600'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Início
              </Link>
              <a 
                href="/#courses" 
                className="text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cursos
              </a>
              <Link 
                to="/dashboard" 
                className={`${isActive('/dashboard') ? 'text-indigo-600 font-medium' : 'text-gray-600'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <a 
                href="/#contact" 
                className="text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </a>
              
              {/* User Info (Mobile) */}
              {isAuthenticated && user ? (
                <>
                  <div className="flex space-x-2 pt-2">
                    <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                      Nível: {progress.level}
                    </div>
                    <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {progress.points} pontos
                    </div>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-sm font-medium text-gray-700 mb-2">{user.name}</p>
                    <button
                      onClick={handleLogout}
                      className="text-sm text-red-600 hover:text-red-700"
                    >
                      Sair
                    </button>
                  </div>
                </>
              ) : (
                <Link
                  to="/login"
                  className="text-indigo-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Entrar
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;