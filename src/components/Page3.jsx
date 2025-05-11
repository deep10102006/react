import React from 'react'
import bg3 from '../assets/image (6).avif'
import track from '../assets/image (9).avif'
import pig from '../assets/image (2).avif'
import fox from '../assets/image (12).avif'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Page3 = () => {

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.to('.track', {
      left: 900,
      scrollTrigger: {
        trigger: '.track',
        start: 'top 30%',
        end: 'bottom 10%',
        scrub: true,
      }

    });
    gsap.to('.p3', {
            opacity: 0,
            ease: 'power4.inOut',
            scrollTrigger: {
                trigger: '.p3',
                start: 'top 15%',
                end: 'bottom top',
                scrub: true,
            }
        });
  }, [])

  return (
    <div className='h-[100vh] relative'>
      <img src={bg3} className='h-[100vh] w-full ' alt="" />
      <img src={track} className='track z-10 absolute top-59 -left-70 h-[190px]' alt="" />
      <img src={fox} className='track z-0 absolute top-59 -left-70 h-[120px] translate-y-2 translate-x-2' alt="" />
      <img src={pig} className='track z-0 absolute top-59 -left-70 h-[120px] translate-y-3 translate-x-20' alt="" />
      <p className='p3 absolute text-center text-white left-[25%] text-2xl font-bold  top-20'>Their journey had been long and strenuous, <br />
        but an unlikely friendship had blossomed amidst the commotion.
      </p>
    </div>
  )
}

export default Page3
