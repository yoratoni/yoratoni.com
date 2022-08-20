import React from "react";
import "./Navbar.css";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-background"></div>

            <div className="navbar-content">
                <div className="navbar-title">
                    <h1>Yoratoni.</h1>
                    <h3>Adrien Bibollet</h3>
                </div>
            </div>
        </nav>
    );
};


export default Navbar;