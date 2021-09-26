import React from "react";
import Home from "../components/Home";
import HomeAbout from "../components/HomeAbout";
import HomeFeatures from "../components/HomeFeature";
import { useHistory } from 'react-router-dom';

const HomePage = () => {
  const history = useHistory()
  return (
    <div style={{minHeight: '80vh'}}>
      <Home history = {history}/>
      <HomeFeatures />
      <HomeAbout />
    </div>
  );
};

export default HomePage;
