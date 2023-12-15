import React from "react";
import { TiTickOutline } from "react-icons/ti";

const Pricing = () => {
  return (
    <div className="bg-[#fef7ef]">
      <div className="container m-auto py-16 px-2 lg:px-0">
        <section className="flex overflow-hidden flex-col gap-4 justify-center items-center">
          <p data-aos="fade-down" className="playfair text-4xl text-center md:w-3/5">
            Share your views towards your favorite topic at
            <span className="text-[#936ce0]"> affordable prices</span>
          </p>
          <div className= " overflow-hidden grid md:grid-cols-2 gap-6 py-4 lg:w-2/5 md:px-20 lg:px-0">
            <Basic />
            <Premium />
          </div>
        </section>
      </div>
    </div>
  );
};

function Basic() {
  return (
    <div data-aos="flip-up" className=" border border-black bg-[#936ce0] p-4 rounded-xl text-gray-100 flex flex-col items-center gap-4">
      <h2 className="text-3xl playfair text-center">Basic</h2>
      <h1 className="text-center text-4xl font-bold py-2">$30</h1>
      <section className="flex flex-col gap-1">
        <GrayText text={`Up to 20 shows`} />
        <GrayText text={`Unlimited episodes`} />
        <GrayText text={`50,000 monthly downloads`} />
        <GrayText
          text={`Price shown after 40% discount applied. Discount applicable for first 12 months.`}
        />
      </section>
      <Buttons bg={`black`} />
    </div>
  );
}

function Premium() {
  return (
    <div data-aos="flip-up" className=" border border-black p-4 rounded-xl flex flex-col items-center gap-4 ">
      <h2 className="text-3xl playfair text-center">Premium</h2>
      <h1 className="text-center text-4xl font-bold py-2">$60</h1>
      <section className="flex flex-col gap-1">
        <GrayText text={`Pre & post roll ads`} />
        <GrayText text={`Transcription (10hr/month)`} />
        <GrayText text={`100,000 downloads/month`} />
        <GrayText
          text={`Advanced podcast with Google Analytics, Integration, Custom Host Bio, Domains.`}
        />
      </section>
      <Buttons bg={`[#1fafa4]`} />
    </div>
  );
}
function GrayText({ text }) {
  return (
    <p className="flex  items-start">
      <span className="">
        <TiTickOutline size={24} />
      </span>
      {text}
    </p>
  );
}

function Buttons({ bg, hover }) {
  return (
    <div className="my-4">
      <a
        href="#"
        className={`bg-${bg} text-gray-100 py-2 px-4 rounded-lg hover:outline-white hover:bg-${hover}`}
      >
        Get 7 days free trial
      </a>
    </div>
  );
}
export default Pricing;
