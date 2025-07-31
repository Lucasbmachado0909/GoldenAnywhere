// src/modules/lessons/components/QuizResults.tsx
import React from 'react';
import type { QuizSummary } from '../../../types';
import QuizQuestion from './QuizQuestion';

interface QuizResultsProps {
  quizSummary: QuizSummary;
  onRetry: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({ quizSummary, onRetry }) => {
  // Função para determinar o texto de leitura baseado na pergunta
  const getReadingText = (questionText: string): string | undefined => {
    const readingQuestions = [
      "What is Ana's name?",
      "Where does Ana live?",
      "What does her brother do?",
      "Where does her sister work?",
      "What do her parents like to do?",
      "What pronoun replaces"
    ];
    
    if (readingQuestions.some(q => questionText.includes(q.split('?')[0]))) {
      return "Hello! My name is Ana. I live in Brazil. I have a big family. I have one brother. He plays football every weekend. My sister is a doctor. She works at a hospital. My parents are teachers. They like to read books. I love my family! We eat dinner together every night.";
    }
    return undefined;
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
      <h3 className="text-3xl font-bold text-center mb-6">🎯 Resultados do Quiz</h3>

      {/* Resultado principal com animação */}
      <div className={`p-6 rounded-lg text-center mb-8 transition-all duration-500 ${
        quizSummary.passed 
          ? 'bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-2 border-green-300' 
          : 'bg-gradient-to-r from-red-100 to-red-200 text-red-800 border-2 border-red-300'
      }`}>
        <div className="text-6xl mb-4">
          {quizSummary.passed ? '��' : '😔'}
        </div>
        <p className="text-3xl font-bold mb-4">
          {quizSummary.passed ? 'Parabéns! Você Passou!' : 'Que pena! Tente Novamente.'}
        </p>
        <div className="text-xl space-y-2">
          <p>
            Você acertou <span className="font-bold text-2xl">{quizSummary.correctAnswersCount}</span> de{' '}
            <span className="font-bold text-2xl">{quizSummary.totalQuestions}</span> perguntas
          </p>
          <p>
            Sua pontuação: <span className="font-bold text-2xl">{quizSummary.scorePercentage}%</span>
          </p>
          <p className="text-lg mt-4">
            {quizSummary.passed 
              ? '✅ Você atingiu a nota mínima de 70% e pode avançar para a próxima lição!' 
              : '❌ Você precisa de pelo menos 70% para passar. Estude o conteúdo e tente novamente!'}
          </p>
        </div>
      </div>

      {/* Estatísticas detalhadas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-200">
          <p className="text-blue-600 font-semibold">Total de Questões</p>
          <p className="text-2xl font-bold text-blue-800">{quizSummary.totalQuestions}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
          <p className="text-green-600 font-semibold">Respostas Corretas</p>
          <p className="text-2xl font-bold text-green-800">{quizSummary.correctAnswersCount}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg text-center border border-purple-200">
          <p className="text-purple-600 font-semibold">Pontuação Final</p>
          <p className="text-2xl font-bold text-purple-800">{quizSummary.scorePercentage}%</p>
        </div>
      </div>

      <h4 className="text-2xl font-bold mb-6 text-gray-800">📝 Revisão Detalhada das Respostas:</h4>
      
      <div className="space-y-6">
        {quizSummary.results.map((result, index) => (
          <div key={result.questionId} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className={`p-3 font-semibold ${
              result.isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              Questão {index + 1} - {result.isCorrect ? '✅ Correto' : '❌ Incorreto'}
            </div>
            <div className="p-4">
              <QuizQuestion
                question={{
                  id: result.questionId,
                  question: result.questionText,
                  type: result.options ? 'reading-comprehension' : 'multiple-choice',
                  options: result.options,
                  correctAnswer: result.correctAnswer,
                  explanation: result.explanation,
                  points: 1,
                  readingText: getReadingText(result.questionText),
                }}
                selectedAnswer={result.userAnswer}
                onAnswerChange={() => {}}
                showFeedback={true}
                quizResult={result}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center space-y-4">
        {!quizSummary.passed && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <p className="text-yellow-800">
              💡 <strong>Dica:</strong> Revise o conteúdo da lição e tente novamente. 
              Você pode refazer o quiz quantas vezes precisar!
            </p>
          </div>
        )}
        
        <button
          onClick={onRetry}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-md"
        >
          🔄 Tentar Novamente
        </button>
      </div>
    </div>
  );
};

export default QuizResults;