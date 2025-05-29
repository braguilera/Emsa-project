import React from 'react'
import Title from '../components/utils/Title'
import { useTranslation } from 'react-i18next'
import { Car } from 'lucide-react'
import CardAboutUs from '../components/ui/CardAboutUs'

const AboutUs = () => {
  const { t } = useTranslation('aboutUs')

  const us = t("aboutUs", { returnObjects: true })

  return (
    <section id='aboutUs' className="flex flex-col w-full items-center p-4 sm:p-10 bg-gray-100">
      <Title frontText={t('frontTitle')} backgroundText={t('backTitle')}></Title>
      <article className='w-full flex flex-col md:flex-row md:items-start xl:max-w-6xl md:max-w-3xl '>
        {us.map((item, index) => (
          <CardAboutUs us={item} key={index}/>
        ))}
      </article>
    </section>
  )
}

export default AboutUs
