import React from 'react';
import VideoPlayer from './VideoPlayer';

const App = () => {
  return (
    <div>
      <h1>Live Stream</h1>
      <VideoPlayer streamKey='stream123' />
    </div>
  );
};

export default App;
