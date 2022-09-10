import React from "react";
import "./NavButton.css";

import { Link } from "react-scroll";


const NavButton = (props: IsPropsNavButton) => {
    const LinkStyle = {
        width: "100%",
        height: "100%",
        padding: "0.5rem",
        display: "inline-block"
    };

    let offset = -48;
    if (props.offset) {
        offset = props.offset;
    }

    return (
        <button
            className="nav-button"
            title={props.title}
        >
            <Link
                to={props.sectionId}
                spy={true}
                smooth={true}
                isDynamic={true}
                style={LinkStyle}
                offset={offset}
            >
                <p className="nav-button__prev">
                    {props.prev !== null && props.prev}
                </p>
                <p className="nav-button__title">
                    {props.title}
                </p>
            </Link>
        </button>
    );
};


export default NavButton;