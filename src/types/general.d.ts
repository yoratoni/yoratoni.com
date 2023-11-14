export interface IsWorkCard {
    bgImage: string;
    title: string;
    description: string;
    technologies: string[];
    image?: string;
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
    workCards: IsWorkCard[];
    about: string[];
    contact: {
        email: string;
        emailJs: {
            serviceId: string;
            templateId: string;
            publicKey: string;
        }
    };
}