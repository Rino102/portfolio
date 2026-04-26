"use client"

import { motion } from "framer-motion"
import { Mail, Phone, ExternalLink, MapPin, ArrowUpRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { ContactForm } from "@/components/ui/ContactForm"
import { PERSONAL } from "@/data/resume"
import { slideInLeft, slideInRight } from "@/hooks/useAnimationVariants"

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: PERSONAL.phone,
    href: `tel:${PERSONAL.phone.replace(/\s/g, "")}`,
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: PERSONAL.linkedin,
    href: PERSONAL.linkedinUrl,
    external: true,
  },
  {
    icon: ExternalLink,
    label: "Github",
    value: PERSONAL.github,
    href: PERSONAL.githubUrl,
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: PERSONAL.location,
    href: undefined,
  },
]

export function Contact() {
  return (
    <section id="contact" className="section-py relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(0,168,181,0.08),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Get In Touch"
          subtitle="Open to new opportunities, collaborations, and interesting conversations."
          align="center"
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Contact info */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-navy mb-2">
                Let&apos;s build something exceptional.
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Whether you&apos;re looking for a technical architect to design your next system, a
                project manager to lead delivery, or a strategic consultant to align your tech
                roadmap — I&apos;d love to connect.
              </p>
            </div>

            <div className="space-y-3">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.label} className="glass rounded-xl p-4">
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 group"
                    >
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-teal-500/15">
                        <item.icon className="h-4 w-4 text-teal-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-slate-500 mb-0.5">{item.label}</p>
                        <p className="text-sm text-navy truncate group-hover:text-teal-600 transition-colors">
                          {item.value}
                        </p>
                      </div>
                      {item.external && (
                        <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-teal-500 transition-colors flex-shrink-0" />
                      )}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-teal-500/15">
                        <item.icon className="h-4 w-4 text-teal-600" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-0.5">{item.label}</p>
                        <p className="text-sm text-navy">{item.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500">
              Usually responds within 24 hours · Open to remote opportunities worldwide
            </p>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="glass rounded-2xl p-6 md:p-8">
              <h3 className="text-base font-semibold text-navy mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
