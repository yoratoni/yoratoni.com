import p5Types from "p5";


declare global {
    type P5ResizeFunction = (p5: p5Types) => void;

    type props = {
        start: number[],
        end: number[]
    }
}


export {};