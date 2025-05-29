import React, { useState } from 'react'
import Title from '../components/utils/Title'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import CardTechnology from '../components/ui/CardTechnology'
import cruz_deco from '../assets/technology/cruz_deco.png'

const Technology = () => {
  const { t } = useTranslation('technology')
  const technologies = t("technologies", { returnObjects: true })
  const [showAll, setShowAll] = useState(false)

  // Número de items a mostrar inicialmente en mobile
  const INITIAL_ITEMS_MOBILE = 4
  const visibleItems = showAll ? technologies : technologies.slice(0, INITIAL_ITEMS_MOBILE)
  const hasMoreItems = technologies.length > INITIAL_ITEMS_MOBILE

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.08,
        delayChildren: 0.4
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const decorationVariants = {
    hidden: { opacity: 0, rotate: -45, scale: 0 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.6
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
      id='technology' 
      className='h-auto flex flex-col items-center justify-center w-full'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.header 
        className='max-w-6xl self-center relative gap-20 flex flex-col lg:flex-row items-center p-10'
        variants={headerVariants}
      >
        <motion.div variants={itemVariants} className='w-full'>
          <Title frontText={t("frontTitle")} backgroundText={t("backTitle")}/>
        </motion.div>
        
        <motion.p 
          className='w-full self-end xl:text-base'
          variants={itemVariants}
        >
          {t('description')}
        </motion.p>
        
        <motion.img 
          className='m-8 h-20 absolute hidden sm:block top-0 right-0 lg:-right-10 xl:-right-20' 
          src={cruz_deco} 
          alt='Cross deco'
          variants={decorationVariants}
        />
      </motion.header>
      
      {/* Article para Mobile y Tablet (grid-cols-1 y grid-cols-2) */}
      <article className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 block lg:hidden">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-start justify-items-center"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <AnimatePresence>
            {visibleItems.map((technology, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants} 
                className='w-full'
                initial="hidden"
                animate="visible"
                exit="hidden"
                layout
              >
                <CardTechnology tech={technology}/>
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
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium rounded-lg shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>
                {showAll ? 'Ver menos' : `Ver más (${technologies.length - INITIAL_ITEMS_MOBILE} más)`}
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
          className="grid lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 items-start justify-items-center"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {technologies.map((technology, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants} 
              className='w-full'
            >
              <CardTechnology tech={technology}/>
            </motion.div>
          ))}
        </motion.div>
      </article>
    </motion.section>
  )
}

export default Technology