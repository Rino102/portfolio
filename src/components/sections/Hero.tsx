"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Download, Mail } from "lucide-react"
import { GradientMesh } from "@/components/ui/GradientMesh"
import { GrainOverlay } from "@/components/ui/GrainOverlay"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"
import { Button } from "@/components/ui/Button"
import { PERSONAL, STATS, HERO_HEADLINE, HERO_SUMMARY } from "@/data/resume"
import { heroTextVariant, staggerContainer } from "@/hooks/useAnimationVariants"

export function Hero() {
  const { scrollY } = useScroll()
  const meshY = useTransform(scrollY, [0, 600], [0, -180])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Animated mesh background */}
      <motion.div style={{ y: meshY }} className="absolute inset-0">
        <GradientMesh />
      </motion.div>

      {/* Grain overlay */}
      <GrainOverlay />

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f8f9fa] to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Status badge */}
          <motion.div variants={heroTextVariant} custom={0} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-xs font-medium text-teal-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              PMP Certified · Technical Architect · Project Manager
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={heroTextVariant}
            custom={1}
            className="mb-4 text-5xl font-black leading-tight tracking-tight text-navy md:text-6xl lg:text-7xl xl:text-8xl"
            style={{ fontFamily: "var(--font-poppins, var(--font-open-sans))" }}
          >
            Rino{" "}
            <span className="gradient-text">Robinson</span>
          </motion.h1>

          {/* Headline */}
          <motion.h2
            variants={heroTextVariant}
            custom={2}
            className="mb-6 max-w-3xl text-xl font-semibold leading-snug text-slate-700 md:text-2xl lg:text-3xl"
          >
            {HERO_HEADLINE}
          </motion.h2>

          {/* Summary */}
          <motion.p
            variants={heroTextVariant}
            custom={3}
            className="mb-10 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg"
          >
            {HERO_SUMMARY}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={heroTextVariant}
            custom={4}
            className="flex flex-wrap items-center gap-4"
          >
            <Button href="#contact" size="lg">
              <Mail className="h-4 w-4" />
              Contact Me
            </Button>
            <Button
              href="/resume-rino-robinson.pdf"
              download="Rino_Robinson_Resume.pdf"
              variant="outline"
              size="lg"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          className="mt-16 grid grid-cols-2 gap-4 border-t border-slate-200 pt-10 sm:grid-cols-4"
        >
          {STATS.map((stat, i) => (
            <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} delay={0.8 + i * 0.1} />
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-600 transition-colors">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
