// src/modules/lessons/components/NounsSection.tsx
import React from 'react';
import AudioButton from '../../common/components/AudioButton'; // 🔄 IMPORT CORRETO

interface NounItem {
  noun: string;
  translation: string;
  example?: string;
}

interface NounsSectionProps {
  title: string;
  description: string;
  items: NounItem[];
  rules: {
    title: string;
    content: string[];
    examples?: { rule: string; example: string }[];
  }[];
  audioSection?: {
    title: string;
    description: string;
  };
  audioGroups?: {
    name: string;
    displayText: string;
    audioSrc: string;
  }[];
}

const NounsSection: React.FC<NounsSectionProps> = ({
  title,
  description,
  items,
  rules,
  audioSection,
  audioGroups,
}) => {
  return (
    <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-purple-800 mb-4">{title}</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {items.map((item, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-md bg-gray-50">
            <p className="font-semibold text-gray-800">{item.noun} <span className="text-gray-500">({item.translation})</span></p>
            {item.example && <p className="text-sm text-gray-600 mt-1">Ex: {item.example}</p>}
          </div>
        ))}
      </div>

      {rules.map((ruleGroup, index) => (
        <div key={index} className="mb-6 p-4 border border-blue-200 rounded-md bg-blue-50">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">{ruleGroup.title}</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {ruleGroup.content.map((rule, idx) => (
              <li key={idx}>{rule}</li>
            ))}
          </ul>
          {ruleGroup.examples && (
            <div className="mt-4 space-y-2">
              {ruleGroup.examples.map((example, idx) => (
                <p key={idx} className="text-sm text-gray-600 italic">
                  <span className="font-medium">{example.rule}:</span> {example.example}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}

      {audioSection && audioGroups && (
        <div className="mt-8 p-6 bg-purple-50 rounded-lg border border-purple-200">
          <h3 className="text-xl font-bold text-purple-800 mb-3">{audioSection.title}</h3>
          <p className="text-gray-700 mb-4">{audioSection.description}</p>
          <div className="flex flex-wrap gap-4">
            {audioGroups.map((group) => (
              <AudioButton 
                key={group.name} 
                audioSrc={group.audioSrc}
                text={group.displayText} // 🔄 USAR PROP 'text' EM VEZ DE 'children'
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default NounsSection;