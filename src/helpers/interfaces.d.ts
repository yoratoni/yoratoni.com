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


    /* Page Number Context */
    interface IsPageNumberContext {
        pageNumber: number;
        setPageNumber: React.Dispatch<React.SetStateAction<number>>;
    }

    /* Page */
    interface IsPage {
        pageNumber: number;
    }

    /* Background */
    type IsDirectionSpeedFactor = -1 | 1;

    interface IsBackground {
        direction: IsDirectionSpeedFactor;
        animIndex: number;
    }

    type isBckAnimationState = "BCK_ANIM_STATE::START" | "BCK_ANIM_STATE::STOP";

    interface IsBackgroundDict {
        width: number;
        oneImageWidth: number;
        imageRepeated: number;
        animationState: isBckAnimationState;
        animationCurrX: number;
        speed: number;
        xArray: number[];
    }


    /* Animation frame */
    type IsAnimationDependency = number | null | undefined | boolean |
    IsDirectionSpeedFactor | isBckAnimationState;

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