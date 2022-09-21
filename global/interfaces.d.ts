import React from "react";


declare global {
    interface IsWithChildren {
        children: React.ReactNode;
    }

    interface IsThemeContext {
        theme: string
        switchTheme: { (): void } | null
    }

    interface IsNamed {
        name?: string,
        title?: string
    }

    interface IsHyperlink extends IsNamed {
        href?: string,
        hrefLang?: string,
        target?: "_blank" | "_parent" | "_self" | "_top"
    }
}


export {};