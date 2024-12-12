import React from "react";
import "./theme.css";
import img1 from "../../assets/night-background.jpg";
import img2 from "../../assets/sunset-background.jpg";
import img3 from "../../assets/mountains-background.jpg";

const Theme = ({ changeWallpaper }) => {
  return (
    <div className="theme-container">
      <p>Pick a theme</p>
      <div className="buttons">
        <button
          className="theme1"
          onClick={() => changeWallpaper(img1)}
        ></button>

        <button
          className="theme2"
          onClick={() => changeWallpaper(img2)}
        ></button>

        <button
          className="theme3"
          onClick={() => changeWallpaper(img3)}
        ></button>
      </div>
    </div>
  );
};

export default Theme;
