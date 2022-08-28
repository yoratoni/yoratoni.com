import React from "react";
import "./Navbar.css";

import Link from "../../others/link/Link";


const Navbar = () => {
    return (
        <nav className="rcc__squareBackground navbar">
            <div className="navbar__container">
                <Link otherStyle="" name="Work"    title="Work"    href="/" />
                <Link otherStyle="" name="Art"     title="Art"     href="/" />
                <Link otherStyle="" name="Contact" title="Contact" href="/" />
                <Link otherStyle="" name="About"   title="About"   href="/" />
            </div>
        </nav>
    );
};


export default Navbar;