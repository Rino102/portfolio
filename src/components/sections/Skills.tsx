"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/hooks/useAnimationVariants"
import { SKILLS } from "@/data/resume"

const VP = { once: true, amount: 0.15 }

export function Skills() {
  return (
    <section id="skills" style={{ padding: "52px 40px", borderBottom: "1px solid rgba(28,20,16,.10)" }}>
      <div className="mx-auto" style={{ maxWidth: 1088 }}>
        <motion.p
          className="section-label mb-1"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          05 / Skills
        </motion.p>
        <motion.p
          className="mb-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 28,
            color: "#1c1410",
          }}
        >
          Working stack
        </motion.p>

        <motion.div
          className="flex flex-col"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          {SKILLS.map((cat, i) => (
            <motion.div
              key={cat.label}
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-[190px_1fr] items-start"
              style={{
                gap: 24,
                padding: "20px 0",
                borderTop: "1px solid rgba(28,20,16,.14)",
                borderBottom:
                  i === SKILLS.length - 1 ? "1px solid rgba(28,20,16,.14)" : undefined,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "#7a2a1e",
                  paddingTop: 2,
                }}
              >
                {cat.label}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: "rgba(28,20,16,.78)",
                }}
              >
                {cat.skills.map(s => s.name).join(" · ")}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
