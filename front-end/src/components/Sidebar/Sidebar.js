import React, { useState } from "react";
import Tasks from "../Tasks/Tasks";
import Theme from "../Theme/Theme";
import { TiDelete } from "react-icons/ti";
import { IoMenu } from "react-icons/io5";
import "./sidebar.css";

const Sidebar = ({ changeWallpaper }) => {
  const [isClosed, setIsClosed] = useState(true);

  const showHideSidebar = () => {
    setIsClosed((prev) => !prev);
  };

  return (
    <div
      className="sidebar-container"
      style={{
        width: isClosed ? "70px" : "375px",
        overflow: "hidden",
        transition: "width 300ms ease-in-out",
      }}
    >
      <div className="sidebar-header">
        {isClosed ? (
          <button className="menu-button" onClick={showHideSidebar}>
            <IoMenu />
          </button>
        ) : (
          <button className="close-button" onClick={showHideSidebar}>
            <TiDelete />
          </button>
        )}
      </div>

      {!isClosed && (
        <div className="sidebar-bottom-container">
          <Tasks />
          <Theme changeWallpaper={changeWallpaper} />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
