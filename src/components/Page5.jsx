import React from 'react'
import bg from '../assets/image (16).avif'
import pig from '../assets/pig, squirm.avif'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Page5 = () => {

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.to('.pig1', {
      left: 200,
      scrollTrigger: {
        trigger: '.pig1',
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: true,
      }

    });
     gsap.to('.p5', {
            opacity: 0,
            ease: 'power4.inOut',
            scrollTrigger: {
                trigger: '.p5',
                start: 'top 15%',
                end: 'bottom top',
                scrub: true,
            }
        });
  }, [])

  return (
    <div className='h-[100vh]  bg-[#B8B8B8]'>
      <div className="relative top-3 h-[100vh] flex items-center justify-center">
        <div className="overflow-hidden relative w-[800px] h-[300px] flex items-center justify-center border border-white">
          <img src={bg} className='z-0 h-full' alt="" />
          <img src={pig} className='pig1 absolute left-0 -bottom-10 z-10 h-full' alt="" />
        <p className='p5 absolute text-end text-white text-xl right-2 font-bold top-20'>The two best friends entered together, <br />
          but only one was allowed to leave.</p>
        </div>
      </div>
    </div>
  )
}

export default Page5
