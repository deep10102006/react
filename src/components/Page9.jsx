import React from 'react'
import pig3 from '../assets/image (29).avif'
import bg4 from '../assets/image (31).avif'
const Page9 = () => {
  return (
    <div className='h-[100vh] '>
      <div className="relative">
        <img src={bg4} className='h-full w-full z-0' alt="" />
        <img src={pig3} className='absolute bottom-6 right-[350px] h-[300px] ' alt="" />
        <p className='manga bg-white rounded-full absolute top-40 left-10 opacity-0 z-20 h-36 w-64 flex items-center justify-center font-bold p-3 text-center'>I am a pig, but is this how things are meant to be?</p>
      </div>
    </div>
  )
}

export default Page9
