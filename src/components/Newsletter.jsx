import React from 'react'
import image1 from '../assets/newsletter-img.png'
import image2 from '../assets/85.jpg'
import image3 from '../assets/86.jpg'
import image4 from '../assets/87.jpg'


const Newsletter = () => {
  return (
    <div className="bg-[#fef7ef]">
      <div className="container m-auto pt-16 px-2 lg:px-0">
        <div className="border overflow-hidden border-black bg-[#1fafa4] grid md:grid-cols-4 gap-2 h-72 rounded-2xl">
          <div data-aos="zoom-in-up" className="hidden md:flex  justify-center items-end">
            <img src={image1} alt="newsletter image" className="h-72" />
          </div>
          <div data-aos="fade-up" className="col-span-2 flex flex-col justify-evenly py-4 items-center">
            <h2 className="playfair text-4xl text-center  pb-4">
              Sign up to get notifications for every new podcast release
            </h2>
            <input type="email" name="email" id="email" placeholder='Enter your email address' className='p-2 rounded-lg w-3/4 focus:outline-2'/>
          </div>
          <div data-aos="zoom-in-up" className="hidden md:flex justify-center items-center gap-4">
            <img src={image2} alt="image" className='rounded-full h-28' />
            <img src={image3} alt="image" className='hidden lg:flex rounded-full h-20 ml-8 mb-16' />
            <img src={image4} alt="image" className=' hidden lg:flex rounded-full h-20 mr-16 mt-20' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter