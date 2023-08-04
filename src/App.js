import { useState } from 'react';

import SearchContainer from './containers/SearchContainer.js';
import SongsContainer from './containers/SongsConatiner';
import PlaylistContainer from './containers/PlaylistContainer';

import styles from './styles/App.module.css';

const apiKey = process.env.REACT_APP_API_KEY;
const apiSecret = process.env.REACT_APP_API_SECRET;

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className={styles.app}>
      <SearchContainer className={styles.search}/>
      <SongsContainer className={styles.songs} search={search}/>
      <PlaylistContainer className={styles.playlist}/>
    </div>
  );
}

export default App;
