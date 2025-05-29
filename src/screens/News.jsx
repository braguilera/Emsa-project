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

// Lista de rutas de imágenes
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

const fadeIn = (i) => ({
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4, delay: i * 0.05 }
})

const News = () => {
  const { t } = useTranslation('news')

  return (
    <section className="relative h-auto px-4 py-10 text-secondary overflow-hidden">
      <Title frontText={t('frontTitle')} backgroundText={t('backTitle')} />

      {/* Layout principal con grid y contenido */}
      <div className="mt-10 mx-auto max-w-7xl w-full h-auto  relative">
        {/* Grid de imágenes - Desktop */}
        <div className="hidden lg:grid grid-cols-10 grid-rows-10 gap-2 h-auto">
          {images.map((src, i) => (
            <motion.div
              key={i}
              className={`overflow-hidden z-10 w-full h-full
                ${i === 0 ? 'col-span-2 row-span-2 rounded-tl-md' : ''}
                ${i === 1 ? 'col-span-2 row-span-2 col-start-3' : ''}
                ${i === 2 ? 'col-span-2 row-span-5 col-start-5 rounded-tr-md' : ''}
                ${i === 3 ? 'row-span-3 row-start-3' : ''}
                ${i === 4 ? 'col-span-3 row-span-3 row-start-3' : ''}
                ${i === 5 ? 'col-span-4 row-span-2 row-start-6 rounded-bl-md' : ''}
                ${i === 6 ? 'col-span-2 row-span-2 col-start-5 row-start-6' : ''}
                ${i === 7 ? 'col-span-2 row-span-2 col-start-7 row-start-6' : ''}
                ${i === 8 ? 'col-span-2 row-span-5 col-start-9 row-start-6 rounded-tr-md rounded-br-md' : ''}
                ${i === 9 ? 'col-span-3 row-span-3 col-start-6 row-start-8' : ''}
                ${i === 10 ? 'row-span-3 col-start-5 row-start-8 rounded-bl-md' : ''}
              `}
              initial={fadeIn(i).initial}
              whileInView={fadeIn(i).animate}
              transition={fadeIn(i).transition}
              viewport={{ once: true }}
            >
              <img
                src={src}
                alt={`news-${i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
          <img
            src={linesDeco}
            alt="Decoración con líneas"
            className="absolute top-1/2 left-0 w-1/2"
          />
        </div>

        {/* Grid de imágenes - Mobile y Tablet con estructura específica */}
        <div className="lg:hidden relative">
          {/* Mobile (pantallas pequeñas) - Grid 10x10 con 2 columnas efectivas */}
          <div className="sm:hidden grid grid-cols-2 grid-rows-1 gap-2 h-auto">
            {/* div1 - imagen 0 */}
            <motion.div
              className="col-span-1 row-span-1 overflow-hidden rounded-t-md z-10"
              {...fadeIn(0)}
            >
              <img src={images[0]} alt="logistics-1" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* div2 - imagen 1 */}
            <motion.div
              className="col-start-2 row-start-2 rounded-tr-md row-span-2 overflow-hidden  z-10"
              {...fadeIn(1)}
            >
              <img src={images[1]} alt="logistics-2" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* div3 - imagen 2 */}
            <motion.div
              className="col-start-1 row-start-5 row-span-2 overflow-hidden z-10"
              {...fadeIn(2)}
            >
              <img src={images[2]} alt="logistics-3" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* div4 - imagen 3 */}
            <motion.div
              className="col-start-1 row-start-2 row-span-2 overflow-hidden z-10"
              {...fadeIn(3)}
            >
              <img src={images[3]} alt="logistics-4" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* div5 - imagen 4 */}
            <motion.div
              className="col-span-2 col-start-1 row-start-4 overflow-hidden z-10"
              {...fadeIn(4)}
            >
              <img src={images[4]} alt="logistics-5" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* div6 - imagen 5 */}
            <motion.div
              className="col-start-1 row-start-7 overflow-hidden z-10"
              {...fadeIn(5)}
            >
              <img src={images[5]} alt="logistics-6" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* div7 - imagen 6 */}
            <motion.div
              className="col-start-2 row-start-5 overflow-hidden z-10"
              {...fadeIn(6)}
            >
              <img src={images[6]} alt="logistics-7" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* div8 - imagen 7 */}
            <motion.div
              className="col-start-2 row-start-6 row-span-2 overflow-hidden z-10"
              {...fadeIn(7)}
            >
              <img src={images[7]} alt="logistics-8" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* div9 - imagen 8 */}
            <motion.div
              className="col-start-2 row-start-8 row-span-2 overflow-hidden z-10"
              {...fadeIn(8)}
            >
              <img src={images[8]} alt="logistics-9" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* div10 - imagen 9 */}
            <motion.div
              className="col-span-2 col-start-1 row-start-10 overflow-hidden z-10"
              {...fadeIn(9)}
            >
              <img src={images[9]} alt="logistics-10" className="w-full h-full rounded-b-md object-cover" />
            </motion.div>
            
            {/* div11 - imagen 10 */}
            <motion.div
              className="col-start-1 row-start-8 row-span-2 overflow-hidden  z-10"
              {...fadeIn(10)}
            >
              <img src={images[10]} alt="logistics-11" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Tablet (sm a lg) - Grid 10x10 con estructura completa */}
          <div className="hidden sm:grid lg:hidden grid-cols-4 grid-rows-10 gap-2 h-full">
            {/* div1 - imagen 0 */}
            <motion.div
              className="col-span-2 row-span-2 overflow-hidden rounded-t-md z-10"
              {...fadeIn(0)}
            >
              <img src={images[0]} alt="logistics-1" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* div2 - imagen 1 */}
            <motion.div
              className="col-span-2 row-span-2 col-start-3 row-start-2 overflow-hidden rounded-tr-md z-10"
              {...fadeIn(1)}
            >
              <img src={images[1]} alt="logistics-2" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* div3 - imagen 2 */}
            <motion.div
              className="row-span-3 col-start-3 row-start-4 overflow-hidden  z-10"
              {...fadeIn(2)}
            >
              <img src={images[2]} alt="logistics-3" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* div4 - imagen 3 */}
            <motion.div
              className="row-span-3 col-start-1 row-start-3 overflow-hidden  z-10"
              {...fadeIn(3)}
            >
              <img src={images[3]} alt="logistics-4" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* div5 - imagen 4 */}
            <motion.div
              className="row-span-3 col-start-2 rounded-xl row-start-3 overflow-hidden z-10"
              {...fadeIn(4)}
            >
              <img src={images[4]} alt="logistics-5" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* div6 - imagen 5 */}
            <motion.div
              className="col-span-2 row-span-2  col-start-1 row-start-6 overflow-hidden  z-10"
              {...fadeIn(5)}
            >
              <img src={images[5]} alt="logistics-6" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* div7 - imagen 6 */}
            <motion.div
              className="row-span-3 col-start-4  row-start-4 overflow-hidden z-10"
              {...fadeIn(6)}
            >
              <img src={images[6]} alt="logistics-7" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* div8 - imagen 7 */}
            <motion.div
              className="col-span-2 row-span-2 col-start-3 row-start-7 overflow-hidden  z-10"
              {...fadeIn(7)}
            >
              <img src={images[7]} alt="logistics-8" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* div9 - imagen 8 */}
            <motion.div
              className="row-span-3 col-start-2 row-start-8 overflow-hidden z-10"
              {...fadeIn(8)}
            >
              <img src={images[8]} alt="logistics-9" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* div10 - imagen 9 */}
            <motion.div
              className="col-span-2 row-span-2 col-start-3 row-start-9 rounded-br-md overflow-hidden z-10"
              {...fadeIn(9)}
            >
              <img src={images[9]} alt="logistics-10" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* div11 - imagen 10 */}
            <motion.div
              className="row-span-3 col-start-1 rounded-bl-md row-start-8 overflow-hidden z-10"
              {...fadeIn(10)}
            >
              <img src={images[10]} alt="logistics-11" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Decoración mejorada */}
          <div className="absolute inset-0 pointer-events-none">
            <img
              src={linesDeco}
              alt="Decoración con líneas"
              className="absolute top-1/2 -left-4 w-1/3 opacity-20 md:opacity-30 transform -translate-y-1/2"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-transparent" />
          </div>
        </div>

        {/* Texto + redes en el espacio vacío */}
        <article className="absolute top-0 right-[1%] sm:right-1/6 lg:top-4 lg:right-1/5 sm p-4 max-w-xs z-10">
          <h2 className="font-bold text-xs sm:text-lg text-secondary mb-2">{t('text')}</h2>
          <div className="h-1 w-1/3 bg-secondary mb-3" />
          <SocialNetworks textColor="text-secondary" />
        </article>
      </div>
    </section>
  )
}

export default News