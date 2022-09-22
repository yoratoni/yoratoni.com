import React from "react";
import "./Header.css";

import ThemeButton from "components/molecules/themeButton/ThemeButton";


const Header = () => {
    return (
        <header className="header">
            <ThemeButton />
        </header>
    );
};


export default Header;