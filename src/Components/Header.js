import React from 'react'
import Logo from "../assets/Logo.webp";

export const Header = () => {
  return (
    <>
      <div className='bg-[#807316] rounded-xl p-4 md:p-8'>
        <img src={Logo} alt='Logo of Stealth Masters' className='w-36 md:w-48'/>
      </div>
    </>
  )
}
