import styles from './Track.module.css';

function Track({song, action, id, symbol}){
    const handleClick = (event) => {
        action(id);
    }

    return(
        <div className={styles.track}>
            <div className={styles.info}>
                <h4 className={styles.title}>{song.name}</h4>
                <h5 className={styles.artist}>{song.artists[0].name}</h5>
            </div>
            <button onClick={handleClick} className={styles.action}>{symbol}</button>
        </div>
    )
}

export default Track;