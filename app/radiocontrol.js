'use client'
import React from 'react';

const PlayPauseButton = ({ isPlaying, togglePlay }) => {
  return (
    <button className="play-pause-button" onClick={togglePlay}>
      {isPlaying ? 'Pause' : 'Play'}
    </button>
  );
};

export default PlayPauseButton;
