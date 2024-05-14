import React from 'react'
import Logo from "../assets/Logo.png";

export const Header = () => {
  return (
    <>
      <div className='bg-[#E6DCC8] rounded-xl p-4'>
        <img src={Logo} alt='Logo of Stealth Masters' className='w-40 md:w-64'/>
      </div>
    </>
  )
}
