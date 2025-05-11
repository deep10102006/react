import React from 'react'
import upper1 from '../assets/image (28).avif'
import house1 from '../assets/image (30).avif'
import house2 from '../assets/image (27).avif'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
const Page10 = () => {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.to('.par', {
      scale: 4,
      opacity:100,
      scrollTrigger: {
        trigger: '.par',
        start: 'top 30%',
        end: 'bottom 30%',
        scrub: true,
      }

    });
  }, [])
  return (
    <div className='bg-[#171516]'>
      <div className=' relative '>
        <img src={upper1} className='absolute -top-10 z-0' alt="" />
        <div className="slider">
          <div className="sticky top-3 h-[100vh] flex items-center justify-center">
            <div className="relative w-[800px] h-[300px] flex items-center justify-center  mt-20">
              <img src={house1} className='absolute bottom-0 z-0 h-[400px] w-full' alt="" />
              <img src="https://endspeciesism.org/_next/static/media/exclamation,%20wuueek.763f11d2.svg" className='absolute bottom-50 left-80 opacity-5 h-[50px] par' alt="" />
            </div>
          </div>
          <div className="h-[100vh] flex items-center justify-center">
            <div className="overflow-hidden relative w-[800px] h-[300px] flex items-center justify-center mt-20">
              <img src={house2} className='z-0 h-full w-full' alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page10
