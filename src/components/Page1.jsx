import { useState } from 'react'
import bg from '../assets/image (1).avif'
import car from '../assets/truck, rear.avif'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
function Page1() {
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        gsap.to('.bg', {
            scale: 1.3,
            ease: 'power4.inOut',
            scrollTrigger: {
                trigger: '.bg',
                start: 'top 45%',
                end: 'bottom 50%',
                scrub: true
            }
        });
        gsap.to('.bg2', {
            scale: 1.2,
            ease: 'power4.inOut',
            scrollTrigger: {
                trigger: '.bg2',
                start: 'center 55%',
                end: 'bottom 50%',
                scrub:true,
            }

        });
        gsap.to('.p', {
            opacity: 0,
            ease: 'power4.inOut',
            scrollTrigger: {
                trigger: '.p',
                start: 'top 15%',
                end: 'bottom top',
                scrub: true,
            }
        });
    }, [])

    return (
        <div className='relative overflow-hidden'>
            <img src={bg} className='bg2 h-[100vh] w-full' alt="" />
            <img src={car} className='bg absolute top-[310px] left-[590px] h-56' alt="" />
            <p className='p absolute font-bold text-white text-7xl left-[22%] top-40'>The Tale of Two Animals</p>
        </div>
    )
}

export default Page1
