import { cn } from "@/lib/utils"

interface SkillPillProps {
  name: string
  className?: string
}

export function SkillPill({ name, className }: SkillPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-600 transition-all duration-200 hover:border-teal-500/30 hover:bg-teal-500/8 hover:text-teal-700",
        className
      )}
    >
      {name}
    </span>
  )
}
