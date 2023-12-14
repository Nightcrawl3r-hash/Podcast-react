import React from "react";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/88.png";
import image4 from "../assets/play.jpg";
const Hero = () => {
  return (
    <div className="bg-[#fef7ef]">
      <div className="container m-auto h-screen">
        <div className="grid grid-cols-2 justify-center">
          <div className=""></div>

          <div className="relative flex h-screen">
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
            <img src={image4} alt="image" className="absolute top-20 right-56 h-24  drop-shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
