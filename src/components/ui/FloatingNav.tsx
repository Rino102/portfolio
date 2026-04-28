"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  House, User, Brain, Code2, Briefcase,
  FolderOpen, Award, GraduationCap, Mail,
} from "lucide-react"

const NAV_ITEMS = [
  { id: "top",            label: "Home",           Icon: House,         href: "#"               },
  { id: "about",          label: "About",          Icon: User,          href: "#about"          },
  { id: "competencies",   label: "Competencies",   Icon: Brain,         href: "#competencies"   },
  { id: "skills",         label: "Skills",         Icon: Code2,         href: "#skills"         },
  { id: "experience",     label: "Experience",     Icon: Briefcase,     href: "#experience"     },
  { id: "projects",       label: "Projects",       Icon: FolderOpen,    href: "#projects"       },
  { id: "certifications", label: "Certifications", Icon: Award,         href: "#certifications" },
  { id: "education",      label: "Education",      Icon: GraduationCap, href: "#education"      },
  { id: "contact",        label: "Contact",        Icon: Mail,          href: "#contact"        },
] as const

type NavId = (typeof NAV_ITEMS)[number]["id"]

/* Three forward-slash "slice" lines → X on open */
function SliceIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <AnimatePresence mode="wait" initial={false}>
        {open ? (
          <motion.g
            key="close"
            initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            style={{ transformOrigin: "12px 12px" }}
          >
            <line x1="5" y1="5" x2="19" y2="19" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
            <line x1="19" y1="5" x2="5" y2="19" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
          </motion.g>
        ) : (
          <motion.g
            key="slices"
            initial={{ opacity: 0, rotate: 45, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -45, scale: 0.7 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            style={{ transformOrigin: "12px 12px" }}
          >
            {/* /// — three parallel diagonal forward slashes */}
            <line x1="4"  y1="20" x2="10" y2="4"  stroke="white" strokeWidth="2.3" strokeLinecap="round" />
            <line x1="10" y1="20" x2="16" y2="4"  stroke="white" strokeWidth="2.3" strokeLinecap="round" />
            <line x1="16" y1="20" x2="22" y2="4"  stroke="white" strokeWidth="2.3" strokeLinecap="round" />
          </motion.g>
        )}
      </AnimatePresence>
    </svg>
  )
}

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

  const navigate = useCallback((href: string) => {
    setOpen(false)
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="fab-backdrop"
            className="fixed inset-0 z-[49] bg-black/25 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onPointerDown={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Fixed anchor — flex column so panel grows upward */}
      <div
        ref={containerRef}
        role="navigation"
        aria-label="Page navigation"
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      >
        {/* ── Vertical nav panel ─────────────────────────── */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="nav-panel"
              initial={{ opacity: 0, y: 16, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.94 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-0.5 rounded-2xl border border-white/14 bg-[rgba(10,18,35,0.85)] p-2 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.10)]"
              style={{ minWidth: 196 }}
            >
              {NAV_ITEMS.map((item, i) => {
                const isActive = active === item.id
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.042, duration: 0.22, ease: "easeOut" }}
                    onClick={() => navigate(item.href)}
                    aria-label={`Go to ${item.label}`}
                    className={[
                      "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-150 text-left",
                      isActive
                        ? "bg-teal-500/18 text-teal-300 border border-teal-400/30"
                        : "text-white/65 hover:bg-white/8 hover:text-white border border-transparent",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg",
                        isActive ? "bg-teal-500/25" : "bg-white/8",
                      ].join(" ")}
                    >
                      <item.Icon className="h-3.5 w-3.5" strokeWidth={isActive ? 2.5 : 2} />
                    </span>
                    <span className="flex-1">{item.label}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400" />
                    )}
                  </motion.button>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Trigger button ─────────────────────────────── */}
        <motion.button
          onClick={() => setOpen(o => !o)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-haspopup="true"
          className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500 text-white outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2"
          style={{
            boxShadow: open
              ? "0 8px 40px rgba(0,168,181,0.60), 0 2px 12px rgba(0,0,0,0.20)"
              : "0 8px 32px rgba(0,168,181,0.42), 0 2px 8px rgba(0,0,0,0.12)",
          }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.92 }}
        >
          {/* Pulse ring — closed state only */}
          {!open && (
            <motion.span
              className="absolute inset-0 rounded-2xl bg-teal-400/40"
              animate={{ scale: [1, 1.65, 1.65], opacity: [0.45, 0, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", repeatDelay: 1.2 }}
            />
          )}

          <SliceIcon open={open} />
        </motion.button>
      </div>
    </>
  )
}
