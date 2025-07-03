import { useState, useEffect } from '../../node_modules/react';


const Search = ({listofres, setFilteredres, setListofres}) => {

    let [searchText, setSearchText] = useState("");
    
    return (<form className="search" >

        <div >
            <input type="text" placeholder="Search.." className="searchBar bg-white" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
        } }></input>
        </div>
        <button type="submit" className="searchBtn" onClick={(e) => {
             e.preventDefault(); 
            const filteredData = listofres.filter((restaurant) => 
                restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            console.log(filteredData)
            setFilteredres(filteredData);
            setSearchText("");
        }}>Search</button>

          <button className="filterbtn" onClick={(e) => {
                e.preventDefault();
            console.log("Filter button clicked");
                setFilteredres(listofres.filter((restaurant) => restaurant.info.avgRating > 4.4));
            }}>Top Rated Restaurant</button>
        
    </form>)
}
export default Search;