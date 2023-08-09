import { useState, useEffect } from 'react';

import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './components/SearchResults/SearchResults'
import Playlist from './components/Playlist/Playlist'

import styles from './App.module.css'

const apiKey = process.env.REACT_APP_API_KEY;
const apiSecret = process.env.REACT_APP_API_SECRET;


function App() {
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


    return (
        <div className={styles.app}>
            <SearchBar/>
            <SearchResults/>
            <Playlist/>
        </div>
    );
}

export default App;
