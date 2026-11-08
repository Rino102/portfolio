import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

type Variant = "primary" | "secondary" | "saffron"

const VARIANT: Record<Variant, string> = {
  primary: "btn-pri",
  secondary: "btn-sec",
  saffron: "btn-saffron",
}

interface BaseProps {
  variant?: Variant
  compact?: boolean
  children: ReactNode
  className?: string
}

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    loading?: boolean
  }

type LinkProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string
  }

function classes(variant: Variant, compact: boolean, className?: string) {
  return cn("btn focus-ring", VARIANT[variant], compact && "min-h-11 px-5 text-sm", className)
}

export function Button({
  variant = "primary",
  compact = false,
  loading = false,
  children,
  className,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={classes(variant, compact, className)}
      disabled={disabled ?? loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading ? "Sending…" : children}
    </button>
  )
}

export function ButtonLink({
  variant = "primary",
  compact = false,
  children,
  className,
  ...rest
}: LinkProps) {
  return (
    <a className={classes(variant, compact, className)} {...rest}>
      {children}
    </a>
  )
}
