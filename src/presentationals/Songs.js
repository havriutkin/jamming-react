import styles from '../styles/Songs.module.css';

function Songs({songs, onClick}){

    const handleClick = (event) => {
        onClick(songs[event.target.id]);
    }

    let toRender = ''
    if (songs){
        toRender = songs.map(song => {
          return (
            <li>
              <div className={styles.description}>
                <h3>{song.name}</h3>
                <h4>{song.artists[0].name}</h4>
              </div>
              <button id={songs.indexOf(song)} onClick={handleClick}>&#43;</button>
            </li>
          )
        });
    }

    return (
        <div className={styles.songs}>
          <h2>Serach results</h2>
          <ul>
            {toRender}
          </ul>
        </div>
    );
}

export default Songs;