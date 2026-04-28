"use client"

import { motion } from "framer-motion"
import { fadeInUp } from "@/hooks/useAnimationVariants"
import { Badge } from "@/components/ui/Badge"
import { MapPin, Calendar } from "lucide-react"
import type { ExperienceEntry } from "@/types"

interface TimelineItemProps {
  entry: ExperienceEntry
  index: number
  isLast: boolean
}

export function TimelineItem({ entry, index, isLast }: TimelineItemProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.08 }}
      className="relative flex gap-6 pb-10"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[6px] top-7 h-[calc(100%-1.75rem)] w-px bg-gradient-to-b from-teal-500/40 to-transparent" />
      )}

      {/* Dot */}
      <div className="relative mt-1 flex-shrink-0">
        <div
          className={`timeline-dot ${entry.badge === "CURRENT" ? "timeline-dot-current" : ""}`}
        />
      </div>

      {/* Content */}
      <div className="glass glass-hover min-w-0 flex-1 rounded-2xl p-6">
        <div className="flex flex-wrap items-start gap-2 mb-2">
          <h3 className="text-base font-bold text-white/90 md:text-lg">{entry.role}</h3>
          {entry.badge === "CURRENT" && <Badge variant="current">Current Role</Badge>}
          {entry.badge === "PROMOTED" && <Badge variant="promoted">Promoted</Badge>}
        </div>

        <p className="text-sm font-semibold text-teal-400 mb-2">{entry.company}</p>

        <div className="flex flex-wrap items-center gap-4 mb-4 text-xs text-white/50">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3 w-3" />
            {entry.startDate} — {entry.endDate}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3 w-3" />
            {entry.location}
          </span>
        </div>

        <p className="text-sm text-white/65 mb-4 leading-relaxed">{entry.description}</p>

        <ul className="space-y-2">
          {entry.achievements.map((ach, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-white/65">
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-teal-500" />
              <span className="leading-relaxed">{ach}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
