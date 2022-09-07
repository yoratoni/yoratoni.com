import React from "react";
import "./Navbar.css";

import SquareContainer from "components/atoms/squareContainer/SquareContainer";
import NavButton from "components/atoms/navButton/NavButton";


const Navbar = () => {
    return (
        <nav className="navbar__container">
            <SquareContainer style="w-full h-full flex items-center justify-center">
                <div className="navbar">
                    <NavButton sectionId="home" title="Home" />
                    <NavButton sectionId="work" title="Work" />
                    <NavButton sectionId="about" title="About" />
                    <NavButton sectionId="contact" title="Contact" />
                </div>
            </SquareContainer>
        </nav>
    );
};


export default Navbar;