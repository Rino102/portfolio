"use client"

import { useRef, useState } from "react"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import {
  Activity, Users, Briefcase, Users2,
  MessageCircle, Calendar, Calculator, AlertTriangle,
  Code2, Server, Database, Cloud, Layers, Zap,
  TrendingUp, Award, Clock, Target,
  Mail, Download,
  Shield,
} from "lucide-react"
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion"

/* ─── Slide data ──────────────────────────────────────────── */

const PM_SKILLS = [
  { Icon: Activity,      label: "Agile Methodology" },
  { Icon: MessageCircle, label: "Client Communication" },
  { Icon: Users,         label: "Team Co-ordination" },
  { Icon: Calendar,      label: "Weekly Progress" },
  { Icon: Briefcase,     label: "Project Handling" },
  { Icon: Calculator,    label: "Budgeting" },
  { Icon: Users2,        label: "15 Team Members" },
  { Icon: AlertTriangle, label: "Handling Escalations" },
]

const TECH_SKILLS = [
  { Icon: Code2,    label: "React / Next.js",     color: "#00A8B5" },
  { Icon: Server,   label: "Node.js / Express",   color: "#00A8B5" },
  { Icon: Database, label: "MongoDB / SQL",        color: "#C09F40" },
  { Icon: Layers,   label: "TypeScript",           color: "#00A8B5" },
  { Icon: Cloud,    label: "AWS / Cloud",          color: "#FF6F00" },
  { Icon: Zap,      label: "AI Integration",       color: "#C09F40" },
]

const IMPACT_STATS = [
  { value: "11+",  label: "Years Experience",   desc: "Growing from frontend to architect",   Icon: Clock,      accent: "#00A8B5" },
  { value: "40+",  label: "Projects Delivered", desc: "Healthcare, SaaS & enterprise",        Icon: Target,     accent: "#1A365D" },
  { value: "25%",  label: "Faster Delivery",    desc: "Agile transformation results",         Icon: TrendingUp, accent: "#FF6F00" },
  { value: "PMP®", label: "Certified",          desc: "Project Management Professional",      Icon: Award,      accent: "#C09F40" },
]

/* ─── Component ───────────────────────────────────────────── */

const SLIDE_COUNT = 3

/* useTransform returns MotionValue<string> which needs this cast for style.y */
function sv(v: MotionValue<string>): MotionValue<string | number> {
  return v as MotionValue<string | number>
}

export function HeroBanner() {
  const isDesktop = useMediaQuery("(min-width: 1100px)")
  const [current, setCurrent] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const currentRef = useRef(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  /*
   * Slide 1 — base layer, drifts up slightly as slide 2 arrives
   * Slide 2 — wipes in from bottom [0→0.5], then drifts up as slide 3 arrives [0.5→1]
   * Slide 3 — wipes in from bottom [0.5→1], lands on top
   */
  const y1 = sv(useTransform(scrollYProgress, [0, 0.5], ["0%", "-8%"]))
  const y2 = sv(useTransform(scrollYProgress, [0, 0.5, 1], ["100%", "0%", "-8%"]))
  const y3 = sv(useTransform(scrollYProgress, [0.5, 1], ["100%", "0%"]))

  /* Track active slide for dot indicator */
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = Math.min(Math.floor(latest * SLIDE_COUNT), SLIDE_COUNT - 1)
    if (next !== currentRef.current) {
      currentRef.current = next
      setCurrent(next)
    }
  })

  return (
    <section ref={sectionRef} className="desktop:h-[300vh]" >
      <div
        className="relative overflow-hidden desktop:sticky desktop:top-0 desktop:h-[100vh]"
      >

        {/* ── SLIDE 1 — Project Manager — z:1 (bottom) ─────────── */}
        <motion.div
          style={{ y: isDesktop ? y1 : 0 }}
          className="desktop:absolute desktop:inset-0 z-[1] flex overflow-hidden bg-[#F8F9FA]"
        >
          {/* Geometric background shapes */}
          <picture className="desktop:absolute desktop:inset-0 h-full w-full">
            <source media="(min-width: 1024px)" srcSet="/banner2.png" />
            <source media="(min-width: 768px)" srcSet="/tablet-banner.png" />
            <img
              src="/mobile-banner.png"
              alt="Rino Robinson — Project Manager"
              className="w-full h-auto desktop:h-full desktop:object-cover object-right"
              fetchPriority="high"
            />
          </picture>
        </motion.div>

        {/* ── SLIDE 2 — Technical Architect — z:2 ──────────────── */}
        <motion.div
          style={{ y: isDesktop ? y2 : 0, background: "#1A365D" }}
          className="desktop:absolute desktop:inset-0 z-[2] flex items-center justify-center overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="absolute -right-32 -top-32 h-96 w-96 rounded-full"
              style={{ background: "rgba(0,168,181,0.18)", filter: "blur(80px)" }}
            />
            <div
              className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full"
              style={{ background: "rgba(255,111,0,0.12)", filter: "blur(80px)" }}
            />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-5xl px-8 py-16 text-center md:px-14">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-12" style={{ background: "#00A8B5" }} />
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#00A8B5" }}>
                Full-Stack Engineering
              </p>
              <span className="h-px w-12" style={{ background: "#00A8B5" }} />
            </div>

            <h1
              className="mb-3 text-4xl font-black uppercase leading-none tracking-tight text-white md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              TECHNICAL<br />
              <span style={{ color: "#00A8B5" }}>ARCHITECT</span>
            </h1>

            <p className="mb-12 text-base text-white/60 md:text-lg">
              11+ years building enterprise-grade MERN stack systems at scale
            </p>

            <div className="mb-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
              {TECH_SKILLS.map(({ Icon, label, color }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2.5 rounded-xl p-4"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.10)",
                  }}
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: `${color}22` }}
                  >
                    <Icon className="h-5 w-5" style={{ color }} />
                  </div>
                  <span className="text-xs font-semibold text-white/80">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-10">
              {[
                { v: "11+", l: "Years" },
                { v: "40+", l: "Projects" },
                { v: "MERN", l: "Stack" },
                { v: "AI",   l: "Integrated" },
              ].map(({ v, l }) => (
                <div key={l} className="text-center">
                  <p className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-poppins)" }}>{v}</p>
                  <p className="text-xs uppercase tracking-widest text-white/50">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── SLIDE 3 — Impact & Achievements — z:3 (top) ─────── */}
        <motion.div
          style={{ y: isDesktop ? y3 : 0 }}
          className="desktop:absolute desktop:inset-0 z-[3] flex items-center justify-center overflow-hidden bg-[#F8F9FA]"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="desktop:absolute desktop:left-1/2 desktop:top-0 h-[500px] w-[700px] -translate-x-1/2"
              style={{
                background: "radial-gradient(ellipse at 50% 0%, rgba(0,168,181,0.10), transparent 70%)",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-5xl px-8 py-16 text-center md:px-14">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-12" style={{ background: "#00A8B5" }} />
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#00A8B5" }}>
                Measurable Impact
              </p>
              <span className="h-px w-12" style={{ background: "#00A8B5" }} />
            </div>

            <h1
              className="mb-3 text-4xl font-black uppercase leading-none tracking-tight md:text-5xl lg:text-6xl"
              style={{ color: "#1A365D", fontFamily: "var(--font-poppins)" }}
            >
              DELIVERING<br />
              <span style={{ color: "#00A8B5" }}>RESULTS</span>
            </h1>

            <p className="mb-12 text-base text-slate-500 md:text-lg">
              PMP-certified Project Manager &amp; Technical Architect
            </p>

            <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {IMPACT_STATS.map(({ value, label, desc, Icon, accent }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-3 rounded-2xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.80)",
                    border: "1px solid rgba(26,54,93,0.10)",
                    boxShadow: "0 2px 16px rgba(26,54,93,0.06)",
                  }}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ background: `${accent}18` }}
                  >
                    <Icon className="h-6 w-6" style={{ color: accent }} />
                  </div>
                  <p
                    className="text-3xl font-black leading-none"
                    style={{ color: accent, fontFamily: "var(--font-poppins)" }}
                  >
                    {value}
                  </p>
                  <div>
                    <p className="text-sm font-bold" style={{ color: "#1A365D" }}>{label}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: "#00A8B5", boxShadow: "0 0 20px rgba(0,168,181,0.35)" }}
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
              <a
                href="/resume-rino-robinson.pdf"
                download="Rino_Robinson_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-semibold transition-all hover:bg-teal-500/10"
                style={{ color: "#00A8B5", borderColor: "rgba(0,168,181,0.50)" }}
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Dot indicator — always on top (z:20) ─────────────── */}
        {/* <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? "28px" : "8px",
                height: "8px",
                background: i === current
                  ? "#00A8B5"
                  : current === 1
                  ? "rgba(255,255,255,0.35)"
                  : "rgba(26,54,93,0.25)",
              }}
            />
          ))}
        </div> */}

      </div>
    </section>
  )
}
