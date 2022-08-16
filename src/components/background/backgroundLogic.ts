import p5Types from "p5";


/*
    Note: The window should be more filled,
    Dots are not enough to fill the screen,
    a line linking each point is too much,
    bad performances too as each point should have a complexity of O(1)
*/



/**
 * Main constant parameters of the visualization.
 */
const parameters = {
    // Main color of the background
    backgroundColor: {
        hex: "#041315",
        r: 190,
        g: 21,
        b: 51
    },

    // Flow Field parameters
    flowFieldPointsBoxSize: 0.5,    // Size of the points box (percentage of window size)
    flowFieldWeight: 2,             // The weight / thickness of each line
    flowFieldMaxAngle: 16,          // The max angle for a Perlin noise point
    flowFieldDensity: 256,          // The density of points (number of points on screen)
    flowFieldAlpha: 64,             // The alpha of each line
    flowFieldMult: 0.02,            // Multiply the perlin noise effect

    // Perf check
    perfCheckSecurityBounds: 4,     // Adds security bounds to the dynamic perf check FPS measure
    perfCheckSteps: 16,             // When cache.perfCheckMeasureStep == to this one, measure time
    perfCheckInitialMeasure: 10     // Number of initial steps where the average FPS is measured
};


/**
 * Central cache of the visualization.
 */
const cache: IP5BackgroundCache = {
    windowMid: [0, 0],              // X & Y middle coordinates of the window
    points: [],                     // Contains all the current points

    // The dynamic coordinates of the points box (point bounds)
    pointsBox: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
    },

    // Dynamic limit => FPS on the first frames
    // It is calculated by the average measured FPS when perfCheckCurrentStep is below 0
    perfCheckFPSLimit: 0,

    // Contains the measure of the time for each frame in ms
    perfCheckFPSMeasure: 0,

    // Time is measured when this var equals to the params one
    // The absolute of this value should not be > to parameters.perfCheckSteps
    perfCheckCurrentStep: -parameters.perfCheckInitialMeasure
};


/**
 * Applies the default style/translation for drawing
 * @param p5 The main p5 object
 */
const setDefaultStyle = (p5: p5Types) => {
    p5.background(parameters.backgroundColor.hex);
    p5.translate(0, 0);
};


/**
 * Creates and returns a new p5 Vector (point) with random coords inside the points box
 * @param p5 The main p5 object
 * @param pointsBox The points box represents the bounds where the points can spawn (x1/y1 & x2/y2)
 * @returns A p5 Vector
 */
const createPointsBoxRandomPoint = (p5: p5Types, pointsBox: IP5_4Coords) => {
    return p5.createVector(
        p5.random(pointsBox.x1, pointsBox.x2),
        p5.random(pointsBox.y1, pointsBox.y2)
    );
};


/**
 * Removes a point if it's outside of the points box bounds, and recreates a new one
 * @param p5 The main p5 object
 * @param i The index of the point inside the points[] array
 */
const recreateIfOutOfBounds = (p5: p5Types, i: number) => {
    if (
        (cache.points[i].x < cache.pointsBox.x1 || cache.points[i].x > cache.pointsBox.x2) ||
        (cache.points[i].y < cache.pointsBox.y1 || cache.points[i].y > cache.pointsBox.y2)
    ) {
        cache.points.splice(i, 1);
        cache.points.push(createPointsBoxRandomPoint(p5, cache.pointsBox));
    }
};


/**
 * Removes or add points depending on the perf check time measure
 * @param p5 The main p5 object
 */
const perfCheckSystem = (p5: p5Types) => {
    // Measure FPS on the first frames
    if (cache.perfCheckCurrentStep < 0) {
        cache.perfCheckFPSLimit += p5.frameRate();
    }

    // Calculate the average FPS
    if (cache.perfCheckCurrentStep === 0) {
        cache.perfCheckFPSLimit /= parameters.perfCheckInitialMeasure;
    }

    if (cache.perfCheckCurrentStep >= parameters.perfCheckSteps) {
        cache.perfCheckFPSMeasure = p5.frameRate();
        cache.perfCheckCurrentStep = 0;

        // If > to the FPS limit, add a new point
        if (cache.perfCheckFPSMeasure > cache.perfCheckFPSLimit + parameters.perfCheckSecurityBounds) {
            cache.points.push(createPointsBoxRandomPoint(p5, cache.pointsBox));
        }

        // If <>> to the FPS limit, removes a point
        if (cache.perfCheckFPSMeasure < cache.perfCheckFPSLimit) {
            cache.points.pop();
        }

        console.log(cache.perfCheckFPSMeasure);
        console.log(cache.perfCheckFPSLimit);
    }

    // DEBUG ONLY
    p5.textSize(24);
    p5.fill(255);
    p5.text(cache.points.length, 50, 50);

    cache.perfCheckCurrentStep++;
};


/**
 * A reload event called during the initialization and when the window is resized
 * @param p5 The main p5 object
 */
const loadEvent = (p5: p5Types) => {
    // Records window middle coordinates
    cache.windowMid[0] = window.innerWidth / 2;
    cache.windowMid[1] = window.innerHeight / 2;

    const pointsBoxWidth = window.innerWidth * parameters.flowFieldPointsBoxSize;
    const pointsBoxHeight = window.innerHeight * parameters.flowFieldPointsBoxSize;

    // Records points box bounds
    cache.pointsBox.x1 = cache.windowMid[0] - pointsBoxWidth;
    cache.pointsBox.y1 = cache.windowMid[1] - pointsBoxHeight;
    cache.pointsBox.x2 = cache.windowMid[0] + pointsBoxWidth;
    cache.pointsBox.y2 = cache.windowMid[1] + pointsBoxHeight;

    // Clear the points array
    cache.points = [];
    for (let i = 0; i < parameters.flowFieldDensity; i++) {
        cache.points.push(createPointsBoxRandomPoint(p5, cache.pointsBox));
    }
};


/**
 * The main p5 init event
 * @param p5 The main p5 object
 */
const initEvent = (p5: p5Types) => {
    p5.colorMode(p5.RGB, 255);
    p5.angleMode(p5.DEGREES);
    p5.noiseDetail(2, 0.2);

    setDefaultStyle(p5);
    loadEvent(p5);
};


/**
 * The main p5 drawing event
 * @param p5 The main p5 object
 */
const drawEvent = (p5: p5Types) => {
    setDefaultStyle(p5);

    for (let i = 0; i < cache.points.length; i++) {
        const angle = p5.map(
            p5.noise(
                cache.points[i].x * parameters.flowFieldMult,
                cache.points[i].y * parameters.flowFieldMult
            ),
            0,
            1,
            0,
            parameters.flowFieldMaxAngle
        );

        cache.points[i].add(
            p5.createVector(Math.cos(angle), Math.sin(angle))
        );

        // Removes & create new point if outside of points box bounds
        recreateIfOutOfBounds(p5, i);

        // Draw the points as ellipses
        p5.noStroke();
        p5.fill(
            parameters.backgroundColor.r,
            parameters.backgroundColor.g,
            parameters.backgroundColor.b,
        );
        p5.ellipse(cache.points[i].x, cache.points[i].y, parameters.flowFieldWeight);
    }

    // Perf check system
    perfCheckSystem(p5);
};


export {
    initEvent,
    loadEvent,
    drawEvent
};