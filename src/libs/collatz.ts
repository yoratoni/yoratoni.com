import p5Types from "p5";


const parameters = {
    // Max amount of sequences
    maxSequences: 64,

    // Number of sequences drawn at the same time
    parallelSequences: 2,

    // Parameters for an unique line
    lineAngleLimiter: 1,
    lineAngle: 0.16,
    lineWeight: 4,
    lineAlpha: 10
};


const cache = {
    maxSequenceSize: 16,    // Contains the biggest sequence of all (used for the size calculation)
    lastSequencesID: 0,     // Contains the last sequence ID (used to limit sequences)
    tempRecordID: 0,        // Used to record an ID temporarily before resetting a worker

    // An array containing the ID of each worker
    // NOTE:
    //      As workers are desynchronized, a worker with a shorter sequence
    //      can have the same ID as the next one,
    //      IDsSignature is used to skip IDs when they're already used
    IDsSignature: []
};


const worker: IWorker = {
    ID: -1,                 // Unique sequence identifier
    angle: 0,               // Current angle (based on parameters.lineAngle)
    size: 0,                // The size of each line calculated per sequence length
    array: [],              // Contains the complete sequence
    index: -1,              // The current index inside the sequence array
    coords: [0, 0, 0, 0]    // Contains the coordinates for each line
};


/**
 * The array that contains cache objects for each sequence,
 * based on the parallelSequences parameter
 */
const sequences: IWorker[] = [];


/**
 * The main Collatz function
 * @param n The current number or sequenceID
 * @returns A reversed array of all the numbers inside the sequence
 */
const getSequence = (n: number) => {
    const sequence = [n];

    while (n !== 1) {
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
 */
const populate = () => {
    // Clean the previous array
    if (sequences.length > 0) {
        sequences.length = 0;
    }

    // Initialize the sequences (To 1 => parameters.parallelSequences)
    for (let i = 1; i <= parameters.parallelSequences; i++) {
        // Assign specific parameters
        const tempWorker = {...worker};
        tempWorker.ID = i;
        tempWorker.index = 0;
        tempWorker.array = getSequence(i);

        sequences.push(tempWorker);
    }
};


/**
 * Get the size of each line for one sequence,
 * Called for each new sequence & based on the longest sequence
 * @param {IWorker} sequence The current sequence (based on IWorker)
 */
const getDynamicSequenceSize = (sequence: IWorker) => {
    sequence.size = Math.floor(window.innerHeight / cache.maxSequenceSize);
};


/**
 * Get the coordinates of a new line based on the distance, the angle & the origin
 * @param {IWorker} sequence The current sequence (based on IWorker)
 */
const getNewLineCoords = (sequence: IWorker) => {
    const isEven = sequence.array[sequence.index] % 2 === 0;
    const x1 = sequence.coords[2];
    const y1 = sequence.coords[3];

    if (isEven && sequence.angle > -parameters.lineAngleLimiter) {
        sequence.angle -= parameters.lineAngle;
    } else if (sequence.angle < parameters.lineAngleLimiter) {
        sequence.angle += parameters.lineAngle;
    }

    const x2 = x1 + (sequence.size * Math.sin(sequence.angle));
    const y2 = y1 + (sequence.size * Math.cos(sequence.angle));

    sequence.coords = [x1, y1, x2, y2];
};


/**
 * The main collatz setup function, used to initialize & to reset the workers state
 */
const initCollatz = () => {
    populate();
};


let doOnce = 0;

/**
 * The main collatz drawing function linked to the main p5 draw event
 * @param {*} p5 The main p5 object
 */
const drawCollatz = (p5: p5Types) => {
    p5.colorMode(p5.HSB, 100);
    p5.translate(p5.width / 1.8, 0);

    // Line drawing setup
    p5.strokeWeight(parameters.lineWeight);

    if (cache.lastSequencesID < parameters.maxSequences) {
        if (doOnce < 4) {
            for (const [i, sequence] of sequences.entries()) {
            // console.log(`${i}, ${sequence.ID}`);

                // Update worker/sequence if the previous sequence is drawn (index == length)
                if (sequence.index >= sequence.array.length - 1) {
                    cache.tempRecordID = sequence.ID + 1;  // Records the previous sequence ID

                    // Reset sequence and apply new ID based on the previous one + 1
                    sequences[i] = {...worker};
                    sequences[i].array = getSequence(cache.tempRecordID);
                    sequences[i].index = 0;
                    sequences[i].ID = cache.tempRecordID;

                    // Records the biggest sequence size
                    if (sequence.array.length > cache.maxSequenceSize) {
                        cache.maxSequenceSize = sequence.array.length;
                    }

                    // Update the "size" property for each sequence
                    getDynamicSequenceSize(sequences[i]);

                    // Records the largest sequence ID (used to limit sequences)
                    cache.lastSequencesID++;
                }

                // Draw lines
                getNewLineCoords(sequence);

                p5.stroke(
                    p5.map(sequence.index, 1, sequence.size - 1, 60, 92, true),
                    100,
                    100,
                    parameters.lineAlpha
                );
                p5.line(
                    sequence.coords[0],
                    sequence.coords[1],
                    sequence.coords[2],
                    sequence.coords[3],
                );

                sequence.index++;
            }

            console.log(sequences);

            doOnce++;
        }
    }
};


export {
    initCollatz,
    drawCollatz
};