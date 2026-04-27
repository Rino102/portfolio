"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { scaleIn } from "@/hooks/useAnimationVariants"
import type { AboutMetric } from "@/types"

interface StatCardProps {
  metric: AboutMetric
  index: number
  dark?: boolean
}

export function StatCard({ metric, index, dark = false }: StatCardProps) {
  return (
    <motion.div
      variants={scaleIn}
      custom={index}
      className={dark ? "dark-glass dark-glass-hover rounded-2xl p-5" : "glass glass-hover rounded-2xl p-5"}
    >
      <p
        className="text-3xl font-bold text-teal-500"
        style={{ fontFamily: "var(--font-poppins, sans-serif)" }}
      >
        {metric.value}
      </p>
      <p className={cn("mt-1 text-sm font-semibold", dark ? "text-white" : "text-navy")}>{metric.label}</p>
      <p className={cn("mt-1 text-xs leading-relaxed", dark ? "text-white/60" : "text-slate-500")}>{metric.description}</p>
    </motion.div>
  )
}
