import React from "react";
import "./home.css";

import AudioPlayer from "../AudioPlayer/AudioPlayer";
const Home = () => {
  return (
    <div className="homepage-container">
      <div></div>
      <div>
        <AudioPlayer />
      </div>
    </div>
  );
};
export default Home;
