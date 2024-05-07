import React from 'react'
import { Header } from './Header'
import { Form } from './Form'
import GunMaster from "../assets/GunMaster.png";

export const Banner = () => {
  return (
    <>
      <div className='bg-[#EDDEC6] p-4 md:p-8 h-auto sm:h-[63vh] md:h-[127vh] overflow-visible'>
        <Header/>
       <div className='flex flex-col justify-center items-center mt-14'>
        <h4 className='text-[#807316] text-lg md:text-xl font-semibold italic'>Welcome to the</h4>
        <h1 className='text-[#807316] text-3xl sm:text-4xl md:text-6xl font-semibold mt-1 italic'>Stealth-Masters Family</h1>
        <h4 className='text-[#807316] text-sm sm:text-xl md:text-xl mt-10 md:mt-20 font-semibold tracking-wide'>Fill Out This Form To Activate Your Warranty</h4>
       </div>
       <div className='w-5/6 mx-auto mt-7 relative'>
        <Form/>
        <img className='w-full ml-2 sm:ml-4 md:ml-9' src={GunMaster}/>
       </div>
 
      </div>
    </>
  )
}
