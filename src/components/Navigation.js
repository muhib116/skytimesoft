import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

export default function Navigation() 
{
    const pagesLink = [
        {
            title: 'Services',
            link: '/'
        },
        {
            title: 'Projects',
            link: '/'
        },
        {
            title: 'About',
            link: '/about'
        },
        {
            title: 'Team',
            link: '/'
        },
    ]
  return (
    <nav className='bg-[#111] bg-opacity-80 fixed w-full backdrop-blur-sm border-b border-sky-600 top-0 z-50'>
        <div className='container mx-auto px-4 flex items-center h-14 justify-between font-light'>
            <Link href='/'>
                <Logo />
            </Link>

            <div className='flex gap-4'>
                {
                    pagesLink.map((item, index) => (
                        <Link 
                            key={ index }
                            href={ item.link }
                            className='text-white/60 hover:text-white duration-300'
                        >
                            { item.title }
                        </Link>
                    ))
                }
            </div>
            
            <Link 
                className='bg-sky-600 text-white px-4 py-1 rounded-2xl'
                href='/about'
            >
                Contact
            </Link>
        </div>
    </nav>
  )
}
