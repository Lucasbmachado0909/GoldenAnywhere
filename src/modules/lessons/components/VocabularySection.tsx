// src/modules/lessons/components/VocabularySection.tsx
import React from 'react';
import AudioButton from '../../common/components/AudioButton'; // 🔄 IMPORT CORRETO

interface VocabularyItem {
  word: string;
  translation: string;
}

interface VocabularyGroup {
  name: string;
  displayText: string;
  audioSrc: string;
  items: VocabularyItem[];
}

interface VocabularySectionProps {
  title: string;
  description: string;
  groups: VocabularyGroup[];
}

const VocabularySection: React.FC<VocabularySectionProps> = ({
  title,
  description,
  groups,
}) => {
  return (
    <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-purple-800 mb-4">{title}</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

      <div className="space-y-8">
        {groups.map((group, groupIndex) => (
          <div key={groupIndex} className="p-4 border border-blue-200 rounded-md bg-blue-50">
            <h3 className="text-xl font-semibold text-blue-800 mb-3 flex items-center">
              {group.displayText}
              <AudioButton 
                audioSrc={group.audioSrc} 
                text="Ouvir Tudo" // 🔄 USAR PROP 'text' EM VEZ DE 'children'
                className="ml-3 px-3 py-1 text-sm"
              />
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {group.items.map((item, itemIndex) => (
                <div key={itemIndex} className="p-2 border border-gray-200 rounded-md bg-white text-center">
                  <p className="font-semibold text-gray-800">{item.word}</p>
                  <p className="text-sm text-gray-600">({item.translation})</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VocabularySection;