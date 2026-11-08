"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/hooks/useAnimationVariants"
import { EXPERTISE } from "@/data/resume"
import { SectionLabel } from "@/components/ui/SectionLabel"

const VP = { once: true, amount: 0.1 }

export function Expertise() {
  return (
    <section id="expertise" className="bg-ink on-ink text-paper py-24">
      <div className="wrap flex flex-col gap-12">
        <motion.div
          className="flex max-w-[720px] flex-col gap-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          <SectionLabel onInk>02 / Expertise</SectionLabel>
          <h2 className="h-section">Eight things I do on every engagement</h2>
        </motion.div>

        <motion.ul
          className="grid gap-px overflow-hidden rounded-[20px] border border-[#2a3548] bg-[#2a3548]"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          {EXPERTISE.map((item, i) => (
            <motion.li
              key={item.title}
              variants={fadeInUp}
              className="bg-ink flex flex-col gap-3 px-7 py-8"
            >
              <span className="mono text-saffron">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="disp text-[22px] font-semibold">{item.title}</h3>
              <p className="text-on-ink text-[15px] leading-relaxed">{item.body}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
