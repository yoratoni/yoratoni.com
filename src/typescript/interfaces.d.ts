declare global {
    interface IWorker {
        ID: number,
        angle: number,
        size: number,
        array: number[],
        index: number,
        coords: number[]
    }
}


export {};