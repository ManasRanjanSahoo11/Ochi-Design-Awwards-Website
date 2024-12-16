import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";

function CardSec() {

  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 100], [100, 0]); // Moves up to 0px and stops

  return (
    <motion.div className='w-full h-screen px-10 flex gap-5 items-center justify-center'>
      <div className='relative h-[55vh] w-[40vw] bg-[#004D43] rounded-xl flex items-center justify-center'>
        <h2 className='text-5xl font font-medium text-[#CDEA68]'>Ochi</h2>
        <button className='absolute left-5 bottom-5 border-2 text-green-500 border-green-500 px-5 py-1.5 rounded-full'>&copy; 2024-2025</button>
      </div>
      <div className='flex gap-5'>
        <div className='relative w-[23vw] h-[55vh] bg-[#01211d] border-gray-50/5  rounded-xl flex items-center justify-center'>
          <button className='absolute left-5 bottom-5 border-2 text-grey-100 border-grey-100 px-5 py-1.5 rounded-full uppercase'>rating 5.0 on clutch</button>
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        </div>
        <div className='relative w-[23vw] border-gray-50/5 border-[1px] h-[55vh] bg-[#022b25] rounded-xl flex items-center justify-center'>
          <button className='absolute left-5 bottom-5 border-2 text-grey-100 border-grey-100 px-5 py-1.5 rounded-full uppercase'>business bootcamp alumini</button>
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        </div>
      </div>
    </motion.div>
  )
}

export default CardSec
