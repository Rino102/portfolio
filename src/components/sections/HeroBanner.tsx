"use client"

import { useRef, useState } from "react"
import {
  Code2, Server, Database, Cloud, Layers, Zap,
  TrendingUp, Award, Clock, Target,
  Mail,
} from "lucide-react"
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { Button } from "@/components/ui/Button"

/* ─── Slide data ──────────────────────────────────────────── */

const TECH_SKILLS = [
  { Icon: Code2,    label: "React / Next.js",   color: "#00A8B5" },
  { Icon: Server,   label: "Node.js / Express", color: "#00A8B5" },
  { Icon: Database, label: "MongoDB / SQL",      color: "#C09F40" },
  { Icon: Layers,   label: "TypeScript",         color: "#00A8B5" },
  { Icon: Cloud,    label: "AWS / Cloud",        color: "#FF6F00" },
  { Icon: Zap,      label: "AI Integration",     color: "#C09F40" },
]

const IMPACT_STATS = [
  { value: "11+",  label: "Years Experience",   desc: "Growing from frontend to architect",   Icon: Clock,      accent: "#00A8B5" },
  { value: "40+",  label: "Projects Delivered", desc: "Healthcare, SaaS & enterprise",        Icon: Target,     accent: "#FFFFFF" },
  { value: "25%",  label: "Faster Delivery",    desc: "Agile transformation results",         Icon: TrendingUp, accent: "#FF6F00" },
  { value: "PMP®", label: "Certified",          desc: "Project Management Professional",      Icon: Award,      accent: "#C09F40" },
]

const SLIDE_COUNT = 3

function sv(v: MotionValue<string>): MotionValue<string | number> {
  return v as MotionValue<string | number>
}

/* ─── Shared slide content blocks ─────────────────────────── */

function Slide1Content() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full"
          style={{ background: "rgba(0,168,181,0.18)", filter: "blur(80px)" }} />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full"
          style={{ background: "rgba(255,111,0,0.12)", filter: "blur(80px)" }} />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }} />
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
        <div className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {TECH_SKILLS.map(({ Icon, label, color }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2.5 rounded-xl p-4"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: `${color}22` }}>
                <Icon className="h-5 w-5" style={{ color }} />
              </div>
              <span className="text-xs font-semibold text-white/80">{label}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {[
            { v: "11+",  l: "Years"      },
            { v: "40+",  l: "Projects"   },
            { v: "MERN", l: "Stack"      },
            { v: "AI",   l: "Integrated" },
          ].map(({ v, l }) => (
            <div key={l} className="text-center">
              <p className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-poppins)" }}>{v}</p>
              <p className="text-xs uppercase tracking-widest text-white/50">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

function Slide2Content() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,168,181,0.10), transparent 70%)" }}
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
          className="mb-3 text-4xl font-black uppercase leading-none tracking-tight text-white md:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          DELIVERING<br />
          <span style={{ color: "#00A8B5" }}>RESULTS</span>
        </h1>
        <p className="mb-12 text-base text-white/60 md:text-lg">
          PMP-certified Project Manager &amp; Technical Architect
        </p>
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {IMPACT_STATS.map(({ value, label, desc, Icon, accent }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-2xl p-5"
              style={{
                background: "rgba(255,255,255,0.09)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.14)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: `${accent}18` }}>
                <Icon className="h-6 w-6" style={{ color: accent }} />
              </div>
              <p className="text-3xl font-black leading-none" style={{ color: accent, fontFamily: "var(--font-poppins)" }}>
                {value}
              </p>
              <div>
                <p className="text-sm font-bold text-white/90">{label}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/55">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="#contact" variant="glass" size="lg">
            <Mail className="h-4 w-4" />
            Contact Me
          </Button>
        </div>
      </div>
    </>
  )
}

/* ─── Desktop: sticky scroll animation ───────────────────── */

function DesktopBanner() {
  const outerRef  = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const currentRef = useRef(0)

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = Math.min(Math.floor(latest * SLIDE_COUNT), SLIDE_COUNT - 1)
    if (next !== currentRef.current) {
      currentRef.current = next
      setCurrent(next)
    }
  })

  const barScaleX = useTransform(scrollYProgress, [0, 1], [0, 1])
  const scale0    = useTransform(scrollYProgress, [1 / 3, 2 / 3], [1, 0.94])
  const opacity0  = useTransform(scrollYProgress, [1 / 3, 2 / 3], [1, 0])
  const y1        = sv(useTransform(scrollYProgress, [1 / 3, 2 / 3], ["100%", "0%"]))
  const scale1    = useTransform(scrollYProgress, [2 / 3, 1],        [1, 0.94])
  const opacity1  = useTransform(scrollYProgress, [2 / 3, 1],        [1, 0])
  const y2        = sv(useTransform(scrollYProgress, [2 / 3, 1], ["100%", "0%"]))

  return (
    <div ref={outerRef} style={{ height: `${SLIDE_COUNT * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Progress bar */}
        <motion.div
          className="absolute top-0 inset-x-0 h-[3px] origin-left z-30"
          style={{ scaleX: barScaleX, background: "linear-gradient(90deg, #00A8B5, #4dd6e0)" }}
        />

        {/* Slide 0 — PM image */}
        <motion.div style={{ scale: scale0, opacity: opacity0, zIndex: 1, position: "absolute", inset: 0 }}>
          <picture className="absolute inset-0 w-full h-full">
            <source media="(min-width: 1024px)" srcSet="/banner2.png" />
            <img
              src="/banner2.png"
              alt="Rino Robinson — Project Manager"
              className="w-full h-full object-cover object-right"
              fetchPriority="high"
            />
          </picture>
        </motion.div>

        {/* Slide 1 — Technical Architect */}
        <motion.div
          style={{
            y: y1, scale: scale1, opacity: opacity1,
            zIndex: 2, position: "absolute", inset: 0,
            background: "rgba(8,15,30,0.92)",
            backdropFilter: "blur(4px)",
          }}
          className="flex items-center justify-center overflow-hidden"
        >
          <Slide1Content />
        </motion.div>

        {/* Slide 2 — Results */}
        <motion.div
          style={{ y: y2, zIndex: 3, position: "absolute", inset: 0, background: "rgba(8,15,30,0.88)" }}
          className="flex items-center justify-center overflow-hidden"
        >
          <Slide2Content />
        </motion.div>

       

      </div>
    </div>
  )
}

/* ─── Mobile / tablet: stacked static slides ─────────────── */

function MobileBanner() {
  return (
    <div>
      {/* Slide 0 — hero image */}
      <div className="relative w-full" style={{ minHeight: "100svh" }}>
        <picture className=" inset-0 w-full h-full">
          <source media="(min-width: 768px)" srcSet="/tablet-banner.png" />
          <img
            src="/mobile-banner.png"
            alt="Rino Robinson — Project Manager"
            className="w-full"
            fetchPriority="high"
          />
        </picture>
      </div>

      {/* Slide 1 — Technical Architect */}
      <div
        className="relative flex items-center justify-center overflow-hidden py-4"
        style={{ background: "rgba(8,15,30,0.92)" }}
      >
        <Slide1Content />
      </div>

      {/* Slide 2 — Results */}
      <div
        className="relative flex items-center justify-center overflow-hidden py-4"
        style={{ background: "rgba(8,15,30,0.88)" }}
      >
        <Slide2Content />
      </div>
    </div>
  )
}

/* ─── Main export ─────────────────────────────────────────── */

export function HeroBanner() {
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  if (!isDesktop) return <MobileBanner />
  return <DesktopBanner />
}
