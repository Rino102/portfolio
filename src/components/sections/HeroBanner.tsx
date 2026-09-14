"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { heroTextVariant } from "@/hooks/useAnimationVariants"
import { HERO_SUMMARY, HERO_STATS, AT_A_GLANCE } from "@/data/resume"

export function HeroBanner() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(28,20,16,.14)",
        padding: "60px 40px 56px",
      }}
    >
      {/* Background lines — fade in on load */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        {/* Drifting grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(28,20,16,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(28,20,16,.07) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            animation: "dv-drift 30s linear infinite",
          }}
        />
        {/* Sweep line */}
        <div
          style={{
            position: "absolute",
            top: "38%",
            left: 0,
            right: 0,
            height: "1px",
            background: "rgba(122,42,30,.22)",
            animation: "dv-sweep 8s ease-in-out infinite",
          }}
        />
        {/* Second subtle sweep at a different phase */}
        <div
          style={{
            position: "absolute",
            top: "62%",
            left: 0,
            right: 0,
            height: "1px",
            background: "rgba(28,20,16,.06)",
            animation: "dv-sweep 12s ease-in-out 4s infinite",
          }}
        />
      </motion.div>

      <div
        className="relative mx-auto grid grid-cols-1 lg:grid-cols-[1fr_280px]"
        style={{ maxWidth: 1088, gap: "48px 64px" }}
      >
        {/* Left column — staggered entrance */}
        <div>
          <motion.div
            custom={0}
            variants={heroTextVariant}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2.5 mb-8"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11.5,
              fontWeight: 500,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "#1f7a4d",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#1f7a4d",
                display: "inline-block",
                flexShrink: 0,
                animation: "dv-pulse 2.4s ease-in-out infinite",
              }}
            />
            Available · Open to opportunities
          </motion.div>

          <motion.h1
            custom={1}
            variants={heroTextVariant}
            initial="hidden"
            animate="visible"
            className="mb-6 text-balance"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(38px, 5.5vw, 64px)",
              fontWeight: 300,
              lineHeight: 1.08,
              letterSpacing: "-0.022em",
              color: "#1c1410",
            }}
          >
            I run the plan{" "}
            <em style={{ fontStyle: "italic", color: "#7a2a1e" }}>and</em>
            {" "}I can read the code.
          </motion.h1>

          <motion.p
            custom={2}
            variants={heroTextVariant}
            initial="hidden"
            animate="visible"
            className="mb-9"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 15.5,
              fontWeight: 300,
              lineHeight: 1.72,
              color: "rgba(28,20,16,.70)",
              maxWidth: 480,
            }}
          >
            {HERO_SUMMARY}
          </motion.p>

          <motion.div
            custom={3}
            variants={heroTextVariant}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-3 mb-12"
          >
            <a
              href="#contact"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: ".04em",
                padding: "10px 22px",
                backgroundColor: "#7a2a1e",
                color: "#f7f2e8",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Let&apos;s talk →
            </a>
            <a
              href="/cv.pdf"
              download
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: ".04em",
                padding: "9px 22px",
                color: "#7a2a1e",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                border: "1px solid rgba(122,42,30,.35)",
              }}
            >
              Download CV
            </a>
          </motion.div>

          <motion.div
            custom={4}
            variants={heroTextVariant}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-4"
          >
            {HERO_STATS.map((stat, i) => (
              <div key={stat.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      color: "rgba(28,20,16,.50)",
                    }}
                  >
                    {stat.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12.5,
                      fontWeight: 500,
                      color: "#7a2a1e",
                    }}
                  >
                    {stat.value}
                  </span>
                </div>
                <div
                  style={{
                    height: 5,
                    backgroundColor: "rgba(28,20,16,.10)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${stat.fill}%`,
                      backgroundColor: "#7a2a1e",
                      transformOrigin: "left center",
                      animation: `dv-bar 1.6s cubic-bezier(.16,1,.3,1) ${i * 0.18 + 0.8}s both`,
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column — headshot + At a glance */}
        <motion.div
          custom={5}
          variants={heroTextVariant}
          initial="hidden"
          animate="visible"
          className="lg:pt-8 flex flex-col gap-8"
        >
          {/* Headshot */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 240,
              aspectRatio: "4 / 5",
              overflow: "hidden",
              border: "1px solid rgba(28,20,16,.12)",
              backgroundColor: "#f0eae0",
            }}
          >
            <Image
              src="/headshot.png"
              alt="Rino Robinson"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
              sizes="(max-width: 1024px) 100vw, 280px"
            />
          </div>

          <div>
          <p
            className="mb-4"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10.5,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "rgba(28,20,16,.40)",
            }}
          >
            At a glance
          </p>
          <div>
            {AT_A_GLANCE.map((item, i) => (
              <div
                key={item.label}
                style={{
                  display: "grid",
                  gridTemplateColumns: "110px 1fr",
                  gap: 12,
                  padding: "12px 0",
                  borderTop: i === 0 ? "1px solid rgba(28,20,16,.14)" : undefined,
                  borderBottom: "1px solid rgba(28,20,16,.14)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10.5,
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                    color: "rgba(28,20,16,.42)",
                    paddingTop: 1,
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13.5,
                    fontWeight: 400,
                    color: "#1c1410",
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
