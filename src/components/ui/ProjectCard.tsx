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
      className={cn(
        "flex flex-col rounded-2xl p-6 h-full",
        dark ? "dark-glass dark-glass-hover" : "glass glass-hover"
      )}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className={cn("text-base font-bold leading-tight", dark ? "text-white" : "text-navy")}>{project.name}</h3>
        <Badge variant={project.domainColor} size="sm">
          {project.domain}
        </Badge>
      </div>

      <div className={cn("flex items-center gap-1.5 mb-3 text-xs", dark ? "text-white/50" : "text-slate-500 opacity-70")}>
        <Calendar className="h-3 w-3" />
        <span>{project.period}</span>
      </div>

      <p className={cn("text-sm leading-relaxed flex-1 mb-4", dark ? "text-white/70" : "text-slate-600")}>{project.description}</p>

      <div className="mt-auto space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {visibleTech.map((tech) => (
            <span
              key={tech}
              className={cn(
                "rounded-md border px-2.5 py-1 text-xs",
                dark
                  ? "border-white/15 bg-white/5 text-white/60"
                  : "border-slate-200 bg-slate-50 text-slate-600"
              )}
            >
              {tech}
            </span>
          ))}
          {extra > 0 && (
            <span className={cn(
              "rounded-md border px-2.5 py-1 text-xs",
              dark
                ? "border-teal-400/25 bg-teal-500/10 text-teal-400"
                : "border-teal-500/20 bg-teal-500/8 text-teal-600"
            )}>
              +{extra} more
            </span>
          )}
        </div>

        <div className={cn(
          "rounded-lg border px-3 py-2",
          dark ? "bg-teal-500/10 border-teal-500/20" : "bg-teal-500/8 border-teal-500/15"
        )}>
          <p className={cn("text-xs mb-0.5 font-medium uppercase tracking-wider", dark ? "text-white/50" : "text-slate-500")}>
            Outcome
          </p>
          <p className={cn("text-xs leading-relaxed", dark ? "text-teal-300" : "text-teal-600")}>{project.outcome}</p>
        </div>
      </div>
    </motion.article>
  )
}
