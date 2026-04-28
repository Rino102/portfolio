"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { SkillPill } from "@/components/ui/SkillPill"
import { SKILLS } from "@/data/resume"
import { tabContentVariant, staggerContainerFast, fadeInUp } from "@/hooks/useAnimationVariants"
import { cn } from "@/lib/utils"

export function Skills() {
  const [activeTab, setActiveTab] = useState(SKILLS[0]!.label)
  const activeCategory = SKILLS.find((c) => c.label === activeTab) ?? SKILLS[0]!

  return (
    <section id="skills" className="section-py relative bg-[rgba(5,12,25,0.55)] overflow-hidden">
      <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-teal-500/15 blur-[100px]" />
      <div className="pointer-events-none absolute -top-10 left-0 h-64 w-64 rounded-full bg-orange-500/10 blur-[80px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Skills & Expertise"
          subtitle="A broad technology foundation built over 11+ years of hands-on delivery."
          align="center"
          dark
        />

        {/* Tab list */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {SKILLS.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveTab(cat.label)}
              className={cn(
                "rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-200 focus-ring",
                activeTab === cat.label
                  ? "border-teal-400/60 bg-teal-500/20 text-teal-300"
                  : "border-white/15 bg-white/6 text-white/60 hover:border-teal-400/50 hover:text-white"
              )}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skill pills */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabContentVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              variants={staggerContainerFast}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-2.5"
            >
              {activeCategory.skills.map((skill) => (
                <motion.div key={skill.name} variants={fadeInUp}>
                  <SkillPill
                    name={skill.name}
                    className="border-white/15 bg-white/6 text-white/60 hover:border-teal-400/40 hover:bg-teal-500/10 hover:text-teal-300"
                  />
                </motion.div>
              ))}
            </motion.div>

            <p className="mt-8 text-center text-xs text-white/50">
              {activeCategory.skills.length} technologies in {activeTab}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
