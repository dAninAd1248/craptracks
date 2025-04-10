import { getTrackIds, getTrackPath } from './scripts/scripts';

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
    <AudioPlayer src={getTrackPath(trackId)} />
  )
}

function App() {
  const tracks = getTrackIds();
  return (
    <table>
      {tracks.map(track =>
        <tr><Post trackId={track} /></tr>
      )}
    </table>
  )
}

export default App
