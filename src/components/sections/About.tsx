"use client"

import { motion } from "framer-motion"
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/hooks/useAnimationVariants"
import { ABOUT_PULL_QUOTE, ABOUT_SHORT_BODY, ABOUT_CAPABILITIES } from "@/data/resume"

const VP = { once: true, amount: 0.15 }

export function About() {
  return (
    <section id="about" style={{ padding: "52px 40px", borderBottom: "1px solid rgba(28,20,16,.10)" }}>
      <div className="mx-auto" style={{ maxWidth: 1088 }}>
        <motion.p
          className="section-label mb-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          01 / About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 56 }}>
          {/* Left — pull quote + body */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <p
              className="mb-5"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 21,
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.5,
                color: "#1c1410",
              }}
            >
              {ABOUT_PULL_QUOTE}
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                fontWeight: 300,
                lineHeight: 1.72,
                color: "rgba(28,20,16,.72)",
              }}
            >
              {ABOUT_SHORT_BODY}
            </p>
          </motion.div>

          {/* Right — capability rows staggered */}
          <motion.div
            className="flex flex-col"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            {ABOUT_CAPABILITIES.map((cap, i) => (
              <motion.div
                key={cap.title}
                variants={slideInRight}
                style={{
                  borderTop: "1px solid rgba(28,20,16,.14)",
                  paddingTop: 20,
                  paddingBottom: 20,
                  borderBottom:
                    i === ABOUT_CAPABILITIES.length - 1
                      ? "1px solid rgba(28,20,16,.14)"
                      : undefined,
                }}
              >
                <p
                  className="mb-1"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14.5,
                    fontWeight: 500,
                    color: "#1c1410",
                  }}
                >
                  {cap.title}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13.5,
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: "rgba(28,20,16,.65)",
                  }}
                >
                  {cap.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
