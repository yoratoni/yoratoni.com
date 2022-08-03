import React from "react";

import { resetCollatz, drawCollatz } from "../libs/collatz";
import Sketch from "react-p5";
import p5Types from "p5";


const CollatzCanvas = () => {
    const windowResized = (p5: p5Types) => {
        p5.resizeCanvas(window.innerWidth, window.innerHeight, true);
        p5.clear();
        resetCollatz();
    };

    const debounce = (fn: Function) => {
        var timer: number;

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
    };

    const draw = (p5: p5Types) => {
        drawCollatz(p5);
    };

    return (<Sketch setup={ setup } draw={ draw } />);
};


export default CollatzCanvas;
