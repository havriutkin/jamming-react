import logo from './logo.svg';
import './App.css';

import Search from './presentationals/Search.js';
import Songs from './presentationals/Songs.js';
import Playlist from './presentationals/Playlist.js';

function App() {
  return (
    <div className="App">
      <Search/>
      <Songs/>
      <Playlist/>
    </div>
  );
}

export default App;
