"use client"

import { useEffect, useRef, useCallback } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent, type MotionValue } from "framer-motion"
import { useMediaQuery } from "@/hooks/useMediaQuery"

const FRAME_COUNT = 193

function frameSrc(index: number) {
  
  const n = String(index).padStart(4, "0");
  return `/banner/${n}.jpg`;
}

function sv(v: MotionValue<string>): MotionValue<string | number> {
  return v as MotionValue<string | number>
}

function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  cw: number,
  ch: number,
) {
  const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight)
  const sw = img.naturalWidth * scale
  const sh = img.naturalHeight * scale
  ctx.clearRect(0, 0, cw, ch)
  ctx.drawImage(img, (cw - sw) / 2, (ch - sh) / 2, sw, sh)
}

export function ScrollBannerAnimation() {
  const isMobile = useMediaQuery("(max-width: 1099px)")

  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  /* Frames animate through first 75% of scroll travel */
  const frameIndex = useTransform(scrollYProgress, [0, 0.75], [0, FRAME_COUNT - 1])

  /* Last 25%: card lifts up, shrinks, and rounds — revealing the next section below */
  const canvasY = sv(useTransform(scrollYProgress, [0.75, 1], ["0px", "-10vh"]))
  const canvasScale = useTransform(scrollYProgress, [0.75, 1], [1, 0.9])
  const canvasBorderRadius = useTransform(scrollYProgress, [0.75, 1], [12, 32])

  const hintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0])

  const drawFrame = useCallback((idx: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const img = imagesRef.current[Math.min(Math.max(0, idx), FRAME_COUNT - 1)]
    if (!img?.complete || !img.naturalWidth) return
    drawCover(ctx, img, canvas.width, canvas.height)
  }, [])

  /* Size canvas to the wrapper via ResizeObserver */
  useEffect(() => {
    if (isMobile) return
    const wrapper = wrapperRef.current
    if (!wrapper) return
    const ro = new ResizeObserver(() => {
      const canvas = canvasRef.current
      if (!canvas) return
      canvas.width = wrapper.offsetWidth
      canvas.height = wrapper.offsetHeight
      drawFrame(Math.round(frameIndex.get()))
    })
    ro.observe(wrapper)
    return () => ro.disconnect()
  }, [drawFrame, frameIndex, isMobile])

  /* Preload all frames; draw frame 0 as soon as it's ready */
  useEffect(() => {
    if (isMobile) return
    const images = Array.from({ length: FRAME_COUNT }, (_, i) => {
      const img = new Image()
      img.src = frameSrc(i)
      img.onload = () => {
        if (i === 0) drawFrame(0)
      }
      return img
    })
    imagesRef.current = images
  }, [drawFrame, isMobile])

  useMotionValueEvent(frameIndex, "change", (latest) => {
    drawFrame(Math.round(latest))
  })

  if (isMobile) {
    return (
      <section className="bg-[#0d0d0d] py-10 px-4">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
          <img
            src="/banner/00193.png"
            alt="Showcase banner"
            className="block w-full h-auto"
            loading="lazy"
          />
        </div>
      </section>
    )
  }

  return (
    <section
      ref={containerRef}
      style={{ height: "350vh", background: "#0d0d0d" }}
    >
      {/* Sticky viewport */}
      <div
        className="sticky top-0 flex items-center justify-center"
        style={{ height: "100vh" }}
      >
        {/* 1200px contained canvas card */}
        <motion.div
          ref={wrapperRef}
          style={{
            y: canvasY,
            scale: canvasScale,
            borderRadius: canvasBorderRadius,
            width: "100%",
            maxWidth: "1280px",
            position: "relative",
            overflow: "hidden",
          }}
          className="mx-4 sm:mx-6 md:mx-8 lg:mx-12 aspect-video max-h-[80vh] shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
        >
          <canvas
            ref={canvasRef}
            style={{ display: "block", width: "100%", height: "100%" }}
          />

          {/* Scroll hint */}
          <motion.div
            style={{ opacity: hintOpacity }}
            className="pointer-events-none absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
              className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-white/40 pt-1"
            >
              <div className="h-1.5 w-1 rounded-full bg-white/60" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
