"use client"

import { useState } from "react"
import { motion } from "framer-motion"
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

const CardServices = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false)

  // Mapeo de iconos por nombre
  const iconMap = {
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
  }

  const IconComponent = iconMap[service.icon] || Warehouse

  return (
    <motion.div
      className={`group text-center cursor-pointer transition-all duration-300 hover:shadow-xl border border-gray-200 overflow-hidden relative bg-white rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-xs h-40 ${
        isHovered ? "scale-105 z-10 shadow-2xl" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5}}
      whileHover={{ scale: 1.05 }}
    >
      <div className="p-0 relative h-full">
        {/* Default State */}
        <motion.div
          className="transition-all duration-500"
          animate={{
            opacity: isHovered ? 0 : 1,
            scale: isHovered ? 0.95 : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          {/* Orange Border */}
          <div className="h-1 w-full bg-gradient-to-r from-orange-400 to-orange-500"></div>

          {/* Content */}
          <div className="p-4 sm:p-6  flex flex-col items-center justify-center text-center">
            <motion.div
              className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4 transition-colors duration-300 ${
                isHovered ? "bg-orange-50" : "bg-gray-100"
              }`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <IconComponent
                className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-colors duration-300 ${isHovered ? "text-orange-500" : "text-gray-600"}`}
              />
            </motion.div>

            <h3
              className={`font-bold text-xs leading-tight transition-colors duration-300 ${
                isHovered ? "text-teal-600" : "text-gray-900"
              }`}
            >
              {service.title}
            </h3>
          </div>
        </motion.div>

        {/* Hover State */}
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 1.05,
          }}
          transition={{ duration: 0.5 }}
        >
          {/* Teal Border for Hover State */}
          <div className="h-1 w-full bg-gradient-to-r from-teal-500 to-teal-600"></div>

          {/* Detailed Content */}
          <div className="p-4  h-full bg-gradient-to-br from-teal-50 to-white flex flex-col justify-between">
            <div>
              <motion.div
                className="flex items-center gap-2 sm:gap-3 mb-1"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: isHovered ? 0 : -20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center">
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <motion.div
                  className="w-2 h-2 bg-orange-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>

              <motion.h4
                className="font-bold text-teal-900 text-xs leading-tight mb-2"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                {service.title}
              </motion.h4>

              <motion.p
                className="text-xs text-gray-700 leading-relaxed"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                {service.description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default CardServices
