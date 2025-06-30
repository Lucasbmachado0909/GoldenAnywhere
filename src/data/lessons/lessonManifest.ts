interface Lesson {
  id: string;
  title: string;
  level: string;
  type: string;
  prerequisites: string[];
  estimatedTime: number;
  tags: string[];
  enabled: boolean;
}

interface LessonManifest {
  lessons: Lesson[];
  levels: Record<string, string[]>;
  types: Record<string, string[]>;
}

const lessonManifest: LessonManifest = {
  lessons: [
    {
      id: "lesson1",
      title: "Introduction to Basic Greetings",
      level: "beginner",
      type: "grammar",
      prerequisites: [],
      estimatedTime: 20,
      tags: ["greetings", "introduction", "beginner"],
      enabled: true
    },
    {
      id: "lesson2",
      title: "Common Everyday Vocabulary",
      level: "beginner",
      type: "vocabulary",
      prerequisites: ["lesson1"],
      estimatedTime: 25,
      tags: ["vocabulary", "everyday", "beginner"],
      enabled: true
    },
  ],
  
  levels: {
    beginner: ["lesson1", "lesson2"],
    intermediate: [],
    advanced: []
  },
  
  types: {
    grammar: ["lesson1"],
    vocabulary: ["lesson2"],
    pronunciation: [],
    conversation: []
  }
};

export default lessonManifest;