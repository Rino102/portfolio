"use client"

import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import type { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  href?: string
  download?: boolean | string
  loading?: boolean
  external?: boolean
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  download,
  loading,
  external,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium transition-opacity duration-150 focus-ring disabled:opacity-40 disabled:cursor-not-allowed select-none"

  const variants = {
    primary: "bg-[#7a2a1e] text-[#f7f2e8] hover:opacity-85",
    outline: "border border-[rgba(122,42,30,.35)] text-[#7a2a1e] hover:border-[#7a2a1e] hover:opacity-85",
    ghost:   "text-[rgba(28,20,16,.60)] hover:text-[#1c1410]",
  }

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs tracking-wide",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-sm tracking-wide",
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={classes} disabled={disabled ?? loading} {...props}>
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </button>
  )
}
