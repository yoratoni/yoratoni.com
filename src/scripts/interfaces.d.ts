import React from "react";


declare global {
    /* Generic */
    interface IsWithChildren {
        children: React.ReactNode;
    }

    interface IsDimensions {
        width: number;
        height: number;
    }

    interface IsButtonActive {
        state: "active" | null;
    }


    /* Page Number Context */
    interface IsPageNumberContext {
        pageNumber: number;
        setPageNumber: React.Dispatch<React.SetStateAction<number>>;
    }


    /* Background */
    type IsDirectionSpeedFactor = -1 | 1;

    interface IsBackground {
        direction: IsDirectionSpeedFactor;
        animIndex: number;
    }

    interface IsBackgroundDict {
        width: number;
        oneImageWidth: number;
        imageRepeated: number;
        launchAnimation: boolean;
        speed: number;
        xArray: number[];
    }


    /* Animation frame */
    type IsAnimationDependency = number | null | undefined | boolean
    | IsDirectionSpeedFactor;

    interface IsAnimationFrameCallback {
        (deltaTime: number): void;
    }


    /* Project cards */
    interface IsProjectCard {
        sourceCodeLink: string | null;
        externalLink: string | null;
        title: string;
        description: string;
        techStack: string[];
    }

    type IsProjectCardData = IsProjectCard[];
}


export {};