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
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-ring disabled:opacity-50 disabled:cursor-not-allowed select-none"

  const variants = {
    primary:
      "bg-teal-500 hover:bg-teal-400 text-white shadow-[0_0_24px_rgba(0,168,181,0.3)] hover:shadow-[0_0_32px_rgba(0,168,181,0.5)]",
    outline:
      "border border-white/20 text-white/85 hover:bg-white/10 hover:border-teal-400/50 backdrop-blur-sm",
    ghost: "text-white/60 hover:text-white hover:bg-white/10",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
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
