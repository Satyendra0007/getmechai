import React from 'react'
import List from '../Components/List'

export default function page() {
  return (
    <div>
      <div className="banner w-full h-52 md:h-96">
        <img className='w-full h-full' src="/banner.jpg" alt="" />
      </div>
      <div className="profile flex flex-col relative px-4 md:flex-row md:px-10 md:gap-10">
        <div className="image h-14 md:w-60 md:h-60">
          <img className=' w-32 h-32 md:w-60 md:h-60 rounded-full absolute -top-[50%]' src="https://p1.hiclipart.com/preview/323/743/633/icon-person-icon-design-symbol-avatar-silhouette-character-cartoon-head-png-clipart.jpg" alt="" />
        </div>
        <div className="info py-4 space-y-2 ">
          <div className="name text-lg md:text-4xl font-bold text-rose-600">Satyendra Kumar</div>
          <div className="email text-sm md:text-base">skchandrawansi03@gmail.com</div>
        </div>
      </div>

      <div className="container mb-10 space-y-6 p-6 mx-auto md:flex md:max-w-7xl justify-center items-center bg-white/10 backdrop-blur-md rounded-lg">
        <div className="doanted-list md:w-1/2 md:p-6 space-y-4">
          <h1 className='text-2xl text-center font-semibold'>Donated List</h1>
          <div className="list flex flex-col justify-center items-center gap-4">
            <List />
            <List />
            <List />
            <List />
            <List />
          </div>
        </div>

        <div className="form md:p-6 space-y-4 text-gray-200  md:w-1/2 ">
          <h1 className='text-2xl text-center font-semibold'>Payment</h1>
          <div className="name flex flex-col gap-1 ">
            <label htmlFor="name">Name</label>
            <input className='p-2.5 bg-gray-700 rounded-lg border border-white/70' type="text" id='name' name='name' />
          </div>
          <div className="message flex flex-col gap-1">
            <label htmlFor="name">Message</label>
            <input className='p-2.5 bg-gray-700 rounded-lg border border-white/70' type="text" id='massage' name='massage' />
          </div>
          <div className="amount flex flex-col gap-1">
            <label htmlFor="name">Amount</label>
            <input className='p-2.5 bg-gray-700 rounded-lg border border-white/70' type="number" id='amoutn' name='amoutn' />
          </div>

          <div className="button w-full">
            <button className=' w-full font-semibold py-2.5 bg-gradient-to-r from-blue-600 to-rose-600 rounded-lg cursor-pointer transition-all duration-500 ease-in-out md:px-7 md:py-2.5'>Pay</button>
          </div>
        </div>
      </div >
    </div>
  )
}
