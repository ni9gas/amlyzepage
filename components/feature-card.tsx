"use client"

import type React from "react"
import { motion } from "framer-motion"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <motion.div
      variants={fadeIn}
      className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(245,215,66,0.3)] group"
    >
      <div className="bg-black/50 rounded-xl p-3 inline-block mb-4 group-hover:bg-yellow-500/20 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition-all duration-300">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

