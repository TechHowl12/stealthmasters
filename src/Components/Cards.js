import React, { useState } from 'react';
import SmallWhite from "../assets/SmallWhite.png";
import SmallBrown from "../assets/SmallBrown.png";
import SmallBlack from "../assets/SmallBlack.png";
import MediumWhite from "../assets/MediumWhite.png"
import MediumBrown from "../assets/MediumBrown.png"
import MediumBlack from "../assets/MediumBlack.png"
import LargeWhite from "../assets/LargeWhite.png"
import LargeBlack from "../assets/LargeBlack.png"
import LargeBrown from "../assets/LargeBrown.png"
import YankeeWhite from "../assets/yankee large.png"

export const Cards = () => {

  const [smallCase,setSmallCase] = useState(SmallWhite);
  const [mediumCase,setMediumCase] = useState(MediumBlack);
  const [largeCase,setLargeCase] = useState(LargeBrown);

  return (
    <div className='bg-white p-8 md:p-14'>
        <div className='bg-[#E6DCC8] rounded-3xl p-7'>
            <h3 className='text-[#823205] font-semibold tracking-wide mt-7 md:mt-[9%] lg:mt-[10%] xl:mt-[11%] text-2xl text-center'>Explore Our Range of Colors and Sizes</h3>

            <div className='grid grid-cols-2 gap-7 mt-10'>

            <div className='border sm:p-4 border-white rounded-xl p-7 sm:h-[28rem] h-[25rem]'>
            <div className='h-2/3 relative flex items-center justify-center'>
                      <img className='w-5/6 absolute md:top-5 sm:top-[30%]' src={smallCase} alt='small gun case'/>
                    </div>
                    <h5 className='font-semibold sm:mt-3 mt-8'>Bravo Small MSRP<span className='inline sm:block font-normal roboto pl-4 sm:pl-0 text-sm'>(Fits One Handgun)</span></h5>
                     <div className='flex gap-x-2 mt-1'>
                        <button onClick={()=>setSmallCase(SmallBlack)} className='w-4 h-4 bg-black rounded-sm cursor-pointer'></button>
                        <button onClick={()=>setSmallCase(SmallBrown)} className='w-4 h-4 bg-[#926641] rounded-sm cursor-pointer'></button>
                        <button onClick={()=>setSmallCase(SmallWhite)} className='w-4 h-4 bg-white block z-10 rounded-sm cursor-pointer'></button>
                     </div>
                     <div className='border mb-4 border-white p-1 mt-4 rounded-md flex justify-between items-center'>
                         <h5 className='text-[#823205] roboto text-xl font-bold'>$199</h5>
                         <button className='border border-[#807316] text-[#807316] tracking-wide font-medium py-1 px-3 rounded-md hover:bg-[#807316] hover:text-white transition-all'>Buy Now</button>
                     </div>
                 </div>

                 <div className='border sm:p-4 border-white rounded-xl p-7 sm:h-[28rem] h-[25rem]'>
            <div className='h-2/3 relative flex items-center justify-center'>
                      <img className='w-5/6 absolute md:top-5 sm:top-[30%]' src={mediumCase} alt='medium gun case'/>
                    </div>
                    <h5 className='font-semibold sm:mt-3 mt-8'>Bravo Medium MSRP<span className='inline sm:block font-normal roboto pl-4 sm:pl-0 text-sm'>(Fits Two Handguns)</span></h5>
                     <div className='flex gap-x-2 mt-1'>
                        <button onClick={()=>setMediumCase(MediumBlack)} className='w-4 h-4 bg-black rounded-sm'></button>
                        <button onClick={()=>setMediumCase(MediumBrown)} className='w-4 h-4 bg-[#926641] rounded-sm'></button>
                        <button onClick={()=>setMediumCase(MediumWhite)} className='w-4 h-4 bg-white block z-10 rounded-sm'></button>
                     </div>
                     <div className='border mb-4 pl-3 border-white p-1 mt-4 rounded-md flex justify-between items-center'>
                         <h5 className='text-[#823205] roboto text-xl font-bold'>$279</h5>
                         <button className='border border-[#807316] text-[#807316] tracking-wide font-medium py-1 px-3 rounded-md hover:bg-[#807316] hover:text-white transition-all'>Buy Now</button>
                     </div>
                 </div>

                 <div className='border sm:p-4 border-white rounded-xl p-7 sm:h-[28rem] h-[25rem]'>
            <div className='h-2/3 relative flex items-center justify-center'>
                      <img className='w-5/6 absolute md:top-5 sm:top-[30%]' src={largeCase} alt='large gun case'/>
                    </div>
                    <h5 className='font-semibold sm:mt-3 mt-8'>Bravo Large MSRP<span className='inline sm:block font-normal roboto pl-4 sm:pl-0 text-sm'>(Fits Two Handguns & One Assault Rifle)</span></h5>
                     <div className='flex gap-x-2 mt-1'>
                        <button onClick={()=>setLargeCase(LargeBlack)} className='w-4 h-4 bg-black rounded-sm'></button>
                        <button onClick={()=>setLargeCase(LargeBrown)} className='w-4 h-4 bg-[#926641] rounded-sm'></button>
                        <button onClick={()=>setLargeCase(LargeWhite)} className='w-4 h-4 bg-white block z-10 rounded-sm'></button>
                     </div>
                     <div className='border mb-4 pl-3 border-white p-1 mt-4 rounded-md flex justify-between items-center'>
                         <h5 className='text-[#823205] roboto text-xl font-bold'>$379</h5>
                         <button className='border border-[#807316] text-[#807316] tracking-wide font-medium py-1 px-3 rounded-md hover:bg-[#807316] hover:text-white transition-all'>Buy Now</button>
                     </div>
                 </div>

                 <div className='border sm:p-4 border-white rounded-xl p-7 sm:h-[28rem] h-[25rem]'>
            <div className='h-2/3 relative flex items-center justify-center'>
                      <img className='w-5/6 absolute md:top-2 sm:top-[30%]' src={YankeeWhite} alt='small white gun case'/>
                    </div>
                    <h5 className='font-semibold sm:mt-3 mt-8'>Bravo Small MSRP<span className='inline sm:block font-normal roboto pl-4 sm:pl-0 text-sm'>(Fits One Handgun & One Assault Rifle)</span></h5>
                     <div className='flex gap-x-2 mt-1'>
                        <button className='w-4 h-4 bg-white rounded-sm'></button>
                     </div>
                     <div className='border mb-4 pl-3 border-white p-1 mt-4 rounded-md flex justify-between items-center'>
                         <h5 className='text-[#823205] roboto text-xl font-bold'>$349</h5>
                         <button className='border border-[#807316] text-[#807316] tracking-wide font-medium py-1 px-3 rounded-md hover:bg-[#807316] hover:text-white transition-all'>Buy Now</button>
                     </div>
                 </div>
            </div>
        </div>
    </div>
  )
}
