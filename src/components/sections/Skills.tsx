"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/hooks/useAnimationVariants"
import { SKILLS } from "@/data/resume"
import { Chip } from "@/components/ui/Chip"
import { SectionLabel } from "@/components/ui/SectionLabel"

const VP = { once: true, amount: 0.15 }

export function Skills() {
  return (
    <section id="skills" className="border-y border-[#dad8cf] bg-white py-24">
      <div className="wrap flex flex-col gap-10">
        <motion.div
          className="flex flex-col gap-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          <SectionLabel>07 / Skills</SectionLabel>
          <h2 className="h-section text-ink">Working stack</h2>
        </motion.div>

        <motion.div
          className="grid gap-8"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          {SKILLS.map((group) => (
            <motion.div key={group.label} variants={fadeInUp} className="flex flex-col gap-4">
              <span className="mono text-cobalt">{group.label}</span>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Chip key={skill}>{skill}</Chip>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
