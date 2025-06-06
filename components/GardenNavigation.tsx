"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Cog, Brain, Home } from "lucide-react"

export default function GardenNavigation() {
  const pathname = usePathname()

  const paths = [
    {
      href: "/",
      title: "Garden Home",
      description: "All Solutions",
      position: "top-[5%] left-[3%]",
      image: "/pathways/northwest.png"
    },
    {
      href: "/type1",
      title: "Analytics Grove",
      description: "Data Solutions",
      position: "top-[5%] right-[3%]",
      image: "/pathways/northeast.png"
    },
    {
      href: "/type2",
      title: "Automation Meadow",
      description: "Process Solutions",
      position: "bottom-[5%] left-[3%]",
      image: "/pathways/south west.png"
    },
    {
      href: "/type3",
      title: "Intelligence Garden",
      description: "AI Solutions",
      position: "bottom-[5%] right-[3%]",
      image: "/pathways/south east.png"
    },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {paths.map((path) => {
        const isActive = pathname === path.href

        return (
          <Link
            key={path.href}
            href={path.href}
            className={`
              absolute ${path.position} pointer-events-auto
              group transform transition-all duration-300 hover:scale-105
              ${isActive ? "scale-110" : ""}
            `}
          >
            {/* Pathway Image */}
            <div className="relative">
              {/* Sign Text - Positioned above for bottom paths, below for top paths */}
              <div className={`absolute ${path.position.includes('bottom') ? 'bottom-full' : 'top-full'} left-1/2 transform -translate-x-1/2 w-20 ${path.position.includes('bottom') ? 'mb-1' : 'mt-1'}`}>
                <div className="bg-amber-50/95 backdrop-blur-sm rounded px-1.5 py-1 text-center shadow-lg border border-amber-200/80">
                  <h3 className="font-bold text-amber-900 text-[10px] leading-tight">{path.title}</h3>
                  <p className="text-amber-700 text-[8px] mt-0.5">{path.description}</p>
                </div>
              </div>

              {/* Road Images */}
              {path.position.includes('top') && (
                <>
                  <img 
                    src="/pathways/toproad.png"
                    alt="top road"
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 object-contain"
                    style={{ zIndex: 40 }}
                  />
                  <img 
                    src="/pathways/toproad.png"
                    alt="top road"
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 object-contain"
                    style={{ zIndex: 40 }}
                  />
                  <img 
                    src="/pathways/toproad.png"
                    alt="top road"
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-4 h-4 object-contain"
                    style={{ zIndex: 40 }}
                  />
                </>
              )}
              {path.position.includes('right') && (
                <>
                  <img 
                    src="/pathways/sideroad.png"
                    alt="side road"
                    className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-4 h-4 object-contain"
                    style={{ zIndex: 40 }}
                  />
                  <img 
                    src="/pathways/sideroad.png"
                    alt="side road"
                    className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-4 h-4 object-contain"
                    style={{ zIndex: 40 }}
                  />
                  <img 
                    src="/pathways/sideroad.png"
                    alt="side road"
                    className="absolute top-1/2 -right-12 transform -translate-y-1/2 w-4 h-4 object-contain"
                    style={{ zIndex: 40 }}
                  />
                </>
              )}
              {path.position.includes('left') && (
                <>
                  <img 
                    src="/pathways/sideroad.png"
                    alt="side road"
                    className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-4 h-4 object-contain rotate-180"
                    style={{ zIndex: 40 }}
                  />
                  <img 
                    src="/pathways/sideroad.png"
                    alt="side road"
                    className="absolute top-1/2 -left-8 transform -translate-y-1/2 w-4 h-4 object-contain rotate-180"
                    style={{ zIndex: 40 }}
                  />
                  <img 
                    src="/pathways/sideroad.png"
                    alt="side road"
                    className="absolute top-1/2 -left-12 transform -translate-y-1/2 w-4 h-4 object-contain rotate-180"
                    style={{ zIndex: 40 }}
                  />
                </>
              )}
              {path.position.includes('bottom') && (
                <>
                  <img 
                    src="/pathways/toproad.png"
                    alt="top road"
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-4 object-contain rotate-180"
                    style={{ zIndex: 40 }}
                  />
                  <img 
                    src="/pathways/toproad.png"
                    alt="top road"
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-4 h-4 object-contain rotate-180"
                    style={{ zIndex: 40 }}
                  />
                  <img 
                    src="/pathways/toproad.png"
                    alt="top road"
                    className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-4 h-4 object-contain rotate-180"
                    style={{ zIndex: 40 }}
                  />
                </>
              )}

              <img 
                src={path.image} 
                alt={path.title}
                className="w-4 h-4 object-contain"
                style={{ zIndex: 50 }}
                onError={(e) => {
                  console.error(`Failed to load image: ${path.image}`);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </Link>
        )
      })}
    </div>
  )
}
