import "./App.css";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";
import defaultImg from "../src/assets/night-background.jpg";

function App() {
  const [wallpaper, setWallpaper] = useState(defaultImg);
  const changeWallpaper = (img) => {
    setWallpaper(img);
  };

  return (
    <div className="App">
      <Sidebar changeWallpaper={changeWallpaper} />
      <Home wallpaper={wallpaper} />
    </div>
  );
}

export default App;
