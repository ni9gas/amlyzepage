"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Zap, AlertTriangle, CheckCircle, Shield, Lock, ExternalLink } from "lucide-react"
import FeatureCard from "./feature-card"

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

export default function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="features" className="py-20 border-b border-yellow-600/20 relative z-10 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1.5 mb-4">
            <Zap className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium">Powerful Features</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Advanced AML <span className="text-yellow-500">Protection</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our platform provides comprehensive anti-money laundering checks for all your crypto transactions
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <AlertTriangle className="h-10 w-10 text-yellow-500" />,
              title: "Phishing Warning",
              description: "Real-time alerts for suspicious wallet addresses and potential scam attempts",
            },
            {
              icon: <CheckCircle className="h-10 w-10 text-yellow-500" />,
              title: "Next-Gen Checks",
              description: "Advanced algorithms to detect unusual patterns and high-risk transactions",
            },
            {
              icon: <Shield className="h-10 w-10 text-yellow-500" />,
              title: "Regulatory Compliance",
              description: "Stay compliant with global AML regulations and avoid legal complications",
            },
            {
              icon: <Zap className="h-10 w-10 text-yellow-500" />,
              title: "Real-time Monitoring",
              description: "Continuous monitoring of all transactions with instant risk assessment",
            },
            {
              icon: <Lock className="h-10 w-10 text-yellow-500" />,
              title: "Secure Verification",
              description: "Multi-layer verification process to ensure maximum security",
            },
            {
              icon: <ExternalLink className="h-10 w-10 text-yellow-500" />,
              title: "Web3 Integration",
              description: "Seamless integration with all major wallets and blockchain platforms",
            },
          ].map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

