// src/modules/lessons/components/AdverbsFrequencySection.tsx
import React from 'react';

interface AdverbsFrequencySectionProps {
  title: string;
  description: string;
}

const AdverbsFrequencySection: React.FC<AdverbsFrequencySectionProps> = ({
  title,
  description
}) => {
  const adverbs = [
    {
      adverb: 'always',
      translation: 'sempre',
      percentage: '100%',
      example: 'I always take the bus to work.',
      color: 'bg-green-500',
      textColor: 'text-green-800'
    },
    {
      adverb: 'usually',
      translation: 'geralmente',
      percentage: '80%',
      example: 'She usually studies English at night.',
      color: 'bg-blue-500',
      textColor: 'text-blue-800'
    },
    {
      adverb: 'sometimes',
      translation: 'às vezes',
      percentage: '50%',
      example: 'They sometimes dance with friends.',
      color: 'bg-yellow-500',
      textColor: 'text-yellow-800'
    },
    {
      adverb: 'never',
      translation: 'nunca',
      percentage: '0%',
      example: 'He is never late.',
      color: 'bg-red-500',
      textColor: 'text-red-800'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-purple-100 p-2 rounded-lg">
          <span className="text-2xl">⏰</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-purple-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>

      {/* Explicação dos Advérbios */}
      <div className="mb-6">
        <h4 className="text-lg font-bold text-purple-700 mb-4 flex items-center gap-2">
          <span>📊</span>
          Advérbios de Frequência
        </h4>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <p className="text-blue-800">
            <strong>📝 O que são?</strong> São palavras que mostram com que frequência fazemos uma ação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {adverbs.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                <div className="flex-1">
                  <h5 className={`font-bold text-lg ${item.textColor}`}>
                    {item.adverb}
                  </h5>
                  <p className="text-gray-600 text-sm">
                    {item.translation} ({item.percentage})
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded p-3">
                <p className="text-gray-800 text-sm italic">
                  "{item.example}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Regras de Posição */}
      <div className="mb-6">
        <h4 className="text-lg font-bold text-purple-700 mb-4 flex items-center gap-2">
          <span>📌</span>
          Onde Colocamos os Advérbios?
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Regra 1: Antes do verbo principal */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h5 className="font-bold text-green-800 mb-2">✅ Antes do verbo principal:</h5>
            <div className="space-y-2 text-sm">
              <p className="text-green-700">
                <strong>I always</strong> take the bus to work.
              </p>
              <p className="text-green-700">
                <strong>She usually</strong> studies English at night.
              </p>
              <p className="text-green-700">
                <strong>They sometimes</strong> dance with friends.
              </p>
            </div>
          </div>

          {/* Regra 2: Depois do verbo to be */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h5 className="font-bold text-blue-800 mb-2">✅ Depois do verbo to be:</h5>
            <div className="space-y-2 text-sm">
              <p className="text-blue-700">
                He is <strong>never</strong> late.
              </p>
              <p className="text-blue-700">
                We are <strong>usually</strong> happy.
              </p>
              <p className="text-blue-700">
                I am <strong>always</strong> busy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dica de Memorização */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h5 className="font-bold text-yellow-800 mb-2">Dica de Memorização:</h5>
            <ul className="text-yellow-700 space-y-1 text-sm">
              <li>• <strong>Verbo normal</strong> → advérbio vem <strong>antes</strong> do verbo</li>
              <li>• <strong>Verbo to be</strong> (am, is, are) → advérbio vem <strong>depois</strong></li>
              <li>• Ordem de frequência: Always (100%) → Usually (80%) → Sometimes (50%) → Never (0%)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdverbsFrequencySection;