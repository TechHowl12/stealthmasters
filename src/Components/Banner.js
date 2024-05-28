import React, { useState } from 'react'
import { Header } from './Header'
import { Form } from './Form'
import GunMaster from "../assets/GunMaster.png";

export const Banner = () => {

  const [register,setRegister] = useState(false);

  return (
    <>
      <div className={`bg-[#141414] p-0 md:p-6 h-auto ${register ? "md:h-[112vh] xl:h-[114vh]" : "md:h-[133vh] xl:h-[135vh]"} overflow-visible`}>
        <div className='p-4 md:p-0'>
        <Header/>
        </div>
       <div className='flex flex-col justify-center items-center mt-7'>
        <h4 className='text-[#E6DCC8] text-lg md:text-xl font-medium'>Welcome to the</h4>
        <h1 className='text-[#E6DCC8] text-3xl sm:text-4xl md:text-6xl font-semibold mt-1 tracking-wide'>Stealth-Masters Family</h1>
       </div>
       <div className='w-5/6 mx-auto mt-4 relative'>
        <Form setRegister={setRegister}/>
        <img className='md:absolute md:top-[95%]' src={GunMaster}/>
       </div>
 
      </div>
    </>
  )
}
