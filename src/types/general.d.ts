export interface IsWorkCard {
    bgImage: {
        jpg: string;
        webp: string;
    };
    bgBrightness: number;
    title: string;
    description: string;
    technologies: string[];
    image?: {
        jpg: string;
        webp: string;
    };
    link?: string;
}

/**
 * Interface for the main configuration.
 */
export interface IsMainConfig {
    pagesNames: string[];
    developerMode: boolean;
    parallax: {
        numberOfLayers: number;
        defaultSpeed: number;
        maxSpeed: number;
        speedModifier: number;
        contentHeightWhereSpeedFactorIsOne: number;
        minContentHeightSpeedFactor: number;
    };
    work: {
        breakpoints: {
            min: number;
            max: number;
            nbCards: number;
        }[];
        cards: IsWorkCard[];
    };
    about: string[];
    contact: {
        email: string;
        emailJs: {
            serviceId: string;
            templateId: string;
            publicKey: string;
        };
        reCaptcha: {
            siteKey: string;
        };
    };
}