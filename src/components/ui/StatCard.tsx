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
      className="glass glass-hover rounded-2xl p-5"
    >
      <p
        className="text-3xl font-bold text-teal-500"
        style={{ fontFamily: "var(--font-poppins, sans-serif)" }}
      >
        {metric.value}
      </p>
      <p className="mt-1 text-sm font-semibold text-white/90">{metric.label}</p>
      <p className="mt-1 text-xs leading-relaxed text-white/60">{metric.description}</p>
    </motion.div>
  )
}
