import React, { useRef, useEffect } from 'react';
import flv from 'flv.js';

const VideoPlayer = ({ streamKey }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (flv.isSupported()) {
      const player = flv.createPlayer({
        type: 'flv',
        url: `http://localhost:8000/live/${streamKey}.flv`
      });
      player.attachMediaElement(videoRef.current);
      player.load();
    }
  }, [streamKey]);

  return <video ref={videoRef} controls />;
};

export default VideoPlayer;
