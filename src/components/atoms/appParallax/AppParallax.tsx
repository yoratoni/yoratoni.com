import React from "react";
import "./AppParallax.css";


const AppParallax = () => {
    return (
        <div className="app-parallax">
            <div className="app-parallax__layer app-parallax__layer-1"></div>
            <div className="app-parallax__layer app-parallax__layer-2"></div>
            <div className="app-parallax__layer app-parallax__layer-3"></div>
            <div className="app-parallax__layer app-parallax__layer-4"></div>
            <div className="app-parallax__layer app-parallax__layer-5"></div>
        </div>
    );
};


export default AppParallax;