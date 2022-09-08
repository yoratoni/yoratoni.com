import p5Types from "p5";


declare global {
    type IsP5ResizeFunction = (p5: p5Types) => void;

    type IsProjectCardDataArray = PropsProjectCard[];
}


export {};