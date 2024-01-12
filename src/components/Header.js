import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName, setBtnname] = useState("Login");
    return (
        <div className="header">
            <div className="header-container">
                <img className="logo" src={ LOGO_URL } />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login"
                    onClick={() => {
                        btnName === "Login"?
                            setBtnname("Logout"):
                            setBtnname("Login");
                        console.log(btnName);
                    }}
                    >{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;