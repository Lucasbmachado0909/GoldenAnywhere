// src/modules/lessons/components/QuestionFormationSection.tsx
import React from 'react';

interface QuestionFormationSectionProps {
  title: string;
  description: string;
}

const QuestionFormationSection: React.FC<QuestionFormationSectionProps> = ({
  title,
  description
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-purple-100 p-2 rounded-lg">
          <span className="text-2xl">❓</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-purple-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>

      {/* Introdução */}
      <div className="mb-8 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-lg">
        <p className="text-blue-800 font-medium">
          Usamos o auxiliar <strong>DO</strong> ou <strong>DOES</strong> quando o verbo não é o <em>to be</em> (am/is/are).
        </p>
      </div>

      {/* 1️⃣ Yes/No Questions */}
      <div className="mb-10">
        <h4 className="text-lg font-bold text-purple-700 mb-4 flex items-center">
          <span className="mr-2">1️⃣</span>
          Yes/No Questions (Perguntas Sim/Não)
        </h4>

        {/* Estrutura da pergunta */}
        <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <h5 className="font-semibold text-gray-800 mb-2">📌 Estrutura da pergunta</h5>
          <div className="text-center text-lg font-mono bg-white p-3 rounded border">
            <span className="text-blue-600">Do / Does</span> + 
            <span className="text-green-600 mx-2">sujeito</span> + 
            <span className="text-purple-600 mx-2">verbo (forma base)</span> + 
            <span className="text-orange-600 mx-2">complemento</span> ?
          </div>
        </div>

        {/* Exemplos */}
        <div className="mb-6">
          <h5 className="font-semibold text-gray-800 mb-3">Exemplos:</h5>
          <div className="space-y-2">
            <div className="p-3 bg-green-50 border border-green-200 rounded">
              <strong>Do you work downtown?</strong> → Yes, I do. / No, I don't.
            </div>
            <div className="p-3 bg-green-50 border border-green-200 rounded">
              <strong>Does Lisa live in Brazil?</strong> → Yes, she does. / No, she doesn't.
            </div>
          </div>
        </div>

        {/* Regras importantes */}
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h5 className="font-semibold text-yellow-800 mb-3">✅ Regras importantes</h5>
          <ol className="list-decimal list-inside space-y-2 text-yellow-800">
            <li>Usamos <strong>DO</strong> com: I, you, we, they</li>
            <li>Usamos <strong>DOES</strong> com: he, she, it</li>
            <li>O verbo principal fica na forma base (sem "s" no final), mesmo na 3ª pessoa.</li>
            <li>Respostas curtas (short answers) repetem o auxiliar, não o verbo principal.</li>
          </ol>
        </div>

        {/* Tabela Yes/No Questions */}
        <div className="mb-6">
          <h5 className="font-semibold text-gray-800 mb-3">📊 Tabela – Yes/No Questions com Present Simple</h5>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-purple-100">
                  <th className="border border-gray-300 p-2 text-left">Sujeito</th>
                  <th className="border border-gray-300 p-2 text-left">Auxiliar</th>
                  <th className="border border-gray-300 p-2 text-left">Exemplo de pergunta</th>
                  <th className="border border-gray-300 p-2 text-left">Respostas curtas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">I</td>
                  <td className="border border-gray-300 p-2 font-semibold text-blue-600">Do</td>
                  <td className="border border-gray-300 p-2">Do I speak English?</td>
                  <td className="border border-gray-300 p-2">Yes, you do. / No, you don't.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-2">You</td>
                  <td className="border border-gray-300 p-2 font-semibold text-blue-600">Do</td>
                  <td className="border border-gray-300 p-2">Do you like pizza?</td>
                  <td className="border border-gray-300 p-2">Yes, I do. / No, I don't.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">We</td>
                  <td className="border border-gray-300 p-2 font-semibold text-blue-600">Do</td>
                  <td className="border border-gray-300 p-2">Do we study on Monday?</td>
                  <td className="border border-gray-300 p-2">Yes, we do. / No, we don't.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-2">They</td>
                  <td className="border border-gray-300 p-2 font-semibold text-blue-600">Do</td>
                  <td className="border border-gray-300 p-2">Do they live in Brazil?</td>
                  <td className="border border-gray-300 p-2">Yes, they do. / No, they don't.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">He</td>
                  <td className="border border-gray-300 p-2 font-semibold text-purple-600">Does</td>
                  <td className="border border-gray-300 p-2">Does he play football?</td>
                  <td className="border border-gray-300 p-2">Yes, he does. / No, he doesn't.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-2">She</td>
                  <td className="border border-gray-300 p-2 font-semibold text-purple-600">Does</td>
                  <td className="border border-gray-300 p-2">Does she work here?</td>
                  <td className="border border-gray-300 p-2">Yes, she does. / No, she doesn't.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">It</td>
                  <td className="border border-gray-300 p-2 font-semibold text-purple-600">Does</td>
                  <td className="border border-gray-300 p-2">Does it rain in July?</td>
                  <td className="border border-gray-300 p-2">Yes, it does. / No, it doesn't.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mais exemplos no dia a dia */}
        <div className="mb-6">
          <h5 className="font-semibold text-gray-800 mb-3">🔍 Mais exemplos no dia a dia</h5>
          
          <div className="mb-4">
            <h6 className="font-medium text-blue-600 mb-2">Com "Do"</h6>
            <div className="space-y-2 ml-4">
              <div className="p-2 bg-blue-50 rounded">
                <strong>Do you go to the gym?</strong> – Yes, I do. / No, I don't. 
                <span className="text-gray-600 italic">(Você vai à academia? Sim, eu vou/ Não, não vou.)</span>
              </div>
              <div className="p-2 bg-blue-50 rounded">
                <strong>Do they eat breakfast at 7?</strong> – Yes, they do. / No, they don't. 
                <span className="text-gray-600 italic">(Eles tomam café da manhã às 7h? Sim, eles tomam. / Não, eles não tomam.)</span>
              </div>
              <div className="p-2 bg-blue-50 rounded">
                <strong>Do we have class today?</strong> – Yes, we do. / No, we don't. 
                <span className="text-gray-600 italic">(Nós temos aula hoje? - Sim, nós temos. / Não, nós não temos)</span>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h6 className="font-medium text-purple-600 mb-2">Com "Does"</h6>
            <div className="space-y-2 ml-4">
              <div className="p-2 bg-purple-50 rounded">
                <strong>Does your brother play the guitar?</strong> – Yes, he does. / No, he doesn't. 
                <span className="text-gray-600 italic">(O seu irmão toca violão?- Sim, ele toca./ Não, ele não toca.)</span>
              </div>
              <div className="p-2 bg-purple-50 rounded">
                <strong>Does she speak Spanish?</strong> – Yes, she does. / No, she doesn't. 
                <span className="text-gray-600 italic">(Ela fala espanhol?- Sim, ela fala./ Não, ela não fala)</span>
              </div>
              <div className="p-2 bg-purple-50 rounded">
                <strong>Does it work?</strong> – Yes, it does. / No, it doesn't. 
                <span className="text-gray-600 italic">(Isto funciona? Sim, isto funciona./ Não, isto não funciona)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dica para iniciantes */}
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h5 className="font-semibold text-green-800 mb-2">💡 Dica para alunos iniciantes:</h5>
          <p className="text-green-800 mb-2">
            Se na sua língua você pensa: "Você mora aqui?", no inglês com Do/Does a estrutura será sempre:
          </p>
          <div className="text-center font-mono bg-white p-2 rounded border mb-2">
            <strong>Do/Does + sujeito + verbo base + complemento ?</strong>
          </div>
          <p className="text-green-800">
            Não use "s" no verbo depois de Does:<br/>
            <span className="text-red-600">❌ Does she lives here?</span> → 
            <span className="text-green-600 ml-2">✅ Does she live here?</span>
          </p>
        </div>
      </div>

      {/* 2️⃣ Negative Sentences */}
      <div className="mb-10">
        <h4 className="text-lg font-bold text-purple-700 mb-4 flex items-center">
          <span className="mr-2">2️⃣</span>
          Negative Sentences (Frases Negativas no Presente Simples)
        </h4>

        {/* Estrutura da frase negativa */}
        <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <h5 className="font-semibold text-gray-800 mb-2">📌 Estrutura da frase negativa</h5>
          <div className="text-center text-lg font-mono bg-white p-3 rounded border">
            <span className="text-green-600">Sujeito</span> + 
            <span className="text-red-600 mx-2">don't/doesn't</span> + 
            <span className="text-purple-600 mx-2">verbo (forma base)</span> + 
            <span className="text-orange-600 mx-2">complemento</span>
          </div>
        </div>

        {/* Exemplos negativos */}
        <div className="mb-6">
          <h5 className="font-semibold text-gray-800 mb-3">Exemplos:</h5>
          <div className="space-y-2">
            <div className="p-3 bg-red-50 border border-red-200 rounded">
              <strong>I don't work downtown.</strong>
            </div>
            <div className="p-3 bg-red-50 border border-red-200 rounded">
              <strong>She doesn't live in Brazil.</strong>
            </div>
            <div className="p-3 bg-red-50 border border-red-200 rounded">
              <strong>They don't play tennis on Sundays.</strong>
            </div>
          </div>
        </div>

        {/* Regras importantes negativas */}
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h5 className="font-semibold text-yellow-800 mb-3">✅ Regras importantes</h5>
          <ol className="list-decimal list-inside space-y-2 text-yellow-800">
            <li>Usamos <strong>don't</strong> (do not) com: I, you, we, they</li>
            <li>Usamos <strong>doesn't</strong> (does not) com: he, she, it</li>
            <li>O verbo principal fica na forma base (sem "s"), mesmo na 3ª pessoa.</li>
            <li>Don't e doesn't ficam entre o sujeito e o verbo principal.</li>
            <li>Não use "do not" ou "does not" com o verbo to be — este já forma a negativa sozinho (isn't, aren't, am not).</li>
          </ol>
        </div>

        {/* Tabela frases negativas */}
        <div className="mb-6">
          <h5 className="font-semibold text-gray-800 mb-3">📊 Tabela – Frases negativas no Present Simple</h5>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-red-100">
                  <th className="border border-gray-300 p-2 text-left">Sujeito</th>
                  <th className="border border-gray-300 p-2 text-left">Auxiliar</th>
                  <th className="border border-gray-300 p-2 text-left">Exemplo negativo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">I</td>
                  <td className="border border-gray-300 p-2 font-semibold text-red-600">don't</td>
                  <td className="border border-gray-300 p-2">I don't eat meat.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-2">You</td>
                  <td className="border border-gray-300 p-2 font-semibold text-red-600">don't</td>
                  <td className="border border-gray-300 p-2">You don't work on Sundays.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">We</td>
                  <td className="border border-gray-300 p-2 font-semibold text-red-600">don't</td>
                  <td className="border border-gray-300 p-2">We don't live downtown.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-2">They</td>
                  <td className="border border-gray-300 p-2 font-semibold text-red-600">don't</td>
                  <td className="border border-gray-300 p-2">They don't go to the cinema on Fridays.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">He</td>
                  <td className="border border-gray-300 p-2 font-semibold text-red-600">doesn't</td>
                  <td className="border border-gray-300 p-2">He doesn't play football.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-2">She</td>
                  <td className="border border-gray-300 p-2 font-semibold text-red-600">doesn't</td>
                  <td className="border border-gray-300 p-2">She doesn't study at night.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">It</td>
                  <td className="border border-gray-300 p-2 font-semibold text-red-600">doesn't</td>
                  <td className="border border-gray-300 p-2">It doesn't rain in July.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mais exemplos negativos no dia a dia */}
        <div className="mb-6">
          <h5 className="font-semibold text-gray-800 mb-3">🔍 Mais exemplos no dia a dia</h5>
          
          <div className="mb-4">
            <h6 className="font-medium text-blue-600 mb-2">Com "don't"</h6>
            <div className="space-y-2 ml-4">
              <div className="p-2 bg-blue-50 rounded">
                <strong>I don't drink coffee in the evening.</strong>
              </div>
              <div className="p-2 bg-blue-50 rounded">
                <strong>You don't need a ticket for this event.</strong>
              </div>
              <div className="p-2 bg-blue-50 rounded">
                <strong>They don't speak French.</strong>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h6 className="font-medium text-purple-600 mb-2">Com "doesn't"</h6>
            <div className="space-y-2 ml-4">
              <div className="p-2 bg-purple-50 rounded">
                <strong>He doesn't work on Saturdays.</strong>
              </div>
              <div className="p-2 bg-purple-50 rounded">
                <strong>She doesn't like spicy food.</strong>
              </div>
              <div className="p-2 bg-purple-50 rounded">
                <strong>It doesn't snow in Brazil.</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Dica para iniciantes - negativas */}
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h5 className="font-semibold text-green-800 mb-2">💡 Dica para alunos iniciantes:</h5>
          <p className="text-green-800 mb-2">
            Depois de don't ou doesn't, o verbo nunca leva "s":
          </p>
          <p className="text-green-800">
            <span className="text-red-600">❌ She doesn't likes pizza.</span> → 
            <span className="text-green-600 ml-2">✅ She doesn't like pizza.</span>
          </p>
        </div>

        {/* Atenção especial */}
        <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
          <h5 className="font-semibold text-orange-800 mb-2">📎 Atenção:</h5>
          <p className="text-orange-800 mb-2">
            Se o verbo for <em>to be</em>, não usamos don't/doesn't:
          </p>
          <div className="space-y-1 text-orange-800">
            <div>• I am not at home. <span className="text-red-600">(❌ I don't am at home)</span></div>
            <div>• She isn't at the bank. <span className="text-red-600">(❌ She doesn't is at the bank)</span></div>
          </div>
        </div>
      </div>

      {/* 3️⃣ Wh- Questions */}
      <div className="mb-10">
        <h4 className="text-lg font-bold text-purple-700 mb-4 flex items-center">
          <span className="mr-2">3️⃣</span>
          Perguntas com What (O que/Qual), Where (aonde/Onde), When (quando)
        </h4>

        {/* Estrutura Wh- questions */}
        <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <h5 className="font-semibold text-gray-800 mb-2">📌 Estrutura</h5>
          <div className="text-center text-lg font-mono bg-white p-3 rounded border">
            <span className="text-indigo-600">Wh- word</span> + 
            <span className="text-blue-600 mx-2">do/does</span> + 
            <span className="text-green-600 mx-2">sujeito</span> + 
            <span className="text-purple-600 mx-2">verbo (forma base)</span> + 
            <span className="text-orange-600 mx-2">complemento</span> ?
          </div>
          <div className="mt-3 space-y-2">
            <div className="p-2 bg-green-50 rounded">
              <strong>Where do you live?</strong> – I live in Brazil.
            </div>
            <div className="p-2 bg-green-50 rounded">
              <strong>What does she do at night?</strong> – She watches TV.
            </div>
            <div className="p-2 bg-green-50 rounded">
              <strong>When do you study English?</strong>
            </div>
          </div>
        </div>

        {/* A) WHAT */}
        <div className="mb-6">
          <h5 className="font-semibold text-indigo-600 mb-3">A) WHAT – "O que? / Qual?"</h5>
          <p className="text-gray-700 mb-3">📌 Usado para perguntar sobre coisas, atividades, informações ou escolhas.</p>
          
          <div className="mb-3">
            <h6 className="font-medium text-gray-800 mb-2">Estrutura:</h6>
            <div className="ml-4 space-y-1 text-gray-700">
              <div>• What + do/does + sujeito + verbo...?</div>
              <div>• What + am/is/are + sujeito...?</div>
            </div>
          </div>

          <div className="mb-3">
            <h6 className="font-medium text-gray-800 mb-2">Exemplos com outros verbos:</h6>
            <div className="ml-4 space-y-2">
              <div className="p-2 bg-indigo-50 rounded">
                <strong>What do you eat for breakfast?</strong> – I eat bread and coffee.
              </div>
              <div className="p-2 bg-indigo-50 rounded">
                <strong>What does he play?</strong> – He plays the guitar.
              </div>
            </div>
          </div>

          <div className="mb-3">
            <h6 className="font-medium text-gray-800 mb-2">Exemplos com "to be":</h6>
            <div className="ml-4 space-y-2">
              <div className="p-2 bg-indigo-50 rounded">
                <strong>What is your favorite color?</strong> – Blue.
              </div>
              <div className="p-2 bg-indigo-50 rounded">
                <strong>What's on the table?</strong> – A book.
              </div>
            </div>
          </div>
        </div>

        {/* B) WHERE */}
        <div className="mb-6">
          <h5 className="font-semibold text-green-600 mb-3">B) WHERE – "Onde?"</h5>
          <p className="text-gray-700 mb-3">📌 Usado para perguntar sobre lugares, localização ou posição.</p>
          
          <div className="mb-3">
            <h6 className="font-medium text-gray-800 mb-2">Estrutura:</h6>
            <div className="ml-4 space-y-1 text-gray-700">
              <div>• Where + do/does + sujeito + verbo...?</div>
              <div>• Where + am/is/are + sujeito...?</div>
            </div>
          </div>

          <div className="mb-3">
            <h6 className="font-medium text-gray-800 mb-2">Exemplos com outros verbos:</h6>
            <div className="ml-4 space-y-2">
              <div className="p-2 bg-green-50 rounded">
                <strong>Where do you go on weekends?</strong> – I go to the club.
              </div>
              <div className="p-2 bg-green-50 rounded">
                <strong>Where does Lisa work?</strong> – She works downtown.
              </div>
            </div>
          </div>

          <div className="mb-3">
            <h6 className="font-medium text-gray-800 mb-2">Exemplos com "to be":</h6>
            <div className="ml-4 space-y-2">
              <div className="p-2 bg-green-50 rounded">
                <strong>Where is the restaurant?</strong> – It's in New York.
              </div>
              <div className="p-2 bg-green-50 rounded">
                <strong>Where are the keys?</strong> – They're on the table.
              </div>
            </div>
          </div>
        </div>

        {/* C) WHEN */}
        <div className="mb-6">
          <h5 className="font-semibold text-orange-600 mb-3">C) WHEN – "Quando?"</h5>
          <p className="text-gray-700 mb-3">📌 Usado para perguntar sobre tempo: datas, dias, horários, períodos.</p>
          
          <div className="mb-3">
            <h6 className="font-medium text-gray-800 mb-2">Estrutura:</h6>
            <div className="ml-4 space-y-1 text-gray-700">
              <div>• When + do/does + sujeito + verbo...?</div>
              <div>• When + am/is/are + sujeito...?</div>
            </div>
          </div>

          <div className="mb-3">
            <h6 className="font-medium text-gray-800 mb-2">Exemplos com outros verbos:</h6>
            <div className="ml-4 space-y-2">
              <div className="p-2 bg-orange-50 rounded">
                <strong>When do you study English?</strong> – On Mondays and Thursdays.
              </div>
              <div className="p-2 bg-orange-50 rounded">
                <strong>When does she go to the gym?</strong> – In the evening.
              </div>
            </div>
          </div>

          <div className="mb-3">
            <h6 className="font-medium text-gray-800 mb-2">Exemplos com "to be":</h6>
            <div className="ml-4 space-y-2">
              <div className="p-2 bg-orange-50 rounded">
                <strong>When is the party?</strong> – In March.
              </div>
              <div className="p-2 bg-orange-50 rounded">
                <strong>When is your birthday?</strong> – On July 12th.
              </div>
            </div>
          </div>
        </div>

        {/* Tabela Wh- Questions */}
        <div className="mb-6">
          <h5 className="font-semibold text-gray-800 mb-3">📊 Tabela – Wh- Questions no Present Simple</h5>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-indigo-100">
                  <th className="border border-gray-300 p-2 text-left">Wh-word</th>
                  <th className="border border-gray-300 p-2 text-left">Com verbo to be</th>
                  <th className="border border-gray-300 p-2 text-left">Com outros verbos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 font-semibold text-indigo-600">What</td>
                  <td className="border border-gray-300 p-2">What is your name?</td>
                  <td className="border border-gray-300 p-2">What do you eat for lunch?</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-2 font-semibold text-green-600">Where</td>
                  <td className="border border-gray-300 p-2">Where is the cinema?</td>
                  <td className="border border-gray-300 p-2">Where does he live?</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-semibold text-orange-600">When</td>
                  <td className="border border-gray-300 p-2">When is the meeting?</td>
                  <td className="border border-gray-300 p-2">When do they go to school?</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mais exemplos Wh- no dia a dia */}
        <div className="mb-6">
          <h5 className="font-semibold text-gray-800 mb-3">🔍 Mais exemplos no dia a dia</h5>
          
          <div className="mb-4">
            <h6 className="font-medium text-indigo-600 mb-2">Com WHAT</h6>
            <div className="space-y-2 ml-4">
              <div className="p-2 bg-indigo-50 rounded">
                <strong>What do you want to drink?</strong> – A soda, please.
              </div>
              <div className="p-2 bg-indigo-50 rounded">
                <strong>What does your brother do?</strong> – He's a doctor.
              </div>
              <div className="p-2 bg-indigo-50 rounded">
                <strong>What's in your bag?</strong> – My books.
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h6 className="font-medium text-green-600 mb-2">Com WHERE</h6>
            <div className="space-y-2 ml-4">
              <div className="p-2 bg-green-50 rounded">
                <strong>Where do you usually have lunch?</strong> – At the restaurant near my work.
              </div>
              <div className="p-2 bg-green-50 rounded">
                <strong>Where does she live?</strong> – In Brazil.
              </div>
              <div className="p-2 bg-green-50 rounded">
                <strong>Where are we now?</strong> – At the cinema.
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h6 className="font-medium text-orange-600 mb-2">Com WHEN</h6>
            <div className="space-y-2 ml-4">
              <div className="p-2 bg-orange-50 rounded">
                <strong>When do you visit your parents?</strong> – On the weekend.
              </div>
              <div className="p-2 bg-orange-50 rounded">
                <strong>When does he go to the bank?</strong> – On Friday mornings.
              </div>
              <div className="p-2 bg-orange-50 rounded">
                <strong>When is the test?</strong> – Next Monday.
              </div>
            </div>
          </div>
        </div>

        {/* Dica para iniciantes - Wh- */}
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h5 className="font-semibold text-green-800 mb-2">💡 Dica para alunos iniciantes:</h5>
          <p className="text-green-800 mb-2">
            Sempre que usar Wh- Questions com "do/does", o verbo principal fica na forma base.
          </p>
          <p className="text-green-800">
            <span className="text-red-600">❌ Where does she works?</span> → 
            <span className="text-green-600 ml-2">✅ Where does she work?</span>
          </p>
        </div>
      </div>

      {/* Vocabulary List */}
      <div className="mb-10">
        <h4 className="text-lg font-bold text-purple-700 mb-4 flex items-center">
          <span className="mr-2">📚</span>
          Vocabulary List
        </h4>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Places:</h5>
            <div className="text-sm text-gray-700 space-y-1 ml-4">
              <div>• at the club, restaurant, bank, bar, school, home, work, cinema, party</div>
              <div>• Cities/Countries: Brazil, New York, London</div>
              <div>• General: downtown, in class</div>
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Time expressions:</h5>
            <div className="text-sm text-gray-700 space-y-1 ml-4">
              <div>• Days of the week: on Monday, on Saturday</div>
              <div>• Months: in January, in February, in March, in April, in May, in June, in July, in August, in September, in October, in November, in December</div>
              <div>• Times of day: in the morning, in the evening, in the afternoon, at night</div>
              <div>• Special times: at night, at lunch, at dinner, at breakfast</div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h5 className="font-semibold text-gray-800 mb-2">Examples:</h5>
          <div className="space-y-2 ml-4">
            <div className="p-2 bg-gray-50 rounded">
              <strong>When is the meeting?</strong> – On Monday morning.
            </div>
            <div className="p-2 bg-gray-50 rounded">
              <strong>When is Lisa's party?</strong> – In March.
            </div>
          </div>
        </div>
      </div>

      {/* Study Materials & Exercises */}
      <div className="mb-6">
        <h4 className="text-lg font-bold text-purple-700 mb-4 flex items-center">
          <span className="mr-2">📄</span>
          Study Materials & Exercises
        </h4>

        <div className="mb-4">
          <h5 className="font-semibold text-gray-800 mb-3">Grammar Table – Yes/No & Negative</h5>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-purple-100">
                  <th className="border border-gray-300 p-2 text-left">Form</th>
                  <th className="border border-gray-300 p-2 text-left">Yes/No Question</th>
                  <th className="border border-gray-300 p-2 text-left">Short Answer</th>
                  <th className="border border-gray-300 p-2 text-left">Negative</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 font-semibold">Present Simple</td>
                  <td className="border border-gray-300 p-2">Do you work downtown?</td>
                  <td className="border border-gray-300 p-2">Yes, I do. / No, I don't.</td>
                  <td className="border border-gray-300 p-2">I don't work downtown.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-2 font-semibold">Present Simple 3rd person</td>
                  <td className="border border-gray-300 p-2">Does she live in Brazil?</td>
                  <td className="border border-gray-300 p-2">Yes, she does. / No, she doesn't.</td>
                  <td className="border border-gray-300 p-2">She doesn't live in Brazil.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionFormationSection;