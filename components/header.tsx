"use client"

import Link from "next/link"
import { ShieldCheck, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b border-yellow-600/20 bg-black/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 relative z-10">
          <div className="rounded-md p-1.5 bg-transparent flex items-center justify-center">
            <ShieldCheck className="h-7 w-7 text-yellow-400" strokeWidth={2} />
          </div>
          <span className="text-2xl font-bold text-yellow-500">AMLYZE</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          <Link href="#product" className="text-gray-300 hover:text-yellow-500 transition-colors relative group">
            Product
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#features" className="text-gray-300 hover:text-yellow-500 transition-colors relative group">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#how-it-works" className="text-gray-300 hover:text-yellow-500 transition-colors relative group">
            How It Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#pricing" className="text-gray-300 hover:text-yellow-500 transition-colors relative group">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-md relative overflow-hidden group">
          <span className="relative z-10 flex items-center">
            Connect Wallet{" "}
            <Wallet className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Button>
      </div>
    </header>
  )
}

