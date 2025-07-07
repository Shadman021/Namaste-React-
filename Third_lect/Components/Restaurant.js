import Card, { EnhancedCard } from "./card";
import { useState, useEffect } from "react";
import { API_URL } from "../util/config";
import Search from "./Search";
import Shimmer from "./shimmer";
import useOnlineStatus from "../util/useOnlineStatus";
import {Link} from "react-router-dom"


const Resturant = () => {
    let data;
    const PromotedCard = EnhancedCard(Card);
    let [listofres, setListofres] = useState([]);
    let [filteredres, setFilteredres] = useState([]);
    useEffect(() => {
        fetchdata();
    }, []);
        
    

    const fetchdata = async () => {
        const response = await fetch(API_URL);
        data = await response.json();
        setListofres(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredres(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (
            <h1>Looks like you are offline, Please check your internet connection!!!</h1>
        )
    }
    console.log("filteredres: ", filteredres);
    return (
        <div>
            <Search listofres={listofres} setFilteredres={setFilteredres} setListofres={setListofres} />
           {listofres?.length === 0 ? (<Shimmer />) : (
            <div className="card-container">
                    {filteredres?.map((restaurant) => (
                        <Link to={`/menu/${restaurant.info.id}`} key={restaurant.info.id}>
                            {Object.keys(restaurant?.info?.aggregatedDiscountInfoV3 || {}).length === 0
                                ? <Card info={restaurant.info} />
                                : <PromotedCard info={restaurant.info} />
                            }
                        </Link>
                    ))}
                </div>)}
        </div>
    )
}
export default Resturant;