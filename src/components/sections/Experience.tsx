"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { TimelineItem } from "@/components/ui/TimelineItem"
import { EXPERIENCE } from "@/data/resume"
import { fadeInUp } from "@/hooks/useAnimationVariants"

export function Experience() {
  return (
    <section id="experience" className="section-py relative bg-[#fffaf5] overflow-hidden">
      <div className="pointer-events-none absolute -left-10 top-1/4 h-80 w-80 rounded-full bg-orange-500/12 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-64 w-64 rounded-full bg-teal-500/10 blur-[80px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Work Experience"
          subtitle="A progressive career spanning 11+ years — from pixel-perfect frontend to full-scale technical architecture."
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {EXPERIENCE.map((entry, i) => (
            <TimelineItem
              key={`${entry.company}-${entry.startDate}`}
              entry={entry}
              index={i}
              isLast={i === EXPERIENCE.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
