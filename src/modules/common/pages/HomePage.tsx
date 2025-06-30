import { useContext } from 'react';
import { ProgressContext } from '../../../contexts/ProgressContext';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import CourseGrid from '../components/CourseGrid';
import FeatureSection from '../components/FeatureSection';
import ProgressSection from '../components/ProgressSection';
import { featuredCourses, beginnerCourses } from '../../../data/courses/courseData';

// Ícones para a seção de recursos
const InteractiveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
  </svg>
);

const ProgressIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const CommunityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const features = [
  {
    icon: <InteractiveIcon />,
    title: 'Aprendizado Interativo',
    description: 'Exercícios práticos e interativos para fixar o conteúdo de forma eficaz.'
  },
  {
    icon: <ProgressIcon />,
    title: 'Acompanhamento de Progresso',
    description: 'Acompanhe seu desenvolvimento e visualize seu avanço em tempo real.'
  },
  {
    icon: <CommunityIcon />,
    title: 'Comunidade de Aprendizado',
    description: 'Conecte-se com outros estudantes e compartilhe sua jornada de aprendizado.'
  }
];

const HomePage = () => {
  const { progress } = useContext(ProgressContext);
  
  // Determinar qual lição recomendar com base no progresso
  const getNextLessonId = () => {
    if (progress.completedLessons.length === 0) {
      return 'lesson1';
    }
    
    // Encontrar a próxima lição não completada
    for (let i = 1; i <= 6; i++) {
      const lessonId = `lesson${i}`;
      if (!progress.completedLessons.includes(lessonId)) {
        return lessonId;
      }
    }
    
    // Se todas as lições foram completadas, recomendar a primeira
    return 'lesson1';
  };
  
  const nextLessonId = getNextLessonId();
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection 
        title="Aprenda inglês de forma interativa e eficiente"
        subtitle="Aulas dinâmicas, exercícios interativos e acompanhamento personalizado para você dominar o inglês no seu próprio ritmo."
        ctaText="Começar agora"
        ctaLink={`/lessons/${nextLessonId}`}
      />
      
      {/* Progress & Featured Courses Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Progress Section (1/3 width on large screens) */}
            <div className="lg:col-span-1">
              <ProgressSection />
            </div>
            
            {/* Featured Courses (2/3 width on large screens) */}
            <div className="lg:col-span-2">
              <SectionHeading 
                title="Lições em Destaque" 
                subtitle="Comece sua jornada de aprendizado com estas lições cuidadosamente selecionadas."
                alignment="left"
              />
              <CourseGrid 
                courses={featuredCourses} 
                columns={2}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* All Courses Section */}
      <section id="courses" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Todas as Lições" 
            subtitle="Explore todas as nossas lições de inglês, desde o nível básico até o avançado."
          />
          
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 border-l-4 border-indigo-500 pl-3">
              Nível Iniciante
            </h3>
            <CourseGrid courses={beginnerCourses} columns={3} />
          </div>
          
          {/* Adicionar mais níveis quando disponíveis */}
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4 bg-indigo-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Por que escolher nossa plataforma?" 
            subtitle="Descubra os recursos que tornam nossa plataforma de aprendizado de inglês única."
          />
          
          <FeatureSection features={features} />
        </div>
      </section>
      
      {/* Testimonials Section (opcional) */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="O que nossos alunos dizem" 
            subtitle="Veja o que os estudantes estão falando sobre sua experiência com nossa plataforma."
          />
          
          {/* Adicionar componente de depoimentos aqui */}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 px-4 bg-indigo-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Pronto para começar sua jornada?</h2>
          <p className="text-indigo-100 mb-8">
            Junte-se a milhares de estudantes que estão aprendendo inglês de forma eficaz e divertida.
          </p>
          <a 
            href={`/lessons/${nextLessonId}`}
            className="bg-white text-indigo-600 hover:bg-indigo-50 font-bold py-3 px-8 rounded-lg shadow-lg transition-colors inline-block"
          >
            Começar agora
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;