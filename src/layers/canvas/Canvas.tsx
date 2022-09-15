import React from "react";
import "./Canvas.css";

import * as logic from "layers/canvas/CanvasLogic";
import Sketch from "react-p5";
import p5Types from "p5";


/**
 * The main p5.js sketch used as the website canvas
 */
const Canvas = () => {
    const [p5, setP5] = React.useState<p5Types>();


    /**
     * Function called when the resize event ends (see debounce function)
     */
    const windowResized = () => {
        if (p5) {
            p5.resizeCanvas(
                p5.windowWidth,
                p5.windowHeight,
                true
            );
            logic.loadEvent(p5);
        }
    };


    /**
     * Used to detect the end of the resize event (>= 32)
     * @param fn Function called at the end of the event
     * @returns A timer (canceled if resize not ended)
     */
    const debounce = (fn: IsP5ResizeFunction) => {
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
        if (p5) {
            // Note: p5 originally creates a <main></main> tag as the parent
            // It needs to be removed after it has been replaced by canvasParentRef
            const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
            const canvasOriginParent = canvas.parent();
            canvas.parent(canvasParentRef);
            canvasOriginParent.remove();

            setP5(p5);

            // Disable FES (performance issues)
            p5.disableFriendlyErrors = true;

            logic.initEvent(p5);
        }
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
        <div className="canvas">
            <Sketch setup={setup} draw={draw} />
        </div>
    );
};


export default Canvas;