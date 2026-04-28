"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin, Calendar } from "lucide-react"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { EDUCATION } from "@/data/resume"
import { staggerContainer, scaleIn } from "@/hooks/useAnimationVariants"

export function Education() {
  return (
    <section id="education" className="section-py relative bg-[rgba(255,255,255,0.04)] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,168,181,0.18),transparent)]" />
      <div className="pointer-events-none absolute -bottom-10 right-0 h-64 w-64 rounded-full bg-gold-400/8 blur-[80px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Education"
          subtitle="Academic foundation in Computer Science that launched 11+ years of technical growth."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {EDUCATION.map((edu) => (
            <motion.div
              key={edu.institution}
              variants={scaleIn}
              className="glass glass-hover rounded-2xl p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/15">
                <GraduationCap className="h-5 w-5 text-teal-400" />
              </div>

              <h3 className="text-base font-bold text-white/90 mb-0.5">{edu.degree}</h3>
              <p className="text-sm font-semibold text-teal-400 mb-3">{edu.field}</p>

              <p className="text-sm text-white/70 font-medium mb-3">{edu.institution}</p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-white/50">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3 w-3" />
                  {edu.year}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3 w-3" />
                  {edu.location}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
