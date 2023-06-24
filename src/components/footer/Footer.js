import React from 'react'
import About from './fragment/About'

export default function Footer() {
  return (
    <>
        <footer className='bg-[#111]'>
            <div className='container mx-auto flex sm:gap-6 gap-4 text-white/60 px-4 py-10'>
                <div className='w-full'>
                    <About />
                </div>
                <div className='bg-gray-200/10 w-full'></div>
                <div className='bg-gray-200/10 w-full'></div>
            </div>
        </footer>
        <div className='bg-black border-t border-white/20'>
            <div className='container mx-auto px-4 flex justify-between font-light text-sm text-white/50 py-2'>
                <p>All right reserved</p>
                <p>copyright 2023</p>
            </div>
        </div>
    </>
  )
}
