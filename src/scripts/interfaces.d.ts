import React from "react";


declare global {
    interface IsWithChildren {
        children: React.ReactNode
    }

    interface IsParallax {
        speed: number
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