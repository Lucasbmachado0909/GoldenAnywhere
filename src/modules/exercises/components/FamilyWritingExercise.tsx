// src/modules/exercises/components/FamilyWritingExercise.tsx
import React, { useState } from 'react';

interface FamilyWritingExerciseProps {
  onComplete: (score: number) => void;
}

const FamilyWritingExercise: React.FC<FamilyWritingExerciseProps> = ({ onComplete }) => {
  const [sentences, setSentences] = useState<string[]>(['', '', '', '']);
  const [showResults, setShowResults] = useState(false);
  const [feedback, setFeedback] = useState<string[]>([]);
  const [score, setScore] = useState(0);

  const requiredElements = {
    possessives: ['my', 'your', 'his', 'her', 'our', 'their'],
    family: ['father', 'mother', 'brother', 'sister', 'friend'],
    activities: ['drives', 'takes', 'studies', 'watches', 'dance', 'help', 'talk']
  };

  const examples = [
    'My father drives to work.',
    'My mother takes the bus.',
    'My sister studies English.',
    'We dance with our friends.'
  ];

  const handleSentenceChange = (index: number, value: string) => {
    const newSentences = [...sentences];
    newSentences[index] = value;
    setSentences(newSentences);
  };

  const validateSentence = (sentence: string): { isValid: boolean; feedback: string; score: number } => {
    const lowerSentence = sentence.toLowerCase();
    let score = 0;
    let feedback = '';

    // Verificar se tem possessive
    const hasPossessive = requiredElements.possessives.some(pos => lowerSentence.includes(pos));
    if (hasPossessive) score += 25;

    // Verificar se tem palavra da família
    const hasFamily = requiredElements.family.some(fam => lowerSentence.includes(fam));
    if (hasFamily) score += 25;

    // Verificar se tem atividade
    const hasActivity = requiredElements.activities.some(act => lowerSentence.includes(act));
    if (hasActivity) score += 25;

    // Verificar estrutura básica (começa com maiúscula, termina com ponto)
    const hasProperStructure = /^[A-Z].*\.$/.test(sentence.trim());
    if (hasProperStructure) score += 25;

    // Gerar feedback
    if (score === 100) {
      feedback = '✅ Perfeito! Frase completa e correta.';
    } else {
      feedback = '⚠️ ';
      if (!hasPossessive) feedback += 'Adicione um possessive adjective (my, your, his, her, our, their). ';
      if (!hasFamily) feedback += 'Inclua uma palavra da família (father, mother, brother, sister, friend). ';
      if (!hasActivity) feedback += 'Adicione uma atividade (drives, takes, studies, watches, dance, help, talk). ';
      if (!hasProperStructure) feedback += 'Comece com letra maiúscula e termine com ponto. ';
    }

    return { isValid: score >= 75, feedback, score };
  };

  const checkSentences = () => {
    const results = sentences.map(sentence => validateSentence(sentence));
    const feedbackList = results.map(result => result.feedback);
    const totalScore = Math.round(results.reduce((sum, result) => sum + result.score, 0) / 4);
    
    setFeedback(feedbackList);
    setScore(totalScore);
    setShowResults(true);
    onComplete(totalScore);
  };

  const resetExercise = () => {
    setSentences(['', '', '', '']);
    setShowResults(false);
    setFeedback([]);
    setScore(0);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-green-100 p-2 rounded-lg">
          <span className="text-2xl">✍️</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-green-800">Family Writing Exercise</h3>
          <p className="text-gray-600">Escreva 4 frases sobre sua família</p>
        </div>
      </div>

      {!showResults ? (
        <>
          {/* Instruções */}
          <div className="mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <h4 className="font-bold text-blue-800 mb-2">📝 Instruções:</h4>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• Escreva 4 frases sobre sua família</li>
                <li>• Use pelo menos 2 possessive adjectives diferentes</li>
                <li>• Inclua 2 atividades diárias</li>
                <li>• Comece com letra maiúscula e termine com ponto</li>
              </ul>
            </div>

            {/* Elementos Necessários */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <h5 className="font-bold text-purple-800 mb-2">Possessive Adjectives:</h5>
                <div className="flex flex-wrap gap-1">
                  {requiredElements.possessives.map(word => (
                    <span key={word} className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs">
                      {word}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <h5 className="font-bold text-blue-800 mb-2">Family Words:</h5>
                <div className="flex flex-wrap gap-1">
                  {requiredElements.family.map(word => (
                    <span key={word} className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">
                      {word}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <h5 className="font-bold text-green-800 mb-2">Activities:</h5>
                <div className="flex flex-wrap gap-1">
                  {requiredElements.activities.map(word => (
                    <span key={word} className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs">
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Exemplos */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <h5 className="font-bold text-yellow-800 mb-2">💡 Exemplos:</h5>
              <ul className="text-yellow-700 space-y-1 text-sm">
                {examples.map((example, index) => (
                  <li key={index}>• {example}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Área de Escrita */}
          <div className="mb-6">
            <h4 className="font-bold text-gray-800 mb-4">Escreva suas frases:</h4>
            <div className="space-y-4">
              {sentences.map((sentence, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Frase {index + 1}:
                  </label>
                  <textarea
                    value={sentence}
                    onChange={(e) => handleSentenceChange(index, e.target.value)}
                    placeholder={`Exemplo: ${examples[index]}`}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
                    rows={2}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={checkSentences}
              disabled={sentences.some(sentence => sentence.trim().length < 5)}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Verificar Frases
            </button>
          </div>
        </>
      ) : (
        <div className="text-center">
          <div className={`p-6 rounded-lg mb-6 ${score >= 75 ? 'bg-green-50 border border-green-200' : 'bg-yellow-50 border border-yellow-200'}`}>
            <h4 className={`text-xl font-bold mb-2 ${score >= 75 ? 'text-green-800' : 'text-yellow-800'}`}>
              {score >= 75 ? '🎉 Muito Bem!' : '📝 Continue Praticando'}
            </h4>
            <p className={`text-lg ${score >= 75 ? 'text-green-700' : 'text-yellow-700'}`}>
              Pontuação: {score}/100
            </p>
          </div>

          {/* Feedback Detalhado */}
          <div className="mb-6 text-left">
            <h5 className="font-bold text-gray-800 mb-4 text-center">Feedback das suas frases:</h5>
            <div className="space-y-4">
              {sentences.map((sentence, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="mb-2">
                    <span className="font-medium text-gray-800">Frase {index + 1}: </span>
                    <span className="text-gray-700">"{sentence}"</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {feedback[index]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={resetExercise}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
          >
            Escrever Novamente
          </button>
        </div>
      )}
    </div>
  );
};

export default FamilyWritingExercise;