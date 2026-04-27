"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { fadeInUp } from "@/hooks/useAnimationVariants"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: "left" | "center"
  className?: string
  dark?: boolean
}

export function SectionHeader({
  title,
  subtitle,
  align = "left",
  className,
  dark = false,
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
        <span className={cn("h-px w-8", dark ? "bg-teal-400/50" : "bg-teal-500/60")} />
        <span className={cn("text-xs font-semibold tracking-widest uppercase", dark ? "text-teal-400" : "text-teal-600")}>
          {title}
        </span>
        <span className={cn("h-px w-8", dark ? "bg-teal-400/50" : "bg-teal-500/60")} />
      </div>
      <h2
        className={cn(
          "text-3xl font-bold md:text-4xl lg:text-5xl",
          dark ? "text-white" : "text-navy",
          align === "center" && "mx-auto"
        )}
        style={{ fontFamily: "var(--font-poppins, var(--font-open-sans))" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed md:text-lg",
            dark ? "text-white/60" : "text-slate-600",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
