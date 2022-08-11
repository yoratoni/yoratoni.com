import p5Types from "p5";


/**
 * Main constant parameters of the visualization.
 *
 * @param lineWeight Change the thickness of each line (Defaults: 2)
 */
const parameters = {
    lineWeight: 1,
};


/**
 * Applies the default style/translation for drawing
 * @param p5 The main p5 object
 */
const setDefaultStyle = (p5: p5Types) => {
    p5.colorMode(p5.RGB, 255);
    p5.translate(0, 0);
    p5.strokeWeight(parameters.lineWeight);
    p5.background("#030E10");
};


/**
 * A reload event called during the initialization and when the window is resized
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
    setDefaultStyle(p5);
    loadEvent(p5);
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