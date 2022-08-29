import p5Types from "p5";
import React from "react";


declare global {
    interface IP5_4Coords {
        x1: number,
        y1: number,
        x2: number,
        y2: number
    }


    interface IP5BackgroundCache {
        canvasMid: number[],
        points: p5Types.Vector[],
        pointsBox: IP5_4Coords
    }


    interface PropsLink {
        children?: React.ReactNode,
        otherStyle?: string,
        linkStyle?: string,
        name?: string | null,
        title?: string,
        href?: string,
        target?: "_blank" | "_self" | "_parent" | "_top"
    }
}


export {};