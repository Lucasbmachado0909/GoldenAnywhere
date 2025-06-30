// Dados da lição
export const lessonContent = {
  id: 'lesson1',
  title: 'Aula 1: Pronomes Sujeito + Verbos de Ação (Afirmativa)',
  progress: {
    current: 1,
    total: 5
  },
  sections: {
    pronouns: {
      title: '1. Pronomes Sujeito',
      items: [
        { pronoun: 'I', translation: 'eu' },
        { pronoun: 'You', translation: 'você' },
        { pronoun: 'He', translation: 'ele' },
        { pronoun: 'She', translation: 'ela' },
        { pronoun: 'It', translation: 'ele/ela (para coisas e animais)' },
        { pronoun: 'We', translation: 'nós' },
        { pronoun: 'They', translation: 'eles/elas' }
      ],
      tip: {
        title: 'Dica:',
        content: [
          'Em inglês, os pronomes sujeito são sempre usados antes dos verbos para indicar quem está realizando a ação.',
          'Diferente do português, em inglês não podemos omitir o pronome sujeito!'
        ]
      }
    },
    verbs: {
      title: '2. Verbos de Ação (forma base)',
      items: [
        { verb: 'play', translation: 'jogar/brincar' },
        { verb: 'eat', translation: 'comer' },
        { verb: 'drink', translation: 'beber' },
        { verb: 'work', translation: 'trabalhar' },
        { verb: 'study', translation: 'estudar' },
        { verb: 'like', translation: 'gostar' },
        { verb: 'go', translation: 'ir' }
      ],
      audioSection: {
        title: 'Áudio:',
        description: 'Escute a pronúncia dos verbos:'
      }
    },
    sentenceStructure: {
      title: '3. Estrutura de Frase Afirmativa',
      structure: {
        parts: ['[Pronome]', '[verbo na forma base]']
      },
      attention: {
        content: 'Para a 3ª pessoa do singular (he, she, it), adicionamos -s ou -es ao verbo.'
      },
      examples: [
        { english: 'I play soccer.', portuguese: 'Eu jogo futebol.' },
        { english: 'She eats breakfast.', portuguese: 'Ela come café da manhã.' },
        { english: 'They work together.', portuguese: 'Eles trabalham juntos.' },
        { english: 'We study English.', portuguese: 'Nós estudamos inglês.' }
      ]
    }
  }
};