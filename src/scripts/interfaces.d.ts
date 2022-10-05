import React from "react";


declare global {
    /* Generic */
    interface IsWithChildren {
        children: React.ReactNode
    }


    /* Animation frame */
    interface IsAnimationFrameCallback {
        (deltaTime: number): void
    }


    /* Parallax */
    type IsParallaxInstructionType = "previous" | "next" | "standby";

    interface IsParallaxInstruction {
        animation: "previous" | "next" | "standby"
    }

    interface IsParallaxDict {
        parallaxWidth: number | undefined | null,
        xArray: number[],
        localAnimation: "previous" | "next" | "standby"
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