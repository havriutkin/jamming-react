import styles from './Track.module.css';

function Track({song}){
    return(
        <div className={styles.track}>
            <h4>{song.name}</h4>
            <h5>{song.artists[0].name}</h5>
        </div>
    )
}

export default Track;