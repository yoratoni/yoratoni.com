import React from "react";
import "./Navbar.css";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__backgroundImage"></div>

            <div className="navbar__contentContainer">
                <div className="navbar__title">
                    <h1>Yoratoni.</h1>
                    <h3>Adrien Bibollet</h3>
                </div>

                <div className="navbar__menuExpanded">
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