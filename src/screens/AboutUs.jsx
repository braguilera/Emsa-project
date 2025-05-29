import React from 'react'
import { motion } from 'framer-motion'
import Title from '../components/utils/Title'
import { useTranslation } from 'react-i18next'
import { Car } from 'lucide-react'
import CardAboutUs from '../components/ui/CardAboutUs'

const AboutUs = () => {
  const { t } = useTranslation('aboutUs')

  const us = t("aboutUs", { returnObjects: true })

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

  return (
    <motion.section 
      id='aboutUs' 
      className="flex flex-col w-full items-center p-4 sm:p-10 bg-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.header 
        className='max-w-6xl w-full self-center flex flex-col py-2 items-center'
        variants={headerVariants}
      >
        <motion.div variants={itemVariants} className='w-full'>
          <Title frontText={t('frontTitle')} backgroundText={t('backTitle')} />
        </motion.div>
      </motion.header>
      
      <motion.article 
        className='w-full flex flex-col md:flex-row md:items-start xl:max-w-6xl md:max-w-3xl'
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {us.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className='w-full'
          >
            <CardAboutUs us={item} />
          </motion.div>
        ))}
      </motion.article>
    </motion.section>
  )
}

export default AboutUs