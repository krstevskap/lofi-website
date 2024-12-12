import React from "react";
import "./home.css";
import AudioPlayer from "../AudioPlayer/AudioPlayer";

const Home = ({ wallpaper }) => {
  return (
    <div
      className="homepage-container"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <AudioPlayer />
    </div>
  );
};
export default Home;
