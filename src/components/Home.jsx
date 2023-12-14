import React from "react";
import Newsletter from "./Newsletter";
import Signup from "./Signup";
import Features from "./Features";
import Pricing from "./Pricing";
import Categories from "./Categories";
import WhatmakesUsUnique from "./WhatmakesUsUnique";
import Creators from "./Creators";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero/>
      <Creators/>
      <WhatmakesUsUnique />
      <Features />
      <Categories />
      <Signup />
      <Pricing />
      <Newsletter />
    </div>
  );
};

export default Home;
