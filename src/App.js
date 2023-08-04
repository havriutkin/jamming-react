import SearchContainer from './containers/SearchContainer.js';
import SongsContainer from './containers/SongsConatiner';
import PlaylistContainer from './containers/PlaylistContainer';

import styles from './styles/App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <SearchContainer className={styles.search}/>
      <SongsContainer className={styles.songs}/>
      <PlaylistContainer className={styles.playlist}/>
    </div>
  );
}

export default App;
