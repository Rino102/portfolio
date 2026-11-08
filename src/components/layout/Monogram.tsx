import { cn } from "@/lib/utils"

interface MonogramProps {
  size?: number
  /** Inverted: paper tile with a cobalt dot, for use on ink. */
  onInk?: boolean
  className?: string
}

/**
 * The initial plus one dot — the milestone marker on a plan.
 * Dot is saffron on the ink tile, cobalt on the paper tile.
 */
export function Monogram({ size = 44, onInk = false, className }: MonogramProps) {
  const radius = Math.round(size * 0.27)
  const dot = Math.max(5, Math.round(size * 0.14))

  return (
    <span
      aria-hidden="true"
      className={cn(
        "disp relative flex flex-shrink-0 items-center justify-center font-bold select-none",
        onInk ? "bg-paper text-ink" : "bg-ink text-paper",
        className
      )}
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        fontSize: Math.round(size * 0.45),
      }}
    >
      R
      <span
        className={cn("absolute rounded-full", onInk ? "bg-cobalt" : "bg-saffron")}
        style={{
          width: dot,
          height: dot,
          right: Math.round(size * 0.16),
          bottom: Math.round(size * 0.18),
        }}
      />
    </span>
  )
}
