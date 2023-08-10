import Track from '../Track/Track';

import styles from './Playlist.module.css';

function Playlist({playlist, action}){
    let toRender = '';

    if (playlist.length != 0){
        toRender = (
            <>
                <ul>            
                    {
                        playlist.map(song => 
                            <li><Track song={song} action={action} id={playlist.indexOf(song)} symbol={<>&minus;</>}/></li>)
                    }
                </ul>
                <form className={styles.addForm}>
                    <label for='name'>Enter a name of playlist</label>
                    <input id='name' name='name' type='text'></input>
                    <button type='submit'>Add playlist to Spotify</button>
                </form>
            </>
        );
    }

    return(
        <div className={styles.playlist}>
            <h3>Playlist</h3>
            {toRender}    
        </div>
    )
}

export default Playlist