import React from "react";
import "./Navbar.css";


const Navbar = () => {
    return (
        <nav className="w-full h-24 text-white">
            <div className="navbar__background"></div>

            <div className="relative top-[-6rem] flex items-center justify-between w-full h-full px-12">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl">Yoratoni.</h1>
                    <h3 className="text-sm">Adrien Bibollet</h3>
                </div>

                <div className="flex items-center justify-center space-x-10 text-xl">
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