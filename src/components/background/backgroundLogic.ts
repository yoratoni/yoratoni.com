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
    flowField: {
        pointsBoxSize: 0.5,         // Size of the points box (percentage of window size)
        perlinMult: 0.02,           // Multiply the perlin noise effect
        maxPoints: 256,             // Limits the total amount of points on a powerful device
        maxAngle: 16,               // The max angle for a Perlin noise point
        density: 16,                // Default amount of points when loading the webpage
        weight: 1,                  // The weight / thickness of each line (same +1 with ellipsis)
        alpha: 64                   // The alpha of each line
    },

    // Perf Check system parameters
    perfCheck: {
        cycle: 16,                   // If cache.perfCheckMeasureStep == cycle, execute perfCheck()
        pointsPerCycle: 2            // Used to spawn multiple points at each cycle (~2)
    }
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

    // The dynamic length of each line based on the max value inside windowMid
    dynLineLength: 0,

    // Perf Check system
    perfCheck: {
        step: 0,                    // If step >= parameters.perfCheckCycle, execute perfCheck()
        avgFPS: 0,                  // Contains the average FPS final value calculated from the array
        avgFPSArray: [],            // Contains multiple FPS values used to calculate average

        // Used to measure the default FPS of any device
        // Allowing the canvas to match device performances
        deviceFPS: -1
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
        parameters.backgroundColor.b,
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
        cache.points.push(createPointsBoxRandomPoint(p5, cache.pointsBox));
    }
};


/**
 * Removes or add points depending on the FPS
 * @param p5 The main p5 object
 */
const perfCheckSystem = (p5: p5Types) => {
    if (cache.perfCheck.step >= parameters.perfCheck.cycle) {
        // Measure average FPS from array
        cache.perfCheck.avgFPS = Math.round(
            cache.perfCheck.avgFPSArray.reduce(
                (a, b) => a+b
            ) / parameters.perfCheck.cycle
        );

        // Measure the default FPS of the device (floored to nearest 10)
        // Calculated from average array to avoid peak FPS to influence deviceFPS
        const flooredAvgFPS = Math.floor(cache.perfCheck.avgFPS / 10) * 10;
        if (flooredAvgFPS > cache.perfCheck.deviceFPS) {
            cache.perfCheck.deviceFPS = flooredAvgFPS;
        }

        // Update amount of points if inside the bound
        if (
            cache.points.length >= parameters.flowField.density
            && cache.points.length < parameters.flowField.maxPoints
        ) {
            // Generate or delete X amount of points to increase animation speed
            for (let i = 0; i < parameters.perfCheck.pointsPerCycle; i++) {
                if (cache.perfCheck.avgFPS < cache.perfCheck.deviceFPS) {
                    cache.points.pop();
                } else {
                    cache.points.push(createPointsBoxRandomPoint(p5, cache.pointsBox));
                }
            }
        }

        cache.perfCheck.step = 0;
    }

    // Average FPS array
    cache.perfCheck.avgFPSArray[cache.perfCheck.step] = p5.frameRate();

    // DEBUG ONLY
    // p5.textSize(20);
    // p5.fill(255);
    // p5.text(`Points: ${cache.points.length}`, 50, 50);
    // p5.text(`Average FPS: ${cache.perfCheck.avgFPS}`, 50, 80);
    // p5.text(`Device FPS: ${cache.perfCheck.deviceFPS}`, 50, 110);

    cache.perfCheck.step++;
};


/**
 * A reload event called during the initialization and when the window is resized
 * @param p5 The main p5 object
 */
const loadEvent = (p5: p5Types) => {
    // Records window middle coordinates
    cache.windowMid[0] = window.innerWidth / 2;
    cache.windowMid[1] = window.innerHeight / 2;

    // Calculate dynamic line length
    cache.dynLineLength = Math.max(
        window.innerWidth,
        window.innerHeight
    );

    const pointsBoxWidth = window.innerWidth * parameters.flowField.pointsBoxSize;
    const pointsBoxHeight = window.innerHeight * parameters.flowField.pointsBoxSize;

    // Records points box bounds
    cache.pointsBox.x1 = cache.windowMid[0] - pointsBoxWidth;
    cache.pointsBox.y1 = cache.windowMid[1] - pointsBoxHeight;
    cache.pointsBox.x2 = cache.windowMid[0] + pointsBoxWidth;
    cache.pointsBox.y2 = cache.windowMid[1] + pointsBoxHeight;

    // Clear the points array
    const pointsAmount = Math.max(cache.points.length, parameters.flowField.density);
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

        // Calculate current angle between MID & point
        const lineAngle = Math.atan2(
            cache.points[i].x - cache.windowMid[0],
            cache.points[i].y - cache.windowMid[1]
        );

        // Draw a line between MID & point based on the angle
        p5.line(
            cache.windowMid[0],
            cache.windowMid[1],
            cache.windowMid[0] + (cache.dynLineLength * Math.sin(lineAngle)),
            cache.windowMid[1] + (cache.dynLineLength * Math.cos(lineAngle)),
        );
    }

    // Perf check system
    perfCheckSystem(p5);
};


export {
    initEvent,
    loadEvent,
    drawEvent
};