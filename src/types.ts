export interface Skill {
  name: string;
  icon: string;
  category: string;
  projects: Project[];
  proficiency: number;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  githubLink?: string;
  demoLink?: string;
  image?: string;
  features?: string[];
  category: string;
}

export interface Achievement {
  title: string;
  date: string;
  description: string;
  organization: string;
  icon: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  description: string;
  achievements: string[];
}