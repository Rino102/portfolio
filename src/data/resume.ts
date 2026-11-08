import type {
  AboutCard,
  AIPractice,
  ContactInfo,
  CredentialEntry,
  ExperienceEntry,
  ExpertiseItem,
  HeroStat,
  LinkedInPost,
  NavLink,
  ProcessStep,
  ProjectEntry,
  SkillGroup,
} from "@/types"

export const PERSONAL: ContactInfo = {
  email: "rlrino102@gmail.com",
  phone: "+91 8012828581",
  linkedin: "linkedin.com/in/rinorobinson",
  linkedinUrl: "https://www.linkedin.com/in/rinorobinson",
  github: "Rino102",
  githubUrl: "https://github.com/Rino102",
  location: "Chennai, India",
  website: "rinorobinson.com",
  websiteUrl: "https://rinorobinson.com",
}

export const ROLE_TITLE = "Technical Project Manager"

export const AVAILABILITY = "Open to opportunities · Chennai, India"

/* ─── Hero ──────────────────────────────────────────────────── */

export const HERO_HEADLINE_LEAD = "Delivery led by someone who"
export const HERO_HEADLINE_ACCENT = "reads the code."

export const HERO_SUMMARY =
  "PMP-certified Technical Project Manager with 12+ years in IT. I turn unclear requirements into MERN-stack products that ship on time, pass audits and stay maintainable after handover."

export const HERO_STATS: HeroStat[] = [
  { value: "12+", label: "Years in IT" },
  { value: "PMP", label: "Certified" },
  { value: "MERN", label: "Hands-on depth" },
  { value: "Multi", label: "Concurrent clients" },
]

export const HERO_CARDS = [
  { label: "Currently", value: "Technical PM · Mako IT Lab" },
  { label: "Credential", value: "PMP® Certified" },
]

export const WORKS_WITH = [
  "Scrum",
  "Kanban",
  "Jira",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "Rocketlane",
  "Zoho",
]

/* ─── 01 About ──────────────────────────────────────────────── */

export const ABOUT_HEADLINE =
  "I bridge the gap between technical decisions and the business outcome someone is waiting on."

export const ABOUT_BODY = [
  "My path ran from frontend engineering to team leadership to technical project management. That order matters. I can estimate honestly, challenge an architecture in a review, and tell when a status update is optimistic.",
  "Today I manage several client projects at once at Mako IT Lab, from healthcare SaaS to Rocketlane custom apps and data migrations, and I use AI tooling daily to speed up documentation, reporting and analysis.",
]

export const ABOUT_CARDS: AboutCard[] = [
  {
    title: "Architecture-aware",
    body: "MERN stack, integrations and compliance constraints are part of the plan, not a surprise.",
  },
  {
    title: "Plain reporting",
    body: "Weekly RAG status, risks and decisions written so a steering group can act on them.",
  },
  {
    title: "Team first",
    body: "Clear ownership, short feedback loops and engineers who know why the work matters.",
  },
]

/* ─── 02 Expertise ──────────────────────────────────────────── */

export const EXPERTISE: ExpertiseItem[] = [
  {
    title: "Agile delivery",
    body: "Sprint planning, backlog hygiene and retros that end on time with actions.",
  },
  {
    title: "Scope and approach docs",
    body: "Solution design, API mapping and error handling agreed before build starts.",
  },
  {
    title: "Risk and RAID control",
    body: "Risks, assumptions, issues and dependencies tracked with owners and dates.",
  },
  {
    title: "Stakeholder reporting",
    body: "RAG status emails, minutes of meeting and burn charts people actually read.",
  },
  {
    title: "Technical review",
    body: "React, Next.js, Node and MongoDB decisions questioned early, while change is cheap.",
  },
  {
    title: "Client management",
    body: "Expectation setting, change control and negotiation across concurrent accounts.",
  },
  {
    title: "Data migration",
    body: "Moves from Zendesk, Zoho, Asana and Google Sheets with validation at each step.",
  },
  {
    title: "Team and hiring",
    body: "Technical assessments, mentoring and clear ownership inside delivery teams.",
  },
]

/* ─── 03 Experience ─────────────────────────────────────────── */

export const EXPERIENCE_INTRO = "From pixels to people to portfolios of projects."

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "Mako IT Lab",
    role: "Technical Project Manager",
    badge: "CURRENT",
    startDate: "Jul 2025",
    endDate: "Now",
    location: "Chennai",
    description:
      "Lead delivery across multiple concurrent client projects, covering healthcare SaaS, AI products, Rocketlane custom apps and migrations. Own scope, plans, risks and weekly reporting.",
    achievements: [
      "Architect end-to-end technical solutions for enterprise-level projects spanning healthcare, SaaS, and custom application domains",
      "Define system architecture, technology stack selection, and integration strategies for HIPAA-compliant and AI-powered platforms",
      "Direct cross-functional teams of up to 15 engineers, delivering a 25% reduction in project cycle times through Agile adoption",
      "Conduct technical due diligence and architectural reviews for all client-facing projects",
    ],
  },
  {
    company: "Mako IT Lab",
    role: "Team Leader",
    badge: "PROMOTED",
    startDate: "Dec 2020",
    endDate: "Jun 2025",
    location: "Chennai",
    description:
      "Led a team of engineers building scalable web applications under tight release cycles. Promoted into project management on the strength of delivery results.",
    achievements: [
      "Led a team of six engineers in developing scalable web applications using Next.js, React, and Node.js",
      "Architected and delivered healthcare platforms, AI-powered SaaS solutions, and enterprise applications",
      "Mentored engineers on frontend architecture, state management patterns, and performance optimization",
    ],
  },
  {
    company: "TechAffinity Global Pvt Ltd",
    role: "Senior UI Engineer",
    badge: "PROMOTED",
    startDate: "Nov 2017",
    endDate: "Nov 2020",
    location: "Chennai",
    description:
      "Built React and Next.js interfaces for multi-client web applications, with reusable component work and design-to-code handover.",
    achievements: [
      "Developed complex, responsive user interfaces for enterprise applications using modern JavaScript frameworks",
      "Led frontend architecture decisions for multiple client projects across diverse technology stacks",
      "Mentored junior developers on frontend best practices and coding standards",
    ],
  },
  {
    company: "TechAffinity Global Pvt Ltd",
    role: "Graphic Designer and Frontend Developer",
    startDate: "Feb 2015",
    endDate: "Oct 2017",
    location: "Chennai",
    description:
      "Started in design and HTML, CSS and JavaScript, which is where the habit of caring about the end user began.",
    achievements: [
      "Converted design mockups into pixel-perfect, responsive HTML/CSS implementations",
      "Developed proficiency in SVG and CSS3 animations for enhanced user experiences",
      "Contributed across diverse stacks: Python, WordPress, Drupal, Ionic, .NET, and Angular",
    ],
  },
  {
    company: "Raga Designers",
    role: "Web Developer",
    startDate: "Oct 2014",
    endDate: "Jan 2015",
    location: "Chennai",
    description:
      "Began professional career turning PSD designs into functional, responsive web pages with HTML5, CSS3 and jQuery.",
    achievements: [
      "Transformed PSD designs into functional, responsive webpages using HTML5, CSS3, and jQuery",
      "Established a foundation in cross-browser compatibility and responsive design principles",
    ],
  },
]

/* ─── 04 Selected work ──────────────────────────────────────── */

export const PROJECTS: ProjectEntry[] = [
  {
    name: "OTF Health",
    domain: "Healthcare SaaS · HIPAA",
    status: "Delivered",
    description:
      "Architected and delivered a HIPAA-compliant healthcare platform for US-based diagnostic laboratories, with audit logging, role-based access and secure data handling.",
    techStack: ["React", "Node.js", "MongoDB", "AWS", "HIPAA"],
    role: "Project Manager / Architect",
    featured: true,
  },
  {
    name: "Brand Starter Kit",
    domain: "AI Branding SaaS",
    status: "Delivered",
    description:
      "Designed and delivered an AI-powered branding platform on a scalable multi-tenant architecture, with payments and communication integrations.",
    techStack: ["Next.js", "Node.js", "MongoDB", "LLM APIs"],
    role: "Technical Project Manager",
    featured: true,
  },
  {
    name: "Rocketlane engagements",
    domain: "Custom apps · Migrations",
    status: "Ongoing",
    description:
      "Custom apps on Project, Global and Customer Portal surfaces, plus data migrations from Zendesk, Zoho, Asana and Google Sheets, for clients including HighRadius, Staffbase and Phoenix DX. Owned the project plan, dependency tracking, RAID log, client follow-ups, invoicing and handover.",
    techStack: ["Rocketlane SDK", "REST APIs", "Zendesk", "Zoho"],
    role: "Technical Project Manager",
    featured: true,
  },
  {
    name: "Clinovo",
    domain: "Clinic SaaS · Discovery",
    status: "In progress",
    description:
      "Multi-tenant clinic management platform, taken from product discovery through scope, user stories and build planning.",
    techStack: ["Multi-tenant", "MERN", "Product discovery"],
    role: "Project Manager",
    featured: true,
  },
  {
    name: "Club Development Circle",
    domain: "SaaS · United Kingdom",
    status: "Delivered",
    description:
      "UK SaaS platform. Managed delivery end to end: planning, client communication, team coordination and release.",
    techStack: [],
    role: "Project Manager",
    url: "https://clubdevelopmentcircle.co.uk",
    urlLabel: "clubdevelopmentcircle.co.uk",
    featured: true,
  },
  {
    name: "Hanu Reddy Realty",
    domain: "Real estate · Web",
    status: "Delivered",
    description:
      "Real estate website build with Strapi CMS, plus Zoho CRM setup for lead management.",
    techStack: ["Strapi CMS", "Zoho CRM"],
    role: "Project Manager",
    url: "https://hanureddyrealty.com",
    urlLabel: "hanureddyrealty.com",
    featured: true,
  },
]

/* ─── 05 How I deliver ──────────────────────────────────────── */

export const PROCESS: ProcessStep[] = [
  {
    step: "Step 1",
    title: "Discover",
    body: "Goals, users, constraints and what success looks like.",
  },
  {
    step: "Step 2",
    title: "Scope",
    body: "Approach document, user stories and clear exclusions.",
  },
  {
    step: "Step 3",
    title: "Plan",
    body: "Milestones, estimates, risks and owners agreed in writing.",
  },
  {
    step: "Step 4",
    title: "Build",
    body: "Short sprints, demos and weekly RAG status.",
  },
  {
    step: "Step 5",
    title: "Hand over",
    body: "Documentation, test cases and a team that can run it.",
  },
]

/* ─── 06 AI in Delivery ─────────────────────────────────────── */

export const AI_IN_DELIVERY: AIPractice[] = [
  {
    title: "AI-assisted coding",
    body: "Use Claude Code to build, review and debug features for custom apps and web projects, so the team ships faster with fewer defects.",
  },
  {
    title: "Skills and agent creation",
    body: "Built reusable Claude Skills and agents for repeat PM work: scope and approach documents, user stories, MOMs and weekly status reports.",
  },
  {
    title: "AI-built project plans",
    body: "Use AI to draft project plans, task breakdowns, dependencies and RAID items, then review and correct them before sharing with clients.",
  },
  {
    title: "Evaluating AI output",
    body: "Check every AI result against requirements, test cases and source data. AI speeds up the work; the final call stays with the team.",
  },
  {
    title: "Data security and privacy",
    bullets: [
      "Mask email IDs, client names, contact details and business data before pasting anything into an AI platform.",
      "Never share credentials, API keys or production data with AI tools.",
      "Use approved tools and secure settings only, in line with client NDAs and company security policy.",
    ],
  },
]

/* ─── 07 Skills ─────────────────────────────────────────────── */

export const SKILLS: SkillGroup[] = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML / CSS", "Tailwind"],
  },
  {
    label: "Backend and data",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "Supabase"],
  },
  {
    label: "Delivery and AI",
    skills: ["PMP", "Scrum", "Kanban", "Jira", "Risk register", "LLM workflows"],
  },
]

/* ─── 08 From LinkedIn ──────────────────────────────────────── */

export const LINKEDIN_POSTS: LinkedInPost[] = [
  {
    title: "The status report nobody reads",
    tag: "Delivery",
    url: "https://www.linkedin.com/in/rinorobinson/recent-activity/all/",
  },
  {
    title: "Estimating work you have never done",
    tag: "Estimation",
    url: "https://www.linkedin.com/in/rinorobinson/recent-activity/all/",
  },
  {
    title: "Why my retros ran for 20 minutes",
    tag: "Agile",
    url: "https://www.linkedin.com/in/rinorobinson/recent-activity/all/",
  },
]

/* ─── 09 Credentials ────────────────────────────────────────── */

export const CREDENTIALS: CredentialEntry[] = [
  {
    kind: "certification",
    label: "Certification · Active",
    title: "Project Management Professional (PMP)®",
    description: "Project Management Institute. Credential verified on Credly.",
    credentialUrl: "https://www.credly.com/badges/6cec4e42-8ae7-47fb-b12a-f3b1d3be8039",
  },
  {
    kind: "education",
    label: "Education",
    title: "Bachelor of Engineering",
    description:
      "Computer Science and Engineering. St. Xavier's Catholic College of Engineering, Tamil Nadu.",
  },
  {
    kind: "speaking",
    label: "Speaking · 2025",
    title: "Tech Summit 2025",
    description:
      "Technical presentation on practical AI technologies and how teams can adopt them.",
  },
  {
    kind: "speaking",
    label: "Speaking · 2024",
    title: "MERN Tech Event",
    description:
      "Session on the MERN stack: architecture patterns, Node.js, MongoDB and performance.",
  },
]

/* ─── 10 Contact ────────────────────────────────────────────── */

export const CONTACT_HEADLINE = "Let's talk about your delivery date."

export const CONTACT_BODY =
  "Whether you need an architect, a project manager or both, I am open to conversations about complex delivery challenges."

/* ─── Navigation ────────────────────────────────────────────── */

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "LinkedIn", href: "#linkedin" },
  { label: "Contact", href: "#contact" },
]
