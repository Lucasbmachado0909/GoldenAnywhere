import React from 'react';

interface PronounItem {
  pronoun: string;
  translation: string;
}

interface PronounsSectionProps {
  title: string;
  items: PronounItem[];
  tip: {
    title: string;
    content: string[];
  };
}

const PronounsSection: React.FC<PronounsSectionProps> = ({ title, items, tip }) => {
  return (
    <section className="mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-3">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ul className="list-disc list-inside space-y-3 text-lg sm:text-xl text-gray-700 ml-5">
          {items.map((item, index) => (
            <li key={index}>
              <span className="font-semibold text-gray-800">{item.pronoun}</span> - {item.translation}
            </li>
          ))}
        </ul>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="font-bold text-blue-800 mb-2">{tip.title}</h3>
          {tip.content.map((paragraph, index) => (
            <p key={index} className={`text-gray-700 ${index > 0 ? 'mt-2' : ''}`}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PronounsSection;