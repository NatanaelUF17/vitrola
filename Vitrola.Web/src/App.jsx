import { useEffect, useState } from 'react'
import { getSongsService } from '../src/services/songService.js';
import { addSonRequestService } from '../src/services/songRequestService.js';
import './App.css'

function App() {
  const [songs, setSongs] = useState([]);
  const [isAddingSong, setIsAddingSong] = useState(false);
  const [newSongForAdding, setNewSongForAdding] = useState({
    songName: '',
    songArtist: '',
  });

  useEffect(() => {
    async function fetchSongs() {
      await getSongsService()
      .then(data => setSongs(data));
    }
    fetchSongs();
  }, []);

  const handleAddingNewSongRequest = async () => {
    await addSonRequestService(newSongForAdding, isAddingSong);
  }

  const handleSongRequest = async (id) => {
    if (songs.length > 0) {
      const song = songs.find(song => song.id === id);
      await addSonRequestService(song);
    }
  }

  const handleChange = (e) => {
    const newSongRequest = { ...newSongForAdding, [e.target.name] : e.target.value };
    setNewSongForAdding(newSongRequest);
  }

  return (
    <div className="App">
      <h1>Songs Vitrola</h1>
      <button onClick={() => setIsAddingSong(!isAddingSong)}>Request song</button>
      {isAddingSong && 
        <div>
          <input 
            onChange={handleChange} 
            type='text' 
            value={newSongForAdding.songName}
            name="songName"
            placeholder='Song name' 
          />
          <input 
            onChange={handleChange} 
            type='text' 
            placeholder='Song artist'
            name="songArtist" 
            value={newSongForAdding.songArtist}
          />
          <button onClick={handleAddingNewSongRequest}>Save request</button>
        </div>
      }
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
    </div>
  )
}

export default App
