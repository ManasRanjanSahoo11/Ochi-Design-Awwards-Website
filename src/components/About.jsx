import React from 'react'

function About() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed='-.2' className='w-full bg-[#CDEA68] text-black rounded-tl-3xl rounded-tr-3xl pb-20'>
            <h2 className='font-normal text-5xl leading-[3.5vw]  py-12 px-20'>I am a passionate <span className='border-b-4 border-gray-900'>Full-Stack Developer </span>skilled in creating dynamic web applications. From crafting <span className='border-b-4 border-gray-900'>responsive front-end designs</span> to building <span className='border-b-4 border-gray-900'>robust back-end systems</span>, I deliver seamless <span className='border-b-4 border-gray-900'> user experiences</span> that drive innovation and <span className='border-b-4 border-gray-900'>impact.</span></h2>

            <div className='border-t-[1px] border-gray-700 mt-10'></div>

            <div className='flex items-start justify-between px-20 py-5'>
                <div className=''>
                    <h2 className='text-6xl font-normal'>Our approach</h2>
                    <button className='bg-gray-900 text-white uppercase px-10 py-5 rounded-full mt-5 flex items-center gap-5'>read more
                        <div className='h-3 w-3 rounded-full bg-white'></div>
                    </button>
                </div>
                <div className='h-[35vw] w-1/2 rounded-xl'>
                <img className='h-full w-full object-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About
