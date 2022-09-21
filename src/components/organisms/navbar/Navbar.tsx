import React from "react";
import "./Navbar.css";

import ThemeButton from "components/molecules/themeButton/ThemeButton";
import Hyperlink from "components/atoms/hyperlink/Hyperlink";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo"></div>

            <div className="navbar__links">
                <Hyperlink
                    name="ABOUT"
                />
                <p>|</p>
                <Hyperlink
                    name="WORK"
                />
                <p>|</p>
                <Hyperlink
                    name="CONTACT"
                />
            </div>

            <div className="navbar__theme-switch">
                <ThemeButton />
            </div>
        </nav>
    );
};


export default Navbar;