import React from "react";
import "./Header.css";

import ThemeButton from "components/molecules/themeButton/ThemeButton";
import Navbar from "components/organisms/navbar/Navbar";


const Header = () => {
    return (
        <header className="header">
            <Navbar />
            <ThemeButton />

            <div className="header__heading-container">
                <div className="header__heading">
                    <h1>ADRIEN</h1>
                    <h1>BIBOLLET</h1>
                </div>
            </div>

            <div className="header__subheading-container">
                <div className="header__subheading-line">
                    <p>-</p>
                    <p>F</p>
                    <p>R</p>
                    <p>E</p>
                    <p>E</p>
                    <p>L</p>
                    <p>A</p>
                    <p>N</p>
                    <p>C</p>
                    <p>E</p>
                    <p>-</p>
                </div>

                <div className="header__subheading-line">
                    <p>-</p>
                    <p>F</p>
                    <p>R</p>
                    <p>O</p>
                    <p>N</p>
                    <p>T</p>
                    <p>-</p>
                    <p>E</p>
                    <p>N</p>
                    <p>D</p>
                    <p>-</p>
                </div>

                <div className="header__subheading-line">
                    <p>-</p>
                    <p>D</p>
                    <p>E</p>
                    <p>V</p>
                    <p>E</p>
                    <p>L</p>
                    <p>O</p>
                    <p>P</p>
                    <p>E</p>
                    <p>R</p>
                    <p>-</p>
                </div>
            </div>
        </header>
    );
};


export default Header;