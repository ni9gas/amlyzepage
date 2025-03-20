"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function CTASection() {
  return (
    <section className="py-20 relative z-10 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-gradient-to-r from-red-900/30 to-yellow-900/30 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-yellow-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-red-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Secure your crypto transactions <span className="text-yellow-500">today</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses and individuals who trust AMLYZE for their crypto compliance needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium text-lg px-8 py-6 rounded-md relative overflow-hidden group">
                <span className="relative z-10">Connect Wallet</span>
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Button>
              <Button
                variant="outline"
                className="border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10 font-medium text-lg px-8 py-6 rounded-md group"
              >
                <span className="flex items-center">
                  Contact Support{" "}
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

