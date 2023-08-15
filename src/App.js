import { useState, useEffect } from 'react';

import { getAuthUrl } from './utils/auth';

import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './components/SearchResults/SearchResults'
import Playlist from './components/Playlist/Playlist'

import styles from './App.module.css'

const apiKey = process.env.REACT_APP_API_KEY;
const apiSecret = process.env.REACT_APP_API_SECRET;
const searchUrl = 'https://api.spotify.com/v1/search?q=';
const redirectUri = 'http://localhost:3000';
const authUrl = await getAuthUrl(apiKey, redirectUri);

function App() {
    const [token, setToken] = useState('');
    const [userID, setUserID] = useState('');
    const [songs, setSongs] = useState([]);
    const [playlist, setPlaylist] = useState([]);

    // Obtan access token and user ID once auth code is obtained
    useEffect(() => {
        // Check if the URL has an authorization code
        const urlSearchParams = new URLSearchParams(window.location.search);
        const code = urlSearchParams.get('code');
    
        if (code) {
            console.log(code);
            // Get access token
            const body = new URLSearchParams({
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: redirectUri,
                client_id: apiKey,
                code_verifier: localStorage.getItem('code_verifier')
            })

            const parameters = {
                method: 'POST',
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: body,
            };

            fetch('https://accounts.spotify.com/api/token', parameters)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    setToken(data.access_token);
                })
            }
    }, []);

    // Obtain user ID once token is obtained
    useEffect(() => {
        if (token != ''){
            const parameters = {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };

            fetch('https://api.spotify.com/v1/me', parameters)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    setUserID(data.id);
                })
        }
    }, [token])

    // Make get search request to Spotify API
    const handleSearch = (newSearch) => {
        const endpoint = searchUrl + newSearch + '&type=track';
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

    // Make post request to Spotify API to create playlist
    const handlePush = (newPlaylist, name) => {
        // Create playlist
    }

    // Handle pressing 'add' button, takes index of a song in songs
    const handleAdd = (index) => {
        // Check if song is already in a playlist
        const containsElement = playlist.some(element => element.id === songs[index].id)

        if (!containsElement){
            setPlaylist(prev => {
                return [...prev, songs[index]];
            });
        }
    }

    // Handle pressing 'minus' button, takes index of a song in playlist
    const handleDelete = (index) => {
        setPlaylist(prev => {
            return prev.filter(element => element.id !== playlist[index].id);
        });
    }

    let render = <a href={authUrl}>Login with Spotify</a>;

    if (userID){
        render = (
            <div className={styles.app}>
                <SearchBar onSearch={handleSearch}/>
                <SearchResults songs={songs} action={handleAdd}/>
                <Playlist playlist={playlist} action={handleDelete}/>
            </div>
        )
    }

    return (
        <>
            {render}
        </>
    );
}

export default App;
