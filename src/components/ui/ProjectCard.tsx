"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { scaleIn } from "@/hooks/useAnimationVariants"
import { Badge } from "@/components/ui/Badge"
import { Calendar } from "lucide-react"
import type { ProjectEntry } from "@/types"

interface ProjectCardProps {
  project: ProjectEntry
  index: number
  dark?: boolean
}

const MAX_PILLS = 4

export function ProjectCard({ project, index, dark = false }: ProjectCardProps) {
  const visibleTech = project.techStack.slice(0, MAX_PILLS)
  const extra = project.techStack.length - MAX_PILLS

  return (
    <motion.article
      variants={scaleIn}
      className="flex flex-col rounded-2xl p-6 h-full glass glass-hover"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-base font-bold leading-tight text-white/90">{project.name}</h3>
        <Badge variant={project.domainColor} size="sm">
          {project.domain}
        </Badge>
      </div>

      <div className="flex items-center gap-1.5 mb-3 text-xs text-white/50">
        <Calendar className="h-3 w-3" />
        <span>{project.period}</span>
      </div>

      <p className="text-sm leading-relaxed flex-1 mb-4 text-white/70">{project.description}</p>

      <div className="mt-auto space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {visibleTech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/60"
            >
              {tech}
            </span>
          ))}
          {extra > 0 && (
            <span className="rounded-md border border-teal-400/25 bg-teal-500/10 px-2.5 py-1 text-xs text-teal-400">
              +{extra} more
            </span>
          )}
        </div>

        <div className="rounded-lg border border-teal-500/20 bg-teal-500/10 px-3 py-2">
          <p className="text-xs mb-0.5 font-medium uppercase tracking-wider text-white/50">
            Outcome
          </p>
          <p className="text-xs leading-relaxed text-teal-300">{project.outcome}</p>
        </div>
      </div>
    </motion.article>
  )
}
