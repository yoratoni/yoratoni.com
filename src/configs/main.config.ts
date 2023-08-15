const config = {
    // General
    numberOfPages: 4,

    // Parallax
    parallax: {
        numberOfLayers: 5,
        defaultSpeed: 1,
        maxSpeed: 128,
        speedModifier: 8,
        contentHeightWhereSpeedFactorIsOne: 800,
        minContentHeightSpeedFactor: 0.2
    },

    // Three JS
    three: {
        showStats: true,
        meshPath: "",
        meshScale: 1.0,
    }
};


export default config;