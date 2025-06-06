"use client"

import type { Tree } from "@/lib/mockData"

interface TreeComponentProps {
  tree: Tree
  onClick: () => void
  position: { x: number; y: number; rotation: number; scale: number }
  isVisible: boolean
}

export default function TreeComponent({ tree, onClick, position, isVisible }: TreeComponentProps) {
  // Different tree images based on type
  const getTreeImage = (type: string) => {
    const treeTypes = {
      type1: "/trees/tile_0094.png",
      type2: "/trees/tile_0112.png",
      type3: "/trees/tile_0094.png", // Reusing tile_0094 for type3 since we only have two types
    }
    return treeTypes[type as keyof typeof treeTypes] || treeTypes.type1
  }

  const getTreeColor = (type: string) => {
    const colors = {
      type1: "from-blue-500 to-blue-600",
      type2: "from-orange-500 to-orange-600",
      type3: "from-purple-500 to-purple-600",
    }
    return colors[type as keyof typeof colors] || colors.type1
  }

  return (
    <div
      className={`
        absolute cursor-pointer transform transition-all duration-500 hover:scale-110 group
        ${isVisible ? "opacity-100" : "opacity-20 pointer-events-none"}
      `}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `translate(-50%, -50%) rotate(${position.rotation}deg) scale(${position.scale})`,
        zIndex: 1,
      }}
      onClick={onClick}
    >
      {/* 
        Animation Logic Placeholder:
        - Add GSAP/Framer Motion animations here:
        1. Gentle swaying animation (wind effect)
        2. Hover animations (scale, glow, leaf rustle)
        3. Click animations (bounce, sparkle effect)
        4. Filter animations (fade in/out, repositioning)
        5. Seasonal effects (falling leaves, growth animation)
        6. Trees can now be placed over grass blocks naturally
      */}

      {/* Tree Image Container - Always on top */}
      <div className="relative">
        <img
          src={getTreeImage(tree.type) || "/placeholder.svg"}
          alt={tree.title}
          className="w-6 h-8 md:w-7 md:h-9 object-contain drop-shadow-2xl filter group-hover:brightness-110 transition-all duration-300"
        />

        {/* Tree Type Badge - Styled as a garden marker */}
        <div
          className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br ${getTreeColor(tree.type)} rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg border border-white/80`}
        >
          {tree.type === "type1" ? "A" : tree.type === "type2" ? "M" : "I"}
        </div>

        {/* Magical glow effect on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${getTreeColor(tree.type)} rounded-full opacity-0 group-hover:opacity-20 scale-150 blur-xl transition-all duration-300`}
        ></div>
      </div>

      {/* Tree Root Area - sits on grass blocks */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
        <div className="w-8 h-3 bg-amber-800/60 rounded-full blur-sm"></div>
      </div>

      {/* Tree Shadow - blends with grass */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black/15 rounded-full blur-md"></div>

      {/* Tree Name Plate - Garden Sign Style */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded px-2 py-1 text-center shadow-lg border border-amber-300/80 backdrop-blur-sm">
          {/* Wood grain texture */}
          <div className="absolute inset-0 rounded bg-gradient-to-br from-amber-200/30 to-amber-800/30 mix-blend-overlay"></div>
          <p className="relative text-[10px] font-semibold text-amber-900 truncate leading-tight">{tree.title}</p>
        </div>
      </div>

      {/* Hover Effect Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-700"></div>
      </div>
    </div>
  )
}
