import React from "react";
import "./Navbar.css";

import Hyperlink from "components/atoms/hyperlink/Hyperlink";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__links-container">
                <div className="navbar__links">
                    <Hyperlink
                        name="HOME"
                    />

                    <p>|</p>
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
            </div>
        </nav>
    );
};


export default Navbar;