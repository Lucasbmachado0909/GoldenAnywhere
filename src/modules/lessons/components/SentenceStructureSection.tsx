import React from 'react';

interface Example {
  english: string;
  portuguese: string;
}

interface SentenceStructureSectionProps {
  title: string;
  structure: {
    parts: string[];
  };
  attention: {
    content: string;
  };
  examples: Example[];
}

const SentenceStructureSection: React.FC<SentenceStructureSectionProps> = ({ 
  title, 
  structure, 
  attention, 
  examples 
}) => {
  return (
    <section className="mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-3">
        {title}
      </h2>
      <div className="flex flex-col items-center mb-6">
        <p className="text-xl sm:text-2xl text-gray-800 font-medium mb-4">
          {structure.parts.map((part, index) => (
            <React.Fragment key={index}>
              <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-lg shadow-md">
                {part}
              </span>
              {index < structure.parts.length - 1 && (
                <span className="mx-3 text-2xl font-bold">+</span>
              )}
            </React.Fragment>
          ))}
        </p>
        <div className="w-full max-w-md bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-center">
          <p className="text-yellow-800">
            <span className="font-bold">Atenção:</span> {attention.content}
          </p>
        </div>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow-inner border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Exemplos:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {examples.map((example, index) => (
            <div key={index} className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
              <p className="font-mono text-green-700 text-xl mb-2">{example.english}</p>
              <p className="text-gray-600 italic">{example.portuguese}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SentenceStructureSection;