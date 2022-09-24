import React from "react";
import "./Navbar.css";

import Hyperlink from "components/atoms/hyperlink/Hyperlink";


const Navbar = () => {
    return (
        <nav className="navbar animate__animated animate__fadeInDown">
            <hr />
            <div className="navbar__links-container">
                <Hyperlink
                    href="./"
                    title="About"
                    name="ABOUT"
                />

                <p>|</p>
                <Hyperlink
                    href="./"
                    title="Works"
                    name="WORKS"
                />

                <p>|</p>
                <Hyperlink
                    href="./"
                    title="Contact"
                    name="CONTACT"
                />
            </div>
            <hr />
        </nav>
    );
};


export default Navbar;