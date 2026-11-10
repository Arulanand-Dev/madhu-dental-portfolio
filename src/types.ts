export type ThemeMode = 'clinical-teal' | 'ocean-blue' | 'warm-editorial' | 'midnight-emerald';

export interface ThemeConfig {
  id: ThemeMode;
  name: string;
  description: string;
  badgeBg: string;
  badgeBorder: string;
  primaryColor: string;
  isDark?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  employer: string;
  location: string;
  period: string;
  type: 'UK Practice' | 'Overseas Hospital' | 'Internship' | 'Dental Assistant';
  isCurrent?: boolean;
  description: string;
  highlights: string[];
  skillsApplied: string[];
}

export interface CaseImage {
  url: string;
  label: string;
  type: 'clinical-photo' | 'radiograph' | 'comparison';
  caption?: string;
}

export interface ClinicalCase {
  id: string;
  category: 'Preventive' | 'Restorative' | 'Prosthetics' | 'Endodontics' | 'Extractions' | 'Trauma';
  title: string;
  subtitle: string;
  description: string;
  clinicalNotes: string;
  imageCount: number;
  imageUrl?: string;
  images?: CaseImage[];
  isRadiograph?: boolean;
  svgType?: 'scaling' | 'restorative' | 'denture' | 'endodontic' | 'extraction' | 'crown' | 'trauma';
  procedureSteps?: string[];
  tags: string[];
}

export interface VideoItem {
  id: string;
  title: string;
  topic: string;
  url: string;
  duration?: string;
  viewsOrTag?: string;
}

export interface ArticleItem {
  id: string;
  topic: string;
  title: string;
  publisher: string;
  summary: string;
  url: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string; note?: string }[];
}
