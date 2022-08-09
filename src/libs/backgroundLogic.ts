import p5Types from "p5";


/**
 * Main constant parameters of the Collatz visualization.
 *
 * @param maxSequences Max amount of sequences (Defaults: 64-512)
 * @param parallelSequences Number of "workers" (Defaults: 8-16)
 * @param lengthLimit Max length of each sequence (Defaults: 16-64)
 * @param lineAngleLimiter Limit the angle per sequence (Defaults: 1.2)
 * @param lineHeightFactor Multiplies length of each line (Default: 1)
 * @param lineAngle Angle applied on each line (Default: 0.16)
 * @param lineWeight Change the thickness of each line (Defaults: 2)
 * @param lineAlpha The transparency of each line (Defaults: 16-24)
 */
const parameters = {
    maxSequences: 64,
    parallelSequences: 4,
    lengthLimit: 128,

    lineAngleLimiter: 1.2,
    lineHeightFactor: 0.4,
    lineAngle: 0.16,
    lineWeight: 2,
    lineAlpha: 24
};


/**
 * Applies the default style/translation for drawing
 * @param p5 The main p5 object
 */
const setDefaultStyle = (p5: p5Types) => {
    p5.colorMode(p5.HSB, 100);
    p5.translate(window.innerWidth / 2, 0);
    p5.strokeWeight(parameters.lineWeight);
};


/**
 * The main p5 init event
 * @param p5 The main p5 object
 */
const initEvent = (p5: p5Types) => {
    setDefaultStyle(p5);

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
    drawEvent
};