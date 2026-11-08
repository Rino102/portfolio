"use client"

import { motion } from "framer-motion"
import { fadeInUp } from "@/hooks/useAnimationVariants"
import { CONTACT_BODY, CONTACT_HEADLINE, PERSONAL } from "@/data/resume"
import { ContactForm } from "@/components/ui/ContactForm"
import { SectionLabel } from "@/components/ui/SectionLabel"

const VP = { once: true, amount: 0.08 }

const DETAILS = [
  { label: "Email", value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
  { label: "Phone", value: PERSONAL.phone, href: `tel:${PERSONAL.phone.replace(/\s/g, "")}` },
  { label: "LinkedIn", value: PERSONAL.linkedin, href: PERSONAL.linkedinUrl },
  { label: "Website", value: PERSONAL.website, href: PERSONAL.websiteUrl },
]

export function Contact() {
  const year = new Date().getFullYear()

  return (
    <section id="contact" className="bg-ink on-ink text-paper pt-28 pb-18">
      <div className="wrap flex flex-col gap-20">
        <div className="flex flex-wrap gap-14">
          <motion.div
            className="flex min-w-0 flex-[1_1_420px] flex-col gap-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <SectionLabel onInk>10 / Contact</SectionLabel>
            <h2
              className="disp font-bold text-balance"
              style={{ fontSize: "clamp(34px, 5vw, 64px)", lineHeight: 1.04 }}
            >
              {CONTACT_HEADLINE}
            </h2>
            <p className="text-on-ink max-w-[460px] text-[17px] leading-relaxed">{CONTACT_BODY}</p>

            <dl className="mt-2 flex flex-col">
              {DETAILS.map((detail, i) => (
                <div
                  key={detail.label}
                  className="flex flex-wrap gap-x-6 gap-y-2 border-t border-[#2a3548] py-4"
                  style={{
                    borderBottom: i === DETAILS.length - 1 ? "1px solid #2a3548" : undefined,
                  }}
                >
                  <dt className="mono text-on-ink-dim flex-[0_0_90px]">{detail.label}</dt>
                  <dd className="min-w-0">
                    <a
                      href={detail.href}
                      {...(detail.label === "LinkedIn" || detail.label === "Website"
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="focus-ring text-paper hover:text-saffron text-base break-words transition-colors"
                    >
                      {detail.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            className="min-w-0 flex-[1_1_400px] self-start"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <ContactForm />
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t border-[#2a3548] pt-6">
          <span className="mono text-on-ink-dim">© {year} Rino Robinson</span>
          <span className="mono text-on-ink-dim">PMP · Chennai, India</span>
        </div>
      </div>
    </section>
  )
}
