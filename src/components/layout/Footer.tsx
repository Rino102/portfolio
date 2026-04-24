"use client"

import { Mail, Phone, ArrowUp, ExternalLink } from "lucide-react"
import { PERSONAL } from "@/data/resume"

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="border-t border-white/8 bg-[#0a1020] py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 text-xs font-bold text-white">
              RR
            </span>
            <span className="text-sm text-slate-500">
              © {new Date().getFullYear()} Rino Robinson. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${PERSONAL.email}`}
              className="text-slate-500 hover:text-indigo-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={`tel:${PERSONAL.phone.replace(/\s/g, "")}`}
              className="text-slate-500 hover:text-indigo-400 transition-colors"
              aria-label="Phone"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href={PERSONAL.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-500 transition-all hover:border-indigo-500/40 hover:text-indigo-400"
              aria-label="Back to top"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
