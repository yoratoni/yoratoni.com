import p5Types from "p5";
import React from "react";


declare global {
    interface IsP5_4Coords {
        x1: number,
        y1: number,
        x2: number,
        y2: number
    }


    interface IsP5BackgroundCache {
        canvasMid: number[],
        points: p5Types.Vector[],
        pointsBox: IP5_4Coords
    }


    interface IsPropsContainer {
        children?: React.ReactNode,
        style?: string
    }


    interface IsPropsNavButton {
        title: string,
        sectionId: string,
        offset?: number
    }


    interface IsPropsSection {
        children?: React.ReactNode,
        style?: string,
        sectionId?: string,
        title: string
    }


    interface IsPropsSocialButton {
        children?: React.ReactNode,
        title?: string,
        href?: string,
        target?: "_blank" | "_self" | "_parent" | "_top"
    }


    interface IsPropsProjectCardData {
        github?: string,
        live?: string,
        title: string,
        description: string,
        techs: string[]
    }
}


export {};