import React from "react";
import { assets, cities } from "../assets/assets";

const HotelReg = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70">
      <form className="flex bg-white rounded-xl max-w-4xl max-md:mx-2">
        <img src={assets.regImage} alt="reg-image" className="w-1/2 rounded-xl hidden md:block" />
        <div className="relative flex flex-col items-center md:1/2 p-8 md:p-10 ">
          <img
            src={assets.closeIcon}
            alt="close-icon"
            className="absolute top-4 right-4 h-4 w-4 cursor-pointer"
          />
          <p className="text-2xl font-semibold mt-6 text-gray-800">Register Your Hotel</p>

          {/* Hotel Name */}
          <div className="w-full mt-4">
            <label htmlFor="name" className="font-medium text-gray-800">
              Hotel Name
            </label>
            <input id="name" type="text" placeholder="Type here..." className="border border-gray-300 rounded text-gray-800 w-full px-3 py-2.5 mt-1 outline-gray-400 font-light " required />
          </div>
          {/* phone */}
          <div className="w-full mt-4">
            <label htmlFor="contact" className="font-medium text-gray-800">
              Phone
            </label>
            <input id="contact" type="text" placeholder="Type here..." className="border border-gray-300 text-gray-800 rounded w-full px-3 py-2.5 mt-1 outline-gray-400 font-light " required />
          </div>
          {/* address */}
          <div className="w-full mt-4">
            <label htmlFor="address" className="font-medium text-gray-800">
              Address
            </label>
            <input id="address" type="text" placeholder="Type here..." className="border border-gray-300 text-gray-800 rounded w-full px-3 py-2.5 mt-1 outline-gray-400 font-light " required />
          </div>
          {/* select city drop down */}
          <div className="w-full mt-4 max-w-60 mr-auto ">
            <label htmlFor=" city" className="font-medium text-gray-800">City</label>
            <select id="city" className="border border-gray-300 rounded w-full px-3 py-2.5 mt-1 outline-gray-400 text-gray-800 font-light" required>
              <option value="" className="capitalize">Select city</option>
              {cities.map((city) => (
                <option value={city} key={city}>{city}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="bg-gray-800 hover:bg-gray-900 transition-all text-white mr-auto px-6 py-2 rounded cursor-pointer mt-6">Register</button>
        </div>
      </form>
    </div>
  );
};

export default HotelReg;
