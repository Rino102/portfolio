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
    indigo: "bg-indigo-500/15 text-indigo-300 border border-indigo-500/25",
    amber: "bg-amber-500/15 text-amber-300 border border-amber-500/25",
    green: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/25",
    slate: "bg-slate-500/15 text-slate-300 border border-slate-500/25",
    rose: "bg-rose-500/15 text-rose-300 border border-rose-500/25",
    cyan: "bg-cyan-500/15 text-cyan-300 border border-cyan-500/25",
    current:
      "bg-indigo-500/20 text-indigo-200 border border-indigo-400/40 shadow-[0_0_12px_rgba(99,102,241,0.2)]",
    promoted: "bg-amber-500/20 text-amber-200 border border-amber-400/40",
  }

  const sizes = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3.5 py-1 text-sm",
  }

  return <span className={cn(base, variants[variant], sizes[size], className)}>{children}</span>
}
