import Image from "next/image";
import { BorderBox } from "@/components/ui/BorderBox/BorderBox";

export const About = () => {
    const list = [
        {
            title: "My favourite tech",
            items: [
                "React, NextJS, Typescript",
                "TailwindCSS, Radix",
                "React-query",
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
                "Complex video editing",
                "AI basics",
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
                    <span className="font-semibold">
                        front-end web developer, designer
                    </span>{" "}
                    and a CS student.
                    <br />
                    <br className="md:hidden" /> I love working with new,
                    exciting tech and exploring new ideas. When I find some time
                    to spare usually I spend it working on{" "}
                    <span className="font-semibold">personal projects</span> and{" "}
                    <span className="font-semibold">exploring</span> new
                    interesting tools, design trends and AI concepts.
                </p>
            </BorderBox>
            <div className="no-scrollbar flex flex-nowrap gap-5 overflow-scroll px-4 md:px-0">
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
