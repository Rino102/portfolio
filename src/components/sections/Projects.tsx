"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { ProjectCard } from "@/components/ui/ProjectCard"
import { PROJECTS } from "@/data/resume"
import { staggerContainer } from "@/hooks/useAnimationVariants"

export function Projects() {
  return (
    <section id="projects" className="section-py relative bg-[#0b1120] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_35%_at_50%_0%,rgba(0,168,181,0.18),transparent)]" />
      <div className="pointer-events-none absolute -bottom-10 right-0 h-72 w-72 rounded-full bg-orange-500/12 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Featured Projects"
          subtitle="Enterprise-grade systems, AI-powered platforms, and healthcare infrastructure — delivered end-to-end."
          dark
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} dark />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
