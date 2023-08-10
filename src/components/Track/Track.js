import styles from './Track.module.css';

function Track({song, action, id}){
    const handleClick = (event) => {
        action(id);
    }

    return(
        <div className={styles.track}>
            <div className={styles.info}>
                <h4>{song.name}</h4>
                <h5>{song.artists[0].name}</h5>
            </div>
            <button onClick={handleClick} className={styles.action}>&#43;</button>
        </div>
    )
}

export default Track;