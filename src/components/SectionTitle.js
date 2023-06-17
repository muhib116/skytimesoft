import React from 'react'

export default function SectionTitle({title, subtitle}) {
  return (
    <div className='text-center'>
        <div className='container mx-auto mb-6'>
            <h3 className='font-bold text-3xl'>{ title }</h3>
            {
                !!subtitle && 
                <p className='text-gray-400 text-sm'>{ subtitle }</p>
            }
        </div>
    </div>
  )
}
