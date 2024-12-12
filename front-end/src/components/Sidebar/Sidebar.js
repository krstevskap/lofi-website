import React, { useState } from "react";
import Tasks from "../Tasks/Tasks";
import { TiDelete } from "react-icons/ti";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import "./sidebar.css";
import Theme from "../Theme/Theme";

const Sidebar = ({ changeWallpaper }) => {
  const [isClosed, setIsClosed] = useState(true);

  const showHideSidebar = () => {
    setIsClosed((prev) => !prev);
  };

  return (
    <>
      {isClosed ? (
        <div
          className="arrow-button-container"
          style={{ animationDuration: "500ms" }}
        >
          <button onClick={showHideSidebar}>
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      ) : (
        <div className="sidebar-container">
          <button className="close-button" onClick={showHideSidebar}>
            <TiDelete />
          </button>
          <div className="sidebar-bottom-container">
            <Tasks />
            <Theme changeWallpaper={changeWallpaper} />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
