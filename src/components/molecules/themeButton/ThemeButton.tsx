import React from "react";
import "./ThemeButton.css";

import ThemeContext from "components/atoms/themeContext/ThemeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import IconButton from "components/atoms/iconButton/IconButton";

import { appThemes } from "scripts/dicts";


const ThemeButton = () => {
    const { theme, switchTheme } = React.useContext(ThemeContext);

    const clickHandler = () => {
        if (switchTheme !== null) {
            switchTheme();
        }
    };

    return (
        <div className="theme-button">
            <IconButton
                title="Switch theme"
                onClick={clickHandler}
            >
                {theme === appThemes.dark ? <Brightness5Icon /> : <Brightness4Icon />}
            </IconButton>
        </div>
    );
};


export default ThemeButton;