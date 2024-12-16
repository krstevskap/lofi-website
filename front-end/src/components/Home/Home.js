import React from "react";
import "./home.css";
import AudioPlayer from "../AudioPlayer/AudioPlayer";

const Home = ({ wallpaper, tracks }) => {
  return (
    <div
      className="homepage-container"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <AudioPlayer tracks={tracks} />
    </div>
  );
};
export default Home;
