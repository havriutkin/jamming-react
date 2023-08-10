import Track from '../Track/Track';

import styles from './SearchResults.module.css'

function SearchResults({songs}){
    let toRender = '';

    if (songs){
        toRender = songs.map(song => {
            return <li><Track song={song}/></li>
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