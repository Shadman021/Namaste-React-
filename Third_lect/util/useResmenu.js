import { MenuAPI } from "./config";
import { useState, useEffect } from "react";

const useResmenu = (resId) => {
    const [data, setData] = useState(null);
    const [menudata, setMenudata] = useState([]);


    useEffect(() => {
        const fun = async () => {
            const response = await fetch(MenuAPI + resId + "&catalog_qa=undefined&submitAction=ENTER");
            const json = await response.json();
            console.log("menuAPI: ", json)
            setData(json);

            const cardsArray = json?.data?.cards || [];

            const groupedCardObj = [...cardsArray].
                find((card) => card?.groupedCard?.cardGroupMap?.REGULAR);

            const regularCards = groupedCardObj?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];


            const allItemCards = regularCards
                .flatMap(c => c?.card?.card?.itemCards || [])
                .filter(Boolean);

            setMenudata(allItemCards);

            console.log("Menu API called successfully");
        }

        fun();
    }, []);

    const menu = { data, menudata };

    return menu;
}
export default useResmenu;