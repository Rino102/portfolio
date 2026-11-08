"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/hooks/useAnimationVariants"
import { PROCESS } from "@/data/resume"
import { SectionLabel } from "@/components/ui/SectionLabel"

const VP = { once: true, amount: 0.15 }

export function Process() {
  return (
    <section id="process" className="pt-28 pb-24">
      <div className="wrap flex flex-col gap-12">
        <motion.div
          className="flex max-w-[720px] flex-col gap-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          <SectionLabel>05 / How I deliver</SectionLabel>
          <h2 className="h-section text-ink">A repeatable path from idea to handover</h2>
        </motion.div>

        <motion.ol
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(210px, 100%), 1fr))" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          {PROCESS.map((step) => (
            <motion.li
              key={step.step}
              variants={fadeInUp}
              className="border-cobalt flex flex-col gap-3 border-t-[3px] pt-5"
            >
              <span className="mono">{step.step}</span>
              <h3 className="disp text-ink text-[22px] font-semibold">{step.title}</h3>
              <p className="text-muted text-[15px] leading-relaxed">{step.body}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
