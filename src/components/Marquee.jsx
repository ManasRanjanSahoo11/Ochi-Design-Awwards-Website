import { motion } from 'motion/react'
import React from 'react'

function Marquee() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed='.1' className='h-1/2 w-full flex items-center py-28 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
            <div className='border-t-2 border-b-2 whitespace-nowrap flex pr-5 overflow-hidden'>
                <motion.h2 initial={{ x: '0' }} animate={{ x: '-100%' }} transition={{ repeat: Infinity, ease: "linear", duration: "5" }} className='text-[12vw] font-semibold uppercase  '>We Are ochi.</motion.h2>

                <motion.h2 initial={{ x: '0' }} animate={{ x: '-100%' }} transition={{ repeat: Infinity, ease: "linear", duration: "5" }} className='text-[12vw] font-semibold uppercase  '>We Are ochi.</motion.h2>

                <motion.h2 initial={{ x: '0' }} animate={{ x: '-100%' }} transition={{ repeat: Infinity, ease: "linear", duration: "5" }} className='text-[12vw] font-semibold uppercase  '>We Are ochi.</motion.h2>
            </div>
        </div>
    )
}

export default Marquee
