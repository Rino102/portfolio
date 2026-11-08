import { Navbar } from "@/components/layout/Navbar"
import { HeroBanner } from "@/components/sections/HeroBanner"
import { WorksWith } from "@/components/sections/WorksWith"
import { About } from "@/components/sections/About"
import { Expertise } from "@/components/sections/Expertise"
import { Experience } from "@/components/sections/Experience"
import { Projects } from "@/components/sections/Projects"
import { Process } from "@/components/sections/Process"
import { AIDelivery } from "@/components/sections/AIDelivery"
import { Skills } from "@/components/sections/Skills"
import { LinkedInNotes } from "@/components/sections/LinkedInNotes"
import { Credentials } from "@/components/sections/Credentials"
import { Contact } from "@/components/sections/Contact"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner />
        <WorksWith />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Process />
        <AIDelivery />
        <Skills />
        <LinkedInNotes />
        <Credentials />
        <Contact />
      </main>
    </>
  )
}
