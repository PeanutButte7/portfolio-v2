export type Item = {
    title: string;
    description: string;
    date: string;
    highlight?: boolean;
    detail?: {
        link: string;
        linkLabel: string;
        image?: string;
    };
};

const learnMore = "Learn more";
const github = "View on GitHub";
const game = "Try the game";

export const careerItems: Item[] = [
    {
        title: "Appio",
        description: "Creating modern websites for a Czech development agency",
        date: "2023 - present",
        highlight: true,
        detail: {
            link: "https://appio.cz",
            linkLabel: learnMore,
            image: "/images/appio.jpg",
        },
    },
    {
        title: "Educanet Prague",
        description: "Teaching high school students web development and design",
        date: "2023 - 2024",
        highlight: false,
        detail: {
            link: "https://praha.educanet.cz/cs/informacni-technologie/",
            linkLabel: learnMore,
            image: "/images/educanet.jpg",
        },
    },
    {
        title: "MediaRealms",
        description:
            "Journalist and video editor for the largest Czech gaming media",
        date: "2017 - 2023",
        detail: {
            link: "https://mediarealms.cz/",
            linkLabel: learnMore,
            image: "/images/mediarealms.jpg",
        },
    },
    {
        title: "LidskaSila.cz",
        description:
            "Shortly helped creating web portal for a Czech job agency",
        date: "2019",
        detail: {
            link: "https://cc.cz/tag/lidskasila-cz/",
            linkLabel: learnMore,
            image: "/images/lidskasila.jpg",
        },
    },
    {
        title: "Freelance",
        description: "Worked on various freelance design projects",
        date: "2019",
    },
];

export const projectItems: Item[] = [
    {
        title: "Blog Boost",
        description:
            "AI-powered text formatting tool",
        date: "2024 - now",
        highlight: true,
        detail: {
            link: "https://www.blog-boost.com/",
            linkLabel: learnMore,
            image: "/images/blog-boost.jpg",
        },
    },
    {
        title: "Korektorr",
        description:
            "Czech text editor with local and AI autocorrect features",
        date: "2024 - now",
        highlight: true,
        detail: {
            link: "https://www.korektorr.cz/",
            linkLabel: learnMore,
            image: "/images/korektorr.jpg",
        },
    },
    {
        title: "Vision UI (canceled)",
        description:
            "Set of beautiful Tailwind components inspired by Apple Vision Pro",
        date: "2023 - 2024",
        highlight: false,
        detail: {
            link: "https://github.com/PeanutButte7/vision-ui",
            linkLabel: github,
            image: "/images/vision-ui.jpg",
        },
    },
    {
        title: "Mindstorm",
        description:
            "Node based brainstorming tool with AI suggestions powered by GPT 3.5",
        date: "2023",
    },
    {
        title: "Firefox dashboard",
        description: "Custom dashboard built on Vue.js",
        date: "2021",
        detail: {
            link: "https://github.com/PeanutButte7/Dashboard",
            linkLabel: github,
            image: "/images/firefox-dashboard.jpg",
        },
    },
    {
        title: "Dynamite Crush",
        description: "Small puzzle game made in Unity",
        date: "2021",
        detail: {
            link: "https://peanutbutte7.itch.io/dynamitecrush",
            linkLabel: game,
            image: "/images/dynamite-crush.jpg",
        },
    },
    {
        title: "SYRO",
        description: "Quick game created for the GMTK 2020 Game Jam",
        date: "2020",
        detail: {
            link: "https://peanutbutte7.itch.io/syro-a-game-where-your-key-bindings-are-out-of-control",
            linkLabel: game,
            image: "/images/syro.jpg",
        },
    },
    {
        title: "Parkour Prague logo design",
        description: "Commissioned logo design for a Prague based parkour club",
        date: "2019",
        detail: {
            link: "https://www.parkourpraha.cz/",
            linkLabel: learnMore,
            image: "/images/gpfc.jpg",
        },
    },
];
