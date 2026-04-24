"use client"

import { motion } from "framer-motion"
import { scaleIn } from "@/hooks/useAnimationVariants"
import { Badge } from "@/components/ui/Badge"
import { Calendar } from "lucide-react"
import type { ProjectEntry } from "@/types"

interface ProjectCardProps {
  project: ProjectEntry
  index: number
}

const MAX_PILLS = 4

export function ProjectCard({ project, index }: ProjectCardProps) {
  const visibleTech = project.techStack.slice(0, MAX_PILLS)
  const extra = project.techStack.length - MAX_PILLS

  return (
    <motion.article
      variants={scaleIn}
      className="glass glass-hover flex flex-col rounded-2xl p-6 h-full"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-base font-bold text-white leading-tight">{project.name}</h3>
        <Badge variant={project.domainColor} size="sm">
          {project.domain}
        </Badge>
      </div>

      <div className="flex items-center gap-1.5 mb-3 text-xs text-slate-500">
        <Calendar className="h-3 w-3" />
        <span>{project.period}</span>
      </div>

      <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-4">{project.description}</p>

      <div className="mt-auto space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {visibleTech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/8 bg-white/4 px-2.5 py-1 text-xs text-slate-400"
            >
              {tech}
            </span>
          ))}
          {extra > 0 && (
            <span className="rounded-md border border-indigo-500/20 bg-indigo-500/8 px-2.5 py-1 text-xs text-indigo-400">
              +{extra} more
            </span>
          )}
        </div>

        <div className="rounded-lg bg-indigo-500/8 border border-indigo-500/15 px-3 py-2">
          <p className="text-xs text-slate-500 mb-0.5 font-medium uppercase tracking-wider">
            Outcome
          </p>
          <p className="text-xs text-indigo-300 leading-relaxed">{project.outcome}</p>
        </div>
      </div>
    </motion.article>
  )
}
