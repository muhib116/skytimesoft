import SectionTitle from '@/components/SectionTitle'
import React from 'react'
import { services } from './data'
import ServiceBox from './ServiceBox'

export default function Services() {
  return (
    <section className='py-20 px-4 bg-gray-50'>
        <div className='container mx-auto'>
            <SectionTitle
                title="Our Services"
            />
            <div className='grid xl:grid-cols-3 sm:grid-cols-2 sm:gap-6 gap-4'>
                {
                    services.map(({title, description, icon}, index) => (
                        <ServiceBox
                            key={index}
                            title={title}
                            description={description}
                            icon={icon}
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}
