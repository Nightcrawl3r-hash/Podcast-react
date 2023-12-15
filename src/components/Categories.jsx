import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

const Data = [
  {
    image:
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Product Designer",
    length: "14 episodes = 140 minutes",
  },
  {
    image:
      "https://www.ipanovia.com/wp-content/uploads/2022/03/website-marketing-strategies.jpeg",
    title: "Digital Marketing",
    length: "9 episodes = 90 minutes",
  },
  {
    image:
      "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2023_08_Corporate-Strategy-1.jpg",
    title: "Business Strategy",
    length: "12 episodes = 120 minutes",
  },
  {
    image:
      "https://images.yourstory.com/cs/1/3722e3f0-8606-11e9-ac68-d7be22d26206/success-503509_960_7201560930999569.jpg?fm=png&auto=format&w=800",
    title: "Success Story",
    length: "10 episodes = 100 minutes",
  },
  {
    image:
      "https://images.squarespace-cdn.com/content/v1/6146224245cef54e6a945f5c/c9d8e3bf-778e-467e-8d7c-14e734e28f8f/Self-Improvement-Tips-To-Change-Life+edit.jpg",
    title: "Self-improvement",
    length: "13 episodes = 160 minutes",
  },
  {
    image:
      "https://images.surferseo.art/3d01232c-ca88-4edf-9bce-b47e8a97715c.jpeg",
    title: "Startup Founder",
    length: "12 episodes = 120 minutes",
  },
  {
    image: "https://tyonote.com/wp-content/uploads/2021/11/The_Investment.jpg",
    title: "Investment",
    length: "12 episodes = 160 minutes",
  },
  {
    image:
      "https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?height=399&width=711&fit=bounds",
    title: "Technology",
    length: "16 episodes = 180 minutes",
  },
];

const Categories = () => {
  return (
    <div className="bg-[#fef7ef]">
      <div className="container overflow-hidden m-auto flex flex-col gap-4 justify-center items-center py-16 px-2 lg:px-0">
        <p data-aos="fade-down" className="playfair text-4xl text-center md:w-3/5">
          Select and learn about your preferred
          <span className="text-[#936ce0]"> categories</span> of podcast
        </p>
        <p data-aos="fade-down" className="py-2 text-gray-700 md:w-3/5 text-center">
          Join us as we delve into the latest news, trends, and insights on the
          topics that matter most to you. Whether you're interested in
          technology, science, or personal growth, we have something for
          everyone.
        </p>
        <div className="pt-8">
          <CategoryTile />
        </div>
      </div>
    </div>
  );
};

function CategoryTile() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center">
      {Data.map((info) => (
        <div data-aos="flip-up"
          className="grid grid-cols-3 gap-4 bg-white shadow-xl p-2 rounded-xl h-28 justify-center items-center hover:bg-gray-200 transition-all ease-linear cursor-pointer"
          key={info.title}
        >
          <img
            src={info.image}
            alt="image"
            className="w-full h-24 rounded-lg drop-shadow-md"
          />
          <div className="col-span-2  gap-y-2">
            <h2 className="playfair">{info.title}</h2>
            <span className="text-sm text-gray-700">{info.length}</span>
            <PlayButton />
          </div>
        </div>
      ))}
    </div>
  );
}

function PlayButton() {
  return (
    <div className="flex items-center gap-2">
      <FaCirclePlay size={24} className="text-[#936ce0]" />
      <h2 className=" text-sm font-bold text-gray-800">Play Now</h2>
    </div>
  );
}
export default Categories;
