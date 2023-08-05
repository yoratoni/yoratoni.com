import * as MuiIcons from "@mui/icons-material";
import React from "react";


declare global {
    /* Modules */
    module "*.png";
    module "*.jpg";
    module "*.jpeg";
    module "*.gif";
    module "*.svg";
    module "*.webp";
    module "*.bmp";

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

    /* Cards */
    interface IsCard {
        title: string;
        icon: string;
        techStack?: string[];
    }

    /* Card Name Context */
    interface IsCardNameContext {
        cardName: string;
        setCardName: React.Dispatch<React.SetStateAction<string>>;
    }

    /* Icons */
    interface IconProps {
        icon?: keyof typeof MuiIcons;
    }

    /* Card Content */
    interface IsCardContent {
        title: string;
        description: string;
        techStack: string[];
        icon: string;
        links: {
            github: string;
            live: string;
        };
    }
}


export { };