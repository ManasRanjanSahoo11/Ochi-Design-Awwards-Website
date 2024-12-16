import React from 'react'


function Navbar() {
  return (
    <div className='fixed z-[999] backdrop-blur-md bg-gray-100/5 w-full flex items-center justify-between px-16 py-5'>
      <div className='logo font-semibold font-cursive text-xl'>100xManas</div>
      <div className='links'>
        {
            ["Services", "Our Work", "About Us", "Insights", "Contacts"].map((item, index)=>(
                <a href="#" key={index} className={`mx-5 font-normal text-lg ${index === 4 && `ml-32`}`}>{item}</a>
            ))
        }
      </div>
    </div>
  )
}

export default Navbar
