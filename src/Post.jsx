import React from 'react'
import { getTrackPath } from './scripts/scripts';

function AudioPlayer({ src }) {
  return (
    <audio controls>
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}

const Post = ({ trackName }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center'}}>
      <AudioPlayer src={getTrackPath(trackName)} />
      <span style={{ marginLeft: 10 }}>{trackName}</span>
    </div>
  )
}

export default Post