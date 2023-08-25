const config = {
    // General
    numberOfPages: 4,
    pageNames: [
        "home",
        "work",
        "about",
        "contact"
    ],

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
        mesh: "phoenix",
        meshPosition: { x: 0, y: -0.4, z: 0 },
        meshScale: 0.004,
        meshAnimationId: 0
    }
};


export default config;