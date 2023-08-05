import Search from "../presentationals/Search";

function SearchContainer({onSubmit}){

    const updateSearch = (newSearch) => {
        onSubmit(newSearch);
    };

    return(
        <Search updateSearch={updateSearch}/>
    );
}

export default SearchContainer;