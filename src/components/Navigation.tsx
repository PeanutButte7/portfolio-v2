"use client";

import { BorderBox } from "@/components/ui/BorderBox/BorderBox";
import {
    IconBrandAppleArcade,
    IconBrandDribbble,
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandX,
    IconClick,
} from "@tabler/icons-react";
import { Anchor } from "@/components/ui/Anchor";

export const Navigation = () => {
    return (
        <BorderBox
            outerClassName="bottom-5 sticky backdrop-blur-md"
            innerClassName="bg-background-glass flex w-[750px] h-[68px] items-center justify-between gap-4 px-5 py-4"
            gradient={{
                start: {
                    stopColor: "#FFFFFF",
                    stopOpacity: 0.6,
                },
                end: {
                    stopColor: "#B0B0B0",
                    stopOpacity: 0.2,
                },
            }}
        >
            <div className="flex gap-4">
                <Anchor href="">
                    <IconBrandGithub size={16} />
                    Github
                </Anchor>
                <Anchor href="https://twitter.com/AdamBartas">
                    <IconBrandX size={16} />
                    X.com
                </Anchor>
                <Anchor href="">
                    <IconBrandLinkedin size={16} />
                    LinkedIn
                </Anchor>
                <Anchor href="">
                    <IconBrandDribbble size={16} />
                    Dribbble
                </Anchor>
                <Anchor href="">
                    <IconBrandAppleArcade size={16} />
                    OpenCritic
                </Anchor>
            </div>
            <button className="flex h-9 items-center gap-2.5 rounded-lg bg-highlight px-2.5 hover:bg-highlight-accent">
                Email me!
                <IconClick size={16} />
            </button>
        </BorderBox>
    );
};
