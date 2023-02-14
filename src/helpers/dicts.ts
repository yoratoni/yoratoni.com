export const globalParameters = {
    appPages: 4,            // The number of pages used for the app pages context (4 => from 0 to 3)
    pageNames: [
        "home",
        "work",
        "about",
        "contact"
    ],
    slideshowProperties: {
        duration: 5000,             // The duration of the slideshow in milliseconds
        transitionDuration: 1000,   // The transition duration of the slideshow in milliseconds
        infinite: true,             // If the slideshow is infinite or not
        indicators: true,           // If the slideshow indicators are displayed or not
        arrows: true,               // If the slideshow arrows are displayed or not
        pauseOnHover: false         // If the slideshow is paused on hover or not
    }
};


export const cardsData: IsCardContent[] = [
    {
        title: "Mdisk Project",
        description: "",
        techStack: ["NodeJS", "TS"],
        icon: "Album",
        links: {
            github: "",
            live: ""
        }
    },
    {
        title: "Dumb Websites",
        description: "Test 2",
        techStack: ["React", "CSS", "TS"],
        icon: "Category",
        links: {
            github: "christine",
            live: ""
        }
    },
    {
        title: "Parallax Effect",
        description: "",
        techStack: ["React", "CSS", "TS"],
        icon: "Collections",
        links: {
            github: "",
            live: ""
        }
    },
    {
        title: "Huawei Forwarder",
        description: `A python CLI program that allows you to forward SMS received by your Huawei 4G router
                      to a phone number. As I'm using my router's phone number, it makes my life easier.`,
        techStack: ["Python", "Huawei API"],
        icon: "Router",
        links: {
            github: "",
            live: ""
        }
    },
];


// export const CardsData: IsProjectCards = [
//     {
//         sourceCodeLink: "https://github.com/yoratoni/yoratoni.com",
//         externalLink: null,
//         title: "THE PORTFOLIO",
//         description: "",
//         fullDescription: `I wanted to make a really unique portfolio website.
//         The hardest part of this project was to build an app-like experience,
//         with an animated parallax background.`,
//         techStack: ["Bind9", "Apache", "React", "Typescript"]
//     },
//     {
//         sourceCodeLink: "https://github.com/yoratoni/nfts-generator",
//         externalLink: null,
//         title: "NFTS GENERATOR",
//         description: "",
//         fullDescription: `An advanced NFTs generator used by a project that needed some pretty advanced parameter
//         controls, it also needed a lot of optimizations and an IPFS metadata generator.`,
//         techStack: ["Python", "xxHash", "Colorama"]
//     },
//     {
//         sourceCodeLink: "https://github.com/yoratoni/huawei-router-sms-forwarding",
//         externalLink: null,
//         title: "HUAWEI SMS FORWARDING",
//         description: "",
//         fullDescription: `A python CLI program that allows you to forward SMS received by your Huawei 4G router
//         to a phone number. As I'm using my router's phone number, it makes my life easier.`,
//         techStack: ["Python", "Huawei LTE API"]
//     },
// ];