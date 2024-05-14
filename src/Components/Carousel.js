import React, { useState } from "react";
import Slider from "react-slick";
import SmallWhite from "../assets/SmallWhite.png";
import SmallBrown from "../assets/SmallBrown.png";
import SmallBlack from "../assets/SmallBlack.png";
import MediumWhite from "../assets/MediumWhite.png";
import MediumBrown from "../assets/MediumBrown.png";
import MediumBlack from "../assets/MediumBlack.png";
import LargeWhite from "../assets/LargeWhite.png";
import LargeBlack from "../assets/LargeBlack.png";
import LargeBrown from "../assets/LargeBrown.png";
import YankeeWhite from "../assets/YankeeLarge.png";

export const Carousel = () => {
  const [smallCase, setSmallCase] = useState(SmallWhite);
  const [mediumCase, setMediumCase] = useState(MediumBrown);
  const [largeCase, setLargeCase] = useState(LargeBlack);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade:true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="p-7 mx-auto">
      <h3 className="text-[#823205]  font-semibold tracking-wide text-md mb-4 text-center">
        Explore Our Range of Colors and Sizes
      </h3>
      <Slider {...settings}>

        <div className="border border-white bg-[#E6DCC8] rounded-xl p-3 h-[22rem]">
          <div className="h-1/2">
            <img
              className="w-full h-auto"
              src={smallCase}
              alt="small gun case"
            />
          </div>
          <h5 className="font-semibold sm:mt-3 mt-8">
            Bravo Small MSRP
            <span className="block font-normal roboto text-sm">
              (Fits One Handgun)
            </span>
          </h5>
          <div className="flex gap-x-2 mt-1">
            <button
              onClick={() => setSmallCase(SmallBlack)}
              className="w-4 h-4 bg-black rounded-sm"
            ></button>
            <button
              onClick={() => setSmallCase(SmallBrown)}
              className="w-4 h-4 bg-[#926641] rounded-sm"
            ></button>
            <button
              onClick={() => setSmallCase(SmallWhite)}
              className="w-4 h-4 bg-white rounded-sm"
            ></button>
          </div>
          <div className="border mb-4 border-white p-1 mt-4 rounded-md flex justify-between items-center">
            <h5 className="text-[#823205] roboto text-lg font-bold">$199</h5>
            <button className="border border-[#807316] text-[#807316] tracking-wide font-medium py-1 px-3 rounded-md hover:bg-[#807316] hover:text-white transition-all">
              Buy Now
            </button>
          </div>
        </div>

        <div className="rounded-xl p-3 bg-[#E6DCC8] h-[22rem]">
          <div className="h-1/2">
            <img
              className="w-full mx-auto"
              src={mediumCase}
              alt="medium gun case"
            />
          </div>
          <h5 className="font-semibold sm:mt-3 mt-8">
            Bravo Medium MSRP
            <span className="block font-normal roboto text-sm">
              (Fits Two Handguns)
            </span>
          </h5>
          <div className="flex gap-x-2 mt-1">
            <button
              onClick={() => setMediumCase(MediumBlack)}
              className="w-4 h-4 bg-black rounded-sm"
            ></button>
            <button
              onClick={() => setMediumCase(MediumBrown)}
              className="w-4 h-4 bg-[#926641] rounded-sm"
            ></button>
            <button
              onClick={() => setMediumCase(MediumWhite)}
              className="w-4 h-4 bg-white rounded-sm"
            ></button>
          </div>
          <div className="border mb-4 pl-3 border-white p-1 mt-4 rounded-md flex justify-between items-center">
            <h5 className="text-[#823205] roboto text-lg font-bold">$279</h5>
            <button className="border border-[#807316] text-[#807316] tracking-wide font-medium py-1 px-3 rounded-md hover:bg-[#807316] hover:text-white transition-all">
              Buy Now
            </button>
          </div>
        </div>

        <div className="rounded-xl relative p-3 bg-[#E6DCC8] h-[22rem]">
          <div className="h-1/2 flex justify-center">
            <img className="w-5/6 absolute top-10" src={largeCase} alt="large gun case" />
          </div>
          <h5 className="font-semibold sm:mt-3 mt-8">
            Bravo Large MSRP
            <span className="block font-normal roboto text-sm">
              (Fits Two Handguns & One Assault Rifle)
            </span>
          </h5>
          <div className="flex gap-x-2 mt-1">
            <button
              onClick={() => setLargeCase(LargeBlack)}
              className="w-4 h-4 bg-black rounded-sm"
            ></button>
            <button
              onClick={() => setLargeCase(LargeBrown)}
              className="w-4 h-4 bg-[#926641] rounded-sm"
            ></button>
            <button
              onClick={() => setLargeCase(LargeWhite)}
              className="w-4 h-4 bg-white rounded-sm"
            ></button>
          </div>
          <div className="border mb-4 pl-3 border-white p-1 mt-4 rounded-md flex justify-between items-center">
            <h5 className="text-[#823205] roboto text-lg font-bold">$379</h5>
            <button className="border border-[#807316] text-[#807316] tracking-wide font-medium py-1 px-3 rounded-md hover:bg-[#807316] hover:text-white transition-all">
              Buy Now
            </button>
          </div>
        </div>

        <div className="rounded-xl relative p-3 bg-[#E6DCC8] h-[22rem]">
          <div className="h-1/2 flex justify-center">
            <img
              className="w-5/6 absolute top-14"
              src={YankeeWhite}
              alt="small white gun case"
            />
          </div>
          <h5 className="font-semibold sm:mt-3 mt-8">
            Bravo Small MSRP
            <span className="block font-normal roboto text-sm">
              (Fits One Handgun & One Assault Rifle)
            </span>
          </h5>
          <div className="flex gap-x-2 mt-1">
            <button className="w-4 h-4 bg-white rounded-sm"></button>
          </div>
          <div className="border mb-4 pl-3 border-white p-1 mt-4 rounded-md flex justify-between items-center">
            <h5 className="text-[#823205] roboto text-lg font-bold">$349</h5>
            <button className="border border-[#807316] text-[#807316] tracking-wide font-medium py-1 px-3 rounded-md hover:bg-[#807316] hover:text-white transition-all">
              Buy Now
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};
