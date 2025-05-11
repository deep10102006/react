import React from 'react'
import cardiki from '../assets/image (3).avif'
import pig from '../assets/image (2).avif'
import fox from '../assets/image.avif'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
const Page2 = () => {
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        gsap.to('.fox', {
            opacity: 1,
            left: 0,
            scrollTrigger: {
                trigger: '.fox',
                start: 'top 75%',
                end: 'bottom 50%',
                scrub: true
            }
        });
        gsap.to('.pig', {
            opacity: 1,
            right: 0,
            scrollTrigger: {
                trigger: '.pig',
                start: 'top 75%',
                end: 'bottom 50%',
                scrub: true,
            }

        });
         gsap.to('.p2', {
            opacity: 0,
            ease: 'power4.inOut',
            scrollTrigger: {
                trigger: '.p2',
                start: 'top 15%',
                end: 'bottom top',
                scrub: true,
            }
        });

    }, [])

    return (
        <div className='p-10 bg-[#B5B5B5] '>
            <div className="sticky top-3 h-[100vh] flex items-center justify-center">
                <div className="overflow-hidden relative w-[800px] h-[300px] bg-[#F77A0F] flex items-center justify-center border border-white">
                    <img src={fox} className='fox z-10 absolute size-[500px] -top-[43px] opacity-0 -left-30' alt="" />
                    <img src={pig} className='pig z-10 absolute size-[500px] -top-[43px] opacity-0 -right-30' alt="" />
                    <img src={cardiki} className='absolute -top-17  z-0 size-[40rem] w-[960px]' alt="" />

                </div>
                <p className='p2 absolute left-[15%] text-2xl font-bold top-5 text-center'>Inside, Danny the dog thumped his tail against the floorboards, his excitement <br /> barely contained. Beside him, a portly pig named Pepper snorted anxiously.</p>
            </div>
        </div>
    )
}

export default Page2
