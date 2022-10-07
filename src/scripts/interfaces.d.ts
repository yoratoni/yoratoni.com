import React from "react";


declare global {
    /* Generic */
    interface IsWithChildren {
        children: React.ReactNode
    }

    interface IsDimensions {
        width: number,
        height: number
    }


    /* Parallax */
    type IsParallaxInstructionType = "previous" | "next" | "standby";
    type IsDirectionSpeedFactor = -1 | 1;

    interface IsParallaxInstruction {
        animation: "previous" | "next" | "standby"
    }

    interface IsParallaxDict {
        directionSpeedFactor: -1 | 1,
        parallaxWidth: number,
        parallaxOneWidth: number,
        parallaxRepeat: number,
        xArray: number[],
        localAnimation: "previous" | "next" | "standby"
    }


    /* Animation frame */
    type IsAnimationDependency = number | null | undefined |
    IsDirectionSpeedFactor;

    interface IsAnimationFrameCallback {
        (deltaTime: number): void
    }


    /* Project cards */
    interface IsProjectCard {
        sourceCodeLink: string | null,
        externalLink: string | null,
        title: string,
        description: string,
        techStack: string[]
    }

    type IsProjectCardData = IsProjectCard[];
}


export {};