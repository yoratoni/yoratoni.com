const config = {
    // General
    numberOfPages: 4,
    pageNames: [
        "home",
        "work",
        "about",
        "contact"
    ],

    // Developer mode
    developerMode: false,

    // Parallax
    parallax: {
        numberOfLayers: 4,
        defaultSpeed: 2,
        maxSpeed: 128,
        speedModifier: 8,
        contentHeightWhereSpeedFactorIsOne: 700,
        minContentHeightSpeedFactor: 0.2
    },

    // Work
    projects: [
        {
            name: "Cybearl [Genesis]",
            short: "A crypto trading bot that uses the volatility of the market to make profits.",
            description: [
                "Based on a strategy pool that uses a governance system, Genesis is a crypto trading bot that uses the volatility of the market to make profits.",
                "Allowing for strategy testing and analysis, the weight of each strategy is determined by the results of theses strategies on historical data.",
            ],
            github: "https://github.com/cybearl/genesis",
            website: "https://cybearl.com/"
        },
        {
            name: "Huawei Router SMS Forwarding",
            short: "A simple CLI program used to forward SMS to another number.",
            description: [
                "A Python CLI program that I made a long time ago and recently updated, that allows you to work with SMS received on a 4G Huawei router."
            ],
            github: "https://github.com/yoratoni/huawei-router-sms-forwarding",
            website: null
        },
        {
            name: "Mdisk",
            short: "A tool that allows you to work with 'Beyond Good and Evil' files.",
            description: [
                "A tool for the game 'Beyond Good and Evil' that allows you to work with the game's files.",
                "It can extract and repack the game's archives, and I'm working on extracting/generating all types of files such as textures, etc...",
                "The goal was to write it entirely in Typescript with ts-node, and almost no external dependencies."
            ],
            github: "https://github.com/yoratoni/Mdisk",
            website: null
        },
        {
            name: "Web app parallax",
            short: "Similar to the parallax on this website, this repo allows you to create an horizontal parallax reacting to directions.",
            description: [
                "TODO"
            ],
            github: "https://github.com/yoratoni/Mdisk",
            website: null
        },
    ]
};


export default config;