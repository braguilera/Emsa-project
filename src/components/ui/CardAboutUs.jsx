import React from 'react'

const CardAboutUs = ({us}) => {
  return (
    <article className="p-6 mb-4 flex w-full md:w-1/2 flex-col">
        <h2 className="text-xl text-secondary font-bold mb-4 text-center">{us.title}</h2>
        <div className='w-1/3 bg-secondary h-1'></div>
        <p className="text-gray-700 text-base mt-4">{us.text}</p>
    </article>
  )
}

export default CardAboutUs
