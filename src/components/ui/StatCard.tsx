"use client"

import { motion } from "framer-motion"
import { scaleIn } from "@/hooks/useAnimationVariants"
import type { AboutMetric } from "@/types"

interface StatCardProps {
  metric: AboutMetric
  index: number
}

export function StatCard({ metric, index }: StatCardProps) {
  return (
    <motion.div
      variants={scaleIn}
      custom={index}
      className="glass glass-hover rounded-2xl p-5"
    >
      <p
        className="text-3xl font-bold text-indigo-400"
        style={{ fontFamily: "var(--font-geist, sans-serif)" }}
      >
        {metric.value}
      </p>
      <p className="mt-1 text-sm font-semibold text-white">{metric.label}</p>
      <p className="mt-1 text-xs leading-relaxed text-slate-500">{metric.description}</p>
    </motion.div>
  )
}
