"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion"
import { MapPin, Calendar } from "lucide-react"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { TimelineItem } from "@/components/ui/TimelineItem"
import { Badge } from "@/components/ui/Badge"
import { EXPERIENCE } from "@/data/resume"
import type { ExperienceEntry } from "@/types"

const DISPLAYED = [...EXPERIENCE].reverse()
const PUSH_Y_PCT = 7

function sv(v: MotionValue<string>): MotionValue<string | number> {
  return v as MotionValue<string | number>
}

function buildYArrays(index: number, total: number): { ins: number[]; outs: string[] } {
  const seg = 1 / total
  const ins: number[] = []
  const outs: string[] = []

  if (index === 0) {
    ins.push(0, seg)
    outs.push("0%", "0%")
  } else {
    ins.push(index * seg, (index + 1) * seg)
    outs.push("100%", "0%")
  }

  let pushed = 0
  for (let j = index + 1; j < total; j++) {
    pushed += PUSH_Y_PCT
    ins.push((j + 1) * seg)
    outs.push(`-${pushed}%`)
  }

  return { ins, outs }
}

function buildOpacityArrays(index: number, total: number): { ins: number[]; outs: number[] } {
  if (index === total - 1) return { ins: [0, 1], outs: [1, 1] }
  const seg = 1 / total
  return {
    ins: [(index + 1) * seg, Math.min((index + 2) * seg, 1)],
    outs: [1, 0.35],
  }
}

function buildScaleArrays(index: number, total: number): { ins: number[]; outs: number[] } {
  if (index === total - 1) return { ins: [0, 1], outs: [1, 1] }
  const seg = 1 / total
  return {
    ins: [(index + 1) * seg, Math.min((index + 2) * seg, 1)],
    outs: [1, 0.96],
  }
}

/* ── StackedCard ──────────────────────────────────────────── */

interface StackedCardProps {
  entry: ExperienceEntry
  index: number
  total: number
  scrollYProgress: MotionValue<number>
  isActive: boolean
}

function StackedCard({ entry, index, total, scrollYProgress, isActive }: StackedCardProps) {
  const { ins: yIns, outs: yOuts } = buildYArrays(index, total)
  const { ins: oIns, outs: oOuts } = buildOpacityArrays(index, total)
  const { ins: sIns, outs: sOuts } = buildScaleArrays(index, total)

  const y       = sv(useTransform(scrollYProgress, yIns, yOuts))
  const opacity = useTransform(scrollYProgress, oIns, oOuts)
  const scale   = useTransform(scrollYProgress, sIns, sOuts)

  const mouseX  = useMotionValue(0)
  const mouseY  = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 200, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 30 })

  useEffect(() => {
    if (!isActive) { mouseX.set(0); mouseY.set(0) }
  }, [isActive, mouseX, mouseY])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive) return
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }, [isActive, mouseX, mouseY])

  const resetTilt = useCallback(() => {
    mouseX.set(0)
    mouseY.set(0)
  }, [mouseX, mouseY])

  return (
    <motion.div
      style={{
        y,
        opacity,
        scale,
        rotateX,
        rotateY,
        transformPerspective: 1000,
        zIndex: index + 1,
        position: "absolute",
        inset: 0,
        background: "rgba(8,15,30,0.92)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 16px 48px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.10)",
        pointerEvents: isActive ? "auto" : "none",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      className="rounded-2xl p-6 md:p-8 cursor-default overflow-hidden"
    >
      <div className="flex flex-wrap items-start gap-2 mb-2">
        <h3 className="text-lg font-bold text-white/90 md:text-xl">{entry.role}</h3>
        {entry.badge === "CURRENT" && <Badge variant="current">Current Role</Badge>}
        {entry.badge === "PROMOTED" && <Badge variant="promoted">Promoted</Badge>}
      </div>

      <p className="text-sm font-semibold text-teal-400 mb-3">{entry.company}</p>

      <div className="flex flex-wrap items-center gap-4 mb-4 text-xs text-white/50">
        <span className="flex items-center gap-1.5">
          <Calendar className="h-3 w-3" />
          {entry.startDate} — {entry.endDate}
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin className="h-3 w-3" />
          {entry.location}
        </span>
      </div>

      <p className="text-sm text-white/65 mb-5 leading-relaxed">{entry.description}</p>

      <ul className="space-y-2">
        {entry.achievements.map((ach, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-white/65">
            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-teal-500" />
            <span className="leading-relaxed">{ach}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

/* ── TimelineDots ─────────────────────────────────────────── */

interface TimelineDotsProps {
  entries: ExperienceEntry[]
  activeIndex: number
  scrollYProgress: MotionValue<number>
}

function TimelineDots({ entries, activeIndex, scrollYProgress }: TimelineDotsProps) {
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="relative flex flex-col justify-between py-2 flex-shrink-0" style={{ width: 32 }}>
      <div className="absolute left-[14px] top-0 bottom-0 w-px bg-white/10 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 right-0 bg-teal-500 origin-top"
          style={{ scaleY: lineScale, height: "100%" }}
        />
      </div>
      {entries.map((_, i) => (
        <div key={i} className="relative z-10 flex h-7 w-7 items-center justify-center">
          <motion.div
            animate={{
              scale: i === activeIndex ? 1 : 0.6,
              backgroundColor: i === activeIndex ? "#00A8B5" : "rgba(255,255,255,0.25)",
            }}
            transition={{ duration: 0.3 }}
            className="h-3 w-3 rounded-full"
            style={{ border: "2px solid rgba(8,15,30,1)" }}
          />
        </div>
      ))}
    </div>
  )
}

/* ── Mobile fallback ──────────────────────────────────────── */

function MobileFallback() {
  return (
    <section id="experience" className="section-py relative bg-[rgba(255,255,255,0.04)] overflow-hidden">
      <div className="pointer-events-none absolute -left-10 top-1/4 h-80 w-80 rounded-full bg-orange-500/12 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-64 w-64 rounded-full bg-teal-500/10 blur-[80px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Work Experience"
          subtitle="A progressive career spanning 11+ years — from pixel-perfect frontend to full-scale technical architecture."
        />
        <div className="relative">
          {EXPERIENCE.map((entry, i) => (
            <TimelineItem
              key={`${entry.company}-${entry.startDate}`}
              entry={entry}
              index={i}
              isLast={i === EXPERIENCE.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Main export ──────────────────────────────────────────── */

export function WorkExperienceTimeline() {
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  const outerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const activeIndexRef = useRef(0)

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end 0.9"],
  })

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(Math.floor(v * DISPLAYED.length), DISPLAYED.length - 1)
    if (idx !== activeIndexRef.current) {
      activeIndexRef.current = idx
      setActiveIndex(idx)
    }
  })

  const barScaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  if (!isDesktop) return <MobileFallback />

  return (
    <div ref={outerRef} id="experience" style={{ height: `${DISPLAYED.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-[rgba(255,255,255,0.04)]">
        {/* Progress bar */}
        <motion.div
          className="absolute top-0 inset-x-0 h-[2px] origin-left z-30"
          style={{ scaleX: barScaleX, background: "linear-gradient(90deg, #00A8B5, #4dd6e0)" }}
        />

        {/* Ambient glows */}
        <div className="pointer-events-none absolute -left-10 top-1/4 h-80 w-80 rounded-full bg-orange-500/12 blur-[100px]" />
        <div className="pointer-events-none absolute right-0 bottom-1/4 h-64 w-64 rounded-full bg-teal-500/10 blur-[80px]" />

        <div className="relative h-full flex flex-col max-w-6xl mx-auto px-6 z-10">
          <div className="flex-shrink-0 pt-10 pb-4">
            <SectionHeader
              title="Work Experience"
              subtitle="A progressive career spanning 11+ years — from pixel-perfect frontend to full-scale technical architecture."
            />
          </div>

          <div className="flex flex-1 gap-8 pb-6 min-h-0">
            <TimelineDots entries={DISPLAYED} activeIndex={activeIndex} scrollYProgress={scrollYProgress} />
            <div className="relative flex-1 overflow-hidden" style={{ perspective: 1000 }}>
              {DISPLAYED.map((entry, i) => (
                <StackedCard
                  key={`${entry.company}-${entry.startDate}`}
                  entry={entry}
                  index={i}
                  total={DISPLAYED.length}
                  scrollYProgress={scrollYProgress}
                  isActive={i === activeIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
