import React from 'react'
import bg from './media/bg.jpg'
import Image from 'next/image'
// import videoPath from './media/typing.mp4'

export default function Banner() {
  return (
    <header className='h-[80vh] relative flex items-center bg-black'>
        <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black z-10'></span>
        <Image 
          src={bg}
          width={1920} 
          height={1024} 
          alt="Banner Image" 
          className='block object-cover object-center absolute top-0 left-0 w-full h-full opacity-60'
        />

        <div className='z-30 relative container mx-auto'>
          <div className='max-w-[600px] text-center mx-auto'>
            <h1 className='font-bold text-[40px] mb-4 leading-12 text-white/80'>
              Transforming Ideas into Intelligent Software Solutions
            </h1>
            <p className='text-white/60 text-lg'>
              We create custom software solutions for businesses, driving innovation, efficiency, and growth. Embrace technology, empower progress.
            </p>
          </div>
        </div>
    </header>
  )
}
