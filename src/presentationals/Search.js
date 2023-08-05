import styles from '../styles/Search.module.css';
import { useState } from 'react';

function Search({updateSearch}){
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateSearch(title);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label for="title" className={styles.element}>Title</label>
            <input id="title" name="title" type="text" value={title} onChange={handleChange} className={styles.element}></input>

            <button type="submit" className={styles.element}>Search</button>
        </form>
    )
}

export default Search;