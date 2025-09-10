// src/modules/lessons/pages/Lesson4.tsx
import React, { useState } from 'react';
import LessonHeader from '../components/LessonHeader';
import { ProgressBar } from '../components/ProgressBar';
import VideoSection from '../components/VideoSection';
import ObjectPronounsSection from '../components/ObjectPronounsSection';
import VocabularySection from '../components/VocabularySection';
import SentenceStructureSection from '../components/SentenceStructureSection';
import LessonNavigation from '../components/LessonNavigation';
import ReadingComprehensionExercise from '../../exercises/components/ReadingComprehensionExercise';
import GrammarExercise from '../../exercises/components/GrammarExercise';
import TranslationExercise from '../../exercises/components/TranslationExercise';
import AudioRecordingExercise from '../../exercises/components/AudioRecordingExercise';
import QuizSection from '../components/QuizSection';
import { lesson4Quiz } from '../data/quizzes/lesson4Quiz';
import { lesson4Vocabulary, mariasDayReading, speakingExerciseData, lesson4Exercises } from '../data/lesson4Data';
import type { VideoResource, QuizSummary } from '../../../types';

const Lesson4: React.FC = () => {
  // Estados para o quiz
  const [isQuizPassed, setIsQuizPassed] = useState(false);
  const [quizAttempted, setQuizAttempted] = useState(false);
  const [currentQuizSummary, setCurrentQuizSummary] = useState<QuizSummary | null>(null);

  // Estados para o speaking exercise
  const [speakingCompleted, setSpeakingCompleted] = useState(false);

  // Definir recurso de vídeo para a Lição 4
  const lessonVideo: VideoResource = {
    id: 'lesson4_intro',
    title: 'Introdução à Lição 4: Object Pronouns e Why Questions',
    src: '/video/lessons/lesson4/VideoLesson4.mp4',
    duration: 0,
  };

  // Dados para exercício de tradução
  const translationQuestions = [
    {
      id: 1,
      portuguese: "Eu conheço ela.",
      correctAnswer: "I know her.",
      acceptableAnswers: ["I know her"]
    },
    {
      id: 2,
      portuguese: "Ele ajuda eles todos os dias.",
      correctAnswer: "He helps them every day.",
      acceptableAnswers: ["He helps them every day"]
    },
    {
      id: 3,
      portuguese: "Por que você estuda inglês?",
      correctAnswer: "Why do you study English?",
      acceptableAnswers: ["Why do you study English"]
    },
    {
      id: 4,
      portuguese: "Porque eu preciso disso para o trabalho.",
      correctAnswer: "Because I need it for work.",
      acceptableAnswers: ["Because I need it for work"]
    },
    {
      id: 5,
      portuguese: "Nós vemos eles no parque.",
      correctAnswer: "We see them at the park.",
      acceptableAnswers: ["We see them at the park", "We see them in the park"]
    }
  ];

  // Handler para a conclusão do quiz
  const handleQuizComplete = (summary: QuizSummary) => {
    console.log('Quiz completado:', summary);
    setQuizAttempted(true);
    setCurrentQuizSummary(summary);
    setIsQuizPassed(summary.passed);
  };

  // Handler para a conclusão do speaking exercise
  const handleSpeakingComplete = () => {
    console.log('Speaking exercise completado');
    setSpeakingCompleted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <LessonHeader title="Object Pronouns e Why Questions" />
      <ProgressBar progress={isQuizPassed ? 100 : 0} total={100} />
      
      <div className="space-y-12 mt-8">
        {/* Seção de vídeo */}
        <VideoSection
          title={lessonVideo.title}
          description="Bem-vindo(a) à quarta aula do seu curso de inglês! Hoje, vamos aprender sobre pronomes objeto (me, you, him, her, it, us, them) e como fazer perguntas com 'Why' e responder com 'Because'. Vamos começar?"
          videoResource={lessonVideo}
        />

        {/* Seção educativa: Object Pronouns e Why Questions */}
        <ObjectPronounsSection
          title="Object Pronouns e Why Questions"
          description="Aprenda a usar pronomes objeto e fazer perguntas sobre motivos com estruturas completas e exemplos práticos."
        />

        {/* Seção de vocabulário da Lição 4 */}
        <VocabularySection
          title="Vocabulário Essencial"
          description="Expanda seu vocabulário com pronomes objeto, novos verbos de rotina e expressões para falar sobre motivos e atividades diárias."
          groups={lesson4Vocabulary.groups}
        />
        
        {/* Estrutura de frases */}
        <SentenceStructureSection 
          title="Estruturas de Frases"
          structure={{
            parts: ["Sujeito", "Verbo", "Object Pronoun", "Complemento"]
          }}
          attention={{
            content: "Lembre-se: Object pronouns vêm DEPOIS do verbo. Use 'Why does' para he/she/it e 'Why do' para I/you/we/they. Sempre responda com 'Because + razão'."
          }}
          examples={[
            { english: "I know him very well.", portuguese: "Eu o conheço muito bem." },
            { english: "She helps them at work.", portuguese: "Ela ajuda eles no trabalho." },
            { english: "Why does he study English?", portuguese: "Por que ele estuda inglês?" },
            { english: "Because he needs it for his job.", portuguese: "Porque ele precisa disso para o trabalho." }
          ]}
        />

        {/* Reading Comprehension - Maria's Day */}
        <section id="reading" className="pt-6">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">📖 Reading Comprehension</h2>
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <span className="text-2xl">📚</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-800">{mariasDayReading.title}</h3>
                <p className="text-gray-600">Leia o texto sobre o dia da Maria e responda às perguntas</p>
              </div>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <p className="text-gray-800 leading-relaxed text-lg">
                {mariasDayReading.text}
              </p>
            </div>

            {/* ✅ CORRIGIDO - adicionado prop text */}
            <ReadingComprehensionExercise 
              text={mariasDayReading.text}
              questions={mariasDayReading.questions}
              title="Perguntas de Compreensão"
              instruction="Responda às perguntas baseadas no texto:"
            />
          </div>
        </section>
        
        {/* Seção de exercícios interativos */}
        <section id="exercises" className="pt-6">
          <h2 className="text-3xl font-bold text-purple-800 mb-8">Exercícios Práticos</h2>
          
          {/* Guided Practice - Object Pronouns */}
          <div className="mt-10">
            <GrammarExercise 
              title="Guided Practice – Complete as frases"
              instruction="Complete com o pronome objeto correto:"
              questions={lesson4Exercises.guidedPractice}
            />
          </div>

          {/* Why Questions Practice */}
          <div className="mt-10">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <span className="text-2xl">❓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-800">Why Questions Practice</h3>
                  <p className="text-gray-600">Responda às perguntas usando "Because + razão"</p>
                </div>
              </div>

              <div className="space-y-4">
                {lesson4Exercises.whyQuestions.map((item, index) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                    <p className="font-medium text-gray-800 mb-2">
                      {index + 1}. {item.question}
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="text-green-800">
                        <strong>Exemplo de resposta:</strong> {item.sampleAnswer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800">
                  <strong>💡 Dica:</strong> Pratique respondendo essas perguntas em voz alta. 
                  Use sempre "Because" seguido de uma razão completa.
                </p>
              </div>
            </div>
          </div>
          
          {/* Exercício de tradução */}
          <div className="mt-10">
            <TranslationExercise 
              title="Exercício de Tradução"
              instruction="Traduza para o inglês usando object pronouns:"
              questions={translationQuestions}
            />
          </div>
        </section>

        {/* 🎙️ Speaking Practice - NOVO EXERCÍCIO */}
        <section id="speaking-practice" className="pt-6">
          <h2 className="text-3xl font-bold text-purple-800 mb-8">🎙️ Speaking Practice</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <p className="text-blue-800 font-medium mb-2">
                  <strong>Novo!</strong> Exercício de Pronúncia Interativo
                </p>
                <p className="text-blue-700 text-sm">
                  Pratique sua pronúncia gravando sua voz. Este exercício é opcional, 
                  mas altamente recomendado para melhorar sua fluência.
                </p>
              </div>
            </div>
          </div>
          
          <AudioRecordingExercise 
            exercise={speakingExerciseData}
            onComplete={handleSpeakingComplete}
          />

          {speakingCompleted && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎉</span>
                <p className="text-green-800 font-medium">
                  Parabéns! Você completou o exercício de pronúncia!
                </p>
              </div>
            </div>
          )}
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
            quizConfig={lesson4Quiz} 
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
            
            {/* Feedback adicional sobre speaking */}
            {speakingCompleted && isQuizPassed && (
              <div className="mt-4 p-3 bg-blue-100 border border-blue-300 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>🎙️ Bonus:</strong> Você também completou o exercício de pronúncia! 
                  Sua dedicação à prática oral vai acelerar seu aprendizado.
                </p>
              </div>
            )}
          </div>
        )}
        
        {/* Navegação da lição */}
        <LessonNavigation 
          prevLessonId="lesson3"
          nextLessonId="lesson5"
          prevText="Lição Anterior: Perguntas no Presente Simples (DO/DOES)"
          nextText="Próxima Lição: [TÍTULO DA PRÓXIMA LIÇÃO]"
          isCompleted={isQuizPassed}
        />
      </div>
    </div>
  );
};

export default Lesson4;