"use client"

import { AlertTriangle, Bitcoin, Hexagon, Lock, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroCard() {
  return (
    <div className="relative w-full max-w-md">
      <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-yellow-500/20 rounded-3xl blur-xl"></div>
      <div className="relative bg-gradient-to-r from-gray-900 to-black border border-yellow-500/20 rounded-3xl p-6 shadow-2xl hover:border-yellow-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,215,66,0.2)]">
        <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          LIVE
        </div>
        <div className="bg-black rounded-2xl p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-gray-400">Transaction Risk Score</p>
              <h3 className="text-2xl font-bold text-white">
                87<span className="text-red-500">/100</span>
              </h3>
            </div>
            <div className="bg-red-500/20 border border-red-500/30 rounded-full p-2 animate-pulse">
              <AlertTriangle className="h-6 w-6 text-red-500" />
            </div>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2.5">
            <div
              className="bg-gradient-to-r from-yellow-500 to-red-500 h-2.5 rounded-full animate-[pulse_2s_ease-in-out_infinite]"
              style={{ width: "87%" }}
            ></div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-gray-900 rounded-xl border border-gray-800 hover:border-red-500/30 transition-all duration-300 cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="bg-black p-2 rounded-full group-hover:bg-red-500/10 transition-all duration-300">
                <Bitcoin className="h-5 w-5 text-yellow-500" />
              </div>
              <div>
                <p className="font-medium">Bitcoin</p>
                <p className="text-xs text-gray-400">0x7ef9...a3b2</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-500 font-medium">High Risk</span>
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-900 rounded-xl border border-gray-800 hover:border-yellow-500/30 transition-all duration-300 cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="bg-black p-2 rounded-full group-hover:bg-yellow-500/10 transition-all duration-300">
                <Hexagon className="h-5 w-5 text-yellow-500" />
              </div>
              <div>
                <p className="font-medium">Ethereum</p>
                <p className="text-xs text-gray-400">0x3af1...c4d9</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 font-medium">Medium Risk</span>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-900 rounded-xl border border-gray-800 hover:border-green-500/30 transition-all duration-300 cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="bg-black p-2 rounded-full group-hover:bg-green-500/10 transition-all duration-300">
                <Lock className="h-5 w-5 text-yellow-500" />
              </div>
              <div>
                <p className="font-medium">USDC</p>
                <p className="text-xs text-gray-400">0x8bc2...f7e5</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 font-medium">Low Risk</span>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>

        <Button className="w-full mt-6 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-medium py-3 rounded-xl transition-all duration-300 shadow-[0_4px_14px_rgba(245,215,66,0.4)] hover:shadow-[0_6px_20px_rgba(245,215,66,0.6)]">
          Connect Wallet <Wallet className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  )
}

