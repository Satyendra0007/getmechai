'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'


export default function Navbar() {

  const session = useSession()
  const [showDrop, setShowDrop] = useState(false)

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
        {session.status === 'unauthenticated' && <Link className='px-4 py-2 bg-gradient-to-r from-blue-600 to-rose-600 hover:scale-105 rounded-lg cursor-pointer  transition-all duration-500 ease-in-out md:px-6  ' href="/login">Login</Link>}
        {session.status !== 'unauthenticated' && <div className='relative'>
          <button onBlur={() => setTimeout(() => { setShowDrop(false) }, 200)} onClick={() => setShowDrop(!showDrop)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" text-white bg-gradient-to-r from-blue-600 to-rose-600 hover:opacity-90 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center" type="button">
            <span className='flex justify-center gap-2 items-center'>
              <img className='w-8 h-8 rounded-full' src={session?.data?.user?.image} />
              <span className='hidden md:block'>
                {session?.data?.user?.email}
              </span>
            </span>
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          <div id="dropdown" className={`z-10 ${showDrop ? "" : "hidden"} divide-y divide-gray-100 rounded-lg shadow w-full bg-slate-800 absolute right-0 top-12`} >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 " aria-labelledby="dropdownDefaultButton">
              <li className='w-full text-center'>
                <Link href="/" className="block py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</Link>
              </li>
              <li className='w-full text-center'>
                <Link href="/dashboard" className="block py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li className='w-full text-center'>
                <Link href="#" onClick={() => signOut()} className=" block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 w-full dark:hover:text-white">Sign out</Link>
              </li>
            </ul>
          </div>
        </div>}
      </div>
    </nav>
  )
}
