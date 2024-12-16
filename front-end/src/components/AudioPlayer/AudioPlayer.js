import React, { useState, useRef, useEffect } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { BiSkipPreviousCircle } from "react-icons/bi";
import { BiSkipNextCircle } from "react-icons/bi";
import { FaRegCirclePause } from "react-icons/fa6";
import "./audioPlayer.css";

const AudioPlayer = ({ tracks }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  useEffect(() => {
    if (tracks.length > 0 && !currentSong) {
      setCurrentSong(tracks[0]);
    }
  }, [tracks, currentSong]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
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

  if (!currentSong) {
    return <div>Loading...</div>;
  }

  return (
    <div className="audio-player">
      <audio
        src={`http://localhost:1337${currentSong.audio_source.url}`}
        preload="metadata"
        type="audio/mpeg"
        ref={audioRef}
        onEnded={nextSong}
      ></audio>
      <div className="audio-player-content">
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

        <div className="track-details">
          <div>
            <p>{currentSong.title}</p>
            <p>{currentSong.artist}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AudioPlayer;
