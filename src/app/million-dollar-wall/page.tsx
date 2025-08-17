"use client";

import revenueData from "./revenue-data.json";
import {
    Progress,
    ProgressLabel,
    ProgressTrack,
} from "@/components/animate-ui/base/progress";
import { cn } from "@/lib/utils";
import RevenueVisualizer, {
    projectColors,
    RevenueEntry,
    ExpandedRevenueDataItem,
} from "./RevenueVisualiser";
import Link from "next/link";
import { useState } from "react";

interface ProjectGroup {
    name: string;
    color: string[];
    items: ExpandedRevenueDataItem[];
    totalRevenue: number;
    revenuePercentage: number;
}

export default function Page() {
    const allItems = revenueData as RevenueEntry[];

    // Process data with carry-over for dot visualization
    const { expandedItems } = (() => {
        const items: ExpandedRevenueDataItem[] = [];
        let carryOver = 0;

        allItems.forEach((item) => {
            const monthlyTotal =
                item.amounts.reduce((sum, a) => sum + a, 0) + carryOver;
            const dotsForMonth = Math.floor(monthlyTotal / 1000);
            carryOver = monthlyTotal % 1000;

            if (dotsForMonth > 0) {
                Array.from({ length: dotsForMonth }).forEach(() => {
                    items.push({
                        ...item,
                        amount: 1000,
                    });
                });
            }
        });

        return { expandedItems: items };
    })();

    // Calculate total earned from raw data for accurate overview
    const totalEarned = allItems.reduce(
        (sum, item) =>
            sum + item.amounts.reduce((acc, amount) => acc + amount, 0),
        0,
    );

    // Calculate average MRR
    const mrrStart = "2024-11";
    const mrrEnd = allItems[allItems.length - 1].date;
    const [startYear, startMonth] = mrrStart.split("-").map(Number);
    const [endYear, endMonth] = mrrEnd.split("-").map(Number);
    const mrrMonths = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
    const avgMRR = mrrMonths > 0 ? totalEarned / mrrMonths : 0;

    // Group projects for UI, showing accurate total revenue but basing progress on visualized dots
    const totalDots = expandedItems.length;
    const projects: ProjectGroup[] = Object.entries(
        expandedItems.reduce(
            (acc, item) => {
                if (!acc[item.project]) {
                    acc[item.project] = [];
                }
                acc[item.project].push(item);
                return acc;
            },
            {} as Record<string, ExpandedRevenueDataItem[]>,
        ),
    )
        .map(([projectName, items]) => {
            const projectTotalRevenue = allItems
                .filter((item) => item.project === projectName)
                .reduce(
                    (sum, item) =>
                        sum + item.amounts.reduce((s: any, a: any) => s + a, 0),
                    0,
                );

            return {
                name: projectName,
                color: projectColors[projectName]?.colors || ["#888"],
                items,
                totalRevenue: projectTotalRevenue,
                revenuePercentage: (items.length / totalDots) * 100,
            };
        })
        .sort((a, b) => b.totalRevenue - a.totalRevenue);

    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    return (
        <main className="flex h-[calc(100svh-100px)] flex-col items-center justify-center px-4 py-20">
            <h1 className="mb-4 text-center text-4xl">My Milion Dollar Wall</h1>
            <p className="text-center font-medium">
                My journey to 1 million earned since going solo
            </p>
            <p className="mb-10 text-center">
                Each dot represents $1,000
                <a
                    href="https://www.florin-pop.com/one-million/"
                    target="_blank"
                    className="italic"
                >
                    {" ("}inspired by Florin Pop{")"}
                </a>
            </p>

            <div className="flex w-full flex-col gap-2 md:max-w-[600px]">
                <div className="flex justify-between">
                    <p>
                        Total{" "}
                        {totalEarned.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        })}
                    </p>
                    <p>
                        {((totalEarned / 1000000) * 100).toFixed(2)}% completed
                    </p>
                    <p>
                        Avg. MRR:{" "}
                        {avgMRR.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        })}
                    </p>
                </div>
                <div className="flex flex-col gap-4 md:flex-row">
                    {projects.map((project) => (
                        <Link
                            key={project.name}
                            href={projectColors[project.name].link}
                            target="_blank"
                            className="w-full"
                        >
                            <Progress
                                value={project.revenuePercentage}
                                className={cn(
                                    "space-y-2 rounded-xl p-3 backdrop-blur-lg transition-all hover:bg-white/25",
                                    hoveredProject === project.name
                                        ? "bg-white/25"
                                        : "bg-background-glass-accent",
                                )}
                            >
                                <div className="flex items-center justify-between gap-1">
                                    <ProgressLabel className="text-sm font-medium">
                                        {project.name}
                                    </ProgressLabel>
                                    <span className="text-sm">
                                        {project.totalRevenue.toLocaleString(
                                            "en-US",
                                            {
                                                style: "currency",
                                                currency: "USD",
                                            },
                                        )}
                                    </span>
                                </div>
                                <ProgressTrack
                                    indicatorStyle={{
                                        background:
                                            project.color.length > 1
                                                ? `linear-gradient(90deg, ${project.color.join(", ")})`
                                                : project.color[0],
                                    }}
                                />
                            </Progress>
                        </Link>
                    ))}
                </div>
            </div>
            <RevenueVisualizer
                onProjectHover={setHoveredProject}
                expandedRevenueData={expandedItems}
            />
        </main>
    );
}
