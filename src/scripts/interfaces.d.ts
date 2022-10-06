import React from "react";


declare global {
    /* Generic */
    interface IsWithChildren {
        children: React.ReactNode
    }


    /* Parallax */
    type IsParallaxInstructionType = "previous" | "next" | "standby";
    type IsDirectionSpeedFactor = -1 | 1;

    interface IsParallaxInstruction {
        animation: "previous" | "next" | "standby"
    }

    interface IsParallaxDirectionStyle {
        left: "auto" | "0",
        right: "auto" | "0",
        backgroundPosition: "left" | "right"
    }

    interface IsParallaxDict {
        directionSpeedFactor: -1 | 1,
        directionStyle: IsParallaxDirectionStyle,
        parallaxWidth: number | undefined | null,
        xArray: number[],
        localAnimation: "previous" | "next" | "standby"
    }


    /* Animation frame */
    type IsAnimationDependency = number | null | undefined |
    IsParallaxDirectionStyle |
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