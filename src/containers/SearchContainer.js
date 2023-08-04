import Search from "../presentationals/Search";

function SearchContainer({onSubmit}){

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(event);
    };

    return(
        <Search handleSubmit={handleSubmit}/>
    );
}

export default SearchContainer;