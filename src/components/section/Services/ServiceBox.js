import Link from 'next/link'
import React from 'react'

export default function ServiceBox({title, description, icon:Icon}) {
  return (
    <div className='bg-white shadow hover:shadow-lg rounded duration-300 p-8'>
        {!!Icon && <Icon className="w-10 h-10 mb-1" />}
        <div>
            <h3 className='font-bold text-lg'>{title}</h3>
            <p className='text-gray-400'>{description}</p>
        </div>
    </div>
  )
}
