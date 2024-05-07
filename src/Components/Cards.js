import React from 'react';
import SmallWhite from "../assets/SmallWhite.png";
import MediumBrown from "../assets/MediumBrown.png"
import LargeBlack from "../assets/BravoLarge.png"
import YankeeBrown from "../assets/YankeeLarge.png"

export const Cards = () => {
  return (
    <div className='bg-white p-14'>
        <div className='bg-[#E6DCC8] rounded-3xl p-7'>
            <h3 className='text-[#807316] font-semibold tracking-wide mt-[11%] text-2xl text-center italic'>Explore Our Range of Colors and Sizes</h3>

            <div className='grid grid-cols-2 gap-7 mt-10'>

                 <div className='border border-white rounded-xl sm:p-4 p-7 h-[32rem] sm:h-[31rem]'>
                    <div className='h-2/3 flex items-center'>
                      <img className='w-5/6 mx-auto' src={SmallWhite} alt='photo of a small white gun case'/>
                    </div>
                    <h5 className='italic font-semibold sm:mt-3 mt-8'>Bravo Small MSRP<span className='font-normal font-sans not-italic pl-4 text-sm'>(Fits One Handgun)</span></h5>
                     <div className='flex gap-x-2 mt-3'>
                        <button className='w-4 h-4 bg-black rounded-sm'></button>
                        <button className='w-4 h-4 bg-[#926641] rounded-sm'></button>
                        <button className='w-4 h-4 bg-white rounded-sm'></button>
                     </div>
                     <div className='border mb-4 border-white p-1 mt-4 rounded-md flex justify-between items-center'>
                         <h5 className='text-[#807316] font-sans text-xl font-bold'>$199</h5>
                         <button className='bg-[#807316] text-white font-semibold tracking-wide italic p-2 rounded-md'>Buy Now</button>
                     </div>
                 </div>

                 <div className='border sm:p-4 border-white rounded-xl p-7'>
                    <div className='h-2/3 flex items-center'>
                        <img className='w-5/6 mx-auto' src={MediumBrown} alt='photo of a small white gun case'/>
                    </div>
                    <h5 className='italic font-semibold sm:mt-3 mt-8'>Bravo Medium MSRP<span className='font-normal font-sans not-italic pl-4 text-sm'>(Fits Two Handguns)</span></h5>
                     <div className='flex gap-x-2 mt-3'>
                        <button className='w-4 h-4 bg-black rounded-sm'></button>
                        <button className='w-4 h-4 bg-[#926641] rounded-sm'></button>
                        <button className='w-4 h-4 bg-white rounded-sm'></button>
                     </div>
                     <div className='border mb-4 pl-3 border-white p-1 mt-4 rounded-md flex justify-between items-center'>
                         <h5 className='text-[#807316] font-sans text-xl font-bold'>$279</h5>
                         <button className='bg-[#807316] text-white font-semibold tracking-wide italic p-2 rounded-md'>Buy Now</button>
                     </div>
                 </div>

                 <div className='border sm:p-4 border-white rounded-xl p-7 sm:h-[31rem] h-[32rem]'>
                    <div className='h-2/3 flex items-center'>
                      <img className='w-5/6 mx-auto' src={LargeBlack} alt='photo of a small white gun case'/>
                    </div>
                    <h5 className='italic font-semibold sm:mt-3 mt-8'>Bravo Large MSRP<span className='font-normal font-sans not-italic pl-4 text-sm'>(Fits Two Handguns & One Assault Rifle)</span></h5>
                     <div className='flex gap-x-2 mt-3'>
                        <button className='w-4 h-4 bg-black rounded-sm'></button>
                        <button className='w-4 h-4 bg-[#926641] rounded-sm'></button>
                        <button className='w-4 h-4 bg-white rounded-sm'></button>
                     </div>
                     <div className='border mb-4 pl-3 border-white p-1 mt-4 rounded-md flex justify-between items-center'>
                         <h5 className='text-[#807316] font-sans text-xl font-bold'>$379</h5>
                         <button className='bg-[#807316] text-white font-semibold tracking-wide italic p-2 rounded-md'>Buy Now</button>
                     </div>
                 </div>

                 <div className='border sm:p-4 border-white rounded-xl p-7'>
                    <div className='h-2/3 flex items-center'>
                      <img className='w-5/6 mx-auto' src={YankeeBrown} alt='photo of a small white gun case'/>
                    </div>
                    <h5 className='italic font-semibold sm:mt-3 mt-8'>Bravo Small MSRP<span className='font-normal font-sans not-italic pl-4 text-sm'>(Fits One Handgun & One Assault Rifle)</span></h5>
                     <div className='flex gap-x-2 mt-3'>
                        <button className='w-4 h-4 bg-black rounded-sm'></button>
                        <button className='w-4 h-4 bg-[#926641] rounded-sm'></button>
                        <button className='w-4 h-4 bg-white rounded-sm'></button>
                     </div>
                     <div className='border mb-4 pl-3 border-white p-1 mt-4 rounded-md flex justify-between items-center'>
                         <h5 className='text-[#807316] font-sans text-xl font-bold'>$349</h5>
                         <button className='bg-[#807316] text-white font-semibold tracking-wide italic p-2 rounded-md'>Buy Now</button>
                     </div>
                 </div>
            </div>
        </div>
    </div>
  )
}
