import React from 'react'

export default function List() {
  return (
    <div className='flex items-center gap-2 px-4 py-1 bg-white/10 backdrop-blur-md rounded-lg w-full'>
      <div className="profile">
        <img className='w-10 h-10 rounded-full' src="https://p1.hiclipart.com/preview/323/743/633/icon-person-icon-design-symbol-avatar-silhouette-character-cartoon-head-png-clipart.jpg" alt="" />
      </div>
      <div className="desc">
        <p>{`Harry donoted 23$. Thank You !`}</p>
      </div>
    </div>
  )
}
