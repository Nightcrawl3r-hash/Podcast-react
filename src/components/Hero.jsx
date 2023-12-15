import React from "react";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/88.png";
import image4 from "../assets/play.jpg";
import { FaCirclePlay } from "react-icons/fa6";


const Hero = () => {
  return (
    <div className="bg-[#fef7ef]">
      <div className="container m-auto h-screen  px-2 lg:px-0">
        <div className=" overflow-hidden grid md:grid-cols-2 justify-center">
          <div data-aos="fade-right" className="flex flex-col justify-center gap-y-6">
            <h2 className="playfair text-xl text-[#936ce0]">
              New Sessions Available
            </h2>
            <p className="playfair text-7xl  capitalize ">
              The best placer to listen to your favourite
              <span className="text-[#936ce0]"> podcasts</span>
            </p>
            <p className="text-gray-700 md:w-3/4">
              Looking for a new way to stay informed and entertained? Look no
              further! With high-quality audio and expert hosts, our podcasts
              will keep you engaged and up-to-date on the latest trends and
              news. So why wait? Check us out today and start listening now!
            </p>

            <section className="flex  gap-4">
              <a
                href="#"
                className="bg-[#936cdf]  text-gray-100 rounded-lg px-4 py-2 hover:drop-shadow-xl transition-all ease-in-out duration-150 hover:bg-purple-500"
              >
                Start your free trial
              </a>
              <a
                href="#"
                className="flex gap-2 items-center hover:text-[#936ce0]"
              >
                <FaCirclePlay size={24} />
                see how it works
              </a>
            </section>
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">200M +</p>
              <h3 className="text-gray-700">Worldwide Listeners</h3>
            </div>
          </div>

          <div data-aos="zoom-in" className="relative  md:h-screen hidden md:flex ">
            <img
              src={image1}
              alt="image"
              className="absolute top-0 right-0 bg-blue-500 px-6 pt-6 rounded-b-full h-1/2  "
            />
            <img
              src={image2}
              alt="imagae"
              className=" absolute bottom-0 bg-orange-400 px-6 pt-6 rounded-t-full"
            />
            <img
              src={image3}
              alt="wave-image"
              className="h-36 absolute bottom-8 right-36"
            />
            <img
              src={image4}
              alt="image"
              className="absolute top-20 right-56 h-24  drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
