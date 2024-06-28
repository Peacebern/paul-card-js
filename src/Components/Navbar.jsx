import React from "react";
import "../Styles/Navbar.css";
import Logo from "../Assets/HeaderImage/Logo.ico";


function Navbar() {
    return (
        <div>
            <header>
                <nav className="top-nav">
                    <ul className="top-nav-sub">
                        <li><img src={Logo} alt="Logo" className="nav-img"/></li>
                        
                        <li className="top-nav-menu">
                            <li>About us</li>
                            <li>Forums</li>
                            <li>Events</li>
                            <li>Resources</li>
                        </li>
                        <li className="top-nav-contact">
                            <button className="top-nav-contact-button" >Contact Us</button>
                        </li>
                    </ul>
                </nav>

                <nav className="bottom-nav">
                    <ul className="bottom-nav-sub">
                        <li>Home</li>
                        <li>Members</li>
                        <li>Active</li>
                    </ul>
                </nav>

                <nav className="third-nav">
                    <ul className="third-nav-sub">
                        <li>Active Members</li>
                        <li>Past Members</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
