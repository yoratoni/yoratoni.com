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


    interface PropsContainer {
        children?: React.ReactNode,
        style?: string
    }


    interface PropsNavButton {
        title: string,
        sectionId: string
    }


    interface PropsSection {
        children?: React.ReactNode,
        style?: string,
        sectionId?: string,
        title: string
    }


    interface PropsSocialButton {
        children?: React.ReactNode,
        title?: string,
        href?: string,
        target?: "_blank" | "_self" | "_parent" | "_top"
    }
}


export {};