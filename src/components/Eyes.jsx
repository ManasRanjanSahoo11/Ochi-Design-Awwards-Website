import React, { useEffect, useState } from 'react'

function Eyes() {

    const [degree, setDegree] = useState(0)

    useEffect(()=>{


        window.addEventListener('mousemove', (e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
            setDegree(angle-180)
        })
    }, [])


    return (
        <div className='w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed = '-.6' className='relative w-full h-full bg-[url("/eye.jpg")] bg-cover bg-center'>
                <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div className='relative w-[15vw] h-[15vw] rounded-full bg-gray-100'>
                        <div className='absolute h-[10vw] w-[10vw] rounded-full flex justify-center items-center bg-black top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                            <div style={{rotate:`${degree}deg`}} className='line h-10 w-full'> {/*use angle to  rotete this line */}
                                <div className='h-6 w-6 bg-white rounded-full flex'>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative w-[15vw] h-[15vw] rounded-full bg-gray-100'>
                        <div className='absolute h-[10vw] w-[10vw] rounded-full flex justify-center items-center bg-black top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                            <div style={{rotate:`${degree}deg`}} className='line h-10 w-full'>
                                <div className='h-6 w-6 bg-white rounded-full flex'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes
