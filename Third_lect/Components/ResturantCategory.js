import Menulist from "./Menulist";
import { useState } from "react";

const ResturantCategory = (props) => {
    // const [showList, setShowList] = useState(false);
    const showList = props.showList;
    const setShowindex = props.setShowindex;
    const handleClick = () => {
        (showList === setShowindex) ? setShowindex(false) : setShowindex();
    }

    return (

        <div>

            <div className="bg-gray-100 px-[2rem] py-[1rem] my-4  rounded-xl shadow-2xl">
                <div className="font-semibold text-lg flex justify-between cursor-pointer" onClick={handleClick}>
                    <span>
                        {props.data.title} ({props?.data?.itemCards?.length || props?.data?.categories?.length})
                    </span>
                    <span>🔽</span>
                </div>
                {showList && <Menulist key={props.data.itemCards.id} data={props.data.itemCards} />}
            </div>
        </div>
    )
}
export default ResturantCategory;