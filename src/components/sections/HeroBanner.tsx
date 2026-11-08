import Image from "next/image"
import {
  AVAILABILITY,
  HERO_CARDS,
  HERO_HEADLINE_ACCENT,
  HERO_HEADLINE_LEAD,
  HERO_STATS,
  HERO_SUMMARY,
} from "@/data/resume"
import { ButtonLink } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

/**
 * Server component on purpose: the hero is above the fold, so its entrance is a
 * CSS animation rather than framer-motion. It paints with or without JS.
 */
export function HeroBanner() {
  return (
    <section id="top" className="overflow-hidden pt-20 pb-18">
      <div className="wrap flex flex-wrap items-center gap-14">
        <div className="flex min-w-0 flex-[1_1_560px] flex-col gap-7">
          <span className="chip rise rise-1 gap-2.5 self-start">
            <span className="bg-green h-2 w-2 rounded-full" />
            {AVAILABILITY}
          </span>

          <h1
            className="disp text-ink rise rise-2 font-bold text-balance"
            style={{ fontSize: "clamp(40px, 6.4vw, 88px)", lineHeight: 1 }}
          >
            {HERO_HEADLINE_LEAD} <span className="text-cobalt">{HERO_HEADLINE_ACCENT}</span>
          </h1>

          <p className="text-body rise rise-3 max-w-[560px] text-[19px] leading-relaxed text-pretty">
            {HERO_SUMMARY}
          </p>

          <div className="rise rise-4 flex flex-wrap gap-3">
            <ButtonLink href="#contact">Start a conversation →</ButtonLink>
            <ButtonLink href="#work" variant="secondary">
              See selected work
            </ButtonLink>
          </div>

          <dl className="rise rise-5 flex flex-wrap gap-x-8 gap-y-3 pt-3">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <dt className="disp text-ink text-[30px] font-bold">{stat.value}</dt>
                <dd className="mono">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rise rise-3 flex min-w-0 flex-[1_1_380px] justify-center">
          <div className="relative w-full max-w-[440px]">
            <div className="bg-ink relative aspect-[4/5] overflow-hidden rounded-[28px]">
              <Image
                src="/headshot.png"
                alt="Rino Robinson"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover object-top"
              />
            </div>

            <Card className="absolute bottom-10 -left-4 flex flex-col gap-1 px-5 py-4 shadow-[0_12px_32px_rgba(14,22,36,.12)] sm:-left-6">
              <span className="mono text-[10px]">{HERO_CARDS[0]!.label}</span>
              <span className="text-ink text-[15px] font-semibold">{HERO_CARDS[0]!.value}</span>
            </Card>

            <Card className="absolute top-8 -right-2 flex flex-col gap-1 px-5 py-4 shadow-[0_12px_32px_rgba(14,22,36,.12)] sm:-right-3">
              <span className="mono text-[10px]">{HERO_CARDS[1]!.label}</span>
              <span className="text-ink text-[15px] font-semibold">{HERO_CARDS[1]!.value}</span>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
