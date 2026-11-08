export interface ContactInfo {
  email: string
  phone: string
  linkedin: string
  linkedinUrl: string
  github: string
  githubUrl: string
  location: string
  website: string
  websiteUrl: string
}

export interface HeroStat {
  value: string
  label: string
}

export interface AboutCard {
  title: string
  body: string
}

export interface ExpertiseItem {
  title: string
  body: string
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

export type ProjectStatus = "Delivered" | "Ongoing" | "In progress"

export interface ProjectEntry {
  name: string
  domain: string
  status: ProjectStatus
  description: string
  techStack: string[]
  role: string
  /** Optional until a confirmed figure exists; the Result row is hidden without it. */
  result?: string
  url?: string
  urlLabel?: string
  featured?: boolean
}

export interface ProcessStep {
  step: string
  title: string
  body: string
}

export interface AIPractice {
  title: string
  body?: string
  bullets?: string[]
}

export interface SkillGroup {
  label: string
  skills: string[]
}

export interface LinkedInPost {
  title: string
  tag: string
  url: string
}

export type CredentialKind = "certification" | "education" | "speaking"

export interface CredentialEntry {
  kind: CredentialKind
  label: string
  title: string
  description: string
  credentialUrl?: string
}

export interface NavLink {
  label: string
  href: string
}
