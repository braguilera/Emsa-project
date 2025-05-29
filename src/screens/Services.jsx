import React, { useState } from 'react'
import Title from "../components/utils/Title"
import { useTranslation } from "react-i18next"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from 'lucide-react'
import CardServices from "../components/ui/CardServices"
import decoration from "../assets/services/decoration.png"

const Services = () => {
  const { t } = useTranslation("services")
  const services = t("services", { returnObjects: true })
  const [showAll, setShowAll] = useState(false)

  // Número de items a mostrar inicialmente en mobile
  const INITIAL_ITEMS_MOBILE = 4
  const visibleItems = showAll ? services : services.slice(0, INITIAL_ITEMS_MOBILE)
  const hasMoreItems = services.length > INITIAL_ITEMS_MOBILE

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const decorationVariants = {
    hidden: { opacity: 0, x: -100, rotate: -10 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.2
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section 
      id="services" 
      className="relative flex flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Title backgroundText={t("backTitle")} frontText={t("frontTitle")} />
      </motion.div>
      
      <motion.p 
        className="self-center py-8 p-4 text-center text-xl md:text-2xl lg:text-3xl text-secondary"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {t('description')}
      </motion.p>
      
      <motion.img 
        src={decoration} 
        className="absolute top-0 w-1/4"
        variants={decorationVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
      
      {/* Article para Mobile y Tablet (grid-cols-1 y grid-cols-2) */}
      <article className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 block lg:hidden">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-start justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <AnimatePresence>
            {visibleItems.map((service, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                className="w-full"
                initial="hidden"
                animate="visible"
                exit="hidden"
                layout
              >
                <CardServices service={service}/>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Botón Show More - Solo para mobile/tablet */}
        {hasMoreItems && (
          <motion.div 
            className="flex justify-center mt-8"
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-medium rounded-lg shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>
                {showAll ? 'Ver menos' : `Ver más (${services.length - INITIAL_ITEMS_MOBILE} más)`}
              </span>
              <motion.div
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </article>

      {/* Article para Desktop (grid-cols-3 en adelante) */}
      <article className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 hidden lg:block">
        <motion.div 
          className="grid  lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-start justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="w-full"
            >
              <CardServices service={service}/>
            </motion.div>
          ))}
        </motion.div>
      </article>
    </motion.section>
  )
}

export default Services