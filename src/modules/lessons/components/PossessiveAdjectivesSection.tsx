// src/modules/lessons/components/PossessiveAdjectivesSection.tsx
import React from 'react';
import { possessiveAdjectives } from '../data/lesson5Data';

interface PossessiveAdjectivesSectionProps {
  title: string;
  description: string;
}

const PossessiveAdjectivesSection: React.FC<PossessiveAdjectivesSectionProps> = ({
  title,
  description
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-purple-100 p-2 rounded-lg">
          <span className="text-2xl">🔗</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-purple-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>

      {/* Explicação da Regra */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h4 className="font-bold text-blue-800 mb-2">Regra Importante:</h4>
            <p className="text-blue-700 mb-2">
              Possessive adjectives sempre vêm <strong>antes</strong> do substantivo.
            </p>
            <div className="text-sm text-blue-600">
              <p><strong>Exemplos:</strong> my father, her sister, their friends</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabela de Possessive Adjectives - SEM COLUNA DE ÁUDIO */}
      <div className="mb-6">
        <h4 className="text-lg font-bold text-purple-700 mb-4 flex items-center gap-2">
          <span>📋</span>
          Tabela de Possessive Adjectives
        </h4>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-purple-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-bold text-purple-800">
                  Subject (Sujeito)
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold text-purple-800">
                  Possessive (Possessivo)
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold text-purple-800">
                  Example (Exemplo)
                </th>
                {/* 🗑️ REMOVIDA COLUNA DE ÁUDIO */}
              </tr>
            </thead>
            <tbody>
              {possessiveAdjectives.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="border border-gray-300 px-4 py-3 font-medium text-purple-700">
                    {item.subject}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-700 text-lg">
                    {item.possessive}
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    <div>
                      <p className="font-medium text-gray-800">{item.example}</p>
                      <p className="text-sm text-gray-600 italic">{item.translation}</p>
                    </div>
                  </td>
                  {/* 🗑️ REMOVIDA CÉLULA DE ÁUDIO */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Exemplos Práticos */}
      <div className="mb-6">
        <h4 className="text-lg font-bold text-purple-700 mb-4 flex items-center gap-2">
          <span>🎯</span>
          Exemplos Práticos
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h5 className="font-bold text-green-800 mb-2">✅ Correto:</h5>
            <ul className="text-green-700 space-y-1 text-sm">
              <li>• <strong>My</strong> father drives to work</li>
              <li>• <strong>Her</strong> sister studies English</li>
              <li>• <strong>Their</strong> friends dance</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h5 className="font-bold text-red-800 mb-2">❌ Incorreto:</h5>
            <ul className="text-red-700 space-y-1 text-sm">
              <li>• <s>Father my drives to work</s></li>
              <li>• <s>Sister her studies English</s></li>
              <li>• <s>Friends their dance</s></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Dica Final */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <span className="text-2xl">⭐</span>
          <div>
            <h5 className="font-bold text-yellow-800 mb-2">Dica de Memorização:</h5>
            <p className="text-yellow-700 text-sm">
              Lembre-se: <strong>Possessive + Noun</strong> (Possessivo + Substantivo)
              <br />
              Exemplo: <em>my + father = my father</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PossessiveAdjectivesSection;