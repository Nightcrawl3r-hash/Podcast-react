import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import image1 from "../assets/feature-purple-person.png";
import image2 from "../assets/88.png";
import image3 from "../assets/wave.jpg";
import image4 from "../assets/media.jpg";

const WhatmakesUsUnique = () => {
  return (
    <div className="bg-[#fef7ef]">
      <div className="container m-auto py-16 px-2 lg:px-0">
        <div className=" overflow-hidden grid  md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <div data-aos="fade-right" className="flex flex-col gap-y-4">
            <p className="playfair text-4xl lg:text-center ">
              What makes us
              <span className="text-[#936ce0]"> unique</span> from others?
            </p>
            <h2 className="text-gray-700">
              Here are the 4 reasons that make you understand why we are unique!
            </h2>
            <section className="">
              <TickText text={`Record your episodes at any occasions.`} />
              <TickText text={`Talk to the people who inspire you.`} />
              <TickText text={`Let other people know about your thoughts.`} />
              <TickText text={`Available on all platforms.`} />
            </section>
            <KnowMore />
          </div>

          <div className="relative flex  justify-center lg:col-span-2 order-first md:order-last">
            <img src={image1} alt="image" className="z-30 " />
            <img src={image2} alt="wave" className="absolute top-0" />
            <img
              src={image3}
              alt=""
              className="hidden lg:flex z-40 rounded-lg h-36 absolute right-64 bottom-20"
            />
            <img
              src={image4}
              alt="image"
              className="z-20 rounded-lg absolute right-0 h-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function TickText({ text }) {
  return (
    <div className="flex items-center gap-2">
      <CiCircleCheck size={24} className="text-[#1fafa4]" />
      <span className="font-bold text-gray-800">{text}</span>
    </div>
  );
}

function KnowMore() {
  return (
    <button className="flex gap-2 items-center px-4 py-2 bg-black text-gray-100 w-max rounded-lg hover:drop-shadow-2xl">
      Know more <FaArrowRightLong />
    </button>
  );
}

export default WhatmakesUsUnique;
