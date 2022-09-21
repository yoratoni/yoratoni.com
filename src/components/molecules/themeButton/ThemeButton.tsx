import React from "react";
import "./ThemeButton.css";

import ThemeContext from "components/atoms/themeContext/ThemeContext";


const ThemeButton = () => {
    const { switchTheme } = React.useContext(ThemeContext);

    const clickHandler = () => {
        if (switchTheme !== null) {
            switchTheme();
        }
    };

    return (
        <button className="theme-button" onClick={clickHandler}>
            Switch mode
        </button >
    );
};


export default ThemeButton;