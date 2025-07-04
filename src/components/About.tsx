import Image from "next/image";
import { BorderBox } from "@/components/ui/BorderBox/BorderBox";

export const About = () => {
    const list = [
        {
            title: "My favourite tech",
            items: [
                "React, NextJS, Typescript",
                "Tailwind, Shadcn",
                "React Query",
            ],
        },
        {
            title: "Design tools",
            items: ["Figma", "Photoshop, Illustrator", "Lightroom"],
        },
        {
            title: "What else?",
            items: [
                "Copywriting, voiceovers",
                "Video editing",
                "AI basics, LLM integrations",
            ],
        },
    ];

    return (
        <div className="flex flex-col gap-5">
            <BorderBox
                radius="1.375rem"
                innerClassName="md:flex gap-6 p-5 items-start md:items-center"
                outerClassName="px-4 md:px-0"
                gradient={{
                    start: {
                        stopColor: "#FFFFFF",
                        stopOpacity: 0.8,
                    },
                    end: {
                        stopColor: "#B0B0B0",
                        stopOpacity: 0.2,
                    },
                }}
            >
                <Image
                    src="/profilePicture.png"
                    alt="profilePicture"
                    width={86}
                    height={86}
                    className="float-left mr-4 shrink-0 rounded-2xl md:float-none md:mr-0"
                />
                <p>
                    👋 Hey! I’m Adam, a{" "}
                    <span className="font-semibold">design engineer</span> who
                    decided to ditch 9-5 and go on his own!
                    <br />
                    <br className="md:hidden" /> I love working with new tech
                    and exploring useful project ideas. When I find some time to
                    spare I spend it by growing my{" "}
                    <span className="font-semibold">socials</span> or{" "}
                    <span className="font-semibold">
                        just building cool stuff.
                    </span>
                </p>
            </BorderBox>
            <div className="flex flex-nowrap gap-5 overflow-scroll px-4 no-scrollbar md:px-0">
                {list.map(({ title, items }, index) => (
                    <BorderBox
                        key={index}
                        innerClassName="flex flex-col gap-2.5 p-5"
                        outerClassName="grow shrink-0"
                    >
                        <h3 className="text-lg">{title}</h3>
                        <ul className="flex flex-col gap-1 text-foreground-muted">
                            {items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </BorderBox>
                ))}
            </div>
        </div>
    );
};
