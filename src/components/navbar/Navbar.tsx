import React from "react";
import "./Navbar.css";


const Navbar = () => {
    return (
        <nav className="navbar" role="navigation">
            <div className="navbar__background"></div>

            <div className="relative top-[-4rem] flex items-center justify-center w-full h-full px-7">
                <div className="flex items-center justify-between w-full max-w-xl space-x-3 text-lg">
                    <h2>About</h2>
                    <h2>Work</h2>
                    <h2>Services</h2>
                    <h2>Contacts</h2>
                </div>
            </div>

        </nav>
    );
};


export default Navbar;