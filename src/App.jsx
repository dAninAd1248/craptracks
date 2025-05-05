import { getTrackIds, getTrackPath } from './scripts/scripts';
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

function Post({ trackId }) {
  return (
    <AudioPlayer src={getTrackPath(trackId)} style={{padding: 10}}/>
  )
}

function App() {
  const tracks = getTrackIds();
  return (
    <div
    className='children-mb'
    style={{
      display: "flex",
      flexDirection: "column"
    }}>
      <Upload />
      {tracks.map(track =>
        <Post trackId={track} />
      )}
    </div>
  )
}

export default App
