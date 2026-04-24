export interface ContactInfo {
  email: string
  phone: string
  linkedin: string
  linkedinUrl: string
  location: string
}

export interface Stat {
  value: string
  label: string
}

export interface Skill {
  name: string
}

export interface SkillCategory {
  label: string
  skills: Skill[]
}

export interface ExperienceEntry {
  company: string
  role: string
  badge?: "CURRENT" | "PROMOTED"
  startDate: string
  endDate: string
  location: string
  description: string
  achievements: string[]
}

export interface ProjectEntry {
  name: string
  domain: string
  domainColor: "indigo" | "amber" | "green" | "rose" | "cyan"
  description: string
  techStack: string[]
  outcome: string
  period: string
}

export type CertType = "certification" | "speaking"

export interface CertificationEntry {
  type: CertType
  title: string
  issuer: string
  date: string
  credentialUrl?: string
  description: string
  icon: string
}

export interface EducationEntry {
  degree: string
  field: string
  institution: string
  year: string
  location: string
}

export interface AboutMetric {
  value: string
  label: string
  description: string
}
