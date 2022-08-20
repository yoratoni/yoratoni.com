import React from "react";
import "./Background.css";

import * as logic from "./backgroundLogic";
import Sketch from "react-p5";
import p5Types from "p5";


/**
 * The main p5.js sketch used as the website background
 */
const Background = () => {
    const [p5, setP5] = React.useState<p5Types>();


    /**
     * Function called when the resize event ends (see debounce function)
     */
    const windowResized = () => {
        if (p5) {
            p5.resizeCanvas(window.innerWidth, window.innerHeight, true);
            logic.loadEvent(p5);
        }
    };


    /**
     * Used to detect the end of the resize event (>= 128)
     * @param fn Function called at the end of the event
     * @returns A timer (canceled if resize not ended)
     */
    const debounce = (fn: P5ResizeFunction) => {
        let timer: number;
        return function (event: Event) {
            if (timer) {
                clearTimeout(timer);
            }

            timer = setTimeout(fn, 32, event);
        };
    };


    /**
     * Main window resize event listener
     */
    React.useEffect(() => {
        window.addEventListener("resize", debounce(windowResized));
        return () => window.removeEventListener("resize", debounce(windowResized));
    });


    /**
     * Main p5 setup function
     * @param p5 The main p5 object
     * @param canvasParentRef A ref to the canvas HTML parent
     */
    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
        setP5(p5);

        // Disable FES (performance issues)
        p5.disableFriendlyErrors = true;

        logic.initEvent(p5);
    };


    /**
     * Main p5 draw function
     */
    const draw = () => {
        if (p5) {
            logic.drawEvent(p5);
        }
    };


    return (
        <div id="background-container">
            <Sketch setup={setup} draw={draw} />
        </div>
    );
};


export default Background;