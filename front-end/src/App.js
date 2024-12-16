import "./App.css";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState, useEffect } from "react";
import defaultImg from "../src/assets/night-background.jpg";

function App() {
  const [wallpaper, setWallpaper] = useState(defaultImg);
  const [tracks, setTracks] = useState([]);

  const changeWallpaper = (img) => {
    setWallpaper(img);
  };

  useEffect(() => {
    fetch("http://localhost:1337/api/audio-players?populate=*")
      .then((response) => response.json())
      .then((data) => setTracks(data.data));
  }, []);

  return (
    <>
      <Sidebar changeWallpaper={changeWallpaper} />
      <Home wallpaper={wallpaper} tracks={tracks} />
    </>
  );
}

export default App;
