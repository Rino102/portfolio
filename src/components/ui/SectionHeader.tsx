"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { fadeInUp } from "@/hooks/useAnimationVariants"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className={cn("mb-12 md:mb-16", align === "center" && "text-center", className)}
    >
      <div
        className={cn(
          "mb-3 flex items-center gap-3",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-px w-8 bg-indigo-500/60" />
        <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase">
          {title}
        </span>
        <span className="h-px w-8 bg-indigo-500/60" />
      </div>
      <h2
        className={cn(
          "text-3xl font-bold text-white md:text-4xl lg:text-5xl",
          align === "center" && "mx-auto"
        )}
        style={{ fontFamily: "var(--font-geist, var(--font-inter))" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
