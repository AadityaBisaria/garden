"use client"

import { X, Users, Target, Code, Brain, User, BarChart3, Globe, Lightbulb, Scroll } from "lucide-react"
import type { Tree } from "@/lib/mockData"

interface TreeModalProps {
  tree: Tree | null
  isOpen: boolean
  onClose: () => void
}

export default function TreeModal({ tree, isOpen, onClose }: TreeModalProps) {
  if (!isOpen || !tree) return null

  const getTreeColor = (type: string) => {
    const colors = {
      type1: "from-blue-600 to-blue-700",
      type2: "from-orange-600 to-orange-700",
      type3: "from-purple-600 to-purple-700",
    }
    return colors[type as keyof typeof colors] || colors.type1
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      {/* Parchment-style Modal */}
      <div className="relative max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Parchment Background */}
        <div className="relative bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl shadow-2xl border-8 border-amber-200/80 overflow-hidden">
          {/* Parchment texture overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-amber-300/30 mix-blend-overlay"></div>

          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-6 h-6 border-l-4 border-t-4 border-amber-600/60 rounded-tl-lg"></div>
          <div className="absolute top-4 right-4 w-6 h-6 border-r-4 border-t-4 border-amber-600/60 rounded-tr-lg"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-l-4 border-b-4 border-amber-600/60 rounded-bl-lg"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-r-4 border-b-4 border-amber-600/60 rounded-br-lg"></div>

          {/* Header Scroll */}
          <div
            className={`relative bg-gradient-to-r ${getTreeColor(tree.type)} text-white p-6 mx-6 mt-6 rounded-2xl shadow-lg`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Scroll className="w-8 h-8" />
                <div>
                  <h2 className="text-2xl font-bold">{tree.title}</h2>
                  <p className="text-white/90 capitalize">
                    {tree.type
                      .replace("type1", "Analytics Grove")
                      .replace("type2", "Automation Meadow")
                      .replace("type3", "Intelligence Garden")}
                  </p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="relative p-6 space-y-6 max-h-[60vh] overflow-y-auto">
            {/* Description */}
            <div className="flex items-start gap-4 p-4 bg-white/60 rounded-xl border-2 border-amber-200/60">
              <Target className="w-6 h-6 text-green-700 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-amber-900 mb-2 text-lg">Description</h3>
                <p className="text-amber-800 leading-relaxed">{tree.description}</p>
              </div>
            </div>

            {/* Two-column layout for details */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Persona */}
              <div className="p-4 bg-blue-50/80 rounded-xl border-2 border-blue-200/60">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-blue-700 mt-1" />
                  <div>
                    <h3 className="font-bold text-blue-900 mb-2">Target Persona</h3>
                    <p className="text-blue-800 text-sm">{tree.persona}</p>
                  </div>
                </div>
              </div>

              {/* Impact */}
              <div className="p-4 bg-purple-50/80 rounded-xl border-2 border-purple-200/60">
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-purple-700 mt-1" />
                  <div>
                    <h3 className="font-bold text-purple-900 mb-2">Impact</h3>
                    <p className="text-purple-800 text-sm">{tree.impact}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="p-4 bg-orange-50/80 rounded-xl border-2 border-orange-200/60">
              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-orange-700 mt-1" />
                <div>
                  <h3 className="font-bold text-orange-900 mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {tree.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-orange-200/80 text-orange-800 rounded-full text-sm font-medium border border-orange-300/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* AI Functionality */}
            <div className="p-4 bg-pink-50/80 rounded-xl border-2 border-pink-200/60">
              <div className="flex items-start gap-3">
                <Brain className="w-5 h-5 text-pink-700 mt-1" />
                <div>
                  <h3 className="font-bold text-pink-900 mb-2">AI Functionality</h3>
                  <p className="text-pink-800 text-sm leading-relaxed">{tree.aiFunctionality}</p>
                </div>
              </div>
            </div>

            {/* Bottom row details */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 bg-indigo-50/80 rounded-lg border border-indigo-200/60">
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-4 h-4 text-indigo-700" />
                  <h4 className="font-semibold text-indigo-900 text-sm">Implemented By</h4>
                </div>
                <p className="text-indigo-800 text-xs">{tree.implementedBy}</p>
              </div>

              <div className="p-3 bg-red-50/80 rounded-lg border border-red-200/60">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="w-4 h-4 text-red-700" />
                  <h4 className="font-semibold text-red-900 text-sm">Scale</h4>
                </div>
                <p className="text-red-800 text-xs">{tree.scale}</p>
              </div>

              <div className="p-3 bg-teal-50/80 rounded-lg border border-teal-200/60">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-4 h-4 text-teal-700" />
                  <h4 className="font-semibold text-teal-900 text-sm">Geography</h4>
                </div>
                <p className="text-teal-800 text-xs">{tree.geography}</p>
              </div>
            </div>

            {/* Insights */}
            <div className="p-4 bg-yellow-50/80 rounded-xl border-2 border-yellow-200/60">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-yellow-700 mt-1" />
                <div>
                  <h3 className="font-bold text-yellow-900 mb-2">Key Insights</h3>
                  <p className="text-yellow-800 text-sm leading-relaxed">{tree.insights}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="relative p-6 pt-0">
            <button
              onClick={onClose}
              className={`w-full py-3 bg-gradient-to-r ${getTreeColor(tree.type)} text-white rounded-xl hover:shadow-lg transition-all duration-300 font-semibold`}
            >
              Close Garden Journal
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
