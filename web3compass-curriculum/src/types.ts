export enum DifficultyLevel {
  BEGINNER = "Beginner",
  BEGINNER_INTERMEDIATE = "Beginner-Intermediate",
  INTERMEDIATE = "Intermediate",
  INTERMEDIATE_ADVANCED = "Intermediate-Advanced",
  ADVANCED = "Advanced"
}

export interface Topic {
  id: string;
  title: string;
  content: string;
  markdownFile?: string; // Path to the detailed markdown file
}

export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  topics: Topic[];
  isAvailable: boolean;
  githubLink?: string;
}

export interface CurriculumData {
  title: string;
  description: string;
  projects: Project[];
}
