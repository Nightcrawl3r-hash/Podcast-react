import React from "react";
import image1 from "../assets/podcasting-mic-img.png";
import { FaMicrophoneAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";
import { MdWorkspacePremium } from "react-icons/md";

const Features = () => {
  return (
    <div className="bg-white relative">
      <img src={image1} alt="mic-image" className=" hidden md:flex absolute h-64 w-1/5" />
      <div className="container m-auto flex flex-col gap-4 justify-center items-center py-16">
        <p className="playfair text-4xl text-center md:w-3/5 ">
          We make your
          <span className="text-[#936ce0]"> podcasting</span> easy!
        </p>
        <p className="py-2 text-gray-700 md:w-3/5 text-center">
          Discover the ultimate podcasting experience with us. Say goodbye to
          cluttered interfaces and endless searching for your next favorite
          show. With us, you can easily find, subscribe, and listen to thousands
          of podcasts all in one place.
        </p>
        <div className="grid lg:grid-cols-4 gap-6 justify-center items-center">
          <FeaturedTile
            bg={`d1f6f3`}
            color={`1bd0c3`}
            comp={<FaMicrophoneAlt />}
            title={`Record your podcast`}
            subtitle={`Record your podcast, you can mention everything about the topic first!`}
          />
          <FeaturedTile
            bg={`fde1d3`}
            color={`f56823`}
            comp={<IoSettingsSharp />}
            title={`Edit your podcast`}
            subtitle={`Listen to the raw version first and then edit where required.`}
          />
          <FeaturedTile
            bg={`f9ecd5`}
            color={`e0a12c`}
            comp={<FiUpload />}
            title={`Upload your podcast`}
            subtitle={`You can make your podcast viral by uploading it with simple steps.`}
          />
          <FeaturedTile
            bg={`e9e2f9`}
            color={`936cdf`}
            comp={<MdWorkspacePremium />}
            title={`Go premium podcast`}
            subtitle={`Opt for the premium versions if you want to unlock the features that will make your work more easy!`}
          />
        </div>
      </div>
    </div>
  );
};

function FeaturedTile({ comp, title, subtitle, bg, color }) {
  const bgColorClass = `bg-[#${bg}]`;
  const textColorClass = `text-[#${color}]`;
  return (
    <div className="flex flex-col gap-4 justify-center items-center text-center">
      <span
        className={`text-3xl rounded-full ${bgColorClass} p-1 ${textColorClass}`}
      >
        {comp}
      </span>
      <p className="playfair text-xl">{title}</p>
      <h3 className="text-gray-700 md:w-3/5 lg:w-full">{subtitle}</h3>
    </div>
  );
}
export default Features;
