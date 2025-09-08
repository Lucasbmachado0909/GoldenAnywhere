// src/modules/lessons/components/ObjectPronounsSection.tsx
import React from 'react';
import AudioButton from '../../common/components/AudioButton';

interface ObjectPronoun {
  subject: string;
  object: string;
  example: string;
  translation: string;
}

interface ObjectPronounsSectionProps {
  title: string;
  description: string;
}

const ObjectPronounsSection: React.FC<ObjectPronounsSectionProps> = ({
  title,
  description
}) => {
  const objectPronouns: ObjectPronoun[] = [
    {
      subject: 'I',
      object: 'me',
      example: 'She likes me.',
      translation: 'Ela gosta de mim.'
    },
    {
      subject: 'You',
      object: 'you',
      example: 'I see you.',
      translation: 'Eu vejo você.'
    },
    {
      subject: 'He',
      object: 'him',
      example: 'We help him.',
      translation: 'Nós ajudamos ele.'
    },
    {
      subject: 'She',
      object: 'her',
      example: 'I know her.',
      translation: 'Eu conheço ela.'
    },
    {
      subject: 'It',
      object: 'it',
      example: 'I like it.',
      translation: 'Eu gosto disso.'
    },
    {
      subject: 'We',
      object: 'us',
      example: 'He teaches us.',
      translation: 'Ele ensina nós.'
    },
    {
      subject: 'They',
      object: 'them',
      example: 'I see them.',
      translation: 'Eu vejo eles.'
    }
  ];

  const whyExamples = [
    {
      question: 'Why does he wake up early?',
      answer: 'Because he works in the morning.',
      translation: 'Por que ele acorda cedo? Porque ele trabalha de manhã.'
    },
    {
      question: 'Why does she study English?',
      answer: 'Because she needs it.',
      translation: 'Por que ela estuda inglês? Porque ela precisa disso.'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-purple-100 p-2 rounded-lg">
          <span className="text-2xl">👥</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-purple-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>

      {/* Seção 1: Object Pronouns */}
      <div className="mb-8">
        <h4 className="text-lg font-bold text-purple-700 mb-4 flex items-center gap-2">
          <span>1️⃣</span>
          Object Pronouns (Pronomes Objeto)
        </h4>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <p className="text-blue-800">
            <strong>�� Regra:</strong> Os pronomes objeto são usados depois do verbo, quando a pessoa recebe a ação.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-purple-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-bold text-purple-800">
                  Subject (quem faz)
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold text-purple-800">
                  Object (quem recebe)
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold text-purple-800">
                  Exemplo
                </th>
              </tr>
            </thead>
            <tbody>
              {objectPronouns.map((pronoun, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="border border-gray-300 px-4 py-3 font-medium text-purple-700">
                    {pronoun.subject}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-700">
                    {pronoun.object}
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    <div>
                      <p className="font-medium text-gray-800">{pronoun.example}</p>
                      <p className="text-sm text-gray-600 italic">{pronoun.translation}</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Seção 2: Why Questions */}
      <div className="mb-6">
        <h4 className="text-lg font-bold text-purple-700 mb-4 flex items-center gap-2">
          <span>2️⃣</span>
          Why does...? (Por que...?) + Because (porque na resposta)
        </h4>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
          <p className="text-yellow-800">
            <strong>�� Estrutura:</strong> Usamos "Why does...?" para perguntar o motivo. 
            Respondemos usando "Because + razão".
          </p>
        </div>

        <div className="space-y-4">
          {whyExamples.map((example, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <span className="text-lg">❓</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800 mb-1">
                    {example.question}
                  </p>
                  <p className="font-medium text-green-700 mb-2">
                    → {example.answer}
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    {example.translation}
                  </p>
                </div>
                <AudioButton 
                  text={`${example.question} ${example.answer}`}
                  audioSrc={`/audio/lessons/lesson4/why_example_${index + 1}.mp3`}
                  className="text-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dica importante */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h5 className="font-bold text-green-800 mb-2">Dica Importante:</h5>
            <ul className="text-green-700 space-y-1 text-sm">
              <li>• Object pronouns vêm DEPOIS do verbo</li>
              <li>• "Why does" é usado para he/she/it</li>
              <li>• "Why do" é usado para I/you/we/they</li>
              <li>• Sempre responda com "Because + razão"</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectPronounsSection;