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
        title: "Launch Studio",
        description: "Self-owned design studio focused on UI/UX and branding",
        date: "2025 - now",
        highlight: true,
        detail: {
            link: "https://launchstudio.space",
            linkLabel: learnMore,
        },
    },
    {
        title: "Appio",
<<<<<<< HEAD
        description: "Creating modern websites for a Czech development agency",
        date: "2023 - now",
=======
        description: "Created and designed modern B2B focused websites.",
        date: "2023 - 2025",
>>>>>>> 24d6fde (feat: mill wall)
        highlight: true,
        detail: {
            link: "https://appio.cz",
            linkLabel: learnMore,
            image: "/images/appio.jpg",
        },
    },
    {
        title: "Freelance",
        highlight: true,
        description: "Working on various freelance projects",
        date: "2019 - now",
    },
    {
        title: "Educanet Prague",
<<<<<<< HEAD
        description: "Teaching high school students web development and design",
        date: "2023 - 2024",
        highlight: false,
=======
        description: "Tought high school web development and design",
        date: "2023 - 2024",
        highlight: true,
>>>>>>> 24d6fde (feat: mill wall)
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
];

export const projectItems: Item[] = [
    {
<<<<<<< HEAD
        title: "Launch Kit Studio",
        description:
            "Desing agency",
        date: "2024 - now",
        highlight: true,
        detail: {
            link: "https://www.launchkitstudio.com",
            linkLabel: learnMore,
            image: "/images/launchkitstudio.jpg",
        },
    },
    {
        title: "Dev Blocks",
        description:
            "Notion templates for developers",
        date: "2024 - now",
        highlight: true,
        detail: {
            link: "https://devblocks.app",
            linkLabel: learnMore,
            image: "/images/devblocks.jpg",
        },
    },
    {
        title: "Blog Boost (canceled)",
        description:
            "AI-powered text formatting tool",
        date: "2024",
        highlight: false,
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
        date: "2024",
        highlight: false,
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
        date: "2023",
        highlight: false,
=======
        title: "Dev Blocks",
        description: "Notion templates for Indie hackers and founders",
        date: "2023",
        highlight: true,
        detail: {
            link: "https://www.devblocks.app/",
            linkLabel: learnMore,
            image: "/images/vision-ui.jpg",
        },
    },
    {
        title: "Vision UI",
        description:
            "Set of beautiful Tailwind components inspired by Apple Vision Pro",
        date: "2023",
        highlight: true,
>>>>>>> 24d6fde (feat: mill wall)
        detail: {
            link: "https://github.com/PeanutButte7/vision-ui",
            linkLabel: github,
            image: "/images/dev-blocks.jpg",
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
