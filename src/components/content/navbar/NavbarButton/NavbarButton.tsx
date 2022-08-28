import React from "react";
import "./NavbarButton.css";


const NavbarLink = (props: PropsName) => {
    return (
        <div className="navbar__button">
            <a href="/">{ props.name }</a>
        </div>
    );
};


export default NavbarLink;