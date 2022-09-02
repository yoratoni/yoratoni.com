import React from "react";
import "./Navbar.css";

import SquareContainer from "components/atoms/squareContainer/SquareContainer";
import NavButton from "components/atoms/navButton/NavButton";


const Navbar = () => {
    return (
        <nav className="navbar">
            <SquareContainer style="w-full h-full flex items-center justify-center">
                <div className="navbar__container">
                    <NavButton sectionId="about" title="About" />
                    <NavButton sectionId="work" title="Work" />
                    <NavButton sectionId="experience" title="Experience" />
                    <NavButton sectionId="contact" title="Contact" />
                </div>
            </SquareContainer>
        </nav>
    );
};


export default Navbar;