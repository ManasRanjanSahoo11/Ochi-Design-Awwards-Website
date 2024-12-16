import React from 'react'

function Footer() {
    return (
        <div className='w-full min-h-screen bg-[#022b25] text-white p-20'>
            <div>
                <div className='flex items-start justify-between gap-10'>
                    <div>
                        <h2 className='text-8xl leading-none tracking-tighter uppercase font-semibold'>eye-</h2>
                        <h2 className='text-8xl leading-none tracking-tighter uppercase font-semibold'>opening</h2>
                    </div>
                    <div>
                        <h2 className='text-8xl leading-none tracking-tighter uppercase font-semibold'>presentations</h2>
                        <div className='py-5'>
                            <p className='text-lg font-medium'>S:</p>
                            {
                                ["Instagram", "Behance", "Facebook", "Linkedin", "Twitter"].map((item, index) => (
                                    <a className='block py-1 border-b font-normal border-y-gray-100 w-fit' href="">{item}</a>
                                ))
                            }
                        </div>
                        <div>
                        <p className='text-lg font-medium'>M:</p>
                            {
                                ["Home", "Services", "Our work", "About us", "Insights", "Contact us"].map((item, index) => (
                                    <a className='block py-1 border-b font-normal border-y-gray-100 w-fit' href="">{item}</a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between mt-12'>
                <h1 className='text-5xl font-medium'>Ochi</h1>
                <p className='text-gray-400'>&copy; ochi design 2024. Legal Terms</p>
                <p className='text-gray-400'>Website by Obys</p>
            </div>
        </div>
    )
}

export default Footer
