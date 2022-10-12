import React from "react";
import "./Navbar.css";

import NavButton from "components/atoms/navButton/NavButton";


const Navbar = () => {
    return (
        <nav className="navbar">
            <NavButton state={null} />
            <NavButton state={null} />
            <NavButton state={"active"} />
            <NavButton state={null} />
        </nav>
    );
};


export default Navbar;