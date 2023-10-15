// components/MediaPlayer.js
import React from 'react';
import { motion } from 'framer-motion';

const MediaPlayer = ({ isPlaying }) => {
  const audioRef = React.useRef();

  React.useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="media-player">
      <audio ref={audioRef} preload="auto">
        <source src="\music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MediaPlayer;
