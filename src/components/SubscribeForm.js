import React from 'react'

export default function SubscribeForm({className}) {
  return (
    <div className={ ['flex bg-white/10 rounded-3xl p-1 pl-6 gap-2 shadow-lg', className].join(' ') }>
        <input 
            type='email' 
            className='border-none block w-full bg-transparent outline-none placeholder:opacity-40'
            placeholder='Enter your e-mail'
        />
        <button className='bg-sky-700 text-white rounded-3xl px-6 py-2 font-bold'>
            Send
        </button>
    </div>
  )
}
