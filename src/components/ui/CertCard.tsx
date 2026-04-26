"use client"

import { motion } from "framer-motion"
import { scaleIn } from "@/hooks/useAnimationVariants"
import { Award, Mic2, ExternalLink } from "lucide-react"
import type { CertificationEntry } from "@/types"

interface CertCardProps {
  cert: CertificationEntry
}

const iconMap: Record<string, React.ElementType> = {
  Award,
  Mic2,
  Presentation: Mic2,
}

export function CertCard({ cert }: CertCardProps) {
  const Icon = iconMap[cert.icon] ?? Award
  const isCert = cert.type === "certification"

  return (
    <motion.div
      variants={scaleIn}
      className="glass glass-hover rounded-2xl p-6 flex flex-col gap-4 h-full"
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${
            isCert
              ? "bg-gold-400/15 text-gold-500"
              : "bg-teal-500/15 text-teal-600"
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
            {isCert ? "Certification" : "Speaking"}
          </p>
          <p className="text-xs text-slate-500">{cert.date}</p>
        </div>
      </div>

      <div>
        <h3 className="text-base font-bold text-navy leading-snug mb-1">{cert.title}</h3>
        <p className="text-xs font-semibold text-teal-600 mb-3">{cert.issuer}</p>
        <p className="text-sm text-slate-600 leading-relaxed">{cert.description}</p>
      </div>

      {cert.credentialUrl && (
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1.5 text-xs text-teal-600 hover:text-teal-500 transition-colors"
        >
          View Credential <ExternalLink className="h-3 w-3" />
        </a>
      )}
    </motion.div>
  )
}
