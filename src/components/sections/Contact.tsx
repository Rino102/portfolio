"use client"

import { motion } from "framer-motion"
import { fadeInUp, slideInLeft, slideInRight } from "@/hooks/useAnimationVariants"
import { PERSONAL } from "@/data/resume"
import { ContactForm } from "@/components/ui/ContactForm"

const VP = { once: true, amount: 0.1 }

const CONTACT_LINKS = [
  { label: "Email",    value: PERSONAL.email,    href: `mailto:${PERSONAL.email}` },
  { label: "Phone",    value: PERSONAL.phone,    href: `tel:${PERSONAL.phone.replace(/\s/g, "")}` },
  { label: "LinkedIn", value: PERSONAL.linkedin, href: PERSONAL.linkedinUrl, external: true },
  { label: "GitHub",   value: PERSONAL.github,   href: PERSONAL.githubUrl,  external: true },
]

export function Contact() {
  return (
    <section
      id="contact"
      style={{ backgroundColor: "#1c1410", padding: "72px 40px" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1088 }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]"
          style={{ gap: "52px 64px" }}
        >
          {/* Left */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <h2
              className="mb-5 text-balance"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(30px, 3.8vw, 44px)",
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#f7f2e8",
              }}
            >
              Let&apos;s talk about your delivery date.
            </h2>
            <p
              className="mb-10"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                fontWeight: 300,
                lineHeight: 1.72,
                color: "rgba(247,242,232,.62)",
              }}
            >
              Whether you need an architect, a project manager, or both — I&apos;m open to conversations about complex delivery challenges.
            </p>

            <div>
              {CONTACT_LINKS.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "88px 1fr",
                    gap: 16,
                    padding: "14px 0",
                    borderTop: i === 0 ? "1px solid rgba(247,242,232,.10)" : undefined,
                    borderBottom: "1px solid rgba(247,242,232,.10)",
                    textDecoration: "none",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10.5,
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      color: "rgba(247,242,232,.38)",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 13.5,
                      color: "#f7f2e8",
                    }}
                  >
                    {item.value}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <ContactForm dark />
          </motion.div>
        </div>

        {/* Footer credit */}
        <motion.div
          className="flex flex-wrap items-center justify-between"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          style={{
            marginTop: 60,
            paddingTop: 24,
            borderTop: "1px solid rgba(247,242,232,.08)",
            gap: 12,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "rgba(247,242,232,.28)",
            }}
          >
            © 2026 Rino Robinson
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10.5,
              color: "rgba(247,242,232,.22)",
            }}
          >
            PMP® is a registered mark of the Project Management Institute
          </p>
        </motion.div>
      </div>
    </section>
  )
}
