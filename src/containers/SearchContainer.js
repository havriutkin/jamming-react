import Search from "../presentationals/Search";

function SearchContainer(){

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <Search handleSubmit={handleSubmit}/>
    );
}

export default SearchContainer;