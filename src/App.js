import { useState, useEffect } from 'react';

import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './components/SearchResults/SearchResults'
import Playlist from './components/Playlist/Playlist'

import styles from './App.module.css'

const apiKey = process.env.REACT_APP_API_KEY;
const apiSecret = process.env.REACT_APP_API_SECRET;
const baseUrl = 'https://api.spotify.com/v1/search?q=';


function App() {
    const [token, setToken] = useState('');
    const [songs, setSongs] = useState([]);
    const [playlist, setPlaylist] = useState([]);

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

    // Make get search request to Spotify API
    const handleSearch = (newSearch) => {
        const endpoint = baseUrl + newSearch + '&type=track';
        const parameters = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        fetch(endpoint, parameters)
            .then(response => response.json())
                .then(data => setSongs(data.tracks.items))
            .catch(error => {
                console.log(error);
                alert('Error occured!')
                setSongs([]);
            });
    }

    // Handle pressing 'add' button, takes id of a song
    const handleAdd = (index) => {
        // Check if song is already in a playlist
        const containsElement = playlist.some(element => element.id === songs[index].id)

        if (!containsElement){
            setPlaylist(prev => {
                return [...prev, songs[index]];
            });
        }
    }


    return (
        <div className={styles.app}>
            <SearchBar onSearch={handleSearch}/>
            <SearchResults songs={songs} action={handleAdd}/>
            <Playlist playlist={playlist}/>
        </div>
    );
}

export default App;
