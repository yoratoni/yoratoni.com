import React from "react";


declare global {
    interface IsWithChildren {
        children: React.ReactNode
    }

    type IsParallaxInstructionType = "previous" | "next" | "standby"
    type IsAnimationPhase = "accelerate" | "decelerate"

    interface IsParallaxInstruction {
        instruction: "previous" | "next" | "standby"
    }

    interface IsParallaxDirectionStyle {
        left: "auto" | "0",
        right: "auto" | "0",
        animationName: "slidePrev" | "slideNext",
        backgroundPosition: "left" | "right"
    }

    interface IsParallaxDict {
        directionStyle: IsParallaxDirectionStyle,
        speedArray: number[],
        localInstruction: "previous" | "next" | "standby"
    }

    interface IsScrollContext {
        scroll: number,
        applyScroll: { (): void } | null
    }

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