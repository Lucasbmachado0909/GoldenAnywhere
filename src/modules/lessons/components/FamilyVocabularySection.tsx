// src/modules/lessons/components/FamilyVocabularySection.tsx
import React from 'react';
import { familyVocabulary } from '../data/lesson5Data';

interface FamilyVocabularySectionProps {
  title: string;
  description: string;
}

const FamilyVocabularySection: React.FC<FamilyVocabularySectionProps> = ({
  title,
  description
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-100 p-2 rounded-lg">
          <span className="text-2xl">👨‍👩‍👧‍👦</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>

      {/* Vocabulário Principal */}
      <div className="mb-6">
        <h4 className="text-lg font-bold text-blue-700 mb-4 flex items-center gap-2">
          <span>📚</span>
          Family Words (Palavras da Família)
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {familyVocabulary.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
              <div className="text-center mb-3">
                <h5 className="text-xl font-bold text-blue-800 mb-1">
                  {item.word}
                </h5>
                <p className="text-blue-600 font-medium">
                  ({item.translation})
                </p>
              </div>
              
              <div className="text-center">
                <p className="text-gray-700 text-sm italic">
                  "{item.example}"
                </p>
              </div>

              {/* 🗑️ REMOVIDO: AudioButton */}
            </div>
          ))}
        </div>
      </div>

      {/* Prática de Completar Frases */}
      <div className="mb-6">
        <h4 className="text-lg font-bold text-blue-700 mb-4 flex items-center gap-2">
          <span>✏️</span>
          Complete as Frases
        </h4>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
          <p className="text-yellow-800">
            <strong>📝 Instruções:</strong> Complete as frases com as palavras da família que você aprendeu.
          </p>
        </div>

        <div className="space-y-3">
          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <p className="text-gray-800">My <span className="bg-yellow-200 px-2 py-1 rounded">______</span> drives to work.</p>
            <p className="text-sm text-gray-600 mt-1 italic">Dica: Quem geralmente dirige para o trabalho?</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <p className="text-gray-800">My <span className="bg-yellow-200 px-2 py-1 rounded">______</span> studies English.</p>
            <p className="text-sm text-gray-600 mt-1 italic">Dica: Pode ser irmão ou irmã</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <p className="text-gray-800">My <span className="bg-yellow-200 px-2 py-1 rounded">______</span> takes the bus.</p>
            <p className="text-sm text-gray-600 mt-1 italic">Dica: Quem pode usar transporte público?</p>
          </div>
        </div>
      </div>

      {/* Dicas de Estudo - ATUALIZADA SEM REFERÊNCIA A ÁUDIO */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <span className="text-2xl">📖</span>
          <div>
            <h5 className="font-bold text-green-800 mb-2">Study & Practice Tips:</h5>
            <ul className="text-green-700 space-y-1 text-sm">
              <li>• Repita cada palavra 3 vezes em voz alta</li>
              <li>• Escreva frases usando cada palavra da família</li>
              <li>• Pratique as frases completas</li>
              <li>• Foque na memorização do vocabulário</li>
              <li>• Crie suas próprias frases com possessive adjectives</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyVocabularySection;