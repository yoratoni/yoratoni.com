export const globalParameters = {
    appPages: 4,            // The number of pages used for the app pages context (4 => from 0 to 3)
};


export const workCardData: IsProjectCardData = [
    {
        sourceCodeLink: "https://github.com/yoratoni/nfts-generator",
        externalLink: null,
        title: "My Portfolio",
        description: `Yeah, it seems a bit strange but believe me when I say that I built this website
        entirely from scratch, even the VPS is entirely configured by hand, it was pretty .. funny.`,
        techStack: ["Bind9", "Apache", "React", "Typescript"]
    },
    {
        sourceCodeLink: "https://github.com/yoratoni/nfts-generator",
        externalLink: null,
        title: "NFTs Generator",
        description: `An advanced NFTs generator used by a project that needed some pretty advanced parameter
        controls, it also needed a lot of optimizations and an IPFS metadata generator.`,
        techStack: ["Python", "xxHash", "Colorama"]
    },
    {
        sourceCodeLink: "https://github.com/yoratoni/clua",
        externalLink: null,
        title: "Clua (IN PROGRESS)",
        description: `A superset programming language of Lua 5.3 inspired by the compiler of the Typescript
        superset, I do that mainly for fun but also because Lua is pretty fast but I don't like the syntax.`,
        techStack: ["Python", "A lot of homemade libs"]
    },
    {
        sourceCodeLink: "https://github.com/yoratoni/huawei-router-sms-forwarding",
        externalLink: null,
        title: "Huawei SMS forwarding",
        description: `A python CLI program that allows you to forward SMS received by your Huawei 4G router
        to a phone number. As I'm using my router's phone number, it makes my life easier.`,
        techStack: ["Python", "Huawei LTE API"]
    },
];