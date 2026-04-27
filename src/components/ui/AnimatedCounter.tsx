"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: string
  label: string
  delay?: number
}

function parseValue(val: string): { num: number; suffix: string } {
  const match = val.match(/^(\d+)(.*)$/)
  if (!match) return { num: 0, suffix: val }
  return { num: parseInt(match[1]!, 10), suffix: match[2] ?? "" }
}

export function AnimatedCounter({ value, label, delay = 0 }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)
  const { num, suffix } = parseValue(value)
  const isText = num === 0

  useEffect(() => {
    if (!isInView || isText) return
    const start = Date.now()
    const duration = 1400

    const frame = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * num))
      if (progress < 1) requestAnimationFrame(frame)
    }

    const timer = setTimeout(() => requestAnimationFrame(frame), delay * 1000)
    return () => clearTimeout(timer)
  }, [isInView, num, delay, isText])

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 text-center">
      <span className="text-3xl font-bold text-navy md:text-4xl" style={{ fontFamily: "var(--font-poppins, sans-serif)" }}>
        {isText ? value : `${count}${suffix}`}
      </span>
      <span className="text-xs text-slate-500 uppercase tracking-widest font-medium">{label}</span>
    </div>
  )
}
