import SectionTitle from '@/components/SectionTitle'
import React from 'react'
import { stepsData, shortDescriptions, listData } from './data'
import Card from './Card'
import Box from './Box'

export default function HowWeWorks() {
  return (
    <section className='px-4 py-20'>
        <div className='container mx-auto'>
            <SectionTitle title="How We Works" />

            <div className='flex md:flex-nowrap flex-wrap gap-6 items-start'>
                <div className='grid gap-4 max-w-[300px] w-full md:mx-0 mx-auto flex-shrink-0 md:sticky md:top-[80px]'>
                    {
                        stepsData.map((item, index) => (
                            <Card 
                                key={index}
                                title={item.title}
                                icon={item.icon}
                                bg={item.bg}
                            />
                        ))
                    }
                </div>

                <article className='text-lg font-light'>
                    <div className='grid xl:grid-cols-3 sm:grid-cols-2 sm:gap-6 gap-4 text-gray-500'>
                        {
                            listData.map((item, index) => (
                                <Box item={item} key={index} />
                            ))
                        }
                    </div>
                </article>
            </div>
        </div>

    </section>
  )
}
