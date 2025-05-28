import React from 'react'
import linesDeco from '../assets/lines_deco.png'
import { useTranslation } from 'react-i18next'

const Certificate = () => {
    const { t } = useTranslation('certificate')

  return (
    <section className='flex py-4 flex-col w-full xl:pl-96 pl-20 sm:pl-40 lg:pl-60 h-20 sm:h-40 lg:h-60 xl:h-96 justify-center sm: relative'>
      <img src={linesDeco} alt='Decoración con lineas' className='absolute left-0 top-0 h-full'/>
      <h1 className='text-primary font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>{t('title')}</h1>
      <p className='w-1/2 xl:w-1/3 text-sm md:text-base lg:text-lg xl:text-xl'>{t('description')}</p>
    </section>
  )
}

export default Certificate
