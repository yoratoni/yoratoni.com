import React from "react";
import "./Header.css";


const Header = () => {
    return (
        <header className="header">
            <div className="header__section-container">
                <div className="header__vertical-rule"></div>

                <div className="header__title-container">
                    <h1>ADRIEN</h1>
                    <h1>BIBOLLET</h1>
                </div>
            </div>
        </header>
    );
};


export default Header;