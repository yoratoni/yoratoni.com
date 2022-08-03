import p5Types from "p5";


const parameters = {
    // Max amount of sequences
    maxSequences: 2048,

    // Number of sequences drawn at the same time
    parallelSequences: 16,

    // Parameters for an unique line
    lineAngleLimiter: 1,
    lineAngle: 0.16,
    lineWeight: 4,
    lineAlpha: 10,
};


const worker: IWorker = {
    ID: -1,                 // Unique sequence identifier
    angle: 0,               // Current angle (based on parameters.lineAngle)
    array: [],              // Contains the complete sequence
    index: -1,              // The current index inside the sequence array
    coords: [0, 0, 0, 0]    // Contains the coordinates for each line
};


/**
 * The array that contains cache objects for each sequence,
 * based on the parallelSequences parameter
 */
let sequences: IWorker[] = [];


/**
 * Populate the sequences array with an amount of workers,
 * can also be used to reset every worker to its original state
 */
const populate = () => {
    sequences = new Array(parameters.parallelSequences).fill(worker);
};


/**
 * The main Collatz function
 * @param n The current number or sequenceID
 * @returns A reversed array of all the numbers inside the sequence
 */
const getSequence = (n: number) => {
    const sequence = [];

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
 * The main p5 collatz function
 * @param {*} p5 The main p5 object
 */
const drawCollatz = (p5: p5Types) => {
    p5.colorMode(p5.HSB, 100);
    p5.translate(p5.width / 2, 0);

    // Verify the content of the sequences array
    if (sequences.length !== parameters.parallelSequences) {
        populate();
    }

    // Main workers loop
    for (const sequence of sequences) {
        // Calculate sequence if worker is in an empty/finalized state
        if (sequence.index === sequence.array.length - 1) {
            sequence.array = getSequence(sequence.ID + 1);
        }
    }
};


module.exports = {
    drawCollatz
};