'use client'
import React from 'react'
import { signIn } from '@/auth'
import { handleSignIn } from '../Actions/serverActions'

export default function LoginButton({ name, src }) {

  return (

    // <form
    //   action={async () => {
    //     "use server"
    //     await signIn(name, { redirectTo: "/dashboard" })
    //   }}
    // >
    //   <button type='submit' className='w-80 h-14 bg-white/20 flex items-center justify-center gap-1 rounded-md backdrop-blur-sm md:hover:bg-white/25'>
    //     <div className="logo">
    //       <img className='w-8' src={src} alt="" />
    //     </div>
    //     <div className="name text-center text-sm font-bold"></div>
    //     SignIn With {name}
    //   </button>
    // </form>

    <button type='submit' className='w-80 h-14 bg-white/20 flex items-center justify-center gap-1 rounded-md backdrop-blur-sm md:hover:bg-white/25' onClick={() => handleSignIn(name)}>
      <div className="logo">
        <img className='w-8' src={src} alt="" />
      </div>
      <div className="name text-center text-sm font-bold"></div>
      SignIn With {name}
    </button>
  )
}
