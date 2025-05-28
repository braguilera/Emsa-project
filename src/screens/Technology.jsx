import React from 'react'
import Title from '../components/utils/Title'
import { useTranslation } from 'react-i18next'
import CardTechnology from '../components/ui/CardTechnology'

const Technology = () => {
  const { t } = useTranslation('technology')

    const technologies = t("technologies", { returnObjects: true })

  return (
    <section id='technology' className='h-auto'>
      <Title frontText={t("frontTitle")} backgroundText={t("backTitle")}/>
      <article className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 items-start justify-items-center">
          {technologies.map((technology, index) => (
            <CardTechnology key={index} tech={technology}/>
          ))}
        </div>
      </article>
    </section>
  )
}

export default Technology
