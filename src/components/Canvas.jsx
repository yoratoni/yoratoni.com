import React from "react";

import Sketch from "react-p5";


const Canvas = () => {
    let canvasDivider = 1.6;
    const [p5, setP5] = React.useState();

    const windowResized = () => {
        if (p5) {
            let canvasSize = Math.min(
                p5.windowWidth / canvasDivider,
                p5.windowHeight / canvasDivider
            );

            p5.resizeCanvas(canvasSize, canvasSize);
        }
    };

    React.useEffect(() => {
        window.addEventListener("resize", windowResized);
        return () => window.removeEventListener("resize", windowResized);
    });


    const setup = (p5, canvasParentRef) => {
        setP5(p5);

        let canvasSize = Math.min(
            p5.windowWidth / canvasDivider,
            p5.windowHeight / canvasDivider
        );

        p5.createCanvas(canvasSize, canvasSize).parent(canvasParentRef);
        p5.noLoop();
    };

    const draw = (p5) => {
        p5.background(25);
    };

    return (
        <Sketch setup={ setup } draw={ draw }/>
    );
};


export default Canvas;