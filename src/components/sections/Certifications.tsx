"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { CertCard } from "@/components/ui/CertCard"
import { CERTIFICATIONS } from "@/data/resume"
import { staggerContainer } from "@/hooks/useAnimationVariants"

export function Certifications() {
  return (
    <section id="certifications" className="section-py relative bg-[#fffcf0] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(192,159,64,0.12),transparent)]" />
      <div className="pointer-events-none absolute -bottom-10 right-0 h-64 w-64 rounded-full bg-teal-500/10 blur-[80px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Certifications & Speaking"
          subtitle="Globally recognized credentials and industry speaking engagements."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {CERTIFICATIONS.map((cert) => (
            <CertCard key={cert.title} cert={cert} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
