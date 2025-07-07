const Menulist = (props) => {
    const lists = props.data;

    return (
        <div>
            {lists?.map((list) =>
                <div key={list?.card?.info?.id} className="my-[.5rem]  p-2 border-gray-400 border-b-2 flex justify-between">
                    <div className="w-10/12">
                        <p className="font-bold font-sans text-md">{list?.card?.info?.name}</p>
                        <p className="my-2 text-sm">Price:₹ {(list?.card?.info?.defaultPrice) / 100}</p>
                        <p className="flex flex-wrap text-xs">Description: {list?.card?.info?.description}</p>
                    </div>
                    <div className="w-2/12 p-1 relative">
                        <img className="w-[100%] h-[100%]" src={`https://media-assets.swiggy.com/swiggy/image/upload/${list?.card?.info?.imageId}`} />
                         <button className="bg-white absolute p-0.5 text-xs m-auto cursor-pointer  px-2 py-1 rounded shadow bottom-0 left-1/2 transform -translate-x-1/2  "
                        >ADD+</button>
                    </div>
                </div>

            )}
        </div>
    )
}
export default Menulist;