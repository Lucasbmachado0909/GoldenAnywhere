import React from 'react';
import AudioButton from '../../common/components/AudioButton';

interface VerbItem {
  verb: string;
  translation: string;
}

interface VerbsSectionProps {
  title: string;
  items: VerbItem[];
  audioSection: {
    title: string;
    description: string;
  };
}

const VerbsSection: React.FC<VerbsSectionProps> = ({ title, items, audioSection }) => {
  return (
    <section className="mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-3">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ul className="list-disc list-inside space-y-3 text-lg sm:text-xl text-gray-700 ml-5">
          {items.map((item, index) => (
            <li key={index}>
              <span className="font-semibold text-gray-800">{item.verb}</span> - {item.translation}
            </li>
          ))}
        </ul>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="font-bold text-green-800 mb-2">{audioSection.title}</h3>
          <p className="text-gray-700 mb-3">
            {audioSection.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <AudioButton 
                key={item.verb}
                text={item.verb}
                audioSrc={`/audio/${item.verb}.mp3`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerbsSection;