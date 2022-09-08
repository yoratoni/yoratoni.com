import React from "react";
import "./Navbar.css";

import NavButton from "components/atoms/navButton/NavButton";


const Navbar = () => {
    return (
        <nav className="navbar__container">
            <div className="navbar">
                <NavButton sectionId="home" title="Home" offset={-96} />
                <NavButton sectionId="projects" title="Projects" />
                <NavButton sectionId="about" title="About" />
                <NavButton sectionId="contact" title="Contact" />
            </div>
        </nav>
    );
};


export default Navbar;