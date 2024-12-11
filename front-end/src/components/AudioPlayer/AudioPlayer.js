import React, { useState, useRef, useEffect } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { BiSkipPreviousCircle } from "react-icons/bi";
import { BiSkipNextCircle } from "react-icons/bi";
import { FaRegCirclePause } from "react-icons/fa6";
import track1 from "../../assets/HoliznaCC0 - Blue Skies.mp3";
import track2 from "../../assets/HoliznaCC0 - Kids.mp3";
import track3 from "../../assets/HoliznaCC0 - Laundry On The Wire.mp3";
import track4 from "../../assets/HoliznaCC0 - Mushrooms.mp3";
import track5 from "../../assets/HoliznaCC0 - Spring At Last.mp3";
import track6 from "../../assets/HoliznaCC0 - Waves.mp3";
import track7 from "../../assets/HoliznaCC0 - Windows Down.mp3";
import "./audioPlayer.css";

const AudioPlayer = () => {
  const tracks = [
    { id: 1, title: "Blue Skies", src: track1 },
    { id: 2, title: "Kids", src: track2 },
    { id: 3, title: "Laundry On The Wire", src: track3 },
    { id: 4, title: "Mushrooms", src: track4 },
    { id: 5, title: "Spring At Last", src: track5 },
    { id: 6, title: "Waves", src: track6 },
    { id: 7, title: "Windows Down", src: track7 },
  ];

  const [currentSong, setCurrentSong] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong]);

  const playPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const previousSong = () => {
    const currentIndex = tracks.findIndex(
      (track) => track.id === currentSong.id
    );
    const previousIndex =
      currentIndex === 0 ? tracks.length - 1 : currentIndex - 1;
    setCurrentSong(tracks[previousIndex]);
  };

  const nextSong = () => {
    const currentIndex = tracks.findIndex(
      (track) => track.id === currentSong.id
    );
    const nextIndex = currentIndex === tracks.length - 1 ? 0 : currentIndex + 1;
    setCurrentSong(tracks[nextIndex]);
  };

  return (
    <div className="audio-player">
      <audio
        src={currentSong.src}
        preload="metadata"
        type="audio/mpeg"
        ref={audioRef}
        onEnded={nextSong}
      ></audio>
      <div className="controlls">
        <button onClick={previousSong}>
          <BiSkipPreviousCircle />
        </button>
        <button onClick={playPause}>
          {isPlaying ? <FaRegCirclePause /> : <FaRegPlayCircle />}
        </button>
        <button onClick={nextSong}>
          <BiSkipNextCircle />
        </button>
      </div>
    </div>
  );
};
export default AudioPlayer;
