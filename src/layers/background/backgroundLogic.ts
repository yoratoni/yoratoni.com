import p5Types from "p5";


/**
 * Main constant parameters of the visualization.
 */
const parameters = {
    colors: {
        background: "#010014",  // Main background color (same as the parent div)
    },

    grid: {
        cols: 32,               // Amount of columns (cell size & rows are calculated from that)
        fadeSpeed: 1,           // Speed of fading for each cell (activated color -> deactivated)
        activatedColor: 255,    // HSB mode activated hue color
        deactivatedColor: 0,    // HSB mode deactivated hue color
    }
};

interface IsP5Cache {
    storage: number[][],
    cellSize: number,
    rows: number
}

/**
 * Central cache of the visualization.
 */
const cache: IsP5Cache = {
    storage: [],            // Store the color values of each cell
    cellSize: 0,            // Size of a cell
    rows: 0,                // Dynamic number of rows
};

/**
 * A reload event called during the initialization and when the canvas is resized
 * @param p5 The main p5 object
 */
const loadEvent = (p5: p5Types) => {
    cache.cellSize = Math.ceil(p5.width / parameters.grid.cols);
    cache.rows = Math.ceil(p5.height / cache.cellSize);

    for (let x = 0; x < parameters.grid.cols; x++) {
        const jStorage = [];

        for (let y = 0; y < cache.rows; y++) {
            jStorage.push(parameters.grid.deactivatedColor);
        }

        cache.storage.push(jStorage);
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

    loadEvent(p5);
};

/**
 * Applies the default style/translation for drawing
 * @param p5 The main p5 object
 */
const setDefaultStyle = (p5: p5Types) => {
    p5.background(parameters.colors.background);
};

/**
 * The main p5 drawing event
 * @param p5 The main p5 object
 */
const drawEvent = (p5: p5Types) => {
    setDefaultStyle(p5);

    if (p5.mouseX > 0 && p5.mouseY < p5.width &&
        p5.mouseY > 0 && p5.mouseY < p5.height
    ) {
        const mouseX = Math.floor(cache.rows * (p5.mouseX / p5.width));
        const mouseY = Math.floor(parameters.grid.cols * (p5.mouseY / p5.height));
        cache.storage[mouseX][mouseY] = 255;
    }

    for (let x = 0; x < parameters.grid.cols; x++) {
        for (let y = 0; y < cache.rows; y++) {
            cache.storage[x][y] -= parameters.grid.fadeSpeed;
            cache.storage[x][y] = p5.constrain(cache.storage[x][y], 0, 255);

            p5.fill(cache.storage[x][y], 255, 128);
            p5.rect(
                x * cache.cellSize,
                y * cache.cellSize,
                cache.cellSize,
                cache.cellSize
            );
        }
    }
};


export {
    initEvent,
    loadEvent,
    drawEvent
};