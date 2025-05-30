import { useState } from "react"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"
import gestion_almacen from "../../assets/technology/gestion_almacen.png"
import gestion_transporte from "../../assets/technology/gestion_transporte.png"
import planificacion_flota from "../../assets/technology/planificacion_flota.png"
import trazabilidad_movil from "../../assets/technology/trazabilidad_movil.png"
import paneles_control from "../../assets/technology/paneles_control.png"
import analisis_inteligentes from "../../assets/technology/analisis_inteligentes.png"
import notificaciones_tiempo_real from "../../assets/technology/notificaciones_tiempo_real.png"
import software_integrado from "../../assets/technology/software_integrado.png"
import trazabilidad_rfid from "../../assets/technology/trazabilidad_rfid.png"
import quadrant from "../../assets/technology/quadrant.png"

const CardTechnology = ({ tech }) => {
  const [isHovered, setIsHovered] = useState(false)

  const imageMapping = {
  gestion_almacen: gestion_almacen,
  gestion_transporte: gestion_transporte,
  planificacion_flota: planificacion_flota,
  trazabilidad_movil: trazabilidad_movil,
  paneles_control: paneles_control,
  analisis_inteligentes: analisis_inteligentes,
  notificaciones_tiempo_real: notificaciones_tiempo_real,
  software_integrado: software_integrado,
  trazabilidad_rfid: trazabilidad_rfid,
  quadrant: quadrant,
};

  return (
    <motion.div
      className={`group text-center cursor-pointer transition-all duration-300 hover:shadow-xl border border-gray-200 overflow-hidden relative bg-white rounded-lg w-full  ${
        isHovered ? "scale-105 z-10 shadow-2xl" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay:  0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="p-0 relative">
        <motion.div
          layout
          className={`h-2 w-full bg-gradient-to-r from-teal-500 to-teal-600 ${isHovered ? "h-3" : ""}`}
          transition={{ duration: 0.3 }}
        />

        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <motion.span
              layout
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                isHovered ? "bg-orange-100 text-orange-700" : "bg-gray-100 text-gray-700"
              }`}
              transition={{ duration: 0.3 }}
            >
              {tech.category}
            </motion.span>

            <motion.div
              layout
              className={`p-2 rounded-full ${isHovered ? "bg-orange-100" : "bg-gray-100"}`}
              transition={{ duration: 0.3 }}
            >
              <Icon
                icon={tech.icon}
                className={`w-5 h-5 ${isHovered ? "text-orange-500 scale-110" : "text-gray-600"}`}
              />

            </motion.div>
          </div>

          <motion.a
            layout
            className={`font-bold text-sm leading-tight  mb-2 hover:text-blue-700 text-blue-400 underline underline-offset-2`}
            transition={{ duration: 0.3 }}
            href={tech.link}
            target="_blank"
          >
            {tech.linktitle}
          </motion.a>

          <motion.h3
            layout
            className={`font-bold text-sm break-words leading-tight mb-2 ${isHovered ? "text-teal-600" : "text-gray-900"}`}
            transition={{ duration: 0.3 }}
          >
            {tech.title}
          </motion.h3>

          <div className="relative mb-4 overflow-hidden rounded-lg bg-gray-100">
            <motion.img
              layout
              src={imageMapping[tech.img]}
              alt={tech.title}
              className={`w-full h-32 object-cover ${isHovered ? "scale-125" : "scale-100"}`}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              layout
              className={`absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
              transition={{ duration: 0.3 }}
            />
          </div>

          <motion.div
            layout
            className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-500 origin-left ${
              isHovered ? "scale-x-100" : "scale-x-0"
            }`}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default CardTechnology
