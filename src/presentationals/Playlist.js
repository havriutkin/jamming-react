import styles from '../styles/Playlist.module.css';

function Playlist({list}){
    return(
        <div className={styles.playlist}>
            <h2>Playlist</h2>
            {list.map(song => {
                return (
                    <li>
                        <div className={styles.description}>
                            <h3>{song.name}</h3>
                            <h4>{song.artists[0].name}</h4>
                        </div>
                        <button>&minus;</button>
                    </li>
                )
            })}
            <form>
                <label for="name">Name of playlist</label>
                <input id="name" type='text' name='name'></input>
                <button type='submit'>Create playlist</button>
            </form>
        </div>
    );
}

export default Playlist;