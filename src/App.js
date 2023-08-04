import SearchContainer from './containers/SearchContainer.js';
import SongsContainer from './containers/SongsConatiner';
import PlaylistContainer from './containers/PlaylistContainer';

function App() {
  return (
    <div className="App">
      <SearchContainer/>
      <SongsContainer/>
      <PlaylistContainer/>
    </div>
  );
}

export default App;
