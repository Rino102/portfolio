"use client"

import { motion } from "framer-motion"

export function GradientMesh() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Teal orb — top left */}
      <motion.div
        className="absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full bg-teal-500/20 blur-[120px]"
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Orange orb — top right */}
      <motion.div
        className="absolute -right-48 top-0 h-[500px] w-[500px] rounded-full bg-orange-500/15 blur-[100px]"
        animate={{ x: [0, -50, 20, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      {/* Gold orb — bottom center */}
      <motion.div
        className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-gold-400/10 blur-[100px]"
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />
    </div>
  )
}
