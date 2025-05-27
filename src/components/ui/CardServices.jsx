import { useState } from "react"
import {
  Warehouse,
  Truck,
  ShoppingCart,
  Building2,
  Package,
  ClipboardList,
  Scan,
  FileText,
  Clock,
  MapPin,
  ShoppingBag,
  Settings,
} from "lucide-react"

const services = [
  {
    id: 1,
    title: "Almacenamiento",
    icon: Warehouse,
    details: {
      title: "Almacenamiento",
      description:
        "Depósitos en CABA y Zona Norte PBA.",
    },
  },
]

export default function ServicesCards() {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section id="services" className="py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Header 
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center transform rotate-12 shadow-lg">
              <span className="text-white font-bold text-2xl transform -rotate-12">S</span>
            </div>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-teal-600 font-medium max-w-2xl mx-auto">
            We are passionate about logistics... We're here to serve you!
          </p>
        </div>*/}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon
            const isHovered = hoveredCard === service.id

            return (
              <div
                key={service.id}
                className={`group cursor-pointer transition-all duration-500 hover:shadow-xl border border-gray-200 overflow-hidden relative bg-white rounded-lg ${
                  isHovered ? "scale-105 z-10 shadow-2xl" : ""
                }`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="p-0 relative h-full">
                  {/* Default State */}
                  <div
                    className={`transition-all duration-500 ${isHovered ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
                  >
                    {/* Orange Border */}
                    <div className="h-1 w-full bg-gradient-to-r from-orange-400 to-orange-500"></div>

                    {/* Content */}
                    <div className="p-6 h-48 flex flex-col items-center justify-center text-center">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 ${isHovered ? "bg-orange-50" : "bg-gray-100"}`}
                      >
                        <IconComponent
                          className={`w-8 h-8 transition-colors duration-300 ${isHovered ? "text-orange-500" : "text-gray-600"}`}
                        />
                      </div>

                      <h3
                        className={`font-bold text-sm leading-tight transition-colors duration-300 ${isHovered ? "text-teal-600" : "text-gray-900"}`}
                      >
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Hover State */}
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      isHovered ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                  >
                    {/* Teal Border for Hover State */}
                    <div className="h-1 w-full bg-gradient-to-r from-teal-500 to-teal-600"></div>

                    {/* Detailed Content */}
                    <div className="p-6 h-full bg-gradient-to-br from-teal-50 to-white flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                        </div>

                        <h4 className="font-bold text-teal-900 text-sm leading-tight mb-3">{service.details.title}</h4>

                        <p className="text-xs text-gray-700 leading-relaxed">{service.details.description}</p>
                      </div>

                    </div>
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
