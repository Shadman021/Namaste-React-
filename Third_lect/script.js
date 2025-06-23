import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import HeroSection from "./Components/HeroSetion";
import Card from "./Components/card";
//import { data } from "./util/rawData";
import { API_URL } from "./util/config";
import Shimmer from "./Components/shimmer";


let data;
const App = () => {
    let [listofres, setListofres] = useState([]);
    let [filteredres, setFilteredres] = useState([]);
    useEffect(() => {
        fetchdata();
    }, []);

     const fetchdata = async () => {
        const response = await fetch(API_URL);
        data = await response.json();
        console.log(data);
        setListofres(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredres(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    return (
        <div>
            <Navbar />
            <Search listofres={listofres} setFilteredres={setFilteredres}/>

            <button className="filterbtn" onClick={() => {
                setListofres(listofres.filter((restaurant) => restaurant.info.avgRating > 4.4));
            }}>Filter</button>

            {listofres.length === 0 ? (<Shimmer />) : (
                <div className="card-container">
                    {filteredres.map((restaurant, idx) => (
                        <Card key={restaurant.info.id || idx} info={restaurant.info} />
                    ))}
                </div>
            )}
            {/* <HeroSection /> */}

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)


// Navbar
//   logo
//   navItems
// Search
//   searchBar
//   button
// HeroSection
//   cards
// Offers
//   carasol
// Footer