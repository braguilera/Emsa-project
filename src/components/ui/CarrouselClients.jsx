import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

//Images carrousel
import sibila from '../../assets/clients/sibila.png'
import sibila_selected from '../../assets/clients/sibila_selected.png'
import argentiLemon from '../../assets/clients/argentiLemon.png'
import argentiLemon_selected from '../../assets/clients/argentiLemon_selected.png'
import bayer from '../../assets/clients/bayer.png'
import bayer_selected from '../../assets/clients/bayer_selected.png'
import campari from '../../assets/clients/campari.png'
import campari_selected from '../../assets/clients/campari_selected.png'
import ccu from '../../assets/clients/ccu.png'
import ccu_selected from '../../assets/clients/ccu_selected.png'
import chep from '../../assets/clients/chep.png'
import chep_selected from '../../assets/clients/chep_selected.png'
import cocacola from '../../assets/clients/cocacola.png'
import cocacola_selected from '../../assets/clients/cocacola_selected.png'
import danone from '../../assets/clients/danone.png'
import danone_selected from '../../assets/clients/danone_selected.png'
import g from '../../assets/clients/g.png'
import g_selected from '../../assets/clients/g_selected.png'
import molino from '../../assets/clients/molino.png'
import molino_selected from '../../assets/clients/molino_selected.png'
import nestle from '../../assets/clients/nestle.png'
import nestle_selected from '../../assets/clients/nestle_selected.png'
import penaflor from '../../assets/clients/penaflor.png'
import penaflor_selected from '../../assets/clients/penaflor_selected.png'
import sagemuller from '../../assets/clients/sagemuller.png'
import sagemuller_selected from '../../assets/clients/sagemuller_selected.png'
import sika from '../../assets/clients/sika.png'
import sika_selected from '../../assets/clients/sika_selected.png'
import timbo from '../../assets/clients/timbo.png'
import timbo_selected from '../../assets/clients/timbo_selected.png'

import { useTranslation } from "react-i18next"

const CarrouselClients = () => {
  const clientsData = [
    { name: "La sibila", image: sibila, selectedImage: sibila_selected },
    { name: "Argenti Lemon", image: argentiLemon, selectedImage: argentiLemon_selected },
    { name: "Bayer", image: bayer, selectedImage: bayer_selected },
    { name: "Campari", image: campari, selectedImage: campari_selected },
    { name: "CCU", image: ccu, selectedImage: ccu_selected },
    { name: "CHEP", image: chep, selectedImage: chep_selected },
    { name: "Coca-Cola", image: cocacola, selectedImage: cocacola_selected },
    { name: "Danone", image: danone, selectedImage: danone_selected },
    { name: "G", image: g, selectedImage: g_selected },
    { name: "Molino Cañuelas", image: molino, selectedImage: molino_selected },
    { name: "Nestlé", image: nestle, selectedImage: nestle_selected },
    { name: "Peñaflor", image: penaflor, selectedImage: penaflor_selected },
    { name: "Sage Müller", image: sagemuller, selectedImage: sagemuller_selected },
    { name: "Sika", image: sika, selectedImage: sika_selected },
    { name: "Timbo", image: timbo, selectedImage: timbo_selected }
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [sliding, setSliding] = useState(false)
  const { t } = useTranslation("clients")

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const carouselVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const getVisibleIndices = () => {
    const prevIndex = (activeIndex - 1 + clientsData.length) % clientsData.length
    const nextIndex = (activeIndex + 1) % clientsData.length
    return [prevIndex, activeIndex, nextIndex]
  }

  const visibleIndices = getVisibleIndices()

  const nextClient = () => {
    if (sliding) return
    setSliding(true)
    setActiveIndex((prevIndex) => (prevIndex + 1) % clientsData.length)
  }

  const prevClient = () => {
    if (sliding) return
    setSliding(true)
    setActiveIndex((prevIndex) => (prevIndex - 1 + clientsData.length) % clientsData.length)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setSliding(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [activeIndex])

  return (
    <motion.section 
      className="w-full py-10 flex flex-col relative items-center sm:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div 
        className="relative container h-32 mt-10 sm:mt-20 sm:h-40 md:h-48 lg:h-56"
        variants={carouselVariants}
      >
        <motion.button
          onClick={prevClient}
          className="absolute left-2 mobile:-left-4 sm:-left-8 md:left-0 lg:left-12 top-1/2 -translate-y-1/2 z-20  text-white bg-secondary hover:scale-105 cursor-pointer rounded-md md:rounded-2xl p-2 md:p-3 transition-all duration-300 group"
          disabled={sliding}
          aria-label="Previous client"
          variants={buttonVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="h-4 w-4 sm:h-8 sm:w-8 group-hover:scale-105"/>
        </motion.button>

        <div className="w-full h-full flex items-center justify-between px-16 sm:px-24 md:px-32 lg:px-40">
          {visibleIndices.map((index, position) => {
            const client = clientsData[index]
            const isCenter = position === 1

            let xPosition = "0%"
            if (position === 0) xPosition = "-100%"
            if (position === 2) xPosition = "100%"

            return (
              <motion.div
                key={`${client.name}-${index}`}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-75 ${
                  isCenter ? "opacity-100 xl:scale-105 sm:scale-90 scale-75 xl:px-10 z-10" : "opacity-70 scale-50 px-4 mobile:px-12 xl:scale-90 lg:scale-70 sm:scale-60 sm:px-10 xl:px-20 lg:px-10 z-0"
                }`}
                initial={{ 
                  x: position === 0 ? "-100%" : position === 2 ? "100%" : "0%",
                  opacity: 0,
                  scale: 0.8
                }}
                animate={{
                  x: xPosition,
                  opacity: isCenter ? 1 : 0.7,
                  scale: isCenter ? 1.2 : 1,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                whileInView={{
                  opacity: isCenter ? 1 : 0.7,
                  scale: isCenter ? 1.2 : 1,
                  transition: { duration: 0.6, delay: position * 0.1 }
                }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-32 sm:w-40 md:w-48 lg:w-56 h-full flex items-center justify-center"
                  whileHover={isCenter ? { scale: 1.05 } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={isCenter ? client.selectedImage : client.image}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        <motion.button
          onClick={nextClient}
          className="absolute right-2 mobile:-right-4 sm:-right-8 md:right-0 lg:right-12 top-1/2 -translate-y-1/2 z-20 text-white focus:outline-none bg-secondary hover:scale-105 cursor-pointer rounded-md md:rounded-2xl p-2 md:p-3 transition-all duration-300 group"
          disabled={sliding}
          aria-label="Next client"
          variants={buttonVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="h-4 w-4 sm:h-8 sm:w-8 group-hover:scale-105" />
        </motion.button>
      </motion.div>
    </motion.section>
  )
}

export default CarrouselClients