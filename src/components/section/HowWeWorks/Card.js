import React from 'react'

export default function Card({title, icon: Icon, bg: color}) {
  return (
    <div 
      className='px-4 py-2 rounded shadow text-white relative'
    >
      <span 
        className='absolute top-0 left-0 w-full h-full pointer-events-none opacity-80'
        style={{ backgroundColor: color}}
      ></span>
      <div className='relative z-20 flex items-center gap-4'>
        { !!Icon && <Icon className="w-10 h-10" /> }
        <h3 className='text-sm'>{ title }</h3>
      </div>
    </div>
  )
}
