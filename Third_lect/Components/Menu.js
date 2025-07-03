import { useParams } from "react-router-dom"
import useResmenu from "../util/useResmenu";

const Menu = () => {
    const { resId } = useParams();

    const { data, menudata } = useResmenu(resId);
    return (

        <div className="menu">
            <h1 className="resName">{data?.data?.cards[0]?.card?.card?.text}</h1>
            <div className="menu-container">
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
            </div>
        </div>
    )
}
export default Menu;