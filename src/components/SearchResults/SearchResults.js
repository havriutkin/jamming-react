import Track from '../Track/Track';

import styles from './SearchResults.module.css'

function SearchResults({songs, action}){
    let toRender = '';

    if (songs){
        toRender = songs.map(song => {
            return <li><Track song={song} action={action} id={songs.indexOf(song)} symbol={<>&#43;</>}/></li>
        });
    }

    return(
        <div className={styles.searchResults}>
            <h3>Search Results</h3>
            <ul>
                {toRender}
            </ul>
        </div>
    )
}

export default SearchResults