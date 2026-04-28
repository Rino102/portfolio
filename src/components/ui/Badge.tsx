import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  variant?: "indigo" | "amber" | "green" | "slate" | "rose" | "cyan" | "current" | "promoted"
  size?: "sm" | "md"
  className?: string
}

export function Badge({ children, variant = "indigo", size = "sm", className }: BadgeProps) {
  const base = "inline-flex items-center rounded-full font-medium"

  const variants = {
    indigo: "bg-teal-400/15 text-teal-300 border border-teal-400/30",
    amber: "bg-yellow-400/15 text-yellow-200 border border-yellow-400/30",
    green: "bg-emerald-400/15 text-emerald-300 border border-emerald-400/30",
    slate: "bg-white/10 text-white/80 border border-white/15",
    rose: "bg-rose-400/15 text-rose-300 border border-rose-400/30",
    cyan: "bg-teal-400/15 text-teal-300 border border-teal-400/30",
    current:
      "bg-teal-500/20 text-teal-300 border border-teal-400/40 shadow-[0_0_12px_rgba(0,168,181,0.2)]",
    promoted: "bg-orange-400/15 text-orange-300 border border-orange-400/30",
  }

  const sizes = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3.5 py-1 text-sm",
  }

  return <span className={cn(base, variants[variant], sizes[size], className)}>{children}</span>
}
