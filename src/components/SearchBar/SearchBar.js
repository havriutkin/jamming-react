import styles from './SearchBar.module.css'

function SearchBar(){
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit} className={styles.searchBar}>
            <input type="text"></input>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar