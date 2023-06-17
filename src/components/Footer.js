import React from 'react'

export default function Footer() {
  return (
    <>
        <footer className='bg-[#111]'>
            <div className='container mx-auto grid lg:grid-cols-4 sm:grid-cols-2 sm:gap-6 gap-4 text-white/60 px-4 py-10'>
                <div className='h-[200px] bg-gray-200/10 w-full'></div>
                <div className='h-[200px] bg-gray-200/10 w-full'></div>
                <div className='h-[200px] bg-gray-200/10 w-full'></div>
                <div className='h-[200px] bg-gray-200/10 w-full'></div>
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
