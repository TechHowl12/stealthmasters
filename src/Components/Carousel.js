import React from "react";
import Slider from "react-slick";
import SmallWhite from "../assets/SmallWhite.png";

export const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="p-7 mx-auto">
      <h3 className="text-[#807316] font-semibold tracking-wide text-md mb-7 md:text-2xl text-center italic">
        Explore Our Range of Colors and Sizes
      </h3>
      <Slider {...settings}>
        <div className="border bg-[#E6DCC8] border-white rounded-xl p-4 md:p-7 h-auto">
          <div className="h-2/3 flex items-center">
            <img
              className="w-5/6 mx-auto"
              src={SmallWhite}
              alt="small white gun case"
            />
          </div>
          <h5 className="italic font-semibold mt-8">
            Bravo Small MSRP
            <span className="block md:inline font-normal font-sans not-italic md:pl-4 text-sm">
              (Fits One Handgun)
            </span>
          </h5>
          <div className="flex gap-x-2 mt-3">
            <button className="w-4 h-4 bg-black rounded-sm"></button>
            <button className="w-4 h-4 bg-[#926641] rounded-sm"></button>
            <button className="w-4 h-4 bg-white rounded-sm"></button>
          </div>
          <div className="border pl-3 border-white p-1 mt-4 rounded-md flex justify-between items-center">
            <h5 className="text-[#807316] font-sans text-sm md:text-xl font-bold">
              $199
            </h5>
            <button className="bg-[#807316] text-white px-3 italic p-1 md:p-2 rounded-md">
              Buy Now
            </button>
          </div>
        </div>
        <div className="border bg-[#E6DCC8] border-white rounded-xl p-4 md:p-7 h-auto">
          <div className="h-2/3 flex items-center">
            <img
              className="w-5/6 mx-auto"
              src={SmallWhite}
              alt="small white gun case"
            />
          </div>
          <h5 className="italic font-semibold mt-8">
            Bravo Small MSRP
            <span className="block md:inline font-normal font-sans not-italic md:pl-4 text-sm">
              (Fits One Handgun)
            </span>
          </h5>
          <div className="flex gap-x-2 mt-3">
            <button className="w-4 h-4 bg-black rounded-sm"></button>
            <button className="w-4 h-4 bg-[#926641] rounded-sm"></button>
            <button className="w-4 h-4 bg-white rounded-sm"></button>
          </div>
          <div className="border pl-3 border-white p-1 mt-4 rounded-md flex justify-between items-center">
            <h5 className="text-[#807316] font-sans text-sm md:text-xl font-bold">
              $199
            </h5>
            <button className="bg-[#807316] text-white px-3 italic p-1 md:p-2 rounded-md">
              Buy Now
            </button>
          </div>
        </div>
        <div className="border bg-[#E6DCC8] border-white rounded-xl p-4 md:p-7 h-auto">
          <div className="h-2/3 flex items-center">
            <img
              className="w-5/6 mx-auto"
              src={SmallWhite}
              alt="small white gun case"
            />
          </div>
          <h5 className="italic font-semibold mt-8">
            Bravo Small MSRP
            <span className="block md:inline font-normal font-sans not-italic md:pl-4 text-sm">
              (Fits One Handgun)
            </span>
          </h5>
          <div className="flex gap-x-2 mt-3">
            <button className="w-4 h-4 bg-black rounded-sm"></button>
            <button className="w-4 h-4 bg-[#926641] rounded-sm"></button>
            <button className="w-4 h-4 bg-white rounded-sm"></button>
          </div>
          <div className="border pl-3 border-white p-1 mt-4 rounded-md flex justify-between items-center">
            <h5 className="text-[#807316] font-sans text-sm md:text-xl font-bold">
              $199
            </h5>
            <button className="bg-[#807316] text-white px-3 italic p-1 md:p-2 rounded-md">
              Buy Now
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};
