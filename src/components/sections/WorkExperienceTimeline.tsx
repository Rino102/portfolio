"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/hooks/useAnimationVariants"
import { EXPERIENCE } from "@/data/resume"

const VP = { once: true, amount: 0.1 }

const TAG_MAP: Record<string, string> = {
  "Makoitlab": "PMP® · MERN · AWS / HIPAA · OpenAI",
  "TechAffinity Global Pvt Ltd": "React · TypeScript / Node · MongoDB",
  "Raga Designers": "HTML5 · CSS3 · jQuery",
}

function getTags(company: string, role: string): string {
  if (company === "Makoitlab" && role.includes("Project Manager")) {
    return "PMP® · MERN · AWS / HIPAA · OpenAI"
  }
  if (company === "Makoitlab") {
    return "Node · MongoDB / Scrum · Kanban"
  }
  if (role.includes("Senior UI")) {
    return "React · TypeScript / SASS · Redux"
  }
  if (role.includes("Graphics")) {
    return "HTML5 · CSS3 / Bootstrap · jQuery"
  }
  return TAG_MAP[company] ?? ""
}

export function WorkExperienceTimeline() {
  return (
    <section
      id="experience"
      style={{ backgroundColor: "#efe8dc", padding: "52px 40px" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1088 }}>
        <motion.p
          className="section-label mb-1"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          03 / Experience
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
          Eleven years, one direction
        </motion.p>

        <motion.div
          className="flex flex-col"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          {EXPERIENCE.map((entry, i) => (
            <motion.div
              key={`${entry.company}-${entry.startDate}`}
              className="grid grid-cols-1 lg:grid-cols-[130px_1fr_200px]"
              variants={fadeInUp}
              style={{
                gap: 26,
                padding: "24px 0",
                borderTop: "1px solid rgba(28,20,16,.14)",
                borderBottom: i === EXPERIENCE.length - 1 ? "1px solid rgba(28,20,16,.14)" : undefined,
              }}
            >
              {/* Date */}
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12.5,
                  color: "rgba(28,20,16,.55)",
                  paddingTop: 2,
                }}
              >
                {entry.startDate.split(" ")[1]} — {entry.endDate === "Present" ? "now" : entry.endDate.split(" ")[1]}
              </p>

              {/* Role + description */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 14.5,
                      fontWeight: 500,
                      color: "#1c1410",
                    }}
                  >
                    {entry.role}
                  </p>
                  {entry.badge === "CURRENT" && (
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                        color: "#1f7a4d",
                        border: "1px solid #1f7a4d",
                        padding: "1px 6px",
                        borderRadius: 2,
                      }}
                    >
                      Current
                    </span>
                  )}
                  {entry.badge === "PROMOTED" && (
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                        color: "#7a2a1e",
                        border: "1px solid #7a2a1e",
                        padding: "1px 6px",
                        borderRadius: 2,
                      }}
                    >
                      Promoted
                    </span>
                  )}
                </div>
                <p
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    fontWeight: 300,
                    color: "rgba(28,20,16,.55)",
                  }}
                >
                  {entry.company} · {entry.location}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13.5,
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: "rgba(28,20,16,.68)",
                  }}
                >
                  {entry.description}
                </p>
              </div>

              {/* Tech tags */}
              <p
                className="lg:text-right"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11.5,
                  lineHeight: 1.8,
                  color: "rgba(28,20,16,.55)",
                }}
              >
                {getTags(entry.company, entry.role)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
