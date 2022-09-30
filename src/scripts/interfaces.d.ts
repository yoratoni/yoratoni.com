import React from "react";


declare global {
    interface IsWithChildren {
        children: React.ReactNode;
    }

    interface IsThemeContext {
        theme: string
        switchTheme: { (): void } | null
    }

    interface IsSeparator {
        heading?: string | null,
        subheading?: string | null
    }

    interface IsMainSection extends IsSeparator {
        children: React.ReactNode;
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