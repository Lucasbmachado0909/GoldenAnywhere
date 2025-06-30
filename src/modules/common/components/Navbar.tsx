import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ProgressContext } from '../../../contexts/ProgressContext';
import Logo from './Logo'; // Importe o componente Logo

const Navbar = () => {
  const { progress } = useContext(ProgressContext);
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Substituído pelo componente Logo */}
          <Link to="/" className="flex items-center">
            <Logo className="h-auto" /> {/* Componente Logo implementado aqui */}
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
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
            <Link 
              to="/dashboard" 
              className={`${isActive('/dashboard') ? 'text-indigo-600 font-medium' : 'text-gray-600 hover:text-indigo-600'} transition-colors`}
            >
              Dashboard
            </Link>
            <a 
              href="/#contact" 
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Contato
            </a>
          </nav>
          
          {/* User Info */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
              Nível: {progress.level}
            </div>
            <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {progress.points} pontos
            </div>
          </div>
          
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
              <div className="flex space-x-2 pt-2">
                <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                  Nível: {progress.level}
                </div>
                <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {progress.points} pontos
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;