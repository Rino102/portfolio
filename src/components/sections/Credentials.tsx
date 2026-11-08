"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { fadeInUp, scaleIn, staggerContainer } from "@/hooks/useAnimationVariants"
import { CREDENTIALS } from "@/data/resume"
import { Card } from "@/components/ui/Card"
import { SectionLabel } from "@/components/ui/SectionLabel"

const VP = { once: true, amount: 0.1 }

export function Credentials() {
  return (
    <section id="credentials" className="bg-band py-24">
      <div className="wrap flex flex-col gap-10">
        <motion.div
          className="flex flex-col gap-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          <SectionLabel>09 / Credentials</SectionLabel>
          <h2 className="h-section text-ink">Certification, speaking, education</h2>
        </motion.div>

        <motion.div
          className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          {CREDENTIALS.map((item) => (
            <motion.div key={item.title} variants={scaleIn}>
              <Card hover className="flex h-full flex-col gap-3 p-7">
                <span className={item.kind === "certification" ? "mono text-green-700" : "mono"}>
                  {item.label}
                </span>
                <h3 className="disp text-ink text-[22px] font-semibold">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                {item.credentialUrl && (
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cobalt-link focus-ring mono mt-auto inline-flex w-fit items-center gap-1.5 pt-2 text-[11px]"
                  >
                    Verify
                    <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </a>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
