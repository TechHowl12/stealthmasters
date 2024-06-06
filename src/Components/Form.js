import React, { useState } from "react";
import order from "../assets/order-Id.png";
import { Triangle } from "react-loader-spinner";
import { MyDatePicker } from "./MyDatePicker";

export const Form = ({ setRegister }) => {
  const [isHover, setIsHover] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [purchaseDate,setPurchaseDate] = useState(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    order: "",
    date: "",
    place: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    order: "",
    date: "",
    place: "",
  });

  const formatOrderId = (value) => {
    
    const numbersOnly = value.replace(/\D/g, '');

    let formattedValue = numbersOnly;
    if (numbersOnly.length > 3) {
      formattedValue = `${numbersOnly.slice(0, 3)}-${numbersOnly.slice(3)}`;
    }
    if (numbersOnly.length > 10) {
      formattedValue = `${formattedValue.slice(0, 11)}-${formattedValue.slice(11)}`;
    }

    return formattedValue;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "order") {
      const formattedOrderId = formatOrderId(value);
      setFormState((prevState) => ({
        ...prevState,
        [name]: formattedOrderId,
      }));
    } else if (name === "date") {
      const formattedDate = value ? value.format("MM-DD-YYYY") : "";
      setFormState((prevState) => ({
        ...prevState,
        [name]: formattedDate,
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formState.name) {
      newErrors.name = "Name is required*";
    }
    if (!formState.email) {
      newErrors.email = "Email is required*";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email is invalid*";
    }
    if (!formState.phone) {
      newErrors.phone = "Phone number is required*";
    } else if (!/^\+?1?\d{10}$/.test(formState.phone)) {
      newErrors.phone = "Phone number is invalid*";
    }
    if (!formState.order) {
      newErrors.order = "Order ID is required*";
    } else if (!/^\d{3}-\d{7}-\d{7}$/.test(formState.order)) {
      newErrors.order = "Order ID must be in the format 123-1234567-1234567*";
    }
    if (!formState.date) {
      newErrors.date = "Date of purchase is required*";
    }
    if (!formState.place) {
      newErrors.place = "Place of purchase is required*";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

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
      setIsSubmitted(true);
      setRegister(true);
      setPurchaseDate(formState.date);
      setIsLoading(false);
      setFormState({
        name: "",
        email: "",
        phone: "",
        order: "",
        date: "",
        place: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const today = new Date(purchaseDate);
  const futureDate = new Date();
  futureDate.setDate(today.getDate() + 90);

  const formatDate = (date) => {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  };

  return (
    <div>
      <h4
        className={
          isSubmitted
            ? "invisible  md:my-7"
            : "text-[#E6DCC8] block text-center roboto text-sm sm:text-xl md:text-xl my-7 tracking-wide"
        }
      >
        Fill Out This Form To
        <span className="font-semibold"> Activate Your Warranty</span>
      </h4>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className={
          isSubmitted
            ? "h-[50vh] w-full bg-[#141414] rounded-xl p-4 text-[#E6DCC8] border border-[#E6DCC8] animate-flip"
            : "h-auto w-full bg-[#141414] rounded-xl p-4 text-[#E6DCC8] border border-[#E6DCC8]"
        }
      >
        {isSubmitted ? (
          <div className="animate-flip h-full flex flex-col justify-center items-center text-[#E6DCC8]">
            <h1 className="text-md sm:text-3xl md:text-4xl">
              Your warranty has been activated.
            </h1>
            <h3 className="mt-3 text-xs sm:text-xl md:text-2xl">
              Valid from Date <span className="font-semibold text-sm sm:text-2xl md:text-3xl">{formatDate(today)}</span> to Date{" "}
              <span className="font-semibold text-sm sm:text-2xl md:text-3xl">{formatDate(futureDate)}</span>
            </h3>
          </div>
        ) : (
          <div>
            <h2 className="font-semibold text-2xl md:text-3xl text-[#E6DCC8]">
              Warranty Form:
            </h2>
            <div className="grid mt-4 md:mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-10 gap-y-3 md:gap-y-5">
              <div>
                <label
                  className="font-normal roboto text-sm md:text-lg tracking-wide"
                  htmlFor="name"
                >
                  Name* :
                </label>
                {errors.name && (
                  <span className="text-red-500 text-sm ml-2">
                    {errors.name}
                  </span>
                )}
                <input
                  onChange={handleInputChange}
                  value={formState.name}
                  type="text"
                  name="name"
                  className="w-full border border-[#E6DCC8] bg-[#141414] rounded-lg p-2 mt-2"
                />
              </div>
              <div>
                <label
                  className="font-normal roboto text-sm md:text-lg tracking-wide"
                  htmlFor="email"
                >
                  E-Mail* :
                </label>
                {errors.email && (
                  <span className="text-red-500 text-sm ml-2">
                    {errors.email}
                  </span>
                )}
                <input
                  onChange={handleInputChange}
                  value={formState.email}
                  type="email"
                  name="email"
                  className="w-full border border-[#E6DCC8] bg-[#141414] rounded-lg p-2 mt-2"
                />
              </div>
              <div>
                <label
                  className="font-normal roboto text-sm md:text-lg tracking-wide"
                  htmlFor="phone"
                >
                  Mobile Number* :
                </label>
                {errors.phone && (
                  <span className="text-red-500 text-sm ml-2">
                    {errors.phone}
                  </span>
                )}
                <input
                  onChange={handleInputChange}
                  value={formState.phone}
                  type="text"
                  name="phone"
                  className="w-full border border-[#E6DCC8] bg-[#141414] rounded-lg p-2 mt-2"
                />
              </div>
              <div>
                <label
                  className="font-normal roboto text-sm md:text-lg tracking-wide flex items-center gap-x-2"
                  htmlFor="order"
                >
                  Order ID* :
                  <span className="relative">
                    <img
                      onMouseEnter={() => setIsHover(true)}
                      onMouseLeave={() => setIsHover(false)}
                      onClick={() => setIsHover(!isHover)}
                      src={order}
                      alt="Details for order ID"
                      className="cursor-pointer"
                    />
                    {isHover && (
                      <span className="absolute sm:whitespace-nowrap md:whitespace-nowrap top-1/2 left-full transform -translate-y-1/2 ml-2 transition bg-[#E6DCC8] text-[#141414] text-xs py-1 px-2 rounded-md opacity-100 pointer-events-none duration-300">
                        Check your Amazon Email for Order ID
                      </span>
                    )}
                  </span>
                  {errors.order && (
                    <span className="text-red-500 text-sm ml-2">
                      {errors.order}
                    </span>
                  )}
                </label>
                <input
                  onChange={handleInputChange}
                  value={formState.order}
                  type="text"
                  name="order"
                  className="w-full border border-[#E6DCC8] bg-[#141414] rounded-lg p-2 mt-2"
                />
              </div>
              <div>
                <div className="flex items-center">
                  <label
                    className="font-normal roboto text-sm md:text-lg tracking-wide flex items-center gap-x-2"
                    htmlFor="place"
                  >
                    Place of Purchase* :
                  </label>
                  {errors.place && (
                    <span className="text-red-500 text-sm ml-2">
                      {errors.place}
                    </span>
                  )}
                </div>
                <select
                  onChange={handleInputChange}
                  value={formState.place}
                  name="place"
                  className="w-full border border-[#E6DCC8] bg-[#141414] rounded-lg p-2 mt-2"
                >
                  <option value="">Select a place</option>
                  <option value="Amazon">Amazon</option>
                  <option value="D2C Website">D2C Website</option>
                </select>
              </div>
              <div>
                <div className="flex items-center">
                  <label
                    className="font-normal roboto text-sm md:text-lg tracking-wide flex items-center gap-x-2"
                    htmlFor="date"
                  >
                    Date of Purchase* :
                  </label>
                  {errors.date && (
                    <span className="text-red-500 text-sm ml-2">
                      {errors.date}
                    </span>
                  )}
                </div>
                <div className="mt-[0.4rem]">
                  <MyDatePicker
                    name="date"
                    value={formState.date}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="text-[#E6DCC8] font-normal text-xs md:text-lg text-center mt-5">
                *T&C - Warranty is valid for 90 days from date of purchase
              </p>
            </div>
            <div className="w-full flex items-center justify-center">
              <button
                className={`text-[#E6DCC8] border w-28 flex justify-center items-center border-[#E6DCC8] px-5 py-1 text-sm md:text-lg rounded-lg mt-5 md:mt-8 mb-3 transition-all ${
                  isLoading ? "" : "hover:bg-[#E6DCC8] hover:text-[#141414]"
                }`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Triangle
                    visible={true}
                    color="#E6DCC8"
                    width="30"
                    height="30"
                  />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
