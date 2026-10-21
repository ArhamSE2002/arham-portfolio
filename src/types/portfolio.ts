export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'flutter' | 'fullstack' | 'data' | 'all';
  featured: boolean;
  description: string;
  bulletPoints: string[];
  techStack: string[];
  metrics?: { label: string; value: string };
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
  iconName: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  current: boolean;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  tier: 'Expert' | 'Proficient' | 'Familiar';
  description: string;
  iconName: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  highlight: string;
  skills: SkillItem[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  credentialId?: string;
  skills: string[];
  verified: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
  gradeMax: string;
  details: string;
}

export interface StatMetric {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  iconName: string;
}

export interface ContactDetails {
  fullName: string;
  roleTitle: string;
  email: string;
  phone: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  whatsappUrl: string;
  availableForHire: boolean;
}
