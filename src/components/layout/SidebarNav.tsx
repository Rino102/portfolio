"use client"

import { useEffect, useState } from "react"

const ITEMS = [
  { id: "about",        label: "01 About"       },
  { id: "competencies", label: "02 Competencies" },
  { id: "experience",   label: "03 Experience"   },
  { id: "case-studies", label: "04 Case Studies" },
  { id: "skills",       label: "05 Skills"       },
  { id: "credentials",  label: "06 Credentials"  },
  { id: "notes",        label: "07 Notes"        },
]

export function SidebarNav() {
  const [active, setActive] = useState("")

  useEffect(() => {
    const elements = ITEMS.map(i => document.getElementById(i.id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
            break
          }
        }
      },
      { threshold: 0.15, rootMargin: "-10% 0px -45% 0px" }
    )
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <aside className="hidden lg:block" style={{ width: 92 }}>
      <div
        style={{
          position: "sticky",
          top: 58,
          height: "calc(100vh - 58px)",
          width: 92,
          borderRight: "1px solid rgba(28,20,16,.14)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Normal flex-column — writing-mode applied per item so the flex axis stays vertical */}
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          {ITEMS.map(item => {
            const isActive = active === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={e => {
                  e.preventDefault()
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" })
                }}
                style={{
                  writingMode: "vertical-rl",
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: isActive ? "#7a2a1e" : "rgba(28,20,16,.40)",
                  textDecoration: "none",
                  fontWeight: isActive ? 500 : 400,
                  paddingRight: 6,
                  borderRight: isActive ? "2px solid #7a2a1e" : "2px solid transparent",
                  transition: "color .18s, border-color .18s",
                  whiteSpace: "nowrap",
                }}
              >
                {item.label}
              </a>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
