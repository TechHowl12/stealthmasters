import React from "react";
import Design from "../assets/Design.png";

export const Purpose = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 p-5 sm:mb-10 md:p-20">
      <div className="flex justify-center items-center">
        <img
          className="w-4/6 sm:w-1/2 md:w-1/2"
          src={Design}
          alt="photo of security lock"
        />
      </div>
      <div>
        <h1 className="text-[#807316] mt-7 md:mt-0 italic font-semibold text-4xl md:text-6xl">
          Our Purpose
        </h1>
        <p className="font-sans sm:text-md text-lg mt-7 md:mt-10">
          <strong className="italic">Stealth-Masters</strong> is the stylish choice for <strong>discreet, secure, and easily
          accessible storage</strong>. Our <strong>customizable concealment furniture</strong> securely
          stores firearms or other personal items such as jewelry, recreational
          or prescription drugs, adult toys, and much more, blending seamlessly
          with your home décor. Featuring <strong>electronic RFID locks</strong>, our innovative
          products keep items easily accessible to you while <strong>remaining hidden
          from view.</strong>
        </p>
        <p className="mt-4 md:mt-7 text-lg font-sans">For bulk orders email us at <a className="text-text-decoration-none text-[#807316] italic font-semibold" href="mailto:sales@stealth-masters.com">sales@stealth-masters.com</a></p>
      </div>
    </div>
  );
};
