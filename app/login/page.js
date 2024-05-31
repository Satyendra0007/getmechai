import React from 'react'
import LoginButton from '../Components/LoginButton'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <>
      <div className="flex h-[82vh] justify-center items-center ">
        <div className="container  my-auto py-10 mx-auto md:flex flex-row-reverse justify-evenly items-center md:py-32 bg-white/5 backdrop-blur-md rounded-2xl md:max-w-7xl">
          <div className="logo pb-4">
            <div className="logo flex justify-center items-center gap- text-2xl md:text-3xl ">
              <span>&lt;</span>
              <span className=''>Get<span className='text-blue-600 font-bold'>Me</span>Chai</span>
              <Image className='' src={"/logo.gif"} width={50} height={50} alt='logo' ></Image>
              <span> /&gt;</span>
            </div>
          </div>
          <div className='flex justify-center items-center flex-col gap-y-3'>
            <LoginButton name={"github"} src={"/github.png"} />
            <LoginButton name={"google"} src={"/google.png"} />

          </div>
        </div>
      </div>
    </>
  )
}
