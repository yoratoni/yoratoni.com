import React from "react";
import "./Navbar.css";

import SquareContainer from "components/atoms/squareContainer/SquareContainer";
import NavButton from "components/atoms/navButton/NavButton";


const Navbar = () => {
    return (
        <nav className="navbar">
            <SquareContainer style="">
                <div className="navbar__container">
                    <NavButton></NavButton>
                </div>
            </SquareContainer>
        </nav>
    );
};


export default Navbar;