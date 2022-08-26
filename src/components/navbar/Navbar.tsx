import React from "react";
import "./Navbar.css";

// Components
import NavbarLink from "./NavbarButton/NavbarButton";


const Navbar = () => {
    return (
        <div className="navbar__container">
            <NavbarLink name="About"/>
        </div>
    );
};


export default Navbar;