import { motion, useAnimation } from 'motion/react'
import React from 'react'

function Fetured() {

    const cards = [useAnimation(), useAnimation()]

    const handleAnimation = (index)=>{
        cards[index].start({y:"0"})
    }
    
    const handleHoverEnd = (index)=>{
        cards[index].start({y:"100%"})
    }

    return (
        <div className='h-screen w-full'>
            <div className='border-b border-gray-500 py-10'>
                <h2 className='text-7xl tracking-tight px-20'>Fetured Projects</h2>
            </div>
            <div className='w-full px-20 py-10 flex items-center gap-7'>
                <motion.div onHoverStart={()=>handleAnimation(0)} onHoverEnd={()=>handleHoverEnd(0)} className='relative w-1/2 h-[70vh] rounded-3xl cursor-pointer'>
                    <h1 className='absolute text-[#CDEA68] leading-none tracking-tighter z-[9] text-8xl left-full top-1/2 -translate-x-1/2 -translate-y-1/2 uppercase flex items-center font-semibold overflow-hidden'>
                        {
                            "cardboard-spaceship".split('').map((item, index) => (<motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:"easeInOut", delay: index * .01}} key={index} className='inline-block' > {item} </motion.span>))
                        }
                    </h1>
                    <div className='h-full w-full rounded-3xl overflow-hidden'>
                        <img className='h-full w-full object-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                    </div>
                </motion.div>
               
                <motion.div onHoverStart={()=>handleAnimation(1)} onHoverEnd={()=>handleHoverEnd(1)} className='relative w-1/2 h-[70vh] rounded-3xl cursor-pointer'>
                    <h1 className='absolute text-[#CDEA68] leading-none tracking-tighter z-[9] text-8xl top-1/2 -translate-x-1/2 -translate-y-1/2 uppercase flex items-center font-semibold overflow-hidden'>
                        {
                            "ah2 & matt horn".split('').map((item, index) => (<motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:"easeInOut", delay: index * .01}} key={index} className='inline-block' > {item} </motion.span>))
                        }
                    </h1>
                    <div className='h-full w-full rounded-3xl overflow-hidden'>
                    <img className='h-full w-full object-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Fetured
