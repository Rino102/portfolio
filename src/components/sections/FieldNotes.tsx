"use client"

import { motion } from "framer-motion"
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/hooks/useAnimationVariants"
import { FIELD_NOTES, NOW_TEXT } from "@/data/resume"

const VP = { once: true, amount: 0.1 }

export function FieldNotes() {
  return (
    <section
      id="notes"
      style={{ backgroundColor: "#efe8dc", padding: "52px 40px" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1088 }}>
        <motion.p
          className="section-label mb-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          07 / Now + Field Notes
        </motion.p>

        <div
          className="grid grid-cols-1 gap-12 lg:grid-cols-2"
          style={{ gap: "52px" }}
        >
          {/* Now column */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <p
              className="mb-4"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "rgba(28,20,16,.55)",
              }}
            >
              Now
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                fontWeight: 300,
                lineHeight: 1.72,
                color: "rgba(28,20,16,.78)",
              }}
            >
              {NOW_TEXT}
            </p>
            <p
              className="mt-5"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "rgba(28,20,16,.40)",
              }}
            >
              Updated: 12 Sep 2026
            </p>
          </motion.div>

          {/* Field notes column */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <p
              className="mb-4"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "rgba(28,20,16,.55)",
              }}
            >
              Field Notes
            </p>

            <motion.div
              className="flex flex-col"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
            >
              {FIELD_NOTES.map((note, i) => (
                <motion.div
                  key={note.title}
                  variants={fadeInUp}
                  className="grid items-center"
                  style={{
                    gridTemplateColumns: "76px 1fr 92px",
                    gap: 16,
                    padding: "12px 0",
                    borderTop: i === 0 ? "1px solid rgba(28,20,16,.14)" : undefined,
                    borderBottom: "1px solid rgba(28,20,16,.14)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: "rgba(28,20,16,.45)",
                    }}
                  >
                    {note.date}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 14,
                      fontWeight: 400,
                      color: "#1c1410",
                    }}
                  >
                    {note.title}
                  </span>
                  <span
                    className="text-right"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      letterSpacing: ".08em",
                      color: "#7a2a1e",
                    }}
                  >
                    {note.tag}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <a
              href="#notes"
              className="ox-link mt-5 inline-block"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
              }}
            >
              All notes →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
