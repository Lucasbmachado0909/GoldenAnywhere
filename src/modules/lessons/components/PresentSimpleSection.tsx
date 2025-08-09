// src/modules/lessons/components/PresentSimpleSection.tsx
import React from 'react';

interface VerbItem {
  verb: string;
  translation: string;
}

interface PresentSimpleSectionProps {
  title: string;
  description: string;
  verbs: VerbItem[];
}

const PresentSimpleSection: React.FC<PresentSimpleSectionProps> = ({
  title,
  description,
  verbs,
}) => {
  return (
    <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-purple-800 mb-4">{title}</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

      {/* Seção de verbos */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">Vamos estudar verbos muito usados no dia a dia:</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          {verbs.map((verb, index) => (
            <div key={index} className="p-3 border border-gray-200 rounded-md bg-gray-50 text-center">
              <p className="font-semibold text-gray-800">{verb.verb}</p>
              <p className="text-sm text-gray-600">({verb.translation})</p>
            </div>
          ))}
        </div>
      </div>

      {/* Como usamos os sujeitos e os verbos */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-green-800 mb-4">Como usamos os sujeitos e os verbos?</h3>
        
        {/* I / you / we / they */}
        <div className="mb-6 p-4 border border-green-200 rounded-md bg-green-50">
          <h4 className="text-lg font-semibold text-green-800 mb-3">I / you / we / they:</h4>
          <div className="space-y-1">
            <p className="text-gray-700 font-medium">• I like apples.</p>
            <p className="text-gray-700 font-medium">• They eat pizza.</p>
            <p className="text-gray-700 font-medium">• We drink water.</p>
          </div>
        </div>

        {/* he / she / it */}
        <div className="mb-6 p-4 border border-green-200 rounded-md bg-green-50">
          <h4 className="text-lg font-semibold text-green-800 mb-3">he / she / it (3ª pessoa do singular):</h4>
          <div className="space-y-1">
            <p className="text-gray-700 font-medium">• He likes apples.</p>
            <p className="text-gray-700 font-medium">• She eats pizza.</p>
            <p className="text-gray-700 font-medium">• It drinks water. (ex: a dog)</p>
          </div>
        </div>
      </div>

      {/* Importante sobre 3ª pessoa */}
      <div className="mb-8 p-4 border border-red-200 rounded-md bg-red-50">
        <h4 className="text-lg font-semibold text-red-800 mb-3">📝 Importante:</h4>
        <p className="text-gray-700">
          Para <strong>he/she/it</strong>, acrescentamos <strong>-s</strong> ao verbo (ou <strong>-es</strong> em alguns casos).
        </p>
      </div>

      {/* Dica importante sobre Go To */}
      <div className="mb-8 p-4 border border-yellow-200 rounded-md bg-yellow-50">
        <h4 className="text-lg font-semibold text-yellow-800 mb-4">💡 Dica importante!</h4>
        <p className="text-gray-700 mb-4">
          No inglês, quando falamos sobre ir a algum lugar, precisamos prestar atenção na preposição que usamos com o verbo "go" (ir).
        </p>

        {/* Go to (instituições) */}
        <div className="mb-6">
          <h5 className="text-md font-semibold text-blue-800 mb-3">"Go to" (instituições ou atividades do dia a dia)</h5>
          <div className="space-y-2 mb-3">
            <p className="text-gray-700">• I go to school. (Eu vou para a escola.)</p>
            <p className="text-gray-700">• She goes to work. (Ela vai para o trabalho.)</p>
            <p className="text-gray-700">• They go to church. (Eles vão para a igreja.)</p>
            <p className="text-gray-700">• We go to class. (Nós vamos para a aula.)</p>
          </div>
          <div className="p-3 bg-blue-100 rounded border border-blue-300">
            <p className="text-blue-800 text-sm">
              💡 <strong>Dica:</strong> Pense em lugares que funcionam como funções sociais (trabalhar, estudar, etc.). Nesses casos, usamos apenas "to".
            </p>
          </div>
        </div>

        {/* Go to the (lugares específicos) */}
        <div className="mb-6">
          <h5 className="text-md font-semibold text-purple-800 mb-3">"Go to the" (lugares físicos específicos)</h5>
          <div className="space-y-2 mb-3">
            <p className="text-gray-700">• He goes to the park. (Ele vai ao parque.)</p>
            <p className="text-gray-700">• We go to the supermarket. (Nós vamos ao supermercado.)</p>
            <p className="text-gray-700">• She goes to the bank. (Ela vai ao banco.)</p>
            <p className="text-gray-700">• I go to the cinema. (Eu vou ao cinema.)</p>
          </div>
          <div className="p-3 bg-purple-100 rounded border border-purple-300">
            <p className="text-purple-800 text-sm">
              💡 <strong>Dica:</strong> Use "to the" quando estiver falando de um lugar físico e específico. Se você pode apontar para ele ou se é um lugar único, provavelmente precisa do "the".
            </p>
          </div>
        </div>

        {/* Sem preposição */}
        <div className="mb-6">
          <h5 className="text-md font-semibold text-orange-800 mb-3">Quando a frase dá ideia de direção ou destino, então não precisam de preposição</h5>
          <div className="space-y-2">
            <p className="text-gray-700">• I go home late every day.</p>
            <p className="text-gray-700">• Let's go there!</p>
          </div>
        </div>
      </div>

      {/* Tabela comparativa */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-purple-800 mb-4">✨ Comparando as três formas:</h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-purple-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-purple-800">Frase correta</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-purple-800">Explicação</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-medium">I go to school.</td>
                <td className="border border-gray-300 px-4 py-2">Lugar geral, função social</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">I go to the supermarket.</td>
                <td className="border border-gray-300 px-4 py-2">Lugar específico com "the"</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-medium">I go home.</td>
                <td className="border border-gray-300 px-4 py-2">Exceção: sem preposição</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">She goes to work.</td>
                <td className="border border-gray-300 px-4 py-2">Trabalho = função, sem "the"</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-medium">We go to the park.</td>
                <td className="border border-gray-300 px-4 py-2">Parque = lugar físico específico</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">Come here / Go there</td>
                <td className="border border-gray-300 px-4 py-2">Direções especiais (sem "to")</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PresentSimpleSection;