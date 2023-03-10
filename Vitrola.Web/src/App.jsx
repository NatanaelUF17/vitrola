import { useEffect, useState } from 'react'
import { getSongsService } from '../src/services/songService.js';
import './App.css'

function App() {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    async function fetchSongs() {
      await getSongsService()
      .then(data => setSongs(data));
    }
    fetchSongs();
  }, []);

  const handleClick = () => {
    console.log(songs);
  }

  const handleSongRequest = (id) => {
    console.log(`Requesting song: ${id}`);
  }

  return (
    <div className="App">
      <h1>Songs Vitrola</h1>
      <ul>
        {songs && songs.map((song) => (
          <li key={song.id} className="list-style">
            <span>song: {song.name}</span>
            <span>url: {song.songUrl}</span>
            <span>thumbnail: {song.thumbnailUrl}</span>
            <button onClick={() => handleSongRequest(song.id)}>Request song</button>
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default App
