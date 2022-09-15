import p5Types from "p5";


/**
 * Main constant parameters of the visualization.
 */
const parameters = {
    colors: {

    }
};

interface IsP5Cache {
    storage: number[]
}

/**
 * Central cache of the visualization.
 */
const cache: IsP5Cache = {
    storage: []
};

/**
 * A reload event called during the initialization and when the canvas is resized
 * @param p5 The main p5 object
 */
const loadEvent = (p5: p5Types) => {
    //
};

/**
 * The main p5 init event
 * @param p5 The main p5 object
 */
const initEvent = (p5: p5Types) => {
    p5.colorMode(p5.RGB, 255);
    p5.angleMode(p5.DEGREES);
    p5.noiseDetail(2, 0.2);
    p5.pixelDensity(1);

    loadEvent(p5);
};

/**
 * Applies the default style/translation for drawing
 * @param p5 The main p5 object
 */
const setDefaultStyle = (p5: p5Types) => {
    p5.clear();
};

/**
 * The main p5 drawing event
 * @param p5 The main p5 object
 */
const drawEvent = (p5: p5Types) => {
    setDefaultStyle(p5);

};


export {
    initEvent,
    loadEvent,
    drawEvent
};