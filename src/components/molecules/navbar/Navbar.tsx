import React from "react";
import "./Navbar.css";

import Link from "components/atoms/link/Link";
import NavButton from "components/atoms/navButton/NavButton";


const Navbar = () => {
    return (
        <nav className="rcc__squareBackground navbar">
            <div className="navbar__container">
                <NavButton></NavButton>

                <Link otherStyle="" name="Work" title="Work" href="#" />
                <Link otherStyle="" name="Art" title="Art" href="/" />
                <Link otherStyle="" name="About" title="About" href="/" />
                <Link otherStyle="" name="Contact" title="Contact" href="/" />
            </div>
        </nav>
    );
};


export default Navbar;