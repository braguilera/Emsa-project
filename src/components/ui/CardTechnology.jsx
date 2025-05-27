
import { useState } from "react"
import { Warehouse, Truck, BarChart3, Smartphone, Monitor, Brain, Bell, Network, Zap, Layers } from "lucide-react"

const technologies = [
  {
    id: 1,
    title: "GESTIÓN INTEGRAL DE ALMACENES (WMS)",
    subtitle: "",
    icon: Warehouse,
    image: "/placeholder.svg?height=200&width=300",
    category: "Gestión",
  },
]

export default function Technology() {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section id="technology" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-teal-500 to-orange-400 rounded-full"></div>
            <h2 className="text-4xl font-bold text-gray-900">Tecnología Aplicada</h2>
            <div className="h-1 w-12 bg-gradient-to-r from-orange-400 to-teal-500 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nuestras soluciones logísticas se potencian con tecnología de vanguardia, optimizando cada etapa de la
            cadena de suministro.
          </p>
        </div> */}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {technologies.map((tech) => {
            const IconComponent = tech.icon
            const isHovered = hoveredCard === tech.id

            return (
              <div
                key={tech.id}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-xl border border-gray-200 overflow-hidden bg-white rounded-lg ${
                  isHovered ? "scale-105 shadow-2xl" : ""
                }`}
                onMouseEnter={() => setHoveredCard(tech.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="p-0 relative">
                  {/* Teal Color Bar */}
                  <div
                    className={`h-2 w-full bg-gradient-to-r from-teal-500 to-teal-600 transition-all duration-300 ${isHovered ? "h-3" : ""}`}
                  ></div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Badge and Icon */}
                    <div className="flex justify-between items-start mb-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors duration-300 ${
                          isHovered ? "bg-orange-100 text-orange-700" : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {tech.category}
                      </span>
                      <div
                        className={`p-2 rounded-lg transition-all duration-300 ${isHovered ? "bg-orange-100" : "bg-gray-100"}`}
                      >
                        <IconComponent
                          className={`w-5 h-5 transition-all duration-300 ${isHovered ? "text-orange-500 scale-110" : "text-gray-600"}`}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`font-bold text-sm leading-tight mb-2 transition-colors duration-300 ${isHovered ? "text-teal-600" : "text-gray-900"}`}
                    >
                      {tech.title}
                      {tech.subtitle && (
                        <span className="block text-xs font-medium text-gray-500 mt-1">{tech.subtitle}</span>
                      )}
                    </h3>

                    {/* Image with Hover Zoom */}
                    <div className="relative mb-4 overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src={tech.image || "/placeholder.svg"}
                        alt={tech.title}
                        className={`w-full h-32 object-cover transition-transform duration-500 ${isHovered ? "scale-125" : "scale-100"}`}
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
                      ></div>
                    </div>

                    {/* Hover Effect Indicator */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-500 transition-transform duration-300 origin-left ${isHovered ? "scale-x-100" : "scale-x-0"}`}
                    ></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
