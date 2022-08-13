import p5Types from "p5";


declare global {
    interface IP5_4Coords {
        x1: number
        y1: number
        x2: number
        y2: number
    }


    interface IP5BackgroundCache {
        windowMid: number[]
        points: p5Types.Vector[]
        pointsBox: IP5_4Coords

        perfCheckT1: number
        perfCheckMeasure: number
        perfCheckMeasureStep: number
    }
}


export {};