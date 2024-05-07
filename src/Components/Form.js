import React, { useState } from "react";
import order from "../assets/order-id.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Form = () => {

  const [isHover,setIsHover] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    order: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    };
    try {
      const response = await fetch(
        process.env.REACT_APP_SPREADSHEET_API,
        requestOptions
      );
      toast.success("Success,submitting the form");
      setFormState({
        name: "",
        email: "",
        phone: "",
        order: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
    <ToastContainer/>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="w-full bg-[#EEE7D9] rounded-xl p-4 md:p-8"
      >
        <h2 className="font-semibold text-2xl md:text-3xl text-[#807316] italic">
          Warranty Form:
        </h2>
        <div className="grid mt-4 md:mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-10 gap-y-5">
          <div>
            <label
              className="text-[#807316] font-semibold text-sm md:text-lg tracking-wide"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              onChange={handleInputChange}
              value={formState.name}
              type="text"
              name="name"
              className="w-full bg-[#E4DCC6] rounded-lg p-2 mt-2"
            />
          </div>
          <div>
            <label
              className="text-[#807316] font-semibold text-sm md:text-lg tracking-wide"
              htmlFor="email"
            >
              E-Mail:
            </label>
            <input
              onChange={handleInputChange}
              value={formState.email}
              type="email"
              name="email"
              className="w-full bg-[#E4DCC6] rounded-lg p-2 mt-2"
            />
          </div>
          <div>
            <label
              className="text-[#807316] font-semibold text-sm md:text-lg tracking-wide"
              htmlFor="phone"
            >
              Mobile Number:
            </label>
            <input
              onChange={handleInputChange}
              value={formState.phone}
              type="text"
              name="phone"
              className="w-full bg-[#E4DCC6] rounded-lg p-2 mt-2"
            />
          </div>
          <div>
            <label
              className="text-[#807316] font-semibold text-sm md:text-lg tracking-wide flex items-center gap-x-2"
              htmlFor="order"
            >
              Order ID:
              <span  className="relative">
                <img onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} src={order} alt="Details for order ID" className="cursor-pointer"/>
                {isHover && 
                <span className="absolute whitespace-nowrap top-1/2 left-full transform -translate-y-1/2 ml-2 bg-[#807316] text-white text-xs py-1 px-2 rounded-md opacity-100 pointer-events-none transition-opacity duration-300">
                    Check your Amazon Email for Order ID
                </span>}
                </span>
            </label>
            <input
              onChange={handleInputChange}
              value={formState.order}
              type="text"
              name="order"
              className="w-full bg-[#E4DCC6] rounded-lg p-2 mt-2"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <button
            type="submit"
            className="text-[#807316] border border-[#807316] px-5 py-1 font-semibold text-sm md:text-lg rounded-lg mt-5 md:mt-8"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
