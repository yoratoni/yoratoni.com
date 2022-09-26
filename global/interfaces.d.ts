import React from "react";


declare global {
    interface IsWithChildren {
        children: React.ReactNode;
    }

    interface IsChildAndClass extends IsWithChildren {
        className?: string
    }

    interface IsThemeContext {
        theme: string
        switchTheme: { (): void } | null
    }

    interface IsHyperlink {
        name?: string,
        title?: string,
        href?: string,
        hrefLang?: string,
        target?: "_blank" | "_parent" | "_self" | "_top"
    }

    interface IsIconButton extends IsWithChildren {
        title?: string
        onClick?: React.MouseEventHandler<HTMLButtonElement>
    }

    interface IsIconHyperlink extends IsWithChildren {
        title?: string,
        href?: string,
        hrefLang?: string,
        target?: "_blank" | "_parent" | "_self" | "_top"
    }
}


export {};