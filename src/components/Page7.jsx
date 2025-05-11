import React from 'react'
import bg from '../assets/image (19).avif'
import bgg from '../assets/ind.avif'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
const Page7 = () => {
    
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.from('.fact', {
      scale: 3,
      scrollTrigger: {
        trigger: '.fact',
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: true,
      }

    });
  }, [])

  return (
    <div className='overflow-hidden'> 
      <img src={bgg} className='fact w-full' alt="" />
      <img src={bg} className='fact w-full' alt="" />
    </div>
  )
}

export default Page7
