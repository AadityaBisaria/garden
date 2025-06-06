"use client"

import { useMemo } from "react"

export default function GrassBackground() {
  // Generate tiled grass pattern without rotation
  const grassTiles = useMemo(() => {
    const tiles = []
    const tileSize = 16 // Reduced from 32 to 16 for even smaller tiles
    const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1920
    const screenHeight = typeof window !== "undefined" ? window.innerHeight : 1080

    // Add extra tiles to ensure full coverage
    const tilesX = Math.ceil(screenWidth / tileSize) + 16 // Increased from +8 to +16 for more coverage
    const tilesY = Math.ceil(screenHeight / tileSize) + 16 // Increased from +8 to +16 for more coverage

    // Start from negative positions to ensure full coverage
    for (let y = -8; y < tilesY; y++) { // Increased from -4 to -8 for more coverage
      for (let x = -8; x < tilesX; x++) { // Increased from -4 to -8 for more coverage
        // Randomly select one of 3 grass textures
        const grassType = Math.floor(Math.random() * 3) + 1

        tiles.push({
          id: `${x}-${y}`,
          x: x * tileSize,
          y: y * tileSize,
          type: grassType,
        })
      }
    }
    return tiles
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Tiled grass textures - placed next to each other without gaps */}
      {grassTiles.map((tile) => (
        <div
          key={tile.id}
          className="absolute w-4 h-4" // Changed from w-8 h-8 to w-4 h-4 (16px)
          style={{
            left: tile.x,
            top: tile.y,
            backgroundImage: `url('/grass/tile_000${tile.type - 1}.png')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/10 via-transparent to-green-900/20"></div>
    </div>
  )
}
