import React from "react";


declare global {
    interface IsPropsContainer {
        children?: React.ReactNode,
        style?: string
    }


    interface IsPropsNavButton {
        title: string,
        sectionId: string,
        offset?: number,
        prev?: string
    }


    interface IsPropsSection {
        children?: React.ReactNode,
        style?: string,
        sectionId?: string,
        title: string
    }


    interface IsPropsButton {
        children?: React.ReactNode,
        title?: string,
        href?: string,
        target?: "_blank" | "_self" | "_parent" | "_top"
    }


    interface IsPropsProjectCardData {
        github?: string,
        live?: string,
        title: string,
        description: string,
        techs: string[]
    }
}


export {};