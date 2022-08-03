let params = {
    // General speed parameters
    linesPerFrame: 128,
    parallelSequences: 16,

    // Line parameters
    lineMaxAngle: 1,
    lineAngle: 0.16,
    lineWeight: 4,
    lineAlpha: 10,

    // Max number of sequences
    maxSequences: 4096,
};


let cacheOriginalState = {
    // Dynamic line length based on screen size
    lineLength: 10,

    // Sequence cache
    longestSequenceArrayLength: 0,
    sequenceArray: [1, 2, 4],
    sequenceArrayLength: 3,
    sequenceArrayIndex: 0,
    sequenceAngle: 0,
    sequenceID: 1,

    // Line coordinates (x1, y1, x2, y2)
    coords: [0, 0, 0, 0]
};


/**
 * The dynamic version of the cache used by one sequence
 */
let cache = cacheOriginalState;


/**
 * The array that contains cache objects for each sequence,
 * based on the parallelSequences parameter
 */
let sequences = [];


/**
 * The main Collatz function
 * @param {*} n The current number or sequenceID
 * @returns A reversed array of all the numbers inside the sequence
 */
const getSequence = (n) => {
    let sequence = [];

    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = (n * 3 + 1) / 2;
        }

        sequence.push(n);
    }

    sequence.push(1);
    sequence.reverse();

    return sequence;
};


/**
 * Get the length of lines based on the size of the browser window
 * Called for each new sequence & based on the longest sequence
 */
const getDynamicLineLength = () => {
    let newLineLength = Math.ceil(window.innerHeight / cache.longestSequenceArrayLength);
    cache.lineLength = newLineLength;
};


/**
 * Get the coordinates of a new line based on the distance, the angle & the origin
 * @param {*} isPair Check the parity of the number (Negative angle if the number is pair)
 */
const getNewLineCoords = (isPair) => {
    let x1 = cache.coords[2];
    let y1 = cache.coords[3];
    let x2, y2;

    if (isPair && cache.sequenceAngle > -params.lineMaxAngle) {
        cache.sequenceAngle -= params.lineAngle;
    } else if (cache.sequenceAngle < params.lineMaxAngle) {
        cache.sequenceAngle += params.lineAngle;
    }

    x2 = x1 + (cache.lineLength * Math.sin(cache.sequenceAngle));
    y2 = y1 + (cache.lineLength * Math.cos(cache.sequenceAngle));

    cache.coords = [x1, y1, x2, y2];
};


/**
 * Draw a single line (corresponding to one number of a Collatz sequence)
 * @param {*} p5 The main p5 object
 * @param {*} sequenceID The ID of the current sequence (such as 2 for 2 -> 1)
 */
const drawLine = (p5, sequenceID) => {
    if (sequenceID % 2 === 0) {
        getNewLineCoords(true);
    } else {
        getNewLineCoords(false);
    }

    p5.strokeWeight(params.lineWeight);
    p5.stroke(
        p5.map(cache.sequenceArrayIndex, 1, cache.sequenceArrayLength, 60, 92, true),
        100,
        100,
        params.lineAlpha
    );
    p5.line(...cache.coords);
};


/**
 * Reset the cache for each new sequence (coordinates & sequence angle/index)
 */
const resetCacheForNewSequence = () => {
    cache.sequenceArray = getSequence(cache.sequenceID++);
    cache.sequenceArrayLength = cache.sequenceArray.length;
    cache.coords = [0, 0, 0, 0];
    cache.sequenceArrayIndex = 0;
    cache.sequenceAngle = 0;

    // Save the biggest sequence length for the dynamic line length
    if (cache.sequenceArrayLength > cache.longestSequenceArrayLength) {
        cache.longestSequenceArrayLength = cache.sequenceArrayLength;
    }
};


/**
 * Reset the Collatz cache (redraw..)
 */
const resetCollatz = () => {
    cache = cacheOriginalState;
};


/**
 * The main p5 collatz function
 * @param {*} p5 The main p5 object
 */
const drawCollatz = (p5) => {
    p5.colorMode(p5.HSB, 100);
    p5.translate(p5.width / 2, 0);

    if (cache.sequenceID <= params.maxSequences) {
        for (let i = 0; i < params.linesPerFrame; i++) {
            if (cache.sequenceArrayIndex < cache.sequenceArray.length) {
                drawLine(p5, cache.sequenceArray[cache.sequenceArrayIndex]);
                cache.sequenceArrayIndex++;
            } else {
                resetCacheForNewSequence();

                // Get a new line length based on the sequence length
                getDynamicLineLength();
            }
        }
    }
};


module.exports = {
    drawCollatz,
    resetCollatz
};
