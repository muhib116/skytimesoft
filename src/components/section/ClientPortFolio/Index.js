import React from 'react'
import SectionTitle from '../../SectionTitle'
import Image from 'next/image'
import { brandLogo } from './data'

export default function ClientPortFolio() 
{
  return (
    <section className='py-20'>
        <SectionTitle
          title="Our Client Portfolio"
          subtitle="Elevating Businesses, Enriching Client Ventures"
        />
        <div className='flex gap-4 flex-wrap justify-center items-center max-w-[900px] mx-auto'>
          {
            brandLogo.map(({logo, title}, index) => (
              <Image
                key={ index }
                src={ logo }
                alt={ title }
                width={ 100 }
                height={ 100 }
                loading='lazy'
                className='object-cover object-center filter grayscale hover:grayscale-0 hover:scale-105 duration-300'
              />
            ))
          }
        </div>
    </section>
  )
}
