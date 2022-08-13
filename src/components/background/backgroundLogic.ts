import p5Types from "p5";


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
    flowFieldPointsBoxSize: 0.46,   // Size of the points box (percentage of window size)
    flowFieldLineWeight: 2,         // The weight / thickness of each line
    flowFieldMaxAngle: 16,          // The max angle for a Perlin noise point
    flowFieldDensity: 16,           // The density of points (number of points on screen)
    flowFieldAlpha: 64,             // The alpha of each line
    flowFieldMult: 0.02,            // Multiply the perlin noise effect

    // Perf check
    perfCheckLimit: 0.1,            // If ">", remove the last point, if "<", add a new point
    perfCheckMeasureStep: 10        // When cache.perfCheckMeasureStep == to this one, measure time
};


/**
 * Central cache of the visualization.
 */
const cache: IP5BackgroundCache = {
    windowMid: [0, 0],              // X & Y middle coordinates of the window
    points: [],                     // Contains all the current points

    // The dynamic coordinates of the points box (limit of the points)
    pointsBox: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
    },

    perfCheckT1: 0,             // First p5.millis() measure for time measure
    perfCheckMeasure: 0,        // Contains the measure of the time for each frame in ms
    perfCheckMeasureStep: 0     // Perf check is calculated when this var equals to the params one
};


/**
 * Applies the default style/translation for drawing
 * @param p5 The main p5 object
 */
const setDefaultStyle = (p5: p5Types) => {
    p5.colorMode(p5.RGB, 255);
    p5.angleMode(p5.DEGREES);
    p5.translate(0, 0);
    p5.strokeWeight(parameters.flowFieldLineWeight);
    p5.background(parameters.backgroundColor.hex);
    p5.noiseDetail(2, 0.2);
};


/**
 * Creates and returns a new p5 Vector (point) with random coords inside the points box
 * @param p5 The main p5 object
 * @param pointsBox The points box is the limit where the points can spawn (x1/y1 & x2/y2)
 * @returns A p5 Vector
 */
const createPointsBoxRandomPoint = (p5: p5Types, pointsBox: IP5_4Coords) => {
    return p5.createVector(
        p5.random(pointsBox.x1, pointsBox.x2),
        p5.random(pointsBox.y1, pointsBox.y2)
    );
};


/**
 * Creates 4 lines between the point & each corner of the window
 * @param p5 The main p5 object
 * @param points List of all the points (vectors)
 */
const createLinesForPoint = (p5: p5Types, points: p5Types.Vector[]) => {
    p5.stroke(
        parameters.backgroundColor.r,
        parameters.backgroundColor.g,
        parameters.backgroundColor.b,
        parameters.flowFieldAlpha
    );

    for (let i = 1; i < points.length; i++) {
        for (let j = i-1; j >= 0; j--) {
            p5.line(
                points[i].x,
                points[i].y,
                points[j].x,
                points[j].y
            );
        }
    }
};


/**
 * Removes or add points depending on the perf check time measure
 * @param p5 The main p5 object
 */
const perfCheck = (p5: p5Types) => {
    if (cache.perfCheckMeasureStep >= parameters.perfCheckMeasureStep) {
        cache.perfCheckMeasure = p5.millis() - cache.perfCheckT1;
        cache.perfCheckMeasureStep = 0;

        if (cache.perfCheckMeasure > parameters.perfCheckLimit) {
            // If > limit, remove a point
            cache.points.pop();
        } else if (cache.perfCheckMeasure < parameters.perfCheckLimit) {
            // In the other case, add a new point
            cache.points.push(createPointsBoxRandomPoint(p5, cache.pointsBox));
        }

        console.log(cache.perfCheckMeasure);
    }

    // DEBUG ONLY
    p5.textSize(24);
    p5.fill(255);
    p5.text(cache.points.length, 50, 50);

    cache.perfCheckMeasureStep++;
};


/**
 * A reload event called during the initialization and when the window is resized
 * @param p5 The main p5 object
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const loadEvent = (p5: p5Types) => {
    // Records window middle coordinates
    cache.windowMid[0] = window.innerWidth / 2;
    cache.windowMid[1] = window.innerHeight / 2;

    const pointsBoxWidth = window.innerWidth * parameters.flowFieldPointsBoxSize;
    const pointsBoxHeight = window.innerHeight * parameters.flowFieldPointsBoxSize;

    // Records points box coordinates/limits
    cache.pointsBox.x1 = cache.windowMid[0] - pointsBoxWidth;
    cache.pointsBox.y1 = cache.windowMid[1] - pointsBoxHeight;
    cache.pointsBox.x2 = cache.windowMid[0] + pointsBoxWidth;
    cache.pointsBox.y2 = cache.windowMid[1] + pointsBoxHeight;
};


/**
 * The main p5 init event
 * @param p5 The main p5 object
 */
const initEvent = (p5: p5Types) => {
    setDefaultStyle(p5);
    loadEvent(p5);

    for (let i = 0; i < parameters.flowFieldDensity; i++) {
        cache.points.push(createPointsBoxRandomPoint(p5, cache.pointsBox));
    }
};


/**
 * The main p5 drawing event
 * @param p5 The main p5 object
 */
const drawEvent = (p5: p5Types) => {
    setDefaultStyle(p5);

    // Perf check initial time
    if (cache.perfCheckMeasureStep >= parameters.perfCheckMeasureStep) {
        cache.perfCheckT1 = p5.millis();
    }

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

        // Recreate point if the old point goes outside of the points box
        if (
            (cache.points[i].x < cache.pointsBox.x1 || cache.points[i].x > cache.pointsBox.x2) ||
            (cache.points[i].y < cache.pointsBox.y1 || cache.points[i].y > cache.pointsBox.y2)
        ) {
            cache.points.splice(i, 1);
            cache.points.push(createPointsBoxRandomPoint(p5, cache.pointsBox));
        }

        // Draw the points as ellipses
        p5.noStroke();
        p5.fill(
            parameters.backgroundColor.r,
            parameters.backgroundColor.g,
            parameters.backgroundColor.b,
        );
        p5.ellipse(cache.points[i].x, cache.points[i].y, 4);
    }

    // Link all the points with lines
    createLinesForPoint(p5, cache.points);

    // Perf check system
    perfCheck(p5);
};


export {
    initEvent,
    loadEvent,
    drawEvent
};