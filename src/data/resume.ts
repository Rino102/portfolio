import type {
  ContactInfo,
  Stat,
  SkillCategory,
  ExperienceEntry,
  ProjectEntry,
  CertificationEntry,
  EducationEntry,
  AboutMetric,
} from "@/types"

export const PERSONAL: ContactInfo = {
  email: "rlrino102@gmail.com",
  phone: "+91 8012828581",
  linkedin: "in/rinorobinson",
  linkedinUrl: "https://linkedin.com/in/rinorobinson",
  github: "Rino102",
  githubUrl: "https://github.com/Rino102",
  location: "Chennai, Tamil Nadu, India",
}

export const HERO_HEADLINE = "Architecting Scalable Systems. Delivering Measurable Impact."

export const HERO_SUMMARY =
  "PMP-certified Technical Architect and Project Manager with 11+ years of experience designing enterprise-grade full-stack solutions — from HIPAA-compliant healthcare platforms to AI-powered SaaS products."

export const ABOUT_NARRATIVE = `I'm a PMP-certified Technical Architect and Project Manager with over a decade of hands-on experience building full-stack products that solve real business problems. My journey began in frontend engineering and evolved through leading teams, architecting systems, and owning complete project delivery lifecycles.

Today, I bridge the gap between complex technical decisions and strategic business outcomes — translating ambiguous requirements into scalable architectures, and leading cross-functional teams to ship with confidence. My expertise spans the MERN stack, cloud-native infrastructure, AI integrations, and enterprise-grade custom platforms.

What sets me apart is my dual fluency: I think like an architect and operate like a delivery leader. Whether it's designing a HIPAA-compliant healthcare system, integrating OpenAI into a production SaaS product, or driving a 25% reduction in project cycle times through Agile practices — I bring both the technical depth and the leadership range to get it done.`

export const STATS: Stat[] = [
  { value: "11+", label: "Years Experience" },
  { value: "40+", label: "Projects Delivered" },
  { value: "5+", label: "Industry Domains" },
  { value: "PMP", label: "Certified" },
]

export const ABOUT_METRICS: AboutMetric[] = [
  {
    value: "11+",
    label: "Years in Tech",
    description: "Progressive growth from frontend engineer to Technical Architect & PM",
  },
  {
    value: "25%",
    label: "Faster Delivery",
    description: "Agile transformation that reduced project cycle times across the org",
  },
  {
    value: "40+",
    label: "Major Projects",
    description: "Across healthcare, SaaS, e-commerce, and enterprise platforms",
  },
  {
    value: "15",
    label: "Team Members Led",
    description: "Cross-functional engineering teams across multiple time zones",
  },
]

export const SKILLS: SkillCategory[] = [
  {
    label: "Frontend",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript (ES6+)" },
      { name: "HTML5 / CSS3" },
      { name: "Tailwind CSS" },
      { name: "SASS / SCSS" },
      { name: "Redux" },
      { name: "Context API" },
      { name: "Framer Motion" },
      { name: "Bootstrap" },
      { name: "jQuery" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Python" },
      { name: "Ruby on Rails" },
      { name: "RESTful APIs" },
      { name: "GraphQL" },
      { name: "Microservices" },
      { name: "API Gateway" },
      { name: "Authentication & Authorization" },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Schema Design" },
      { name: "Data Migration" },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { name: "AWS" },
      { name: "Cloud Infrastructure" },
      { name: "CI/CD Pipelines" },
      { name: "Docker" },
      { name: "Git & GitHub" },
      { name: "Bitbucket" },
      { name: "Deployment Automation" },
      { name: "Vercel" },
    ],
  },
  {
    label: "AI & Integrations",
    skills: [
      { name: "OpenAI API" },
      { name: "AI-Powered Applications" },
      { name: "Stripe" },
      { name: "SendGrid" },
      { name: "SteadyMD" },
      { name: "Freshworks API" },
      { name: "Rocketlane API" },
      { name: "Third-party Integrations" },
    ],
  },
  {
    label: "Project Management",
    skills: [
      { name: "PMP Certified" },
      { name: "Agile / Scrum" },
      { name: "JIRA" },
      { name: "Confluence" },
      { name: "Trello" },
      { name: "Basecamp" },
      { name: "Rocketlane" },
      { name: "Stakeholder Management" },
      { name: "Resource Planning" },
      { name: "Risk Management" },
    ],
  },
]

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "Makoitlab",
    role: "Project Manager",
    badge: "CURRENT",
    startDate: "Apr 2025",
    endDate: "Present",
    location: "Chennai, India",
    description:
      "Promoted to lead end-to-end technical and delivery ownership for complex enterprise projects across healthcare, SaaS, and custom application domains.",
    achievements: [
      "Architect end-to-end technical solutions for enterprise-level projects spanning healthcare, SaaS, and custom application domains",
      "Define system architecture, technology stack selection, and integration strategies for HIPAA-compliant and AI-powered platforms",
      "Lead architectural decisions for microservices-based systems using Next.js, Node.js, Python, and cloud infrastructure",
      "Direct cross-functional teams of up to 15 engineers, delivering a 25% reduction in project cycle times through Agile adoption",
      "Establish coding standards, architectural patterns, and best practices across the engineering organization",
      "Conduct technical due diligence and architectural reviews for all client-facing projects",
    ],
  },
  {
    company: "Makoitlab",
    role: "Technical Team Lead",
    badge: "PROMOTED",
    startDate: "Dec 2020",
    endDate: "Apr 2025",
    location: "Chennai, India",
    description:
      "Led a team of six engineers in building scalable web applications and high-impact products. Promoted from Senior UI Engineer based on demonstrated technical leadership.",
    achievements: [
      "Led a team of six engineers in developing scalable web applications using Next.js, React, and Node.js",
      "Architected and delivered multiple high-impact projects including healthcare platforms, AI-powered SaaS solutions, and enterprise applications",
      "Mentored engineers on advanced frontend architecture, state management patterns, and performance optimization",
      "Established technical workflows and development processes that improved team productivity and code quality",
      "Collaborated with stakeholders to translate business requirements into technical specifications and project roadmaps",
    ],
  },
  {
    company: "TechAffinity Global Pvt Ltd",
    role: "Senior UI Engineer",
    badge: "PROMOTED",
    startDate: "Nov 2017",
    endDate: "Nov 2020",
    location: "Chennai, India",
    description:
      "Developed complex, responsive user interfaces for enterprise applications and led frontend architecture decisions across multiple client projects. Promoted from Graphics Designer.",
    achievements: [
      "Developed complex, responsive user interfaces for enterprise applications using modern JavaScript frameworks",
      "Led frontend architecture decisions for multiple client projects across diverse technology stacks",
      "Demonstrated expertise in project coordination, time management, and requirements analysis",
      "Strengthened client communication skills and alignment of technical solutions with business vision",
      "Mentored junior developers on frontend best practices and coding standards",
    ],
  },
  {
    company: "TechAffinity Global Pvt Ltd",
    role: "Graphics Designer & Frontend Developer",
    startDate: "Feb 2015",
    endDate: "Oct 2017",
    location: "Chennai, India",
    description:
      "Converted design mockups into pixel-perfect, responsive web experiences. Built a deep foundation in frontend frameworks and cross-platform web development.",
    achievements: [
      "Converted design mockups into pixel-perfect, responsive HTML/CSS implementations",
      "Mastered multiple frontend frameworks including Bootstrap, Foundation, and Material Design",
      "Developed proficiency in SVG and CSS3 animations for enhanced user experiences",
      "Contributed to frontend development across diverse stacks: Python, WordPress, Drupal, Ionic, .NET, and Angular",
      "Built strong foundation in web standards, cross-browser compatibility, and responsive design",
    ],
  },
  {
    company: "Raga Designers",
    role: "Web Developer",
    startDate: "Oct 2014",
    endDate: "Jan 2015",
    location: "Chennai, India",
    description:
      "Began professional career transforming PSD designs into functional, responsive web pages.",
    achievements: [
      "Transformed PSD designs into functional, responsive webpages using HTML5, CSS3, and jQuery",
      "Developed core skills in web development best practices and client collaboration",
      "Established a strong foundation in cross-browser compatibility and responsive design principles",
    ],
  },
]

export const PROJECTS: ProjectEntry[] = [
  {
    name: "OTF Health",
    domain: "Healthcare",
    domainColor: "green",
    description:
      "Architected a HIPAA-compliant healthcare platform for US-based diagnostic laboratories. Designed secure end-to-end encryption, role-based access control, audit logging, and SteadyMD integration as core pillars of a scalable microservices architecture.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "AWS", "SteadyMD", "HIPAA Infrastructure"],
    outcome: "HIPAA-compliant, production-grade healthcare platform for US diagnostics",
    period: "Jan 2024 – Present",
  },
  {
    name: "Brand Starter Kit",
    domain: "AI SaaS",
    domainColor: "indigo",
    description:
      "Designed and delivered an AI-driven branding SaaS platform that generates brand statements, stories, and USPs using OpenAI. Built on a scalable three-tier architecture with full payment and communications integration.",
    techStack: ["Next.js", "Python", "Strapi CMS", "OpenAI API", "Stripe", "SendGrid", "MongoDB"],
    outcome: "Full-featured AI SaaS platform with automated brand content generation",
    period: "Jan 2023 – Jan 2024",
  },
  {
    name: "Rocketlane Custom Apps",
    domain: "Enterprise",
    domainColor: "amber",
    description:
      "Led the complete technical lifecycle for custom application development extending Rocketlane's project management platform. Owned architecture, scope definition, and stakeholder alignment for modules covering projects, accounts, resources, and finance.",
    techStack: ["Node.js", "React.js", "RESTful APIs", "Rocketlane Platform", "Third-party APIs"],
    outcome: "Enterprise-grade platform extensions supporting full project & resource management",
    period: "Ongoing",
  },
  {
    name: "Freshworks Portal",
    domain: "Enterprise",
    domainColor: "cyan",
    description:
      "Architected custom Freshworks support portal solutions aligned with enterprise client branding. Implemented responsive UI customizations, navigation flows, and dynamic frontend components within platform constraints.",
    techStack: ["Liquid Templating", "HTML5", "CSS3", "JavaScript", "jQuery", "Freshworks API"],
    outcome: "Scalable, brand-aligned enterprise support portals with improved UX",
    period: "Multiple engagements",
  },
  {
    name: "Fillable Solutions",
    domain: "EdTech",
    domainColor: "rose",
    description:
      "Architected a full-stack childcare center management application. Designed the system architecture combining a modern Next.js frontend with a Ruby on Rails backend, leading all project management and technical planning.",
    techStack: ["Next.js", "Ruby on Rails", "PostgreSQL"],
    outcome: "Complete childcare management platform with full-stack architecture",
    period: "2022 – 2023",
  },
]

export const CERTIFICATIONS: CertificationEntry[] = [
  {
    type: "certification",
    title: "Project Management Professional (PMP)",
    issuer: "Project Management Institute (PMI)",
    date: "Active",
    credentialUrl: "https://www.credly.com",
    description:
      "Globally recognized certification demonstrating expertise in project management methodologies, frameworks, and best practices. Verified on Credly.",
    icon: "Award",
  },
  {
    type: "speaking",
    title: "Speaker — Tech Summit 2025",
    issuer: "Chennai, India",
    date: "2025",
    description:
      "Delivered a technical presentation on the latest AI technologies and their practical applications in modern web architecture. Facilitated knowledge-sharing on AI integration strategies for full-stack applications.",
    icon: "Mic2",
  },
  {
    type: "speaking",
    title: "Speaker — MERN Tech Event",
    issuer: "Chennai, India",
    date: "2024",
    description:
      "Presented a comprehensive deep-dive into MERN stack architecture patterns, advanced Node.js backend design, MongoDB optimization, and modern React/Next.js performance techniques.",
    icon: "Presentation",
  },
]

export const EDUCATION: EducationEntry[] = [
  {
    degree: "Bachelor of Engineering",
    field: "Computer Science & Engineering",
    institution: "St. Xavier's Catholic College of Engineering",
    year: "2013",
    location: "Nagercoil, Tamil Nadu, India",
  },
  {
    degree: "Higher Secondary Education",
    field: "Science",
    institution: "St. Joseph's Hr. Sec School",
    year: "2009",
    location: "Thiruthuvapuram, Nagercoil, India",
  },
]

export const PM_COMPETENCIES = [
  {
    icon: "🔄",
    title: "Agile Methodology",
    subtitle: "Scrum | Kanban",
    description: "Driving iterative delivery through Agile frameworks, sprint planning, and continuous improvement cycles.",
  },
  {
    icon: "🤝",
    title: "Team Co-ordination",
    subtitle: "Effective Collaboration",
    description: "Orchestrating cross-functional teams with clear ownership, communication cadences, and shared accountability.",
  },
  {
    icon: "📋",
    title: "Project Handling",
    subtitle: "End-to-End Delivery",
    description: "Owning full project lifecycle — from requirements and scoping through development, QA, UAT, and launch.",
  },
  {
    icon: "👥",
    title: "Team Leadership",
    subtitle: "Handling 15 Team Members",
    description: "Leading engineering squads of up to 15, fostering a culture of ownership, growth, and high performance.",
  },
  {
    icon: "💬",
    title: "Client Communication",
    subtitle: "Stakeholder Management",
    description: "Building trust with clients and stakeholders through transparent reporting, proactive updates, and executive-level communication.",
  },
  {
    icon: "📊",
    title: "Weekly Progress",
    subtitle: "Reporting & Updates",
    description: "Maintaining delivery visibility with structured status reports, risk logs, and milestone tracking dashboards.",
  },
  {
    icon: "💰",
    title: "Budgeting",
    subtitle: "Budget & Cost Control",
    description: "Managing project financials with precision — effort estimation, resource allocation, and cost variance analysis.",
  },
  {
    icon: "⚡",
    title: "Handling Escalations",
    subtitle: "Conflict Resolution",
    description: "De-escalating delivery blockers, mediating team conflicts, and turning critical issues into structured action plans.",
  },
]

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Competencies", href: "#competencies" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
]
