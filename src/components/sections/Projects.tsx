"use client"

import { motion } from "framer-motion"
import { fadeInUp, scaleIn } from "@/hooks/useAnimationVariants"
import { PROJECTS } from "@/data/resume"

const VP = { once: true, amount: 0.1 }

const CASE_METRICS = [
  [
    { value: "HIPAA",  label: "compliance grade"  },
    { value: "15",     label: "engineers led"      },
    { value: "12+ mo", label: "active delivery"    },
  ],
  [
    { value: "3",      label: "AI content modules" },
    { value: "12 mo",  label: "concept to launch"  },
    { value: "100%",   label: "AI-generated output" },
  ],
]

export function Projects() {
  const caseStudies = PROJECTS.slice(0, 2)

  return (
    <section
      id="case-studies"
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
          04 / Case Studies
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
          Selected delivery work
        </motion.p>

        <div className="flex flex-col" style={{ gap: 20 }}>
          {caseStudies.map((project, i) => (
            <motion.div
              key={project.name}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
              transition={{ delay: i * 0.12 }}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(28,20,16,.12)",
                padding: "28px 32px",
              }}
            >
              <div
                className="grid grid-cols-1 lg:grid-cols-[1fr_200px]"
                style={{ gap: "20px 0" }}
              >
                {/* Left */}
                <div className="lg:pr-10">
                  <p
                    className="mb-2"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      color: "rgba(28,20,16,.42)",
                    }}
                  >
                    {project.domain} · {project.period}
                  </p>
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 22,
                      fontWeight: 400,
                      color: "#1c1410",
                      lineHeight: 1.2,
                    }}
                  >
                    {project.name}
                  </h3>
                  <p
                    className="mb-5"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 13.5,
                      fontWeight: 300,
                      lineHeight: 1.7,
                      color: "rgba(28,20,16,.70)",
                    }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap" style={{ gap: "6px 8px" }}>
                    {project.techStack.map(tech => (
                      <span
                        key={tech}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 11,
                          letterSpacing: ".05em",
                          color: "rgba(28,20,16,.55)",
                          border: "1px solid rgba(28,20,16,.18)",
                          padding: "2px 8px",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — metrics */}
                <div
                  className="case-metrics flex flex-row lg:flex-col gap-5"
                  style={{ justifyContent: "flex-start" }}
                >
                  {CASE_METRICS[i]!.map(m => (
                    <div key={m.label} className="flex-1 lg:flex-none">
                      <p
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: 26,
                          fontWeight: 300,
                          color: "#7a2a1e",
                          lineHeight: 1,
                          marginBottom: 4,
                        }}
                      >
                        {m.value}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 10.5,
                          letterSpacing: ".08em",
                          textTransform: "uppercase",
                          color: "rgba(28,20,16,.48)",
                        }}
                      >
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          <a
            href="#contact"
            className="ox-link"
            style={{ fontFamily: "var(--font-sans)", fontSize: 13 }}
          >
            Discuss a project →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
