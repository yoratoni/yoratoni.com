import p5Types from "p5";


/**
 * Main constant parameters of the visualization.
 */
const parameters = {
    // Main color of the background
    backgroundColor: {
        hex: "#021211",
        r: 190,
        g: 21,
        b: 51
    },

    // Flow Field parameters
    flowField: {
        pointsBoxSize: 0.5,         // Size of the points box (percentage of canvas size)
        perlinMult: 0.02,           // Multiply the perlin noise effect
        maxAngle: 16,               // The max angle for a Perlin noise point
        density: 16,                // Default amount of points when loading the webpage
        weight: 2,                  // The weight / thickness of each line / ellipsis
        alpha: 64                   // The alpha of each line
    }
};


/**
 * Central cache of the visualization.
 */
const cache: IP5BackgroundCache = {
    canvasMid: [0, 0],              // X & Y middle coordinates of the canvas
    points: [],                     // Contains all the current points

    // The dynamic coordinates of the points box (point bounds)
    pointsBox: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
    }
};


/**
 * Applies the default style/translation for drawing
 * @param p5 The main p5 object
 */
const setDefaultStyle = (p5: p5Types) => {
    p5.background(parameters.backgroundColor.hex);
    p5.translate(0, 0);

    p5.strokeWeight(parameters.flowField.weight);
    p5.stroke(
        parameters.backgroundColor.r,
        parameters.backgroundColor.g,
        parameters.backgroundColor.b,
        parameters.flowField.alpha
    );

    p5.fill(
        parameters.backgroundColor.r,
        parameters.backgroundColor.g,
        parameters.backgroundColor.b
    );
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
        cache.points.push(
            createPointsBoxRandomPoint(p5, cache.pointsBox)
        );
    }
};


/**
 * A reload event called during the initialization and when the canvas is resized
 * @param p5 The main p5 object
 */
const loadEvent = (p5: p5Types) => {
    // Records canvas middle coordinates
    cache.canvasMid[0] = p5.width / 2;
    cache.canvasMid[1] = p5.height / 2;

    const pointsBoxWidth = p5.width * parameters.flowField.pointsBoxSize;
    const pointsBoxHeight = p5.height * parameters.flowField.pointsBoxSize;

    // Records points box bounds
    cache.pointsBox.x1 = cache.canvasMid[0] - pointsBoxWidth;
    cache.pointsBox.y1 = cache.canvasMid[1] - pointsBoxHeight;
    cache.pointsBox.x2 = cache.canvasMid[0] + pointsBoxWidth;
    cache.pointsBox.y2 = cache.canvasMid[1] + pointsBoxHeight;

    // Clear the points array
    const pointsAmount = parameters.flowField.density;
    cache.points = [];

    for (let i = 0; i < pointsAmount; i++) {
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
    p5.pixelDensity(1);

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
                cache.points[i].x * parameters.flowField.perlinMult,
                cache.points[i].y * parameters.flowField.perlinMult
            ),
            0,
            1,
            0,
            parameters.flowField.maxAngle
        );

        // New Perlin vector
        cache.points[i].add(
            p5.createVector(Math.cos(angle), Math.sin(angle))
        );

        // Removes & create new point if outside of points box bounds
        recreateIfOutOfBounds(p5, i);

        // Draw the points as ellipses
        p5.ellipse(cache.points[i].x, cache.points[i].y, parameters.flowField.weight + 1);

        if (i > 0) {
            p5.line(
                cache.points[i-1].x,
                cache.points[i-1].y,
                cache.points[i].x,
                cache.points[i].y,
            );
        }
    }
};


export {
    initEvent,
    loadEvent,
    drawEvent
};