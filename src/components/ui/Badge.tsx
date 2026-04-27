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
    indigo: "bg-teal-500/15 text-teal-600 border border-teal-500/25",
    amber: "bg-gold-400/15 text-gold-500 border border-gold-400/25",
    green: "bg-emerald-500/15 text-emerald-700 border border-emerald-500/25",
    slate: "bg-slate-500/15 text-slate-600 border border-slate-500/25",
    rose: "bg-rose-500/15 text-rose-600 border border-rose-500/25",
    cyan: "bg-teal-500/15 text-teal-600 border border-teal-500/25",
    current:
      "bg-teal-500/20 text-teal-700 border border-teal-400/40 shadow-[0_0_12px_rgba(0,168,181,0.2)]",
    promoted: "bg-orange-500/20 text-orange-600 border border-orange-400/40",
  }

  const sizes = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3.5 py-1 text-sm",
  }

  return <span className={cn(base, variants[variant], sizes[size], className)}>{children}</span>
}
