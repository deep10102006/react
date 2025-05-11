import React from 'react'
import two from '../assets/image (11).avif'
import bg from '../assets/image (10).avif'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
const Page4 = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
      gsap.to('.p4', {
            opacity: 0,
            ease: 'power4.inOut',
            scrollTrigger: {
                trigger: '.p4',
                start: 'top 15%',
                end: 'bottom top',
                scrub: true,
            }
        });
    },[])
  return (
    <div className='h-[129vh] relative '>
      <img src={bg} className='' alt="" />
      <img src={two} className='absolute bottom-0 left-70 h-[300px]' alt="" />
      <p className='p4 absolute text-center text-white left-[15%] text-2xl font-bold top-20'>The two arrived at their destination. <br />
        The massive metal mansion invited them inside as the farmer walked with the two.</p>
    </div>
  )
}

export default Page4
