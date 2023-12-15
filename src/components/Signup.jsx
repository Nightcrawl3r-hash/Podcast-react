import React from "react";
import image1 from "../assets/modal-img.png";
import { MdArrowOutward } from "react-icons/md";
import image2 from "../assets/88.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="bg-[#fef7ef]">
      <div className="container m-auto pt-16 px-2 lg:px-0">
        <div className="border overflow-hidden border-black bg-[#e0a12c] grid md:grid-cols-2 gap-2 h-72 rounded-2xl relative">
          <div data-aos="fade-up" className=" p-2 lg:p-8">
            <h2 className="playfair text-3xl lg:text-5xl pb-2">
              Are you excited to get started on the journey of becoming a new
              podcaster?
            </h2>
            <p className="text-gray-800 text-xl">
              Sign up to get monthly insights to help you succeed!
            </p>
            <Sign />
          </div>
          <div data-aos="zoom-in" className=" hidden md:flex absolute  bottom-0  right-0 lg:right-40">
            <img src={image1} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

function Sign() {
  return (
    <div className="my-2 w-max ">
      <Link
        to="/"
        className="bg-black py-2 px-4 text-gray-100 rounded-lg flex items-center gap-2 hover:outline-white"
      >
        <span className="text-lg">Sign Up</span>
        <MdArrowOutward size={24} />
      </Link>
    </div>
  );
}
export default Signup;
