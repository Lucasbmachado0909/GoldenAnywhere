// src/modules/lessons/pages/Lesson6.tsx
import React, { useState } from 'react';
import LessonHeader from '../components/LessonHeader';
import { ProgressBar } from '../components/ProgressBar';
import VideoSection from '../components/VideoSection';
import AdverbsFrequencySection from '../components/AdverbsFrequencySection';
import DailyRoutineSection from '../components/DailyRoutineSection';
import VocabularySection from '../components/VocabularySection';
import SentenceStructureSection from '../components/SentenceStructureSection';
import LessonNavigation from '../components/LessonNavigation';
import ReadingComprehensionExercise from '../../exercises/components/ReadingComprehensionExercise';
import GrammarExercise from '../../exercises/components/GrammarExercise';
import TranslationExercise from '../../exercises/components/TranslationExercise';
import TrueFalseExercise from '../../exercises/components/TrueFalseExercise';
import QuizSection from '../components/QuizSection';
import { lesson6QuizConfig } from '../data/quizzes/lesson6Quiz';
import { 
  lesson6Vocabulary, 
  cristianoRoutineReading, 
  lesson6Exercises, 
  translationQuestions 
} from '../data/lesson6Data';
import type { VideoResource, QuizSummary } from '../../../types';

const Lesson6: React.FC = () => {
  // Estados para o quiz
  const [isQuizPassed, setIsQuizPassed] = useState(false);
  const [quizAttempted, setQuizAttempted] = useState(false);
  const [currentQuizSummary, setCurrentQuizSummary] = useState<QuizSummary | null>(null);

  // Definir recurso de vídeo para a Lição 6
  const lessonVideo: VideoResource = {
    id: 'lesson6_intro',
    title: 'Introdução à Lição 6: Daily Routine & Adverbs of Frequency',
    src: '/video/lessons/lesson6/VideoLesson6.mp4',
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
      <LessonHeader title="Daily Routine & Adverbs of Frequency" />
      <ProgressBar progress={isQuizPassed ? 100 : 0} total={100} />
      
      <div className="space-y-12 mt-8">
        {/* Seção de vídeo */}
        <VideoSection
          title={lessonVideo.title}
          description="Bem-vindo(a) à sexta aula do seu curso de inglês! Hoje, vamos revisar o Simple Present com atividades diárias e aprender os advérbios de frequência (always, usually, sometimes, never). Vamos começar?"
          videoResource={lessonVideo}
        />

        {/* Seção educativa: Adverbs of Frequency */}
        <AdverbsFrequencySection
          title="Adverbs of Frequency"
          description="Aprenda a usar always, usually, sometimes, never para expressar frequência de ações."
        />

        {/* Seção educativa: Daily Routine */}
        <DailyRoutineSection
          title="Daily Routine Vocabulary"
          description="Aprenda vocabulário essencial para falar sobre sua rotina diária em inglês."
        />

        {/* Seção de vocabulário da Lição 6 */}
        <VocabularySection
          title="Vocabulário Essencial"
          description="Expanda seu vocabulário com atividades da rotina diária e advérbios de frequência para expressar hábitos e frequência."
          groups={lesson6Vocabulary.groups}
        />
        
        {/* Estrutura de frases */}
        <SentenceStructureSection 
          title="Estruturas de Frases"
          structure={{
            parts: ["Sujeito", "Advérbio", "Verbo", "Complemento"]
          }}
          attention={{
            content: "Lembre-se: Com verbos normais, o advérbio vem ANTES do verbo. Com verbo 'to be', o advérbio vem DEPOIS. Ordem de frequência: Always (100%) → Usually (80%) → Sometimes (50%) → Never (0%)."
          }}
          examples={[
            { english: "I always wake up at 7 a.m.", portuguese: "Eu sempre acordo às 7 da manhã." },
            { english: "She usually takes a shower in the morning.", portuguese: "Ela geralmente toma banho de manhã." },
            { english: "We sometimes watch TV at night.", portuguese: "Nós às vezes assistimos TV à noite." },
            { english: "He is never late for work.", portuguese: "Ele nunca se atrasa para o trabalho." }
          ]}
        />

        {/* Reading Comprehension - Cristiano Ronaldo's Routine */}
        <section id="reading" className="pt-6">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">📖 Reading Comprehension</h2>
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <span className="text-2xl">⚽</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-800">{cristianoRoutineReading.title}</h3>
                <p className="text-gray-600">Leia sobre a rotina diária de uma pessoa famosa</p>
              </div>
            </div>

            <ReadingComprehensionExercise 
              text={cristianoRoutineReading.text}
              questions={cristianoRoutineReading.questions}
              title="Perguntas de Compreensão"
              instruction="Responda às perguntas baseadas no texto:"
            />
          </div>
        </section>
        
        {/* Seção de exercícios interativos */}
        <section id="exercises" className="pt-6">
          <h2 className="text-3xl font-bold text-purple-800 mb-8">Exercícios Práticos</h2>
          
          {/* Guided Practice - Adverbs of Frequency */}
          <div className="mt-10">
            <GrammarExercise 
              title="Guided Practice – Complete com Advérbios de Frequência"
              instruction="Complete as frases com o advérbio de frequência correto:"
              questions={lesson6Exercises.guidedPractice}
            />
          </div>

          {/* True/False Exercise */}
          <div className="mt-10">
            <TrueFalseExercise
              onComplete={() => console.log('True/False exercise completed')}
            />
          </div>

          {/* Speaking Practice Questions */}
          <div className="mt-10">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <span className="text-2xl">🎤</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-800">Speaking Practice</h3>
                  <p className="text-gray-600">Pratique falando sobre sua rotina</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <p className="text-blue-800">
                  <strong>🎯 Instruções:</strong> Use os advérbios de frequência para responder às perguntas. 
                  Grave sua resposta no celular e escute para se autoavaliar.
                </p>
              </div>

              <div className="space-y-4">
                {lesson6Exercises.speakingQuestions.map((item, index) => (
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
                      <strong>Dica:</strong> {item.explanation}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800">
                  <strong>💡 Sugestão autodidata:</strong> Grave sua resposta no celular e escute para se autoavaliar. 
                  Pratique até conseguir responder com fluência.
                </p>
              </div>
            </div>
          </div>

          {/* Completion Exercise */}
          <div className="mt-10">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <span className="text-2xl">✏️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-800">Completion Exercise</h3>
                  <p className="text-gray-600">Complete as frases com o advérbio correto</p>
                </div>
              </div>

              <div className="space-y-4">
                {lesson6Exercises.completionExercise.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <p className="font-medium text-gray-800 mb-2">
                      {index + 1}. {item.sentence} <span className="text-blue-600">{item.hint}</span>
                    </p>
                    <div className="bg-gray-50 rounded p-3">
                      <p className="text-gray-700">
                        <strong>Resposta:</strong> {item.sentence.replace('______', item.correctAnswer)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Exercício de tradução */}
          <div className="mt-10">
            <TranslationExercise 
              title="Exercício de Tradução"
              instruction="Traduza para o inglês usando advérbios de frequência:"
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
            quizConfig={lesson6QuizConfig} 
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
          prevLessonId="lesson5"
          nextLessonId="lesson7"
          prevText="Lição Anterior: Family & Possessives"
          nextText="Próxima Lição: [TÍTULO DA PRÓXIMA LIÇÃO]"
          isCompleted={isQuizPassed}
        />
      </div>
    </div>
  );
};

export default Lesson6;