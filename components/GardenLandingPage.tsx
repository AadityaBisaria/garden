"use client"

import { useState, useEffect, useMemo } from "react"
import TreeComponent from "./TreeComponent"
import TreeModal from "./TreeModal"
import GardenNavigation from "./GardenNavigation"
import GardenSearchBar from "./GardenSearchBar"
import GrassBackground from "./GrassBackground"
import { mockTrees, type Tree } from "@/lib/mockData"

interface GardenLandingPageProps {
  filterType?: "type1" | "type2" | "type3"
}

export default function GardenLandingPage({ filterType }: GardenLandingPageProps) {
  const [selectedTree, setSelectedTree] = useState<Tree | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState<string>("all")
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Apply initial filter based on route
  useEffect(() => {
    if (filterType) {
      setSelectedFilter(filterType)
    }
  }, [filterType])

  // Generate uniformly distributed positions for trees
  const treePositions = useMemo(() => {
    const positions: { [key: string]: { x: number; y: number; rotation: number; scale: number } } = {}

    // Define safe zones to avoid navigation paths (corners)
    const safeZones = [
      { x: 0, y: 0, width: 25, height: 25 }, // Top-left
      { x: 75, y: 0, width: 25, height: 25 }, // Top-right
      { x: 0, y: 75, width: 25, height: 25 }, // Bottom-left
      { x: 75, y: 75, width: 25, height: 25 }, // Bottom-right
    ]

    // Create random positions while maintaining minimum distance
    const minDistance = 20 // Minimum distance between trees (in percentage)
    const maxAttempts = 50 // Maximum attempts to find a valid position

    mockTrees.forEach((tree) => {
      let x = 0
      let y = 0
      let attempts = 0
      let validPosition = false

      while (!validPosition && attempts < maxAttempts) {
        // Generate random position
        x = 5 + Math.random() * 90
        y = 5 + Math.random() * 55

        // Check if position is in safe zone
        const inSafeZone = safeZones.some(
          (zone) => x >= zone.x && x <= zone.x + zone.width && y >= zone.y && y <= zone.y + zone.height
        )

        if (!inSafeZone) {
          // Check distance from other trees
          const tooClose = Object.values(positions).some((pos) => {
            const dx = Math.abs(pos.x - x)
            const dy = Math.abs(pos.y - y)
            return dx < minDistance && dy < minDistance
          })

          if (!tooClose) {
            validPosition = true
          }
        }

        attempts++
      }

      // If no valid position found, use the last attempted position
      positions[tree.id] = {
        x,
        y,
        rotation: (Math.random() - 0.5) * 20, // -10 to +10 degrees
        scale: 0.9 + Math.random() * 0.2, // 0.9 to 1.1 scale
      }
    })

    return positions
  }, [])

  // Filter trees based on search and filter criteria
  const filteredTrees = useMemo(() => {
    let filtered = mockTrees

    // Apply type filter
    if (selectedFilter !== "all") {
      filtered = filtered.filter((tree) => tree.type === selectedFilter)
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (tree) =>
          tree.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tree.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tree.persona.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    return filtered
  }, [searchQuery, selectedFilter])

  const handleTreeClick = (tree: Tree) => {
    setSelectedTree(tree)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedTree(null)
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Tiled Grass Background */}
      <GrassBackground />

      {/* Persistent Garden Navigation */}
      <GardenNavigation />

      {/* Garden-themed Search and Filters */}
      <GardenSearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />

      {/* Garden Area with Uniformly Distributed Trees */}
      <main className="relative z-10 px-6 pb-20">
        <div
          className={`
            transition-all duration-1000 ease-in-out relative h-[70vh] min-h-[600px]
            ${filteredTrees.length < mockTrees.length ? "scale-105" : ""}
          `}
        >
          {/* 
            Animation Logic Placeholder:
            - Use GSAP or Framer Motion here to:
            1. Fade out non-matching trees with stagger
            2. Smoothly reposition remaining trees closer together
            3. Add gentle swaying animation to all trees
            4. Implement seasonal effects (falling leaves, wind)
            5. Add magical sparkles on tree interactions
            6. Create smooth zoom transitions on filtering
            7. Uniform distribution ensures better animation flow
          */}

          {filteredTrees.map((tree) => (
            <TreeComponent
              key={tree.id}
              tree={tree}
              onClick={() => handleTreeClick(tree)}
              position={treePositions[tree.id]}
              isVisible={true}
            />
          ))}
        </div>

        {/* No Results Message */}
        {filteredTrees.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto shadow-2xl border-4 border-amber-200/80">
              {/* Parchment texture */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-100/50 to-amber-300/30 mix-blend-overlay"></div>

              <div className="relative">
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">No trees found in this area</h3>
                <p className="text-amber-700 mb-6">
                  The garden spirits couldn't find any matching solutions. Try exploring different areas or clearing
                  your search.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedFilter("all")
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  🌿 Clear Search & Explore All
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Parchment-style Tree Details Modal */}
      <TreeModal tree={selectedTree} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
