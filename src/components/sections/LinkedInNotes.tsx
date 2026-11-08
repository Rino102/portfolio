"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { fadeInUp, scaleIn, staggerContainer } from "@/hooks/useAnimationVariants"
import { LINKEDIN_POSTS, PERSONAL } from "@/data/resume"
import { ButtonLink } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Monogram } from "@/components/layout/Monogram"
import { SectionLabel } from "@/components/ui/SectionLabel"

const VP = { once: true, amount: 0.1 }

export function LinkedInNotes() {
  return (
    <section id="linkedin" className="pt-28 pb-24">
      <div className="wrap flex flex-col gap-12">
        <motion.div
          className="flex flex-wrap items-end justify-between gap-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          <div className="flex flex-col gap-4">
            <SectionLabel>08 / From LinkedIn</SectionLabel>
            <h2 className="h-section text-ink">Notes from the delivery floor</h2>
          </div>
          <ButtonLink
            href={PERSONAL.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            compact
          >
            Follow on LinkedIn →
          </ButtonLink>
        </motion.div>

        <motion.div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          {LINKEDIN_POSTS.map((post) => (
            <motion.div key={post.title} variants={scaleIn}>
              <Card as="article" hover className="flex h-full flex-col gap-4 p-7">
                <div className="flex items-center gap-3">
                  <Monogram size={40} className="!rounded-full" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-ink text-sm font-semibold">Rino Robinson</span>
                    <span className="mono text-[10px]">{post.tag}</span>
                  </div>
                </div>

                <h3 className="disp text-ink text-[22px] leading-tight font-semibold">
                  {post.title}
                </h3>

                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cobalt-link focus-ring mono mt-auto inline-flex w-fit items-center gap-1.5 border-t-0 pt-4 text-[11px]"
                >
                  Read on LinkedIn
                  <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                </a>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
