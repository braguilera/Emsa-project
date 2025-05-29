import React from 'react'
import { motion } from 'framer-motion'
import linesDeco from '../assets/lines_deco.png'
import { useTranslation } from 'react-i18next'

const Certificate = () => {
  const { t } = useTranslation('certificate')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const descriptionVariants = {
    hidden: { opacity: 0, x: -50, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const decorationVariants = {
    hidden: { opacity: 0, x: -150, scaleX: 0 },
    visible: {
      opacity: 1,
      x: 0,
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.1
      }
    }
  }

  return (
    <motion.section 
      className='flex py-4 flex-col w-full xl:pl-96 pl-30 sm:pl-40 lg:pl-60 h-30 sm:h-40 lg:h-60 xl:h-96 justify-center relative'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
    >
      <motion.img 
        src={linesDeco} 
        alt='Decoración con lineas' 
        className='absolute left-0 top-0 h-full'
        variants={decorationVariants}
      />
      
      <motion.h1 
        className='text-primary font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'
        variants={titleVariants}
      >
        {t('title')}
      </motion.h1>
      
      <motion.p 
        className='w-3/4 sm:w-1/2 lg:w-1/3 text-sm md:text-base lg:text-lg xl:text-xl'
        variants={descriptionVariants}
      >
        {t('description')}
      </motion.p>
    </motion.section>
  )
}

export default Certificate