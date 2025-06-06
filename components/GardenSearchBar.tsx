"use client"

import { Search, Filter, Leaf } from "lucide-react"

interface GardenSearchBarProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedFilter: string
  onFilterChange: (filter: string) => void
}

export default function GardenSearchBar({
  searchQuery,
  onSearchChange,
  selectedFilter,
  onFilterChange,
}: GardenSearchBarProps) {
  return (
    <header className="relative z-20">
      <div className="container mx-auto px-4 pt-4 flex justify-center">
        <div className="w-full max-w-3xl">
          <div className="bg-gradient-to-br from-green-50/80 to-emerald-100/80 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-green-200/50">
            {/* Title */}
            <h1 className="text-center text-green-900 text-2xl md:text-3xl font-bold mb-2">
              Use Case Garden
            </h1>

            {/* Description */}
            <p className="text-center text-green-800/90 text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto">
              The Use Case Garden is a community-driven platform where AI enthusiasts and experts can discover and collaborate on developing impactful AI use cases. It serves as a repository for actionable solutions to real-world problems, fostering a culture of innovation and collaboration.
            </p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto px-4 flex justify-center">
        <div className="w-full max-w-2xl mt-4">
          <div className="relative group">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search the garden..."
              className="w-full px-6 py-4 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-green-200/50 
                shadow-lg focus:shadow-xl focus:border-green-300/50 focus:ring-2 focus:ring-green-500/20 
                text-green-800 placeholder-green-600/70 transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/0 via-green-500/5 to-green-500/0 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-600/70" />
          </div>
        </div>
      </div>
    </header>
  )
}
