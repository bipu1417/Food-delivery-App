import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [btnName, setBtnname] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const data = useContext(UserContext);
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-yellow-50 lg:bg-green-100">
            <div className="header-container">
                <img className="w-40" src={ LOGO_URL } />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status : {onlineStatus?"🟢":"🔴"}</li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/about">About</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button className="login"
                    onClick={() => {
                        btnName === "Login"?
                            setBtnname("Logout"):
                            setBtnname("Login");
                        console.log(btnName);
                    }}
                    >{btnName}</button>
                     <li className="px-4 font-bold">{data.loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;