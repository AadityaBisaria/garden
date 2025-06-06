"use client"

import Link from "next/link"
import { ArrowRight, BarChart3, Cog, Brain } from "lucide-react"

export default function NavigationPaths() {
  const paths = [
    {
      href: "/type1",
      title: "Analytics Path",
      description: "Data-driven solutions",
      icon: BarChart3,
      color: "from-blue-500 to-blue-600",
      position: "left-10 bottom-20",
    },
    {
      href: "/type2",
      title: "Automation Path",
      description: "Process optimization",
      icon: Cog,
      color: "from-orange-500 to-orange-600",
      position: "left-1/2 transform -translate-x-1/2 bottom-10",
    },
    {
      href: "/type3",
      title: "Intelligence Path",
      description: "AI-powered insights",
      icon: Brain,
      color: "from-purple-500 to-purple-600",
      position: "right-10 bottom-20",
    },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none z-15">
      {paths.map((path, index) => (
        <Link
          key={path.href}
          href={path.href}
          className={`
            absolute ${path.position} pointer-events-auto
            group cursor-pointer transform transition-all duration-300 hover:scale-105
          `}
        >
          {/* 
            Animation Logic Placeholder:
            - Add GSAP/Framer Motion animations:
            1. Floating/bobbing animation
            2. Glow effect on hover
            3. Path trail animation
            4. Entrance animations
          */}

          {/* Path Portal */}
          <div
            className={`
            relative bg-gradient-to-br ${path.color} 
            rounded-full p-6 shadow-2xl backdrop-blur-sm
            border-4 border-white/30
            group-hover:shadow-3xl group-hover:border-white/50
            transition-all duration-300
          `}
          >
            {/* Icon */}
            <path.icon className="w-8 h-8 text-white mb-2" />

            {/* Glow Effect */}
            <div
              className={`
              absolute inset-0 bg-gradient-to-br ${path.color} 
              rounded-full opacity-0 group-hover:opacity-30 
              scale-150 transition-all duration-300 blur-xl
            `}
            ></div>
          </div>

          {/* Path Label */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 text-center shadow-lg border border-white/50">
              <h3 className="font-bold text-gray-800 text-sm">{path.title}</h3>
              <p className="text-xs text-gray-600 mt-1">{path.description}</p>
              <ArrowRight className="w-4 h-4 text-gray-400 mx-auto mt-2 group-hover:text-gray-600 transition-colors" />
            </div>
          </div>

          {/* Animated Path Trail */}
          <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping"></div>
        </Link>
      ))}
    </div>
  )
}
