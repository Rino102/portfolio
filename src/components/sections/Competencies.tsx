"use client"

import { motion } from "framer-motion"
import { fadeInUp, scaleIn, staggerContainer } from "@/hooks/useAnimationVariants"
import { PM_COMPETENCIES } from "@/data/resume"

const VP = { once: true, amount: 0.1 }

export function Competencies() {
  return (
    <section
      id="competencies"
      style={{
        padding: "52px 40px",
        borderBottom: "1px solid rgba(28,20,16,.10)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 1088 }}>
        <motion.p
          className="section-label mb-1"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          02 / Competencies
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
          Eight pillars of delivery
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2"
          style={{ columnGap: 48 }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          {PM_COMPETENCIES.map((comp, i) => (
            <motion.div
              key={comp.title}
              className="flex gap-4"
              variants={scaleIn}
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                borderTop: "1px solid rgba(28,20,16,.14)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  fontWeight: 500,
                  color: "#7a2a1e",
                  flexShrink: 0,
                  paddingTop: 2,
                  minWidth: 26,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p
                  className="mb-1"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14.5,
                    fontWeight: 500,
                    color: "#1c1410",
                  }}
                >
                  {comp.title}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13.5,
                    fontWeight: 300,
                    lineHeight: 1.62,
                    color: "rgba(28,20,16,.65)",
                  }}
                >
                  {comp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
