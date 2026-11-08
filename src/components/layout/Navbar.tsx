"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { NAV_LINKS, ROLE_TITLE } from "@/data/resume"
import { ButtonLink } from "@/components/ui/Button"
import { Monogram } from "@/components/layout/Monogram"

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-paper sticky top-0 z-50 border-b border-[#dad8cf]">
      <div className="wrap flex items-center justify-between gap-4 py-4">
        <a
          href="#top"
          className="focus-ring flex items-center gap-3 no-underline"
          aria-label="Rino Robinson — back to top"
        >
          <Monogram size={44} />
          <span className="flex flex-col gap-0.5">
            <span className="disp text-ink text-[17px] font-semibold">Rino Robinson</span>
            <span className="mono text-[10px]">{ROLE_TITLE}</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="navlink focus-ring">
              {link.label}
            </a>
          ))}
          <ButtonLink href="#contact" compact>
            Let&apos;s talk
          </ButtonLink>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="focus-ring text-ink flex h-11 w-11 items-center justify-center rounded-xl border border-[#dad8cf] lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="bg-paper border-t border-[#dad8cf] lg:hidden"
        >
          <div className="wrap flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="navlink focus-ring border-b border-[#dad8cf] py-3.5 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <ButtonLink
              href="#contact"
              compact
              className="my-3 w-full"
              onClick={() => setMenuOpen(false)}
            >
              Let&apos;s talk
            </ButtonLink>
          </div>
        </nav>
      )}
    </header>
  )
}
