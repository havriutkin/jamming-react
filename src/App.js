import { useState, useEffect } from 'react';

import SearchContainer from './containers/SearchContainer.js';
import SongsContainer from './containers/SongsConatiner';
import PlaylistContainer from './containers/PlaylistContainer';

import styles from './styles/App.module.css';

const apiKey = process.env.REACT_APP_API_KEY;
const apiSecret = process.env.REACT_APP_API_SECRET;



/*
TODO: Make authorization request in App to obtain access token
*/


function App() {
    const [search, setSearch] = useState('');
    const [token, setToken] = useState('');

    // Obtain access token
    useEffect(() => {
        const authParameters = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${apiSecret}`
        };

        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setToken(data.access_token);
            })
    }, [])


    const handleSubmit = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div className={styles.app}>
            <SearchContainer className={styles.search} onSubmit={handleSubmit}/>
            <SongsContainer className={styles.songs} search={search}
            apiKey={apiKey} apiSecret={apiSecret}/>
            <PlaylistContainer className={styles.playlist}/>
        </div>
    );
}

export default App;
