"use client";

import Image from "next/image";
import { About } from "@/components/About";
import { useEffect, useRef } from "react";
import { blob } from "node:stream/consumers";
import { addMouseGlow } from "@/utils/addMouseGlow";
import { ListSection } from "@/components/ListSection/ListSection";
import { careerItems, projectItems } from "@/app/data";

export default function Home() {
    useEffect(() => {
        const cleanup = addMouseGlow();

        return () => {
            cleanup();
        };
    }, []);

    return (
        <main className="w-full pb-24 pt-8">
            <h1 className="mb-3 px-4 text-4xl font-black md:px-0">
                Adam Bárta
            </h1>
            <About />
            <div className="mt-10 flex flex-col gap-10 px-4 md:px-0">
                <ListSection title="Career" items={careerItems} />
                <ListSection title="Projects" items={projectItems} />
            </div>
        </main>
    );
}
