import React from "react";
import Design from "../assets/Design.png";

export const Purpose = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-7 sm:mt-0 md:mt-0 p-5 sm:mb-10 md:p-10">
      <div className="flex justify-center items-center">
        <img
          className="w-1/3"
          src={Design}
          alt="security lock"
        />
      </div>
      <div>
        <h1 className="text-[#823205] mt-5 md:mt-0 font-medium text-4xl md:text-6xl">
          Our Purpose
        </h1>
        <p className="roboto text-xs sm:text-sm md:text-lg mt-7">
          <strong>Stealth-Masters</strong> is the stylish choice for <strong>discreet, secure, and easily
          accessible storage</strong>.<br/><br/> Our <strong>customizable concealment furniture</strong> securely
          stores firearms or other personal items such as jewelry, recreational
          or prescription drugs, adult toys, and much more, blending seamlessly
          with your home décor.<br/><br/> Featuring <strong>electronic RFID locks</strong>, our innovative
          products keep items easily accessible to you while <strong>remaining hidden
          from view.</strong>
        </p>
        <p className="mt-4 md:mt-7 text-lg font-sans">For bulk orders email us at <a className="text-text-decoration-none text-[#823205] italic font-semibold" href="mailto:sales@stealth-masters.com">sales@stealth-masters.com</a></p>
      </div>
    </div>
  );
};
