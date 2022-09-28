import React from "react";
import "./HeaderParallax.css";


const HeaderParallax = () => {
    return (
        <div className="header-parallax">
            <div className="header-parallax__layer header-parallax__layer-1"></div>
            <div className="header-parallax__layer header-parallax__layer-2"></div>
            <div className="header-parallax__layer header-parallax__layer-3"></div>
            <div className="header-parallax__layer header-parallax__layer-4"></div>
            <div className="header-parallax__layer header-parallax__layer-5"></div>
        </div>
    );
};


export default HeaderParallax;