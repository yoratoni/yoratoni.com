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


const cacheObj: ICollatzCache = {
    longestSequence: 16,     // Contains the biggest sequence of all
    lastWorkerSequence: 0,   // Contains the last worker sequence
    tempRecordSequence: 0,   // Records a sequence number temporarily before resetting a worker

    // An array containing the current sequence of each worker:
    // As workers are desynchronized, a worker with a shorter sequence
    // can have, at one point, the same sequence number as the next one,
    // sequenceSignatures is used to skip sequences when they're already used
    sequenceSignatures: [],

    // Saves all the drawn lines to redraw them later (window resizing, etc..)
    // Each line is stored as an ILineData dict: { x1, y1, x2, y2, number, hue }
    history: [],

    // Saves the last dimensions of the window for the history
    lastWindowDims: [0, 0]
};


const workerObj: ICollatzWorker = {
    sequence: -1,           // Worker Collatz sequence number
    angle: 0,               // Current angle (based on parameters.lineAngle)
    array: [],              // Contains the complete sequence
    index: -1,              // The current index inside the sequence array
    lineLength: 0,          // The length of each line calculated per sequence length

    // Contains the data for each line
    lineData: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        number: 1,
        hue: 1
    }
};


/**
 * The main array that contains global cache data
 */
const cache: ICollatzCache = {...cacheObj};


/**
 * The main array that contains all the workers and their data
 * (based on the parallelSequences parameter)
 */
const workers: ICollatzWorker[] = [];


/**
 * Saves the last dimensions of the window for the history
 */
const getWindowDims = () => {
    cache.lastWindowDims = [
        window.innerWidth,
        window.innerHeight
    ];
};


/**
 * The main Collatz function
 * @param n The current sequence number
 * @returns A reversed array of all the numbers inside the sequence
 */
const getSequence = (n: number) => {
    const sequence = [n];

    // Also limit the max length of a sequence
    while (sequence.length < parameters.lengthLimit && n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = (n * 3 + 1) / 2;
        }

        sequence.push(n);
    }

    sequence.reverse();
    return sequence;
};


/**
 * Populate the sequences array with an amount of workers,
 * can also be used to reset every worker to its original state
 * @param startingSequence Defines the initial starting sequence for the workers
 */
const populate = (startingSequence: number) => {
    // Clean the previous array
    if (workers.length > 0) {
        workers.length = 0;
    }

    // Initialize the workers
    const endPoint = startingSequence + parameters.parallelSequences;

    for (let i = startingSequence; i <= endPoint; i++) {
        // Assign specific parameters
        const tempWorker = {...workerObj};
        tempWorker.sequence = i;
        tempWorker.index = 0;
        tempWorker.array = getSequence(i);

        // Populate sequence signatures array
        cache.sequenceSignatures[i-1] = i;

        workers.push(tempWorker);
    }
};


/**
 * Get the length of each line for one sequence,
 * Called for each new sequence & based on the longest sequence
 * @param worker The current worker (reference)
 */
const dynamicLineLength = (worker: ICollatzWorker) => {
    worker.lineLength = Math.floor(
        window.innerHeight / (cache.longestSequence) * parameters.lineHeightFactor
    );
};


/**
 * Get the coordinates of a new line based on the distance, the angle & the origin
 * @param worker The current worker (reference)
 */
const getNewLineCoords = (worker: ICollatzWorker) => {
    const isEven = worker.array[worker.index] % 2 === 0;

    // Based on previous line x2 & y2
    const x1 = worker.lineData.x2;
    const y1 = worker.lineData.y2;

    if (isEven && worker.angle > -parameters.lineAngleLimiter) {
        worker.angle -= parameters.lineAngle;
    } else if (worker.angle < parameters.lineAngleLimiter) {
        worker.angle += parameters.lineAngle;
    }

    // Trigonometry used to find x2 & y2 from angle, distance & x1, y1
    const x2 = x1 + (worker.lineLength * Math.sin(worker.angle));
    const y2 = y1 + (worker.lineLength * Math.cos(worker.angle));

    worker.lineData = {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2,
        number: worker.array[worker.index],
        hue: 0
    };
};


/**
 * Based on the SequencesSignature implementation,
 * returns a next sequence number with an uniqueness verification
 * @param i The current worker index inside the "workers" list
 */
const getNextSequenceNumber = (i: number) => {
    cache.sequenceSignatures[i] = Math.max(...cache.sequenceSignatures) + 1;
    return cache.sequenceSignatures[i];
};


/**
 * The internal function used to draw each line with p5
 * @param p5 The main p5 object
 * @param lineData An array containing the data about a line
 * @param lengthFactor A factor of the original length (Defaults to 1)
 */
const drawLineFromLineData = (p5: p5Types, lineData: ICollatzLineData, lengthFactor = 1) => {
    p5.stroke(
        lineData.hue,
        100,
        100,
        parameters.lineAlpha
    );

    p5.line(
        lineData.x1 * lengthFactor,
        lineData.y1 * lengthFactor,
        lineData.x2 * lengthFactor,
        lineData.y2 * lengthFactor,
    );
};


/**
 * Draw an unique line of a sequence (used inside the p5 draw loop)
 * @param p5 The main p5 object
 * @param worker The current worker (reference)
 */
const drawNewLine = (p5: p5Types, worker: ICollatzWorker) => {
    const lineData: ICollatzLineData = {
        ...worker.lineData,
        hue: p5.map(worker.index, 1, worker.array.length - 1, 60, 92, true)
    };

    drawLineFromLineData(p5, lineData);

    // Saves that line into the history
    cache.history.push(lineData);
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
 * The main collatz setup function, used to initialize & to reset the workers state
 * @param p5 The main p5 object
 */
const initCollatz = (p5: p5Types) => {
    // Cache history system
    if (cache.history.length > 0) {
        setDefaultStyle(p5);

        const lengthFactor = window.innerHeight / cache.lastWindowDims[1];

        const t1 = p5.millis();

        for (let i = 0; i < cache.history.length; i++) {
            drawLineFromLineData(p5, cache.history[i], lengthFactor);
        }

        console.log(`${Math.round(p5.millis() - t1)} ms for ${cache.history.length} lines`);

    // Empty cache: Populate workers from 1 to X
    } else {
        populate(1);
    }
};


/**
 * The main collatz drawing function linked to the main p5 draw event
 * @param p5 The main p5 object
 */
const drawCollatz = (p5: p5Types) => {
    setDefaultStyle(p5);

    if (cache.lastWorkerSequence < parameters.maxSequences) {
        for (const [i, worker] of workers.entries()) {
            // Update worker if the previous worker sequence is drawn (index == length)
            if (worker.index >= worker.array.length - 1) {
                // Reset worker and apply new sequence number based on the previous one + 1
                workers[i] = {...workerObj};
                workers[i].sequence = getNextSequenceNumber(i);
                workers[i].array = getSequence(worker.sequence);
                workers[i].index = 0;

                // Records the longest collatz sequence
                if (worker.array.length > cache.longestSequence) {
                    cache.longestSequence = worker.array.length;
                }

                // Update the "len" property for each sequence
                dynamicLineLength(workers[i]);

                // Records the largest sequence number (used to limit worker sequences)
                cache.lastWorkerSequence++;
            }

            // Draw lines
            getNewLineCoords(workers[i]);
            drawNewLine(p5, workers[i]);

            worker.index++;
        }
    }
};


export {
    getWindowDims,
    initCollatz,
    drawCollatz
};