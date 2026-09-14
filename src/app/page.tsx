import { Navbar } from "@/components/layout/Navbar"
import { SidebarNav } from "@/components/layout/SidebarNav"
import { HeroBanner } from "@/components/sections/HeroBanner"
import { About } from "@/components/sections/About"
import { Competencies } from "@/components/sections/Competencies"
import { Experience } from "@/components/sections/Experience"
import { Projects } from "@/components/sections/Projects"
import { Skills } from "@/components/sections/Skills"
import { Credentials } from "@/components/sections/Credentials"
import { FieldNotes } from "@/components/sections/FieldNotes"
import { Contact } from "@/components/sections/Contact"

export default function HomePage() {
  return (
    <div style={{ width: "100%", backgroundColor: "#f7f2e8" }}>
      <Navbar />
      <HeroBanner />
      <div className="grid grid-cols-1 lg:grid-cols-[92px_1fr]">
        <SidebarNav />
        <div>
          <About />
          <Competencies />
          <Experience />
          <Projects />
          <Skills />
          <Credentials />
          <FieldNotes />
        </div>
      </div>
      <Contact />
    </div>
  )
}
