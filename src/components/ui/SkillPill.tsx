import { cn } from "@/lib/utils"

interface SkillPillProps {
  name: string
  className?: string
}

export function SkillPill({ name, className }: SkillPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border border-white/15 bg-white/8 px-3.5 py-2 text-sm text-white/75 backdrop-blur-sm transition-all duration-200 hover:border-teal-400/40 hover:bg-teal-500/12 hover:text-teal-300",
        className
      )}
    >
      {name}
    </span>
  )
}
