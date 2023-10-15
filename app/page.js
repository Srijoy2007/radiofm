// pages/index.js
'use client'
import React, { useState } from 'react';
import MediaPlayer from '../app/radioplayer';
import RadioStations from '../app/radiostation';
import PlayPauseButton from '../app/radiocontrol';
import Layout from '../app/layout';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Layout>
      <div className="page-content">
        <MediaPlayer isPlaying={isPlaying} />
        <RadioStations />
        <PlayPauseButton isPlaying={isPlaying} togglePlay={togglePlay} />
      </div>
    </Layout>
  );
};

export default Index;
