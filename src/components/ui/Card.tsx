import { cn } from "@/lib/utils"

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: "sm" | "md" | "lg" | "none"
  as?: "div" | "article" | "section"
}

export function Card({
  children,
  className,
  hover = false,
  padding = "md",
  as: Tag = "div",
}: CardProps) {
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  }

  return (
    <Tag
      className={cn(
        "glass rounded-2xl",
        paddings[padding],
        hover && "glass-hover cursor-default",
        className
      )}
    >
      {children}
    </Tag>
  )
}
