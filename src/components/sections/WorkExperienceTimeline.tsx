"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/hooks/useAnimationVariants"
import { EXPERIENCE, EXPERIENCE_INTRO } from "@/data/resume"
import { SectionLabel } from "@/components/ui/SectionLabel"

const VP = { once: true, amount: 0.08 }

export function WorkExperienceTimeline() {
  return (
    <section id="experience" className="pt-28 pb-24">
      <div className="wrap flex flex-wrap gap-14">
        <motion.div
          className="flex min-w-0 flex-[1_1_300px] flex-col gap-4 self-start"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          <SectionLabel>03 / Experience</SectionLabel>
          <h2 className="h-section text-ink">Twelve years, one direction</h2>
          <p className="text-muted max-w-[360px] text-base leading-relaxed">{EXPERIENCE_INTRO}</p>
        </motion.div>

        <motion.ol
          className="flex min-w-0 flex-[2_1_560px] flex-col"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          {EXPERIENCE.map((job, i) => (
            <motion.li
              key={`${job.company}-${job.startDate}`}
              variants={fadeInUp}
              className="flex flex-wrap gap-x-8 gap-y-3 border-t py-8 last:border-b"
              style={{
                borderTopColor: i === 0 ? "#0e1624" : "#dad8cf",
                borderBottomColor: "#dad8cf",
              }}
            >
              <div className="flex flex-[0_0_150px] flex-col items-start gap-1.5">
                <span className="mono text-ink">
                  {job.startDate} — {job.endDate}
                </span>
                {job.badge === "CURRENT" && (
                  <span className="chip min-h-6 border-[#1e8a4c] text-[11px] text-green-700">
                    Current
                  </span>
                )}
              </div>

              <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-2">
                <h3 className="disp text-ink text-2xl font-semibold">{job.role}</h3>
                <span className="mono">
                  {job.company} · {job.location}
                </span>
                <p className="text-body pt-1 text-base leading-relaxed">{job.description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
