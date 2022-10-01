import React from "react";
import "./AppParallax.css";


const AppParallax = ({
    speed
}: IsParallax) => {
    const defaultSpeeds = [60, 50, 40, 30, 15];
    const parallaxLayersSpeed = defaultSpeeds.map(x => Math.max(0.01, Math.min(x / speed, 64)));

    return (
        <div className="app-parallax">
            <div className="app-parallax__layer app-parallax__layer-1"
                style={{animationDuration: `${parallaxLayersSpeed[0]}s`}}
            ></div>

            <div className="app-parallax__layer app-parallax__layer-2"
                style={{animationDuration: `${parallaxLayersSpeed[1]}s`}}
            ></div>

            <div className="app-parallax__layer app-parallax__layer-3"
                style={{animationDuration: `${parallaxLayersSpeed[2]}s`}}
            ></div>

            <div className="app-parallax__layer app-parallax__layer-4"
                style={{animationDuration: `${parallaxLayersSpeed[3]}s`}}
            ></div>

            <div className="app-parallax__layer app-parallax__layer-5"
                style={{animationDuration: `${parallaxLayersSpeed[4]}s`}}
            ></div>
        </div>
    );
};


export default AppParallax;