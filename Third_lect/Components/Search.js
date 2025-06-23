import { useState, useEffect } from '../../node_modules/react';


const Search = ({listofres, setFilteredres}) => {

    let [searchText, setSearchText] = useState("");
    
    return (<div className="search">
        <div >
            <input type="text" placeholder="Search.." className="searchBar" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
            }}></input>
        </div>
        <button type="submit" className="searchBtn" onClick={() => {
            const filteredData = listofres.filter((restaurant) => 
                restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            console.log(filteredData)
            setFilteredres(filteredData);
            setSearchText("");
        }}>Search</button>
        
    </div>)
}
export default Search;