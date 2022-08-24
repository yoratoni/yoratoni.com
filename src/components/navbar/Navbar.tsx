import React from "react";
import "./Navbar.css";


const Navbar = () => {
    return (
        <nav className="rcc__squareBck navbar" role="navigation">
            <div className="flex items-center justify-center w-full h-full px-7">
                <div className="flex items-center justify-between w-full max-w-xl space-x-3 font-normal">
                    <h2>Work</h2>
                    <h2>Art</h2>
                    <h2>About</h2>
                    <h2>Contact</h2>
                </div>
            </div>

        </nav>
    );
};


export default Navbar;