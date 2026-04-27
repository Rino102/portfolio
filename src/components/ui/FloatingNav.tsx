"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  House, User, Brain, Code2, Briefcase,
  FolderOpen, Award, GraduationCap, Mail, X, Menu,
} from "lucide-react"

/* ─── Config ──────────────────────────────────────────────── */

const RADIUS = 215       // px from trigger centre to item centre
const TRIGGER_SIZE = 56  // px — trigger button diameter
const ITEM_SIZE = 40     // px — radial item diameter
const ARC_START = 92     // degrees, measured CCW from +x axis (right)
const ARC_END = 182      // degrees

const NAV_ITEMS = [
  { id: "top",            label: "Home",           Icon: House,          href: "#"               },
  { id: "about",          label: "About",          Icon: User,           href: "#about"          },
  { id: "competencies",   label: "Competencies",   Icon: Brain,          href: "#competencies"   },
  { id: "skills",         label: "Skills",         Icon: Code2,          href: "#skills"         },
  { id: "experience",     label: "Experience",     Icon: Briefcase,      href: "#experience"     },
  { id: "projects",       label: "Projects",       Icon: FolderOpen,     href: "#projects"       },
  { id: "certifications", label: "Certifications", Icon: Award,          href: "#certifications" },
  { id: "education",      label: "Education",      Icon: GraduationCap,  href: "#education"      },
  { id: "contact",        label: "Contact",        Icon: Mail,           href: "#contact"        },
] as const

type NavId = (typeof NAV_ITEMS)[number]["id"]

/* ─── Helpers ─────────────────────────────────────────────── */

function getPos(index: number) {
  const angle = ARC_START + (index / (NAV_ITEMS.length - 1)) * (ARC_END - ARC_START)
  const rad = (angle * Math.PI) / 180
  return {
    x: Math.cos(rad) * RADIUS,
    y: -Math.sin(rad) * RADIUS, // flip: CSS y grows downward
  }
}

/* ─── Component ───────────────────────────────────────────── */

export function FloatingNav() {
  const [open, setOpen]     = useState(false)
  const [active, setActive] = useState<NavId>("top")
  const containerRef        = useRef<HTMLDivElement>(null)

  /* Click outside → close */
  useEffect(() => {
    if (!open) return
    const handler = (e: PointerEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false)
    }
    window.addEventListener("pointerdown", handler, true)
    return () => window.removeEventListener("pointerdown", handler, true)
  }, [open])

  /* Escape → close */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false) }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  /* Active-section tracking */
  useEffect(() => {
    const onScroll = () => { if (window.scrollY < 80) setActive("top") }
    window.addEventListener("scroll", onScroll, { passive: true })

    const sectionEls = NAV_ITEMS
      .filter(i => i.id !== "top")
      .map(i => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[]

    const io = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) { setActive(entry.target.id as NavId); break }
        }
      },
      { threshold: 0.2, rootMargin: "-5% 0px -45% 0px" },
    )
    sectionEls.forEach(el => io.observe(el))
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll) }
  }, [])

  /* Navigate + close */
  const navigate = useCallback((href: string) => {
    setOpen(false)
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  const itemOffset = (TRIGGER_SIZE - ITEM_SIZE) / 2 // centres item over trigger

  return (
    <>
      {/* ── Backdrop ─────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="fab-backdrop"
            className="fixed inset-0 z-[49] bg-black/20 backdrop-blur-[3px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onPointerDown={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── Menu container (fixed anchor) ─────────────────── */}
      <div
        ref={containerRef}
        role="navigation"
        aria-label="Page navigation"
        className="fixed bottom-6 right-6 z-50"
        style={{ width: TRIGGER_SIZE, height: TRIGGER_SIZE }}
      >
        {/* ── Radial items ──────────────────────────────── */}
        {NAV_ITEMS.map((item, i) => {
          const { x, y } = getPos(i)
          const isActive  = active === item.id

          return (
            <motion.div
              key={item.id}
              style={{
                position: "absolute",
                top: itemOffset,
                left: itemOffset,
                width: ITEM_SIZE,
                height: ITEM_SIZE,
                pointerEvents: open ? "auto" : "none",
              }}
              initial={false}
              animate={
                open
                  ? { x, y, opacity: 1, scale: 1 }
                  : { x: 0, y: 0, opacity: 0, scale: 0 }
              }
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 28,
                delay: open
                  ? i * 0.038
                  : (NAV_ITEMS.length - 1 - i) * 0.025,
              }}
            >
              {/* Item + tooltip wrapper */}
              <div className="group relative h-full w-full">
                {/* ── Circle button ── */}
                <button
                  onClick={() => navigate(item.href)}
                  aria-label={`Go to ${item.label}`}
                  tabIndex={open ? 0 : -1}
                  className={[
                    "h-full w-full rounded-full flex items-center justify-center",
                    "shadow-lg outline-none transition-all duration-150",
                    "hover:scale-110 active:scale-90",
                    "focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2",
                    isActive
                      ? "bg-teal-500 text-white shadow-teal-500/50"
                      : "bg-white text-[#1a365d] shadow-black/12 hover:bg-teal-50 hover:text-teal-600",
                  ].join(" ")}
                >
                  <item.Icon className="h-[17px] w-[17px]" strokeWidth={isActive ? 2.5 : 2} />

                  {/* Active ring */}
                  {isActive && (
                    <span className="pointer-events-none absolute -inset-[3px] rounded-full border-2 border-teal-400/60" />
                  )}
                </button>

                {/* ── Tooltip ── */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2
                    opacity-0 scale-95 transition-all duration-150
                    group-hover:opacity-100 group-hover:scale-100"
                >
                  <div className="relative">
                    <span className="block whitespace-nowrap rounded-lg bg-[#0d1628] px-3 py-1.5 text-[11px] font-semibold tracking-wide text-white shadow-xl">
                      {item.label}
                    </span>
                    {/* Arrow pointing right toward the item */}
                    <span
                      className="absolute left-full top-1/2 -translate-y-1/2"
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "5px solid transparent",
                        borderBottom: "5px solid transparent",
                        borderLeft: "5px solid #0d1628",
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}

        {/* ── Trigger button ────────────────────────────── */}
        <motion.button
          onClick={() => setOpen(o => !o)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-haspopup="true"
          className="absolute inset-0 z-10 flex items-center justify-center rounded-full
            bg-teal-500 text-white outline-none
            focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2"
          style={{
            boxShadow: open
              ? "0 8px 40px rgba(0,168,181,0.55), 0 2px 12px rgba(0,0,0,0.15)"
              : "0 8px 32px rgba(0,168,181,0.40), 0 2px 8px rgba(0,0,0,0.10)",
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.91 }}
        >
          {/* Ambient pulse ring (shown only when closed) */}
          {!open && (
            <motion.span
              className="absolute inset-0 rounded-full bg-teal-400/40"
              animate={{ scale: [1, 1.7, 1.7], opacity: [0.5, 0, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeOut",
                repeatDelay: 1.2,
              }}
            />
          )}

          {/* Hamburger ↔ X icon swap */}
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="x"
                className="flex items-center justify-center"
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0,   opacity: 1, scale: 1   }}
                exit={{   rotate:  90,  opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <X className="h-[22px] w-[22px]" strokeWidth={2.5} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                className="flex items-center justify-center"
                initial={{ rotate:  90, opacity: 0, scale: 0.5 }}
                animate={{ rotate:  0,  opacity: 1, scale: 1   }}
                exit={{   rotate: -90,  opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Menu className="h-[22px] w-[22px]" strokeWidth={2.5} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  )
}
