import { IsMainConfig } from "@/types/general";


const config: IsMainConfig = {
    // General
    pagesNames: [
        "home",
        "work_0",
        "work_1",
        "work_2",
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
        contentHeightWhereSpeedFactorIsOne: 600,
        minContentHeightSpeedFactor: 0.2
    },

    // Work
    workCards: [
        {
            bgColor: "#5104B2",
            color: "#FFFFFF",
            title: "Test 1 title",
            description: "Test 1 description",
            technologies: ["Test 1 technology 1", "Test 1 technology 2"]
        },
        {
            bgColor: "#010101",
            color: "#FFFFFF",
            title: "Test 2 title",
            description: "Test 2 description",
            technologies: ["Test 2 technology 1", "Test 2 technology 2"]
        },
        {
            bgColor: "#FBECD5CC",
            color: "#000000",
            title: "Huawei SMS forwarding",
            description: "A simple CLI program used to forward SMS to another number.",
            technologies: ["Test 3 technology 1", "Test 3 technology 2"]
        },
        {
            bgColor: "#FFFFFF",
            color: "#000000",
            title: "Test 4 title",
            description: "Test 4 description",
            technologies: ["Test 4 technology 1", "Test 3 technology 2"]
        },
        {
            bgColor: "#AD0606",
            color: "#FFFFFF",
            title: "Test 5 title",
            description: "Test 5 description",
            technologies: ["Test 5 technology 1", "Test 3 technology 2"]
        },
        {
            bgColor: "#FBECD5",
            color: "#000000",
            title: "Test 6 title",
            description: "Test 6 description",
            technologies: ["Test 6 technology 1", "Test 3 technology 2"]
        },
    ],

    // About
    about: [
        // P1
        `I started <b>programming in 2015</b>, after doing a lot of <b>DIY projects</b> in my workshop,
        I wanted to create stuff without being limited by the physical world (aka. money).
        /#
        I discovered that it was possible to <b>create anything I wanted with a computer</b>,
        no need for money or materials anymore, a lot of people were dedicating their time to
        build open-source tools and libraries that anyone could use for free, and I wanted
        to be part of this community.
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
        but to name a few: <b>NextJS</b>, <b>TypeScript</b>, <b>GraphQL</b>, <b>Prisma</b>, <b>Hardhat</b>,
        <b>Solidity</b>, <b>Viem/Wagmi</b>, <b>EthersJS</b>, <b>OZ Defender</b>,
        and many more..`,
    ],

    // Contact
    contact: {
        email: "yoratoni.dev@gmail.com",
        emailJs: {
            serviceId: "service_1gmqdxw",
            templateId: "template_celk9nh",
            publicKey: "8v2dHrocI060XFU92"
        }
    }
};


export default config;