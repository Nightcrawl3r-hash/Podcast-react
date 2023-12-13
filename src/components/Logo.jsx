import React from 'react'
import { FaPodcast } from "react-icons/fa";

const Logo = () => {
  return (
    <div className=''>
      <h2 className="flex gap-2 items-center playfair text-2xl">
        <span className="">
          <FaPodcast className="text-[#936ce0]"  size={24}/>
        </span>
        Podcast
      </h2>
    </div>
  );
}

export default Logo