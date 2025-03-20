"use client"

import { Shield, AlertTriangle, Users, Globe } from "lucide-react"
import StatCard from "./stat-card"

export default function StatsSection() {
  return (
    <section className="py-16 border-b border-yellow-600/20 relative z-10 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard icon={<Shield className="h-8 w-8 text-yellow-500" />} value={5000} label="Transactions Secured" />
          <StatCard icon={<AlertTriangle className="h-8 w-8 text-yellow-500" />} value={350} label="Threats Detected" />
          <StatCard icon={<Users className="h-8 w-8 text-yellow-500" />} value={2000} label="Active Users" />
          <StatCard icon={<Globe className="h-8 w-8 text-yellow-500" />} value={40} label="Countries Covered" />
        </div>
      </div>
    </section>
  )
}

