import React from 'react'
import bg from '../assets/image (15).avif'
import fox from '../assets/image (17).avif'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
const Page6 = () => {

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.to('.bg1', {
      scale: 2,
      scrollTrigger: {
        trigger: '.bg1',
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: true,
      }

    });
    gsap.to('.p6', {
      opacity: 0,
      ease: 'power4.inOut',
      scrollTrigger: {  
        trigger: '.p6',
        start: 'top 15%',
        end: 'bottom top',
        scrub: true,
      }
    });
    gsap.to('.manga', {
      opacity: 1,
      left:200,
      ease: 'power4.inOut',
      scrollTrigger: {  
        trigger: '.manga',
        start: 'top 65%',
        end: 'bottom center',
        scrub: true,
      }
    });
  }, [])

  return (
    <div className='h-[100vh] bg-[#B8B8B8]'>
      <div className="top-3 h-[100vh] flex items-center justify-center ">
        <div className="relative">
          <div className="overflow-hidden relative w-[800px] h-[340px] flex items-center justify-center border border-white">
            <img src={bg} className='bg1 z-0 w-full h-full' alt="" />
          </div>
          <img src={fox} className='absolute bottom-0 z-10 h-[400px] left-0' alt="" />
          <p className='manga bg-white rounded-full absolute top-40 left-10 opacity-0 z-20 h-36 w-64 flex items-center justify-center font-bold text-xl'>At lest he's not alone</p>
        <p className='p6 absolute text-end right-2 text-white font-bold top-10'>As Pepper walked away, his troubled gaze prompting a <br /> surge of worry, Danny couldn't help but worry about what's <br /> ahead for his new friend.</p>
        </div>
      </div>
    </div>
  )
}

export default Page6
