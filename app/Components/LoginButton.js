import React from 'react'

export default function LoginButton({ name, src }) {
  return (
    <button className='w-80 h-14 bg-white/20 flex items-center justify-center gap-1 rounded-md backdrop-blur-sm md:hover:bg-white/25' >
      <div className="logo">
        <img className='w-8' src={src} alt="" />
      </div>
      <div className="name text-center text-sm font-bold"></div>
      SignIn With {name}
    </button>
  )
}
