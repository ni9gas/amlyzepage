"use client"

import { motion } from "framer-motion"
import { Zap, Bitcoin, BarChart3, CheckCircle } from "lucide-react"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 border-b border-yellow-600/20 relative z-10 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1.5 mb-4">
            <Zap className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium">Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How <span className="text-yellow-500">It Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our platform makes AML compliance simple and effective
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500/50 to-red-500/50 transform -translate-y-1/2 hidden md:block"></div>

          {[
            {
              step: 1,
              title: "Connect Your Wallet",
              description: "Securely connect your crypto wallet or exchange account to our platform",
              icon: <Bitcoin className="h-8 w-8 text-yellow-500" />,
            },
            {
              step: 2,
              title: "Analyze Transactions",
              description: "Our AI-powered system analyzes transactions for suspicious patterns",
              icon: <BarChart3 className="h-8 w-8 text-yellow-500" />,
            },
            {
              step: 3,
              title: "Get Detailed Reports",
              description: "Receive comprehensive reports with risk scores and compliance recommendations",
              icon: <CheckCircle className="h-8 w-8 text-yellow-500" />,
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.2,
                  },
                },
              }}
              className="relative z-10"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(245,215,66,0.3)] h-full flex flex-col items-center text-center">
                <div className="bg-yellow-500 text-black font-bold rounded-full w-10 h-10 flex items-center justify-center mb-6 relative">
                  {step.step}
                  <div className="absolute -inset-1 rounded-full border border-yellow-500/50 animate-ping"></div>
                </div>
                <div className="bg-black/50 rounded-xl p-4 mb-4 flex items-center justify-center">{step.icon}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

