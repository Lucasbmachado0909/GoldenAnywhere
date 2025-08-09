// src/modules/lessons/components/ArticlesSection.tsx
import React from 'react';

interface ArticleRule {
  article: string;
  type: string;
  usage: string;
  examples: string[];
}

interface ArticlesSectionProps {
  title: string;
  description: string;
  rules: ArticleRule[];
  attention?: {
    title: string;
    content: string[];
  };
}

const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  title,
  description,
  rules,
  attention,
}) => {
  return (
    <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-purple-800 mb-4">{title}</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

      <div className="space-y-6">
        {rules.map((rule, index) => (
          <div key={index} className="p-4 border border-green-200 rounded-md bg-green-50">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              <span className="font-bold text-2xl">{rule.article}</span> - {rule.type}
            </h3>
            <p className="text-gray-700 mb-2">{rule.usage}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {rule.examples.map((example, idx) => (
                <li key={idx}>{example}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {attention && (
        <div className="mt-8 p-4 border border-red-200 rounded-md bg-red-50">
          <h3 className="text-xl font-semibold text-red-800 mb-3">{attention.title}</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {attention.content.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default ArticlesSection;