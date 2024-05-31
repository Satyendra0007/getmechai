import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='bg-slate-900 text-white flex justify-between items-center h-16 px-2 shadow-xl md:justify-around sticky top-0 left-0 z-10 '>
      <Link href="/">
        <div className="logo ">
          <div className="logo flex justify-center items-center gap- text-lg md:text-xl ">
            <span>&lt;</span>
            <span className=''>Get<span className='text-blue-600 font-bold'>Me</span>Chai</span>
            <Image className='' src={"/logo.gif"} width={50} height={50} alt='logo' ></Image>
            <span> /&gt;</span>
          </div>
        </div>
      </Link>
      <div className="button space-x-1">
        <Link className='px-4 py-2 bg-gradient-to-r from-blue-600 to-rose-600 hover:scale-105 rounded-lg cursor-pointer  transition-all duration-500 ease-in-out md:px-6  ' href="/login">Login</Link>
        <Link className='px-4 py-2 bg-gradient-to-r from-blue-600 to-rose-600 hover:scale-105 rounded-lg cursor-pointer  transition-all duration-500 ease-in-out md:px-6  ' href="/dashboard">Dash</Link>
      </div>
    </nav>
  )
}
