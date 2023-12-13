import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#fef7ef]">
      <div className="container m-auto py-16">
        <div className="grid grid-cols-5 gap-4 ">
          <div className="col-span-2">
            <Logo />
            <p className="pt-4 text-gray-800 w-2/3">
              2023 Best Podcast Award winner and choice for setting the standard
              for excellence in the industry, offering innovative features,
              intuitive design, and unparalleled support for creators. Whether
              you're a curious learner, a passionate enthusiast or just in need
              of some entertaining distraction, this is the best platform for
              you. Don't miss out and join today!
            </p>
          </div>
          <div className="">
            <Links title={`Quick Links`} />
            <section className="flex flex-col gap-y-1 ">
              <SubLink link={`Features`} />
              <SubLink link={`How it Works`} />
              <SubLink link={`Pricing`} />
              <SubLink link={`Categories`} />
              <SubLink link={`About`} />
            </section>
          </div>
          <div className="">
            <Links title={`Other Links`} />
            <section className="flex flex-col gap-y-1">
              <SubLink link={`Privacy`} />
              <SubLink link={`Terms & Conditions`} />
              <SubLink link={`Disclaimer`} />
              <SubLink link={`FAQ`} />
            </section>
          </div>
          <>
            <Socials />
          </>
        </div>
      </div>
    </div>
  );
};

function Links({ title }) {
  return (
    <div className="text-xl pb-4">
      <h2 className="playfair">{title}</h2>
    </div>
  );
}
function SubLink({ link }) {
  return (
    <div className="">
      <Link
        to="/"
        className="text-gray-700 text-sm hover:underline  font-semibold underline-offset-2"
      >
        {link}
      </Link>
    </div>
  );
}

function Socials() {
  return (
    <div className="">
      <div className="flex gap-4 items-center">
        <FaFacebook  size={36} className="text-gray-700 hover:text-[#936ce0] cursor-pointer transition-all ease-in-out"/>
        <FaTwitter size={36} className="text-gray-700 hover:text-[#936ce0] cursor-pointer transition-all ease-in-out"/>
        <FaInstagram size={36} className="text-gray-700 hover:text-[#936ce0] cursor-pointer transition-all ease-in-out"/>
        <FaPinterest size={36} className="text-gray-700 hover:text-[#936ce0] cursor-pointer transition-all ease-in-out"/>
      </div>
    </div>
  );
}
export default Footer;
