import React from "react";
import "./NavButton.css";

import SelectAllIcon from "@mui/icons-material/SelectAll";


const NavButton = ({
    state = null
}: IsButtonActive) => {
    return (
        <button className={`nav-button ${state ? "nav-button__active" : ""}`}>
            <SelectAllIcon />
        </button>
    );
};


export default NavButton;