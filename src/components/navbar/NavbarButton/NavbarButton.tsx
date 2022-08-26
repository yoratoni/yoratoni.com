import React from "react";
import "./NavbarButton.css";


const NavbarLink = (props: PropsName) => {
    return (
        <div className="navbarButton__container">
            <a href="/">{ props.name }</a>
        </div>
    );
};


export default NavbarLink;