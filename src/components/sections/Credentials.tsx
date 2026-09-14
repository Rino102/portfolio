"use client"

import { motion } from "framer-motion"
import { fadeInUp, scaleIn, staggerContainer } from "@/hooks/useAnimationVariants"
import { CERTIFICATIONS, EDUCATION } from "@/data/resume"

const VP = { once: true, amount: 0.1 }

export function Credentials() {
  const pmp = CERTIFICATIONS[0]!
  const edu = EDUCATION[0]!
  const speakers = CERTIFICATIONS.slice(1)

  const cardStyle: React.CSSProperties = {
    backgroundColor: "#ffffff",
    border: "1px solid rgba(28,20,16,.14)",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    gap: 12,
  }

  return (
    <section
      id="credentials"
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
          06 / Credentials
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
          Certification, speaking, education
        </motion.p>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          {/* PMP */}
          <motion.div variants={scaleIn} style={cardStyle}>
            <div className="flex items-center gap-2">
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "rgba(28,20,16,.55)",
                }}
              >
                Certification
              </p>
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
                Active
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 19,
                color: "#1c1410",
                lineHeight: 1.3,
              }}
            >
              {pmp.title}
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13.5,
                fontWeight: 300,
                color: "rgba(28,20,16,.65)",
                lineHeight: 1.6,
              }}
            >
              {pmp.issuer}
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13.5,
                fontWeight: 300,
                color: "rgba(28,20,16,.65)",
                lineHeight: 1.6,
              }}
            >
              {pmp.description}
            </p>
            {pmp.credentialUrl && (
              <a
                href={pmp.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ox-link mt-auto self-start"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  fontWeight: 400,
                }}
              >
                View credential
              </a>
            )}
          </motion.div>

          {/* Education */}
          <motion.div variants={scaleIn} style={cardStyle}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "rgba(28,20,16,.55)",
              }}
            >
              Education
            </p>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 19,
                color: "#1c1410",
                lineHeight: 1.3,
              }}
            >
              {edu.degree}
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13.5,
                fontWeight: 300,
                color: "rgba(28,20,16,.65)",
              }}
            >
              {edu.field}
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13.5,
                fontWeight: 300,
                color: "rgba(28,20,16,.65)",
                lineHeight: 1.6,
              }}
            >
              {edu.institution}, {edu.location}
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "rgba(28,20,16,.45)",
              }}
            >
              {edu.year}
            </p>
          </motion.div>

          {/* Speakers */}
          {speakers.map(cert => (
            <motion.div key={cert.title} variants={scaleIn} style={cardStyle}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "rgba(28,20,16,.55)",
                }}
              >
                Speaker · {cert.date}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 19,
                  color: "#1c1410",
                  lineHeight: 1.3,
                }}
              >
                {cert.title.replace("Speaker — ", "")}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13.5,
                  fontWeight: 300,
                  color: "rgba(28,20,16,.65)",
                  lineHeight: 1.6,
                }}
              >
                {cert.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
