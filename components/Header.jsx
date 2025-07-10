"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { AlignRight, X } from 'lucide-react';
import { useState } from 'react';



const Header = () => {
  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Products', href: '#products' },
    { name: 'Meet Our Team', href: '#meetourteam' },
    { name: 'Contact Us', href: '#contactus' }
  ]
  const [isOpen, setIsOpen] = useState(false);
  return (

    <div className="flex flex-1 items-center justify-between px-3 py-3 shadow-md bg-white/85 z-[100] fixed top-0 w-screen">
      <div className='relative w-full flex justify-center items-center px-3 py-4'>
        <Link href="#Home" className='flex-1'>
          <div className="flex items-center hover:cursor-pointer gap-6">
            <Image src="/images/logo.png" alt="PiBi Tech" width={60} height={60} className='hover:scale-110 hover:rotate-15 hover:cursor-pointer' />
            <div>
              <h1 className="text-3xl font-extrabold text-gradient  tracking-tight hover: cursor-pointer"> PiBi Tech</h1>
              <h1 className="text-xs text-green-400 tracking-tight hover:cursor-pointer">Your AI Innovation Partner</h1>
            </div>
          </div>
        </Link>

        <div className='flex xl:hidden z-[1000] cursor-pointer'>
          <button onClick={() => {
            setIsOpen(prev => !prev)

          }}>{isOpen ? <X /> : <AlignRight />}</button>

        </div>
        <div className='hidden xl:flex z-[1000] cursor-pointer'>
          <div className='flex gap-8 font-semibold justify-center items-center text-xl '>
            <Link href="#services" className='pl-20 hover:text-blue-400 hover:cursor-pointer'>Services</Link>
            <Link href="#industries" className=' hover:text-blue-400 hover:cursor-pointer'>Industries</Link>
            <Link href="#products" className=' hover:text-blue-400 hover:cursor-pointer'>Products</Link>
            <Link href="#meetourteam" className=' hover:text-blue-400 hover:cursor-pointer '>Meet Our Team</Link>
            <Link href="#contactus" className='pr-20  hover:text-blue-400 hover:cursor-pointer'>Contact Us</Link>
            <Link href='#contactUs'><button className='bg-gradient-to-r w-full my-4 text-center from-blue-700 to-purple-600 rounded-full py-2 px-5 opacity-90 hover:opacity-100 hover:cursor-pointer text-xl font-semibold text-white'>Get Pricing</button>
            </Link>
          </div>
        </div>
      </div>
      {isOpen &&
        <div className='mt-3 w-screen absolute top-[85%] px-8  bg-white -left-5 opacity-90 flex flex-col gap-2 justify-start'>
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} className='border-b border-gray-200 py-2' onClick={() => setIsOpen(false)}>
              {item.name}
            </Link>
          ))}

        </div>}
    </div>

  );
}


export default Header