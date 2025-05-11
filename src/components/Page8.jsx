import React from 'react'
import upper from '../assets/image (18).avif'
import mid from '../assets/image (20).avif'
import fox2 from '../assets/image (23).avif'
import bg3 from '../assets/image (22).avif'
import fox4 from '../assets/image (24).avif'
import hand from '../assets/image (25).avif'
import bg4 from '../assets/image (21).avif'
import fox5 from '../assets/image (26).avif'
import house from '../assets/house.avif'
const Page8 = () => {
  return (
    <div className=' relative '>
      <img src={upper} className='absolute -top-20 z-0' alt="" />
      <img src={mid} className='absolute h-[300vh] mt-23 w-full z-0' alt="" />
      <p className='z-20 text-xl font-bold left-[30%] top-20 text-center absolute'>Danny was brought to the cozy household where he was fed treats, <br /> given a luke warm bath and showered with pats</p>
      <div className="slider">
        <div className="sticky top-3 h-[100vh] flex items-center justify-center">
          <div className="overflow-hidden relative w-[800px] h-[300px] flex items-center justify-center">
            <img src={house} className='z-0 h-full w-full' alt="" />
            <img src={fox2} className=' absolute left-20 -bottom-10 z-10 h-full' alt="" />
          <p className='bg-white rounded-full border border-black absolute bottom-4 right-1 z-20 h-36 w-64 flex items-center justify-center font-bold text-xl'>Danny, catch!</p>
          </div>
        </div>
        <div className="sticky top-3 h-[100vh] flex items-center justify-center">
          <div className="overflow-hidden relative w-[800px] h-[300px] flex items-center justify-center">
            <img src={bg3} className='z-0 h-full w-full' alt="" />
            <img src={fox4} className=' absolute translate-x-13 -bottom-20 z-10 h-full' alt="" />
            <img src={hand} className='absolute right-0 top-0 z-10 h-[170px]' alt="" />
            <p className='bg-white rounded-full border border-black absolute bottom-14 left-1 z-20 h-36 w-64 flex items-center justify-center font-bold text-xl'>Danny, goooodddd boy!</p>
          </div>
        </div>
        <div className="sticky top-3 h-[100vh] flex items-center justify-center">
          <div className="overflow-hidden relative w-[800px] h-[300px] flex items-center justify-center">
            <img src={bg4} className='z-0 h-full w-full' alt="" />
            <img src={fox5} className='absolute left-0 -bottom-10 z-10 h-full' alt="" />
            <p className='bg-white rounded-full absolute bottom-14 border border-black right-1 z-20 h-36 w-64 flex items-center justify-center font-bold text-xl'>Danny! <br /> It's shower time!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page8
