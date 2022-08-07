import React from "react";

import * as collatz from "../libs/collatz";
import Sketch from "react-p5";
import p5Types from "p5";


const CollatzCanvas = () => {
    const [p5, setP5] = React.useState<p5Types>();


    /**
     * Function called when the resize event ends (see debounce function)
     * Used to resize the canvas to 100vw/vh (also calls the Collatz init function)
     */
    const windowResized = () => {
        if (p5) {
            p5.resizeCanvas(window.innerWidth, window.innerHeight, true);

            // Re-initialize the collatz p5 workers
            collatz.initCollatz(p5);
        }
    };


    /**
     * Used to detect the end of the resize event (>= 128)
     * @param fn Function called at the end of the event
     * @returns A timer (canceled if resize not ended)
     */
    const debounce = (fn: P5ResizeFunction) => {
        // Saves previous window dimensions
        collatz.getWindowDims();

        let timer: number;
        return function (event: Event) {
            if (timer) {
                clearTimeout(timer);
            }

            timer = setTimeout(fn, 256, event);
        };
    };


    /**
     * Main window resize event listener
     */
    React.useEffect(() => {
        window.addEventListener("resize", debounce(windowResized));
        return () => window.removeEventListener("resize", debounce(windowResized));
    });


    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
        setP5(p5);

        // Disable FES (performance issues)
        p5.disableFriendlyErrors = true;

        // Initialize the collatz p5 workers
        collatz.initCollatz(p5);
    };


    const draw = () => {
        if (p5) {
            collatz.drawCollatz(p5);
        }
    };


    return (
        <Sketch setup={setup} draw={draw} />
    );
};


export default CollatzCanvas;
