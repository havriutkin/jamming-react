import {useState} from 'react';

import styles from './SearchBar.module.css'

function SearchBar({onSearch}){
    const [search, setSearch] = useState('');

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(search);
        setSearch('');
    }

    return(
        <form onSubmit={handleSubmit} className={styles.searchBar}>
            <input type="text" value={search} onChange={handleChange}></input>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar