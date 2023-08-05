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
        <div className={styles.search}>
            <h1>Jammming</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input id="title" name="title" type="text" value={title} onChange={handleChange} className={styles.element}></input>
                <button type="submit" className={styles.element}>Search</button>
            </form>
        </div>
    )
}

export default Search;