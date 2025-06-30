import { type ReactNode } from 'react';

interface BasicLessonTemplateProps {
  children: ReactNode;
}

const BasicLessonTemplate = ({ children }: BasicLessonTemplateProps) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Container principal para o conteúdo da aula */}
      <div className="max-w-4xl w-full mx-auto bg-white shadow-2xl rounded-xl p-8 sm:p-10 lg:p-12 my-8">
        {children}
      </div>
    </div>
  );
};

export default BasicLessonTemplate;