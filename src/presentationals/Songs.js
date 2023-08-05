import styles from '../styles/Songs.module.css';

function Songs({songs}){
    let toRender = ''
    if (songs){
        toRender = songs.map(song => {
          return (
            <li>
              <div className={styles.description}>
                <h3>{song.name}</h3>
                <h4>{song.artists[0].name}</h4>
              </div>
              <button>&#43;</button>
            </li>
          )
        });
    }

    return (
        <div className={styles.songs}>
          <ul>
            {toRender}
          </ul>
        </div>
    );
}

export default Songs;