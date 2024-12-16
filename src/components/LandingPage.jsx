import { motion } from 'motion/react';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {

    return (
        <div data-scroll data-scroll-scetion data-scroll-speed="-.5" className='h-screen w-full pt-1'>
            <div className='teststructure mt-52 px-16'>
                {
                    ["we create", "eye opening", "presentation"].map((item, index) => (
                        <div key={index} className='mask flex gap-4 overflow-hidden'>
                            {
                                index==1 && (<motion.div 
                                    initial={{width: "0"}}
                                    animate={{width : "9vw"}}
                                    transition={{ease: "easeInOut", duration: 1}}
                                    className='relative rounded-lg bg-[url("https://media.licdn.com/dms/image/v2/C4E0BAQEpRh7n4oAMgQ/company-logo_200_200/company-logo_200_200/0/1636384061716/ochi_presentation_design_logo?e=2147483647&v=beta&t=MZotcbE_xi3TVBkS5YrYh3RVlLDXabWwLsDgCJ3Rq2A")] bg-cover bg-center'></motion.div>)
                            }
                            <h3 className='text-8xl leading-[6vw] tracking-tighter uppercase font-semibold text-white '> {item} </h3>
                        </div>
                    ))
                }
            </div>

            <div className='border-t-2 border-gray-400 mt-20 flex items-center justify-between px-16 pt-5'>
                {
                    ["For public and private companies", "From the first pitch to IPO"].map((item, index)=>(
                        <p>{item}</p>
                    ))
                }

                <div className='flex gap-5 items-center cursor-pointer'>
                    <div className='px-7 py-2 border-2 rounded-full uppercase tracking-tighter'>
                        Start the project
                    </div>
                    <div className='border-2 px-2 py-2 rounded-full rotate-45 font-light'>
                            <FaArrowUpLong />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default LandingPage
