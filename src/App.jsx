import React, { useState, useEffect } from 'react'
import { getAllTrackNames, getTrackPath } from './scripts/scripts';
import Upload from './Upload';

import './App.css'

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

const App = () => {
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    async function fetchTracks() {
      const ids = await getAllTrackNames()
      setTracks(ids)
    }

    fetchTracks()
  }, [])

  return (
    <div
      className='children-mb'
      style={{
        display: "flex",
        flexDirection: "column"
      }}>
      <Upload />
      {tracks.map(track =>
        <Post key={track} trackName={track} />
      )}
    </div>
  )
}

export default App
