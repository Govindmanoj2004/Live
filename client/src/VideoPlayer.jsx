import React, { useEffect, useRef } from 'react';
import flv from 'flv.js';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

const PlyrFlvPlayer = ({ streamKey }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // Initialize flv.js player
    let flvPlayer;
    if (flv.isSupported()) {
      flvPlayer = flv.createPlayer({
        type: 'flv',
        url: `http://localhost:8000/live/${streamKey}.flv`,
      });
      flvPlayer.attachMediaElement(videoRef.current);
      flvPlayer.load();
    }

    // Initialize Plyr
    playerRef.current = new Plyr(videoRef.current, {
      controls: [
        'play',
        'progress',
        'current-time',
        'mute',
        'volume',
        'fullscreen',
      ],
      settings: ['quality', 'speed'],
    });

    return () => {
      if (flvPlayer) {
        flvPlayer.destroy();
      }
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [streamKey]);

  return (
    <div>
      <video
        ref={videoRef}
        className='plyr__video-embed'
        controls
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default PlyrFlvPlayer;
