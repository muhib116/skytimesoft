import SubscribeForm from '@/components/SubscribeForm'
import EmailIcon from '@/icons/EmailIcon'
import PhoneIcon from '@/icons/PhoneIcon'
import React from 'react'

export default function About() {
  return (
    <div>
        <h4 className='text-lg text-white font-bold mb-4'>About us</h4>
        <p className='font-light leading-5 text-white/50'>
            Engaging in a detailed discussion with the client to understand their goals, expectations, and specific requirements for the software project.
        </p>

        <div className='my-5 space-y-2 text-white/80 font-semibold'>
            <div className='flex gap-2'>
                <PhoneIcon className="w-7 h-6" />
                <a href="tel:+88 904 3453 94">+88 904 3453 94</a>
            </div>
            <div className='flex gap-2'>
                <EmailIcon className="w-7 h-6" />
                <a href='mailto:contact@skytimesoft.com'>contact@skytimesoft.com</a>
            </div>
        </div>

        <SubscribeForm className="mt-4" />
    </div>
  )
}
