import React from "react";
import "./NavButton.css";

import { Link } from "react-scroll";


const NavButton = (props: PropsNavButton) => {
    const LinkStyle = {
        width: "100%",
        height: "100%",
        padding: "0.5rem",
        display: "inline-block"
    };

    return (
        <button
            className="nav-button"
            title={props.title}
        >
            <Link to={props.sectionId} spy={true} smooth={true} style={LinkStyle}>
                {props.title}
            </Link>
        </button>
    );
};


export default NavButton;