// src/modules/lessons/pages/Lesson5.tsx
import React, { useState } from 'react';
import LessonHeader from '../components/LessonHeader';
import { ProgressBar } from '../components/ProgressBar';
import VideoSection from '../components/VideoSection';
import FamilyVocabularySection from '../components/FamilyVocabularySection';
import PossessiveAdjectivesSection from '../components/PossessiveAdjectivesSection';
import VocabularySection from '../components/VocabularySection';
import SentenceStructureSection from '../components/SentenceStructureSection';
import LessonNavigation from '../components/LessonNavigation';
import ReadingComprehensionExercise from '../../exercises/components/ReadingComprehensionExercise';
import GrammarExercise from '../../exercises/components/GrammarExercise';
import TranslationExercise from '../../exercises/components/TranslationExercise';
import FamilyMatchingExercise from '../../exercises/components/FamilyMatchingExercise';
import PossessiveCompletionExercise from '../../exercises/components/PossessiveCompletionExercise';
import QuizSection from '../components/QuizSection';
import { lesson5QuizConfig } from '../data/quizzes/lesson5Quiz';
import { 
  lesson5Vocabulary, 
  mariaFamilyReading, 
  lesson5Exercises, 
  translationQuestions 
} from '../data/lesson5Data';
import type { VideoResource, QuizSummary, FamilyQuestion } from '../../../types';

const Lesson5: React.FC = () => {
  // Estados para o quiz
  const [isQuizPassed, setIsQuizPassed] = useState(false);
  const [quizAttempted, setQuizAttempted] = useState(false);
  const [currentQuizSummary, setCurrentQuizSummary] = useState<QuizSummary | null>(null);

  // Definir recurso de vídeo para a Lição 5
  const lessonVideo: VideoResource = {
    id: 'lesson5_intro',
    title: 'Introdução à Lição 5: Family & Possessives',
    src: '/video/lessons/lesson5/VideoLesson5.mp4',
    duration: 0,
  };

  // Handler para a conclusão do quiz
  const handleQuizComplete = (summary: QuizSummary) => {
    console.log('Quiz completado:', summary);
    setQuizAttempted(true);
    setCurrentQuizSummary(summary);
    setIsQuizPassed(summary.passed);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <LessonHeader title="Family & Possessives" />
      <ProgressBar progress={isQuizPassed ? 100 : 0} total={100} />
      
      <div className="space-y-12 mt-8">
        {/* Seção de vídeo */}
        <VideoSection
          title={lessonVideo.title}
          description="Bem-vindo(a) à quinta aula do seu curso de inglês! Hoje, vamos aprender sobre vocabulário de família (father, mother, brother, sister, friend) e possessive adjectives (my, your, his, her, our, their). Vamos começar?"
          videoResource={lessonVideo}
        />

        {/* Seção educativa: Family Vocabulary */}
        <FamilyVocabularySection
          title="Family Vocabulary"
          description="Aprenda as palavras básicas da família em inglês com exemplos práticos e áudio."
        />

        {/* Seção educativa: Possessive Adjectives */}
        <PossessiveAdjectivesSection
          title="Possessive Adjectives"
          description="Aprenda a usar my, your, his, her, our, their para expressar posse e relacionamentos."
        />

        {/* Seção de vocabulário da Lição 5 */}
        <VocabularySection
          title="Vocabulário Essencial"
          description="Expanda seu vocabulário com palavras da família e possessive adjectives para expressar relacionamentos e posse."
          groups={lesson5Vocabulary.groups}
        />
        
        {/* Estrutura de frases */}
        <SentenceStructureSection 
          title="Estruturas de Frases"
          structure={{
            parts: ["Possessive", "Substantivo", "Verbo", "Complemento"]
          }}
          attention={{
            content: "Lembre-se: Possessive adjectives sempre vêm ANTES do substantivo. Use 'Does' para he/she/it e 'Do' para I/you/we/they. Exemplos: my father, her sister, their friends."
          }}
          examples={[
            { english: "My father drives to work.", portuguese: "Meu pai dirige para o trabalho." },
            { english: "Her sister studies English.", portuguese: "A irmã dela estuda inglês." },
            { english: "Does your mother take the bus?", portuguese: "Sua mãe pega o ônibus?" },
                        { english: "We watch TV with our family.", portuguese: "Nós assistimos TV com nossa família." }
          ]}
        />

        {/* Reading Comprehension - Maria's Family */}
        <section id="reading" className="pt-6">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">📖 Reading Comprehension</h2>
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-800">{mariaFamilyReading.title}</h3>
                <p className="text-gray-600">Leia o texto sobre a família da Maria e responda às perguntas</p>
              </div>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <p className="text-gray-800 leading-relaxed text-lg">
                {mariaFamilyReading.text}
              </p>
            </div>

            <ReadingComprehensionExercise 
              text={mariaFamilyReading.text}
              questions={mariaFamilyReading.questions}
              title="Perguntas de Compreensão"
              instruction="Responda às perguntas baseadas no texto:"
            />
          </div>
        </section>
        
        {/* Seção de exercícios interativos */}
        <section id="exercises" className="pt-6">
          <h2 className="text-3xl font-bold text-purple-800 mb-8">Exercícios Práticos</h2>
          
          {/* Guided Practice - Possessive Adjectives */}
          <div className="mt-10">
            <GrammarExercise 
              title="Guided Practice – Complete com Possessive Adjectives"
              instruction="Complete as frases com o possessive adjective correto:"
              questions={lesson5Exercises.guidedPractice}
            />
          </div>

          {/* Family Matching Exercise */}
          <div className="mt-10">
            <FamilyMatchingExercise
              onComplete={(score: number) => console.log('Family matching completed with score:', score)}
            />
          </div>

          {/* Possessive Completion Exercise */}
          <div className="mt-10">
            <PossessiveCompletionExercise
              onComplete={(score: number) => console.log('Possessive completion completed with score:', score)}
            />
          </div>

          {/* Family Questions Practice */}
          <div className="mt-10">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <span className="text-2xl">❓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-800">Family Questions Practice</h3>
                  <p className="text-gray-600">Pratique perguntas e respostas sobre família</p>
                </div>
              </div>

              <div className="space-y-4">
                {lesson5Exercises.familyQuestions.map((item: FamilyQuestion, index: number) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                    <p className="font-medium text-gray-800 mb-2">
                      {index + 1}. {item.question}
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded p-3 mb-2">
                      <p className="text-green-800">
                        <strong>Exemplo de resposta:</strong> {item.sampleAnswer}
                      </p>
                    </div>
                    <p className="text-gray-600 text-sm">
                      <strong>Explicação:</strong> {item.explanation}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800">
                  <strong>💡 Dica:</strong> Pratique respondendo essas perguntas em voz alta. 
                  Use sempre "Yes/No" seguido da forma correta do verbo auxiliar.
                </p>
              </div>
            </div>
          </div>
          
          {/* Exercício de tradução */}
          <div className="mt-10">
            <TranslationExercise 
              title="Exercício de Tradução"
              instruction="Traduza para o inglês usando possessive adjectives:"
              questions={translationQuestions}
            />
          </div>
        </section>
        
        {/* Seção do Quiz Final */}
        <section id="final-quiz" className="pt-6">
          <h2 className="text-3xl font-bold text-purple-800 mb-8">🎯 Quiz Final da Lição</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-yellow-800">
              <strong>📋 Instruções:</strong> Complete o quiz abaixo para finalizar esta lição. 
              Você precisa acertar pelo menos <strong>70%</strong> das perguntas (7 de 10) para avançar para a próxima lição.
            </p>
          </div>
          <QuizSection 
            quizConfig={lesson5QuizConfig} 
            onQuizComplete={handleQuizComplete} 
          />
        </section>

        {/* Mensagem de status do Quiz */}
        {quizAttempted && currentQuizSummary && (
          <div className={`p-6 rounded-lg text-center border-2 ${
            isQuizPassed 
              ? 'bg-green-50 text-green-800 border-green-300' 
              : 'bg-red-50 text-red-800 border-red-300'
          }`}>
            <div className="text-4xl mb-4">
              {isQuizPassed ? '🎉' : '📚'}
            </div>
            <p className="text-xl font-bold mb-2">
              {isQuizPassed 
                ? 'Quiz Final Aprovado!' 
                : 'Continue Estudando!'}
            </p>
            <p className="text-lg">
              {isQuizPassed 
                ? `Parabéns! Você acertou ${currentQuizSummary.correctAnswersCount} de ${currentQuizSummary.totalQuestions} perguntas (${currentQuizSummary.scorePercentage}%). Agora você pode seguir para a próxima lição.`
                : `Você acertou ${currentQuizSummary.correctAnswersCount} de ${currentQuizSummary.totalQuestions} perguntas (${currentQuizSummary.scorePercentage}%). Revise o conteúdo e tente novamente para atingir os 70% necessários.`}
            </p>
          </div>
        )}
        
        {/* Navegação da lição */}
        <LessonNavigation 
          prevLessonId="lesson4"
          nextLessonId="lesson6"
          prevText="Lição Anterior: Object Pronouns e Why Questions"
          nextText="Próxima Lição: [TÍTULO DA PRÓXIMA LIÇÃO]"
          isCompleted={isQuizPassed}
        />
      </div>
    </div>
  );
};

export default Lesson5;