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
  tag?: string;
  iconName: string;
  coverImage: string;
  galleryImages?: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  tags: string[];
  previewImages: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  content: string;
  avatar: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  type: 'project' | 'monthly';
  price: string;
  duration: string;
  description: string;
  deliveryTime: string;
  revisions: string;
  format: string;
  features: string[];
  guarantee: string;
  badge?: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  excerpt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
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
  level: number;
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
  year?: string;
  badge?: string;
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
