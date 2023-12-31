import Songs from '../presentationals/Songs'

import { useState, useEffect } from 'react';

const baseUrl = 'https://api.spotify.com/v1/search?q=';


function SongsConatiner({ search, token, onAdd }){
    const [songs, setSongs] = useState('');

    // Make get request to find songs
    useEffect(() => {
        if (search != ''){
            const endpoint = baseUrl + search + '&type=track';
            const parameters = {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };

            fetch(endpoint, parameters)
                .then(response => response.json())
                .then(data => setSongs(data.tracks.items));
        }
    }, [search]);

    return(
        <Songs songs={songs} onClick={onAdd}/>
    )
}

export default SongsConatiner;