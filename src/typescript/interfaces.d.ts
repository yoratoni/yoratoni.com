declare global {
    interface ICache {
        longestSequence: number,
        lastWorkerSequence: number,
        tempRecordSequence: number,
        sequenceSignatures: number[],
        history: number[number[]],
        lastWindowDims: number[]
    }


    interface IWorker {
        sequence: number,
        angle: number,
        array: number[],
        index: number,
        lineLength: number,
        coords: number[]
    }
}


export {};