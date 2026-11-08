"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { fadeInUp, scaleIn, staggerContainer } from "@/hooks/useAnimationVariants"
import { PROJECTS } from "@/data/resume"
import { Card } from "@/components/ui/Card"
import { Chip } from "@/components/ui/Chip"
import { SectionLabel } from "@/components/ui/SectionLabel"

const VP = { once: true, amount: 0.05 }

export function Projects() {
  const projects = PROJECTS.filter((p) => p.featured)

  return (
    <section id="work" className="bg-band py-24">
      <div className="wrap flex flex-col gap-12">
        <motion.div
          className="flex flex-col gap-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          <SectionLabel>04 / Selected work</SectionLabel>
          <h2 className="h-section text-ink">Projects I have delivered</h2>
        </motion.div>

        <motion.div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(540px, 100%), 1fr))" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          {projects.map((project) => (
            <motion.div key={project.name} variants={scaleIn}>
              <Card as="article" hover className="flex h-full flex-col gap-5 p-9">
                <div className="flex flex-wrap justify-between gap-3">
                  <span className="mono">{project.domain}</span>
                  <span className="mono">{project.status}</span>
                </div>

                <h3 className="disp text-ink text-[30px] font-semibold">{project.name}</h3>

                <p className="text-body text-base leading-relaxed">{project.description}</p>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cobalt-link focus-ring mono inline-flex w-fit items-center gap-1.5 normal-case"
                  >
                    {project.urlLabel ?? project.url}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}

                {project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Chip key={tech}>{tech}</Chip>
                    ))}
                  </div>
                )}

                <div className="mt-auto flex flex-wrap gap-6 border-t border-[#dad8cf] pt-5">
                  <div className="flex flex-col gap-1">
                    <span className="mono">Role</span>
                    <span className="text-ink text-[15px] font-semibold">{project.role}</span>
                  </div>
                  {project.result && (
                    <div className="flex flex-col gap-1">
                      <span className="mono">Result</span>
                      <span className="text-ink text-[15px] font-semibold">{project.result}</span>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href="#contact"
          className="cobalt-link focus-ring mono self-start py-3 normal-case"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          Discuss a project →
        </motion.a>
      </div>
    </section>
  )
}
