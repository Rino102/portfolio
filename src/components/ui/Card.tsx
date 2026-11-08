import type { ElementType, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface CardProps {
  as?: ElementType
  hover?: boolean
  children: ReactNode
  className?: string
}

export function Card({ as: Tag = "div", hover = false, children, className }: CardProps) {
  return <Tag className={cn("card", hover && "card-hover", className)}>{children}</Tag>
}
