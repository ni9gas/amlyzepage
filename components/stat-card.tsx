"use client"

import type React from "react"
import { motion } from "framer-motion"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function StatCard({ icon, value, label }: { icon: React.ReactNode; value: number; label: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(245,215,66,0.3)] group"
    >
      <div className="bg-black/50 rounded-xl p-3 inline-block mb-4 group-hover:bg-yellow-500/20 transition-all duration-300">
        {icon}
      </div>
      <div className="text-3xl font-bold mb-1 flex items-end">
        {inView ? <CountUp end={value} duration={2.5} separator="," /> : 0}
        <span className="text-yellow-500 ml-1">+</span>
      </div>
      <p className="text-gray-400">{label}</p>
    </motion.div>
  )
}

