declare global {
    /**
     * Contains the coordinates of each line
     * and the number inside the sequence,
     * used for the alpha calculation
     */
    interface ICollatzLineData {
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        number: number,
        hue: number
    }


    /**
     * The main cache for the Collatz visualization
     */
    interface ICollatzCache {
        longestSequence: number,
        lastWorkerSequence: number,
        tempRecordSequence: number,
        sequenceSignatures: number[],
        history: number[ICollatzLineData],
        lastWindowDims: number[]
    }


    /**
     * Each worker draw one sequence (1 line per frame)
     */
    interface ICollatzWorker {
        sequence: number,
        angle: number,
        array: number[],
        index: number,
        lineLength: number,
        lineData: ICollatzLineData
    }
}


export {};