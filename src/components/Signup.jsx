import React from "react";
import image1 from "../assets/modal-img.png";
import { MdArrowOutward } from "react-icons/md";

const Signup = () => {
  return (
    <div className="bg-[#fef7ef]">
      <div className="container m-auto pt-16">
        <div className="border border-black bg-[#e0a12c] grid grid-cols-2 gap-2 h-72 rounded-2xl">
          <div className="p-8">
            <h2 className="playfair text-5xl pb-4">
              Are you excited to get started on the journey of becoming a new
              podcaster?
            </h2>
            <p className="text-gray-800 text-xl">
              Sign up to get monthly insights to help you succeed!
            </p>
            
          </div>
          <div className="relative flex justify-center items-end">
            <img src={image1} alt="image" className="absolute pt-4 " />
          </div>
        </div>
      </div>
    </div>
  );
};

function Sign() {
  return (
    <div className="my-2">
      <a href="#" className="bg-black py-2 px-4 text-gray-100 rounded-lg flex gap-2 items-center">Sign Up <MdArrowOutward size={24} hover:outline-white/></a>
    </div>
  );
}
export default Signup;
