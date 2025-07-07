import { useParams } from "react-router-dom"
import useResmenu from "../util/useResmenu";
import ResturantCategory from "./ResturantCategory";
import Resturant from "./Restaurant";
import { useState } from "react";

const Menu = () => {
    const { resId } = useParams();

    const { data, menudata } = useResmenu(resId);
    const [ showindex, setShowindex ] = useState(null);

    return (

        <div className=" w-7/12 m-auto ">
            <h1 className="resName">{data?.data?.cards[0]?.card?.card?.text}</h1>
            {/* <div className="menu-container">
                <h2>Menu</h2>
                <h3>Restaurant ID: {resId}</h3>
                 <ul>
                    {
                        menudata?.map((item, i) => (
                            <li key={i}>{item.card.info.name} =
                                Rs {item?.card?.info?.defaultPrice / 100 || item?.card?.info?.Price / 100 || item?.card?.info?.price / 100}</li>
                        ))
                    }
                </ul> 
            </div> */}


            {menudata.map((category, index) => <ResturantCategory
                key={category.card.card.title}
                data={category.card.card}
                showList={index === showindex? true :false}
                setShowindex={()=>{
                    setShowindex(index);
                }}
            />)}
        </div>
    )
}
export default Menu;