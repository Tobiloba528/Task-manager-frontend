import React from "react";
import Home from "../components/Home";
import HomeAbout from "../components/HomeAbout";
import HomeFeatures from "../components/HomeFeature";

const HomePage = () => {
  return (
    <div>
      <Home />
      <HomeFeatures />
      <HomeAbout />
    </div>
  );
};

export default HomePage;
