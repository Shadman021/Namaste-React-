import { useDispatch, useSelector } from "react-redux";
import Menulist from "./Menulist";
import { clearCart } from "../util/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const handleclearcart = () => {
        dispatch(clearCart());
    }

    const cartItems = useSelector((store) => store.cart.items)
    console.log("cartItems", cartItems)
    return (
        <div className="m-4 p-4">

            <div className="flex justify-between mb-[1rem] px-[3rem] items-center">
                <h1 className="font-bold text-3xl text-center ">Cart</h1>
                <button className="bg-[#ffc857]  rounded-[30px] px-[30px] py-[4px]  cursor-pointer text-[1.2rem] shadow-[0_0_10px_rgba(0,0,0,0.1)]" onClick={handleclearcart}>Clear</button>
            </div>
            {(cartItems.length === 0)
                ?
                <div className="bg-[url('https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg')] min-h-[435px] bg-cover bg-center rounded-xl relative">

                    <h1 className="text-4xl absolute left-[3rem] top-[3rem]">Your cart is empty !!<br/> Add items to your cart...</h1>

                </div>
                :
                <div className="w-6/12 m-auto bg-gray-100 px-[2rem] py-[1rem] my-4  rounded-xl shadow-2xl">
                    <Menulist data={cartItems} />
                </div>}


        </div>
    )
}
export default Cart;