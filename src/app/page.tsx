import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { Experience } from "@/components/sections/Experience"
import { Projects } from "@/components/sections/Projects"
import { Certifications } from "@/components/sections/Certifications"
import { Education } from "@/components/sections/Education"
import { Testimonials } from "@/components/sections/Testimonials"
import { Contact } from "@/components/sections/Contact"
import { Competencies } from "@/components/sections/Competencies"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Competencies />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
