"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { NAV_LINKS } from "@/data/resume"

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          borderBottom: "1px solid rgba(28,20,16,.14)",
          backgroundColor: "#f7f2e8",
        }}
      >
        <nav
          className="flex items-center justify-between"
          style={{ height: 58, padding: "0 40px" }}
        >
          {/* Monogram + identity */}
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }) }}
            className="flex items-center gap-3 no-underline"
            style={{ textDecoration: "none" }}
            aria-label="Rino Robinson — back to top"
          >
            <span
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs select-none"
              style={{
                border: "1.5px solid #7a2a1e",
                color: "#7a2a1e",
                fontFamily: "var(--font-serif)",
                fontWeight: 500,
                fontSize: 12,
              }}
            >
              RR
            </span>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: 18, color: "#1c1410" }}>
              Rino Robinson
            </span>
            <span
              className="hidden sm:block"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "rgba(28,20,16,.55)",
              }}
            >
              PMP® · Chennai
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[#7a2a1e]"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 12.5,
                  color: "rgba(28,20,16,.72)",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/cv.pdf"
              download
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 12,
                fontWeight: 500,
                backgroundColor: "#7a2a1e",
                color: "#f7f2e8",
                padding: "8px 15px",
                textDecoration: "none",
                borderRadius: 4,
                transition: "opacity .2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = ".82")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              Download CV
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="flex md:hidden h-9 w-9 items-center justify-center"
            style={{ color: "rgba(28,20,16,.72)", border: "1px solid rgba(28,20,16,.18)", borderRadius: 4 }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden"
            style={{ borderTop: "1px solid rgba(28,20,16,.14)", backgroundColor: "#f7f2e8" }}
          >
            <div className="flex flex-col" style={{ padding: "12px 24px 16px" }}>
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 hover:text-[#7a2a1e]"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    color: "rgba(28,20,16,.72)",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(28,20,16,.10)",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/cv.pdf"
                download
                className="mt-4 inline-block text-center"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  fontWeight: 500,
                  backgroundColor: "#7a2a1e",
                  color: "#f7f2e8",
                  padding: "10px 20px",
                  textDecoration: "none",
                  borderRadius: 4,
                }}
              >
                Download CV
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
