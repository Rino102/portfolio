import { cn } from "@/lib/utils"

interface SkillPillProps {
  name: string
  className?: string
}

export function SkillPill({ name, className }: SkillPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border border-white/8 bg-white/4 px-3.5 py-2 text-sm text-slate-300 transition-all duration-200 hover:border-indigo-500/30 hover:bg-indigo-500/8 hover:text-indigo-200",
        className
      )}
    >
      {name}
    </span>
  )
}
