import styles from '../styles/Songs.module.css';

function Songs({songs}){
    let toRender = ''
    if (songs){
        toRender = songs.map(song => {
          return (
            <li>
              <h2>{song.name}</h2>
              <h3>{song.artists[0].name}</h3>
              <button>&#43;</button>
            </li>
          )
        });
    }

    return (
        <div>
          <ul>
            {toRender}
          </ul>
        </div>
    );
}

export default Songs;