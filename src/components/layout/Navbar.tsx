"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useScrolled } from "@/hooks/useScrolled"
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import { Button } from "@/components/ui/Button"
import { NAV_LINKS } from "@/data/resume"
import { cn } from "@/lib/utils"

export function Navbar() {
  const scrolled = useScrolled(20)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-white/10 bg-[rgba(4,19,39,0.80)] backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <a
            href="#hero"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500 text-sm font-bold text-white shadow-[0_0_16px_rgba(0,168,181,0.4)] transition-all hover:shadow-[0_0_24px_rgba(0,168,181,0.6)]"
            aria-label="Rino Robinson"
          >
            RR
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm text-white/70 transition-colors hover:text-white hover:bg-white/8 focus-ring"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button href="#contact" size="sm" className="hidden md:inline-flex">
              Hire Me
            </Button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white/60 transition-all hover:text-white hover:bg-white/8 md:hidden focus-ring"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-white/10 bg-[rgba(4,19,39,0.90)] backdrop-blur-xl md:hidden"
          >
            <nav className="mx-auto max-w-6xl px-6 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm text-white/70 transition-colors hover:bg-white/8 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <Button href="#contact" size="md" className="w-full" onClick={() => setMenuOpen(false)}>
                  Hire Me
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
