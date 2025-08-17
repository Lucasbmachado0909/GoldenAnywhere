export interface Course {
  id: string;
  title: string;
  description: string;
  status: 'available' | 'coming_soon';
  colorAccent: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: number; // em minutos
  tags: string[];
}

export const courses: Course[] = [
  {
    id: 'lesson1',
    title: 'Lição 1: Pronomes e Verbos',
    description: 'Aprenda os pronomes pessoais e verbos básicos em inglês.',
    status: 'available',
    colorAccent: 'indigo',
    level: 'beginner',
    estimatedTime: 30,
    tags: ['grammar', 'pronouns', 'verbs']
  },
  {
    id: 'lesson2',
    title: 'Lição 2: Verbos no Presente Simples',
    description: 'Aprenda a formar frases com o verbos no tempo correto.',
    status: 'available',
    colorAccent: 'indigo',
    level: 'beginner',
    estimatedTime: 35,
    tags: ['grammar', 'negation']
  },
  {
    id: 'lesson3',
    title: 'Lição 3: Perguntas',
    description: 'Aprenda a fazer perguntas com "do" e "does".',
    status: 'coming_soon',
    colorAccent: 'indigo',
    level: 'beginner',
    estimatedTime: 40,
    tags: ['grammar', 'questions']
  },
  {
    id: 'lesson4',
    title: 'Lição 4: Vocabulário Cotidiano',
    description: 'Aprenda palavras e expressões usadas no dia a dia.',
    status: 'coming_soon',
    colorAccent: 'blue',
    level: 'beginner',
    estimatedTime: 25,
    tags: ['vocabulary', 'everyday']
  },
  {
    id: 'lesson5',
    title: 'Lição 5: Tempo Presente Contínuo',
    description: 'Aprenda a usar o tempo presente contínuo (present continuous).',
    status: 'coming_soon',
    colorAccent: 'purple',
    level: 'beginner',
    estimatedTime: 45,
    tags: ['grammar', 'tenses']
  },
  {
    id: 'lesson6',
    title: 'Lição 6: Preposições de Lugar',
    description: 'Aprenda a usar preposições para descrever localização.',
    status: 'coming_soon',
    colorAccent: 'green',
    level: 'beginner',
    estimatedTime: 30,
    tags: ['grammar', 'prepositions']
  }
];

export const featuredCourses = courses.slice(0, 3);
export const beginnerCourses = courses.filter(course => course.level === 'beginner');
export const intermediateCourses = courses.filter(course => course.level === 'intermediate');
export const advancedCourses = courses.filter(course => course.level === 'advanced');