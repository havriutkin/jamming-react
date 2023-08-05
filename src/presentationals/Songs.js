function Songs({songs}){
    let toRender = ''
    if (songs){
        toRender = songs.map(el => <li>{el.name}</li>);
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