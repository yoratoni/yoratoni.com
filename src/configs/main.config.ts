import { IsMainConfig } from "@/types/general";


const config: IsMainConfig = {
    // General
    pagesNames: [
        "home",
        "work",
        "about_0",
        "about_1",
        "about_2",
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
        contentHeightWhereSpeedFactorIsOne: 1536,
        minContentHeightSpeedFactor: 0.2
    },

    // Work
    work: {
        breakpoints: [
            { min: 0, max: 699, nbCards: 2 },
            { min: 700, max: 879, nbCards: 3 },
            { min: 880, max: 1059, nbCards: 4 },
            { min: 1060, max: Infinity, nbCards: 5 }
        ],
        cards: [
            {
                bgImage: {
                    jpg: "/assets/images/work/01/bck.jpg",
                    webp: "/assets/images/work/01/bck.webp"
                },
                bgBrightness: 0.4,
                title: "Huawei SMS forwarding",
                description: "A simple CLI program used to forward SMS to another number.",
                technologies: ["Python", "Huawei LTE API", "PyYAML"],
                image: {
                    jpg: "/assets/images/work/01/icon.jpg",
                    webp: "/assets/images/work/01/icon.webp"
                },
                link: "https://github.com/yoratoni/huawei-router-sms-forwarding"
            },
            {
                bgImage: {
                    jpg: "/assets/images/work/02/bck.jpg",
                    webp: "/assets/images/work/02/bck.webp"
                },
                bgBrightness: 0.5,
                title: "Genesis",
                description: "A crypto trading bot that uses the volatility of the market to make profits.",
                technologies: ["EthersJS", "MongoDB", "NodeJS", "TypeScript"],
                image: {
                    jpg: "/assets/images/work/02/icon.jpg",
                    webp: "/assets/images/work/02/icon.webp"
                },
                link: "https://github.com/cybearl/genesis"
            },
            {
                bgImage: {
                    jpg: "/assets/images/work/03/bck.jpg",
                    webp: "/assets/images/work/03/bck.webp"
                },
                bgBrightness: 0.6,
                title: "Cefpython3 Wrapper",
                description: "cef_wrapper.py allows auto-completing & syntax highlighting for the cefpython3 library.",
                technologies: ["Python"],
                image: {
                    jpg: "/assets/images/work/03/icon.jpg",
                    webp: "/assets/images/work/03/icon.webp"
                },
                link: "https://github.com/yoratoni/cefpython-wrapper"
            },
            {
                bgImage: {
                    jpg: "/assets/images/work/04/bck.jpg",
                    webp: "/assets/images/work/04/bck.webp"
                },
                bgBrightness: 0.6,
                title: "Mdisk",
                description: "A tool for the game Beyond Good & Evil that allows you to work with the game's files.",
                technologies: ["NodeJS", "TS-Node", "TypeScript"],
                image: {
                    jpg: "/assets/images/work/04/icon.jpg",
                    webp: "/assets/images/work/04/icon.webp"
                },
                link: "https://github.com/yoratoni/Mdisk"
            },
            {
                bgImage: {
                    jpg: "/assets/images/work/05/bck.jpg",
                    webp: "/assets/images/work/05/bck.webp"
                },
                bgBrightness: 0.6,
                title: "Celk",
                description: "A toolbox to work with Bitcoin addresses & private keys, in Typescript & WASM.",
                technologies: ["NodeJS", "TS-Node", "TypeScript"],
                image: {
                    jpg: "/assets/images/work/05/icon.jpg",
                    webp: "/assets/images/work/05/icon.webp"
                },
                link: "https://github.com/yoratoni/celk"
            }
        ]
    },

    // About
    about: [
        // P1
        `I started <b>programming in 2015</b>, after doing a lot of <b>DIY projects</b> in my workshop,
        I wanted to create stuff without being limited by the physical world (aka. money).
        /#
        I discovered that it was possible to <b>create anything I wanted with a computer</b>,
        no need for money anymore, a lot of people were dedicating their time to
        build open-source tools and libraries, and I wanted to be part of this community.
        /#
        That's where I started to learn <b>GML</b>, a programming language for a game engine called <b>Game Maker 8</b>..`,

        // P2
        `I used <b>Game Maker</b> for a few years, creating small games / tools and learning the basics,
        but it was missing something, despite being a great tool for beginners, it was not
        powerful enough for multiple projects that I wanted to make, and I felt limited.
        /#
        I also knew that using that kind of tool would not help me get a job, that's why I decided
        to switch to another programming language, more used in the industry, more powerful,
        and more complete.
        /#
        I chose <b>JavaScript</b> after a bit of research, mainly because it was the kind of "sandbox"
        language that I was looking for, a single language that can be used for everything,
        from web development to game development, and even more.`,

        // P3
        `I started to learn <b>JavaScript</b> followed by the discovery of <b>Node.js</b> and <b>TypeScript</b>,
        two technologies that I still use today. I also learned a bit of <b>React</b> and <b>NextJS</b>,
        before getting my first job as a <b>Junior Fullstack Developer</b> in <b>October 2022</b>.
        /#
        I was a complete beginner, but I was motivated, and I learn fast. My first job (which I still have today)
        is a really great opportunity for me to learn a lot of things, and I'm really grateful for that.
        /#
        I'm currently working on so many technologies at the same time, that I can't even list them all here,
        but to name a few: <b>NextJS</b>, <b>TypeScript</b>, <b>GraphQL</b>, <b>Prisma</b>,
        <b>Solidity</b>, <b>Viem/Wagmi</b>, <b>EthersJS</b>, <b>OZ Defender</b>, <b>WebAssembly</b>,
        and many more..`,
    ],

    // Contact
    contact: {
        email: "yoratoni.dev@gmail.com",
        emailJs: {
            serviceId: "service_1gmqdxw",
            templateId: "template_celk9nh",
            publicKey: "8v2dHrocI060XFU92"
        },
        reCaptcha: {
            containerId: "contact-recaptcha-container",
            siteKey: "6LdtRBUpAAAAADuS5dt118UwZSwkEbXEKlUTxNS8"
        }
    }
};


export default config;