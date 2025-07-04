"use client";

import { BorderBox } from "@/components/ui/BorderBox/BorderBox";
import {
    IconBrandAppleArcade,
    IconBrandDribbble,
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandX,
    IconCircleCheck,
    IconClick,
} from "@tabler/icons-react";
import { Anchor } from "@/components/ui/Anchor";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GridIcon } from "lucide-react";

export const Navigation = () => {
    const path = usePathname();
    const [copied, setCopied] = useState(false);
    const [effect, setEffect] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("adam.barta404@gmail.com").then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <BorderBox
            outerClassName="bottom-5 sticky backdrop-blur-md w-full md:w-[750px] px-4 md:mx-0"
            innerClassName="bg-background-glass flex items-center h-[68px] justify-between gap-4 px-5 py-4"
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
                <Anchor href="https://twitter.com/AdamBartas">
                    <IconBrandX className="h-5 w-5 md:h-4 md:w-4" />
                    <span className="hidden md:inline">X.com</span>
                </Anchor>
                <Anchor href="https://www.linkedin.com/in/adam-b%C3%A1rta/">
                    <IconBrandLinkedin className="h-5 w-5 md:h-4 md:w-4" />
                    <span className="hidden md:inline">LinkedIn</span>
                </Anchor>
                <Anchor href="https://github.com/PeanutButte7">
                    <IconBrandGithub className="h-5 w-5 md:h-4 md:w-4" />
                    <span className="hidden md:inline">Github</span>
                </Anchor>
                {/* <Anchor href="https://dribbble.com/AdamBarta">
                    <IconBrandDribbble className="h-5 w-5 md:h-4 md:w-4" />
                    <span className="hidden md:inline">Dribbble</span>
                </Anchor> */}
                {/* <Anchor href="https://opencritic.com/critic/7087/adam-b-rta">
                    <IconBrandAppleArcade className="h-5 w-5 md:h-4 md:w-4" />
                    <span className="hidden md:inline">OpenCritic</span>
                </Anchor> */}
            </div>
            <div className="flex gap-2 md:gap-4">
                {path === "/million-dollar-wall" ? (
                    <Link href="/" className={twMerge(
                        "transition-1 flex h-9 items-center gap-2.5 rounded-lg bg-background-glass px-2.5 hover:bg-background-glass-accent",
                    )}>
                        Portfolio
                    </Link>) : (
                    <>
                        <Link href="/million-dollar-wall" className={twMerge(
                            "hidden md:flex transition-1 h-9 items-center gap-2.5 rounded-lg bg-background-glass px-2.5 hover:bg-background-glass-accent",
                        )}>
                            My Million Dollar Wall
                        </Link>
                        <Link href="/million-dollar-wall" className={twMerge(
                            "flex md: transition-1 h-9 w-9 items-center justify-center  rounded-lg bg-background-glass hover:bg-background-glass-accent",
                        )}>
                            <GridIcon strokeWidth={1.5} />
                        </Link>
                    </>
                )}

                <button
                    onClick={() => {
                        copyEmail();
                        setEffect(true);
                    }}
                    onAnimationEnd={() => setEffect(false)}
                    className={twMerge(
                        effect && "animate-wiggle",
                        "transition-1 flex h-9 items-center gap-2.5 rounded-lg bg-highlight px-2.5 transition-all hover:scale-105 hover:bg-highlight-accent",
                    )}
                >
                    {copied ? (
                        <>
                            Coppied!
                            <IconCircleCheck size={16} />
                        </>
                    ) : (
                        <>
                            Email me!
                            <IconClick size={16} />
                        </>
                    )}
                </button>
            </div>
        </BorderBox>
    );
};
