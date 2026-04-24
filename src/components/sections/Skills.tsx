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
    <section id="skills" className="section-py relative">
      {/* Subtle bg accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(99,102,241,0.05),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Skills & Expertise"
          subtitle="A broad technology foundation built over 11+ years of hands-on delivery."
          align="center"
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
                  ? "skill-tab-active"
                  : "border-white/8 bg-white/4 text-slate-400 hover:border-white/16 hover:text-white"
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
                  <SkillPill name={skill.name} />
                </motion.div>
              ))}
            </motion.div>

            <p className="mt-8 text-center text-xs text-slate-600">
              {activeCategory.skills.length} technologies in {activeTab}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
