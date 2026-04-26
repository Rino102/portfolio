"use client"

import { motion } from "framer-motion"
import { Quote, Lock } from "lucide-react"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { fadeInUp } from "@/hooks/useAnimationVariants"

const PLACEHOLDER_TESTIMONIALS = [
  { name: "Sarah Mitchell", title: "VP Engineering, HealthTech Co.", initials: "SM" },
  { name: "David Chen", title: "CEO, SaaS Startup", initials: "DC" },
  { name: "Priya Nair", title: "Product Manager, Enterprise", initials: "PN" },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="section-py relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Testimonials"
          subtitle="What colleagues and clients say about working together."
          align="center"
        />

        <div className="relative">
          {/* Placeholder cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PLACEHOLDER_TESTIMONIALS.map((t) => (
              <div key={t.name} className="glass rounded-2xl p-6 blur-sm select-none">
                <Quote className="h-6 w-6 text-teal-500/40 mb-4" />
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Working with Rino has
                  been an exceptional experience — technical expertise paired with clear
                  communication.
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-xs font-bold text-teal-700">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Overlay */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-[#f8f9fa]/90 backdrop-blur-sm">
              <Lock className="h-6 w-6 text-slate-400" />
            </div>
            <div className="rounded-xl border border-slate-200 bg-[#f8f9fa]/90 px-6 py-3 text-center backdrop-blur-sm">
              <p className="text-sm font-semibold text-navy">Testimonials Coming Soon</p>
              <p className="text-xs text-slate-500 mt-0.5">Being collected from collaborators</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
