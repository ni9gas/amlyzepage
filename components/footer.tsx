"use client"

import Link from "next/link"
import { ShieldCheck } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-600/20 py-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="rounded-md p-1.5 bg-transparent flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-yellow-400" strokeWidth={2} />
              </div>
              <span className="text-2xl font-bold text-yellow-500">AMLYZE</span>
            </Link>
            <p className="text-gray-400 mb-4">The leading AML compliance solution for cryptocurrency transactions</p>
            <div className="flex gap-4">
              {["Twitter", "LinkedIn", "GitHub", "Discord"].map((social, index) => (
                <Link key={index} href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  {social}
                </Link>
              ))}
            </div>
          </div>

          {[
            {
              title: "Product",
              links: ["Features", "Security", "Pricing", "API"],
            },
            {
              title: "Resources",
              links: ["Documentation", "Blog", "Guides", "Support"],
            },
            {
              title: "Company",
              links: ["About Us", "Careers", "Contact", "Privacy Policy"],
            },
          ].map((column, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-yellow-600/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} AMLYZE. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

