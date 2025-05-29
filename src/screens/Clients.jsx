import React from 'react'
import { useTranslation } from 'react-i18next'
import Title from '../components/utils/Title'
import CarrouselClients from '../components/ui/CarrouselClients'
import { motion } from 'motion/react'

const Clients = () => {
  const { t } = useTranslation('clients')

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Title backgroundText={t("backTitle")} frontText={t("frontTitle")} />
      </motion.div>      <CarrouselClients/>
    </div>
  )
}

export default Clients
