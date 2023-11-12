export interface IsWorkProject {
    title: string;
    description: string;
    link: string;
    image: string;
    technologies: string[];
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
    work: IsWorkProject[];
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