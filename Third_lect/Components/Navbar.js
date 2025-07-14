import { useState,useContext } from 'react';
import {Link} from 'react-router-dom';
import useOnlineStatus from '../util/useOnlineStatus'; 
import UserContext from '../util/UserContext';
import { useSelector } from 'react-redux';
import appStore from '../util/appStore';
const Navbar = () => {

    // sunscribig to the store using Selector

    const cartitem = useSelector((store) => store.cart.items)

    const data = useContext(UserContext);
    console.log(data);

    let [loginbtn, setLoginbtn] = useState("Login");

    const onlineStatus = useOnlineStatus();
    return (<div className="navbar">
        <div className="logo">
            <img  src="https://marketplace.canva.com/EAGK_nqghyY/1/0/1600w/canva-green-and-yellow-illustrative-catering-food-logo-1eeM9ihgRqY.jpg" alt="Logo" />
        </div>
        <div className="navList">
            <ul className='nav'>
           <li><Link to="/">Home</Link></li>
            <li><Link to="Restaurant/">Restaurant</Link></li>
            <li><Link to="About/">About</Link></li>
            <li><Link to="contact/">Contact</Link></li>
            <li><Link to="grocery/">Grocery</Link></li>
            <li><Link to="cart/" className='font-bold'>🛒- ({cartitem.length})</Link></li>
            <li className='w-auto'>OnlineStatus:{onlineStatus?"🟢":"🔴"}</li>
            </ul>
        </div>
             
        <button className="loginBtn" onClick={() => {
            loginbtn === "Login" ? setLoginbtn("Logout") : setLoginbtn("Login");
        }}>{loginbtn}</button>
        
    </div>)
}

export default Navbar;