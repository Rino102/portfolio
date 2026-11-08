"use client"

import { motion } from "framer-motion"
import { ShieldCheck } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/hooks/useAnimationVariants"
import { AI_IN_DELIVERY } from "@/data/resume"
import { SectionLabel } from "@/components/ui/SectionLabel"

const VP = { once: true, amount: 0.1 }

export function AIDelivery() {
  const practices = AI_IN_DELIVERY.filter((item) => item.body)
  const policy = AI_IN_DELIVERY.find((item) => item.bullets)

  return (
    <section id="ai-delivery" className="bg-ink on-ink text-paper py-24">
      <div className="wrap flex flex-col gap-12">
        <motion.div
          className="flex max-w-[720px] flex-col gap-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          <SectionLabel onInk>06 / AI in Delivery</SectionLabel>
          <h2 className="h-section">AI speeds up the work. The final call stays with the team.</h2>
        </motion.div>

        <motion.div
          className="grid gap-x-12 gap-y-10"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          {practices.map((item, i) => (
            <motion.div key={item.title} variants={fadeInUp} className="flex gap-4">
              <span className="mono text-saffron flex-shrink-0 pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="disp text-[22px] font-semibold">{item.title}</h3>
                <p className="text-on-ink text-[15px] leading-relaxed">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {policy && (
          <motion.div
            className="flex flex-col gap-5 rounded-[20px] border border-[#2a3548] bg-[#16202f] p-8 md:p-10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-saffron h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <h3 className="disp text-[22px] font-semibold">{policy.title}</h3>
            </div>
            <ul className="flex flex-col gap-3">
              {policy.bullets!.map((rule) => (
                <li key={rule.slice(0, 24)} className="flex gap-3">
                  <span
                    className="bg-saffron mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                    aria-hidden="true"
                  />
                  <span className="text-on-ink text-[15px] leading-relaxed">{rule}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  )
}
