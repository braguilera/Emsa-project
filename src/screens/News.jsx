import React from 'react'
import Title from '../components/utils/Title'
import { useTranslation } from 'react-i18next'
import SocialNetworks from '../components/utils/SocialNetworks'
import { motion } from 'framer-motion'
import linesDeco from '../assets/lines_deco.png'

import truck from '../assets/news/truck.png'
import truck2 from '../assets/news/truck2.png'
import truck3 from '../assets/news/truck3.png'
import truck4 from '../assets/news/truck4.png'
import trucks from '../assets/news/trucks.png'
import people from '../assets/news/people.png'
import people2 from '../assets/news/people2.png'
import people3 from '../assets/news/people3.png'
import storage from '../assets/news/storage.png'
import storage2 from '../assets/news/storage2.png'
import storage3 from '../assets/news/storage3.png'

const images = [
  truck, 
  storage,
  truck2, 
  storage2, 
  people, 
  people2, 
  trucks,
  truck3, 
  truck4, 
  people3, 
  storage3
]

const desktopGridClasses = [
  'col-span-2 row-span-2 rounded-tl-md',
  'col-span-2 row-span-2 col-start-3',
  'col-span-2 row-span-5 col-start-5 rounded-tr-md',
  'row-span-3 row-start-3',
  'col-span-3 row-span-3 row-start-3',
  'col-span-4 row-span-2 row-start-6 rounded-bl-md',
  'col-span-2 row-span-2 col-start-5 row-start-6',
  'col-span-2 row-span-2 col-start-7 row-start-6',
  'col-span-2 row-span-5 col-start-9 row-start-6 rounded-tr-md rounded-br-md',
  'col-span-3 row-span-3 col-start-6 row-start-8',
  'row-span-3 col-start-5 row-start-8 rounded-bl-md'
]

const mobileGridClasses = [
  'col-span-1 row-span-1 overflow-hidden rounded-t-md z-10',
  'col-start-2 row-start-2 rounded-tr-md row-span-2 overflow-hidden z-10',
  'col-start-1 row-start-5 row-span-2 overflow-hidden z-10',
  'col-start-1 row-start-2 row-span-2 overflow-hidden z-10',
  'col-span-2 col-start-1 row-start-4 overflow-hidden z-10',
  'col-start-1 row-start-7 overflow-hidden z-10',
  'col-start-2 row-start-5 overflow-hidden z-10',
  'col-start-2 row-start-6 row-span-2 overflow-hidden z-10',
  'col-start-2 row-start-8 row-span-2 overflow-hidden z-10',
  'col-span-2 col-start-1 row-start-10 overflow-hidden z-10',
  'col-start-1 row-start-8 row-span-2 overflow-hidden z-10'
]

const tabletGridClasses = [
  'col-span-2 row-span-2 overflow-hidden rounded-t-md z-10',
  'col-span-2 row-span-2 col-start-3 row-start-2 overflow-hidden rounded-tr-md z-10',
  'row-span-3 col-start-3 row-start-4 overflow-hidden z-10',
  'row-span-3 col-start-1 row-start-3 overflow-hidden z-10',
  'row-span-3 col-start-2 rounded-xl row-start-3 overflow-hidden z-10',
  'col-span-2 row-span-2 col-start-1 row-start-6 overflow-hidden z-10',
  'row-span-3 col-start-4 row-start-4 overflow-hidden z-10',
  'col-span-2 row-span-2 col-start-3 row-start-7 overflow-hidden z-10',
  'row-span-3 col-start-2 row-start-8 overflow-hidden z-10',
  'col-span-2 row-span-2 col-start-3 row-start-9 rounded-br-md overflow-hidden z-10',
  'row-span-3 col-start-1 rounded-bl-md row-start-8 overflow-hidden z-10'
]

const fadeIn = (i) => ({
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4, delay: i * 0.05 }
})

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
}

const articleVariants = {
  initial: { 
    opacity: 0, 
    y: 30
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      delay: 0.3,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  }
}

const linesDecoVariants = {
  initial: { 
    opacity: 0, 
    x: -50
  },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8, 
      delay: 0.5,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  }
}

const News = () => {
  const { t } = useTranslation('news')

  return (
    <section id='news' className="relative h-auto px-4 py-10 text-secondary overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Title backgroundText={t("backTitle")} frontText={t("frontTitle")} />
      </motion.div>
      <motion.div 
        className="mt-10 mx-auto max-w-7xl w-full h-auto relative"
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="hidden lg:grid grid-cols-10 grid-rows-10 gap-2 h-auto">
          {images.map((src, i) => (
            <motion.div
              key={i}
              className={`overflow-hidden z-10 w-full h-full group ${desktopGridClasses[i]}`}
              initial={fadeIn(i).initial}
              whileInView={fadeIn(i).animate}
              transition={fadeIn(i).transition}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={src}
                alt={`news-${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </motion.div>
          ))}
          
          <motion.img
            src={linesDeco}
            alt="Decoración con líneas"
            className="absolute top-1/2 left-0 w-1/2"
            variants={linesDecoVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          />
        </div>

        <div className="lg:hidden relative">
          <div className="sm:hidden grid grid-cols-2 grid-rows-1 gap-2 h-auto">
            {images.map((src, i) => (
              <motion.div
                key={i}
                className={`group ${mobileGridClasses[i]}`}
                {...fadeIn(i)}
                viewport={{ once: true, amount: 0.2 }}
              >
                <img 
                  src={src} 
                  alt={`logistics-${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" 
                />
              </motion.div>
            ))}
          </div>

          <div className="hidden sm:grid lg:hidden grid-cols-4 grid-rows-10 gap-2 h-full">
            {images.map((src, i) => (
              <motion.div
                key={i}
                className={`group ${tabletGridClasses[i]}`}
                {...fadeIn(i)}
                viewport={{ once: true, amount: 0.25 }}
              >
                <img 
                  src={src} 
                  alt={`logistics-${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" 
                />
              </motion.div>
            ))}
          </div>

          <div className="absolute inset-0 pointer-events-none">
            <motion.img
              src={linesDeco}
              alt="Decoración con líneas"
              className="absolute top-1/2 -left-4 w-1/3 opacity-20 md:opacity-30 transform -translate-y-1/2"
              variants={linesDecoVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-transparent" />
          </div>
        </div>

        <motion.article 
          className="absolute top-0 right-[1%] sm:right-1/6 lg:top-4 lg:right-1/5 p-4 max-w-xs z-10"
          variants={articleVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-bold text-xs sm:text-lg text-secondary mb-2">
            {t('text')}
          </h2>
          
          <div className="h-1 w-1/3 bg-secondary mb-3" />
          
          <SocialNetworks textColor="text-secondary" />
        </motion.article>
      </motion.div>
    </section>
  )
}

export default News