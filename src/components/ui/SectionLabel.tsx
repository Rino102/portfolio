import { cn } from "@/lib/utils"

interface SectionLabelProps {
  children: string
  /** Saffron on ink bands, muted grey on paper. */
  onInk?: boolean
  className?: string
}

export function SectionLabel({ children, onInk = false, className }: SectionLabelProps) {
  return <span className={cn("mono", onInk && "text-saffron", className)}>{children}</span>
}
