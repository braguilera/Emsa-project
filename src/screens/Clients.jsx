import React from 'react'
import { useTranslation } from 'react-i18next'
import Title from '../components/utils/Title'
import CarrouselClients from '../components/ui/CarrouselClients'

const Clients = () => {
  const { t } = useTranslation('clients')

  return (
    <div>
      <Title backgroundText={t('backTitle')} frontText={t('frontTitle')}/>
      <CarrouselClients/>
    </div>
  )
}

export default Clients
