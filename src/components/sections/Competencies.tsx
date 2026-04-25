"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { PM_COMPETENCIES } from "@/data/resume"
import { staggerContainer, scaleIn, fadeInUp } from "@/hooks/useAnimationVariants"

export function Competencies() {
  return (
    <section id="competencies" className="section-py relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(99,102,241,0.06),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Core Competencies"
          subtitle="The eight pillars that define how I plan, lead, and deliver projects with measurable impact."
          align="center"
        />

        {/* Banner image — professional profile card */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_80px_rgba(99,102,241,0.15)]">
            <Image
              src="/banner.png"
              alt="Rino Robinson — PMP Certified Project Manager — Core Competencies"
              width={1376}
              height={768}
              className="w-full h-auto"
              priority
            />
          </div>
        </motion.div>

        {/* Competency cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PM_COMPETENCIES.map((comp) => (
            <motion.div
              key={comp.title}
              variants={scaleIn}
              className="glass glass-hover rounded-2xl p-5 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{comp.icon}</span>
                <div>
                  <p className="text-sm font-bold text-white leading-tight">{comp.title}</p>
                  <p className="text-xs text-indigo-400 font-medium">{comp.subtitle}</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{comp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
