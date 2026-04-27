import { Footer } from "@/components/layout/Footer"
import { ScrollBannerAnimation } from "@/components/sections/ScrollBannerAnimation"
import { HeroBanner } from "@/components/sections/HeroBanner"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { Experience } from "@/components/sections/Experience"
import { Projects } from "@/components/sections/Projects"
import { Certifications } from "@/components/sections/Certifications"
import { Education } from "@/components/sections/Education"
import { Testimonials } from "@/components/sections/Testimonials"
import { Contact } from "@/components/sections/Contact"
import { Competencies } from "@/components/sections/Competencies"
import { FloatingNav } from "@/components/ui/FloatingNav"

export default function HomePage() {
  return (
    <>
      <main>
        <HeroBanner />
        <ScrollBannerAnimation />
        <About />
        <Competencies />
        <Skills />
        <Experience />
        {/* <Projects /> */}
        <Certifications />
        <Education />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
      <FloatingNav />
    </>
  )
}
