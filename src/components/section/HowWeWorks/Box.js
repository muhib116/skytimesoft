import React from 'react'
import CheckCircle from '@/icons/CheckCircleIcon'


export default function Box({item}) {
  return (
    <div className='relative p-6 border rounded bg-opacity-10'>
        <span 
            className='absolute top-0 opacity-10 pointer-events-none left-0 w-full h-full' 
            style={{ backgroundColor: item.color }}
        ></span>
        <CheckCircle 
            className="w-20 h-20 absolute opacity-30 right-0 bottom-1"
            style={{ color: item.color }}
        />
        <div className='z-20'>
            <h3 className='mr-1 text-black font-bold'>
                { item.title }
            </h3>
            <p className='text-sm font-medium'>
                { item.description }
            </p>
        </div>
    </div>
  )
}
