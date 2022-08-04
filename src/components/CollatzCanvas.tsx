import React from "react";

import { initCollatz, drawCollatz } from "../libs/collatz";
import Sketch from "react-p5";
import p5Types from "p5";


const CollatzCanvas = () => {
    const [p5, setP5] = React.useState<p5Types>();

    const windowResized = () => {
        if (p5) {
            p5.resizeCanvas(window.innerWidth, window.innerHeight, true);
            p5.clear();

            // Re-initialize the collatz p5 workers
            initCollatz();
        }
    };

    const debounce = (fn: P5ResizeFunction) => {
        let timer: number;

        return function(event: Event) {
            if (timer) {
                clearTimeout(timer);
            }

            timer = setTimeout(fn, 50, event);
        };
    };

    React.useEffect(() => {
        window.addEventListener("resize", debounce(windowResized));
        return () => window.removeEventListener("resize", debounce(windowResized));
    });

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
        setP5(p5);

        // Initialize the collatz p5 workers
        initCollatz();
    };

    const draw = () => {
        if (p5) {
            drawCollatz(p5);
        }
    };

    return (<Sketch setup={ setup } draw={ draw } />);
};


export default CollatzCanvas;
