"use client"

import { motion } from "framer-motion"
import { fadeInUp, scaleIn, staggerContainer } from "@/hooks/useAnimationVariants"
import { ABOUT_BODY, ABOUT_CARDS, ABOUT_HEADLINE } from "@/data/resume"
import { Card } from "@/components/ui/Card"
import { SectionLabel } from "@/components/ui/SectionLabel"

const VP = { once: true, amount: 0.15 }

export function About() {
  return (
    <section id="about" className="pt-28 pb-24">
      <div className="wrap flex flex-wrap gap-14">
        <motion.div
          className="flex min-w-0 flex-[1_1_360px] flex-col gap-5"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          <SectionLabel>01 / About</SectionLabel>
          <h2 className="h-section text-ink">{ABOUT_HEADLINE}</h2>
        </motion.div>

        <motion.div
          className="flex min-w-0 flex-[1_1_480px] flex-col gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          {ABOUT_BODY.map((paragraph) => (
            <motion.p
              key={paragraph.slice(0, 32)}
              variants={fadeInUp}
              className="text-body text-lg leading-[1.7] text-pretty"
            >
              {paragraph}
            </motion.p>
          ))}

          <motion.div
            className="grid gap-4 pt-2"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))" }}
            variants={staggerContainer}
          >
            {ABOUT_CARDS.map((card) => (
              <motion.div key={card.title} variants={scaleIn}>
                <Card hover className="flex h-full flex-col gap-2 p-6">
                  <span className="disp text-ink text-xl font-semibold">{card.title}</span>
                  <span className="text-muted text-sm leading-relaxed">{card.body}</span>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
