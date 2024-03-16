export type Item = {
    title: string;
    description: string;
    date: string;
    highlight?: boolean;
};

export const careerItems: Item[] = [
    {
        title: "Appio",
        description: "Creating modern websites for a Czech development agency",
        date: "2023 - present",
        highlight: true,
    },
    {
        title: "Educanet Prague",
        description: "Teaching high school students web development and design",
        date: "2023 - present",
        highlight: true,
    },
    {
        title: "MediaRealms",
        description:
            "Journalist and video editor for the largest Czech gaming media",
        date: "2017 - 2023",
    },
    {
        title: "LidskaSila.cz",
        description: "Helped create web portal for a Czech job agency",
        date: "2019",
    },
    {
        title: "Freelance",
        description: "Worked on various freelance design projects",
        date: "2019",
    },
];

export const projectItems: Item[] = [
    {
        title: "Vision UI",
        description:
            "Set of beautiful Tailwind components inspired by Apple Vision Pro",
        date: "2023 - now",
        highlight: true,
    },
    {
        title: "Mindstrorm",
        description:
            "Node based brainstorming tool with AI suggestions powered by GPT",
        date: "2023",
    },
    {
        title: "Firefox dashboard",
        description: "Custom dashboard built on Vue.js",
        date: "2021",
    },
    {
        title: "Dynamite Crush",
        description: "Small puzzle game made in Unity",
        date: "2021",
    },
    {
        title: "GPFC logo design",
        description: "Commissioned logo design for a Prague based parkour club",
        date: "2019",
    },
];
