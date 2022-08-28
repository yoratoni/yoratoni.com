import React from "react";
import "./Navbar.css";

// Components
import NavbarLink from "./NavbarButton/NavbarButton";


const Navbar = () => {
    return (
        <nav className="rcc__squareBackground navbar">
            <div className="navbar__linksContainer">
                <NavbarLink name="Work" />
                <NavbarLink name="Art" />
                <NavbarLink name="Contact" />
                <NavbarLink name="About" />
            </div>
        </nav>
    );
};


export default Navbar;