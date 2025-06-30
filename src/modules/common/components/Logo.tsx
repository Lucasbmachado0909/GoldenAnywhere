// src/modules/common/components/Logo.tsx
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <>
      {/* Versão para mobile */}
      <img 
        src="/images/logo-small.png" 
        alt="GoldenAnywhere - Escola de Idiomas" 
        className={`block sm:hidden h-auto w-auto ${className}`}
      />
      
      {/* Versão para tablet */}
      <img 
        src="/images/logo-medium.png" 
        alt="GoldenAnywhere - Escola de Idiomas" 
        className={`hidden sm:block md:hidden h-auto w-auto ${className}`}
      />
      
      {/* Versão para desktop */}
      <img 
        src="/images/logo-large.png" 
        alt="GoldenAnywhere - Escola de Idiomas" 
        className={`hidden md:block h-auto w-auto ${className}`}
      />
    </>
  );
};

export default Logo;