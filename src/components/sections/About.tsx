"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { StatCard } from "@/components/ui/StatCard"
import { ABOUT_NARRATIVE, ABOUT_METRICS } from "@/data/resume"
import { fadeInUp, slideInLeft, staggerContainer } from "@/hooks/useAnimationVariants"

const STRENGTHS = [
  { icon: "🏗️", label: "System Architecture", desc: "Scalable, secure, maintainable architectures for complex applications" },
  { icon: "🚀", label: "Agile Delivery", desc: "Sprint planning, risk management, and on-time, on-budget execution" },
  { icon: "🤝", label: "Stakeholder Management", desc: "Bridging technical and business teams to ensure alignment" },
  { icon: "🤖", label: "AI Integration", desc: "Integrating cutting-edge AI into production-grade systems" },
]

export function About() {
  return (
    <section id="about" className="section-py relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="About Me"
          subtitle="A decade of building. A career of growing. A mindset of shipping."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Narrative */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="space-y-4">
              {ABOUT_NARRATIVE.split("\n\n").map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-slate-600">
                  {para}
                </p>
              ))}
            </div>

           
          </motion.div>

          {/* Right: Metric cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-4 content-start"
          >
            {ABOUT_METRICS.map((metric, i) => (
              <StatCard key={metric.label} metric={metric} index={i} />
            ))}
          </motion.div>
        </div>

        <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
             <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {STRENGTHS.map((s) => (
                <div
                  key={s.label}
                  className="glass rounded-xl p-4"
                >
                  <p className="mb-1 text-base">{s.icon}</p>
                  <p className="text-sm font-semibold text-navy mb-1">{s.label}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            </motion.div>
      </div>
    </section>
  )
}
