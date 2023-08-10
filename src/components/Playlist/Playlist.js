import Track from '../Track/Track';

import styles from './Playlist.module.css';

function Playlist({playlist, action}){
    let toRender = '';

    if (playlist){
        toRender = playlist.map(song => {
            return <li><Track song={song} action={action} id={playlist.indexOf(song)}/></li>
        });
    }

    return(
        <div className={styles.playlist}>
            <h3>Playlist</h3>
            <ul>
                {toRender}
            </ul>
        </div>
    )
}

export default Playlist