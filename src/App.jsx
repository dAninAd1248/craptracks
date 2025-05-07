import React, { useState, useEffect } from 'react'
import { getAllTrackNames } from './scripts/scripts';
import Upload from './Upload';
import Post from './Post';

import './App.css'

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
