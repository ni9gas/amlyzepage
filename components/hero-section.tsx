"use client"

import { motion } from "framer-motion"
import { Zap, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroCard from "./hero-card"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HeroSection() {
  return (
    <section className="relative z-10 overflow-hidden py-20 md:py-32 border-b border-yellow-600/20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-yellow-900/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center gap-2 bg-red-900/30 border border-red-500/30 rounded-full px-4 py-1.5"
            >
              <Zap className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-medium">Secure AML Compliance</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-white">Trust, but</span>{" "}
              <span className="text-yellow-500 relative">
                verify
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500/50"></span>
              </span>{" "}
              <Zap className="inline-block h-10 w-10 text-yellow-500" />
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl text-gray-400 max-w-xl">
              The first preventive AML solution for crypto transactions. Protect your assets and stay compliant with
              regulatory requirements.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium text-lg px-8 py-6 rounded-md relative overflow-hidden group">
                <span className="relative z-10 flex items-center">
                  Connect Wallet{" "}
                  <Wallet className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Button>
            </motion.div>

            <motion.div variants={fadeIn} className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex -space-x-2">
                {[
                  "https://index-flax-eight.vercel.app/eb2349c3-b2f8-4a93-a286-8f86a62ea9d8.png",
                  "https://index-flax-eight.vercel.app/coinbase-wallet-logo.png",
                  "https://index-flax-eight.vercel.app/unnamed.png",
                  "https://crypto-central.io/library/uploads/Trezor-Logo.png",
                ].map((src, index) => (
                  <div key={index} className="w-8 h-8 rounded-full overflow-hidden border-2 border-black relative">
                    <img
                      src={src || "/placeholder.svg"}
                      alt={`Partner logo ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p>
                Trusted by <span className="text-yellow-500 font-medium">2,000+</span> crypto businesses
              </p>
            </motion.div>
          </div>

          <motion.div variants={fadeIn} className="flex justify-center md:justify-end">
            <HeroCard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

