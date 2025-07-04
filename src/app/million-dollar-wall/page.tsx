"use client";

import revenueData from "./revenue-data.json";
import {
	Progress,
	ProgressLabel,
	ProgressTrack,
	ProgressValue,
} from "@/components/animate-ui/base/progress";
import { cn } from "@/lib/utils";
import RevenueVisualizer, { DotInfo } from "./RevenueVisualiser";
import Link from "next/link";

interface ProjectGroup {
	name: string;
	color: string[];
	items: DotInfo[];
	totalRevenue: number;
	revenuePercentage: number;
	amount?: number;
}

// Create color mapping for revenue items
export const projectColors: Record<string, { colors: string[]; link: string }> =
{
	"Launch Studio": {
		colors: ["#f97316", "#fb923c"],
		link: "https://launchstudio.space",
	},
	"Dev Blocks": {
		colors: ["#6b7280", "#94a3b8"],
		link: "https://devblocks.app",
	},
};

import { useState } from "react";

export default function Page() {
	// Group revenue data by project
	// Calculate total earned across all projects
	const allItems = revenueData as DotInfo[];

	// Calculate average MRR from Nov 2024 to June 2025
	const mrrStart = "2024-11";
	const mrrEnd = allItems[allItems.length - 1].date;
	const mrrSum = allItems.reduce(
		(sum, item) => sum + (item.amount ?? 1000),
		0,
	);
	// Extract year and month from start and end
	const [startYear, startMonth] = mrrStart.split("-").map(Number);
	const [endYear, endMonth] = mrrEnd.split("-").map(Number);
	// Calculate the number of months between start and end, inclusive
	const mrrMonths = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
	const avgMRR = mrrMonths > 0 ? mrrSum / mrrMonths : 0;

	const totalEarned = allItems.length; // Placeholder: 1k per item

	const projects: ProjectGroup[] = Object.entries(
		allItems.reduce(
			(acc, item) => {
				if (!acc[item.project]) acc[item.project] = [];
				acc[item.project].push({
					...item,
					amount: item.amount ?? 1000,
				});
				return acc;
			},
			{} as Record<string, DotInfo[]>,
		),
	)
		.map(([project, items]) => ({
			name: project,
			color: projectColors[project]?.colors || ["#888"],
			items,
			totalRevenue: items.reduce(
				(sum, item) => sum + (item?.amount ?? 0),
				0,
			),
			revenuePercentage: (items.length / totalEarned) * 100,
		}))
		.sort((a, b) => b.totalRevenue - a.totalRevenue);

	const [hoveredProject, setHoveredProject] = useState<string | null>(null);
	const projectSum = projects.reduce(
		(acc, project) => acc + project.totalRevenue,
		0,
	);
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
						{projectSum.toLocaleString("en-US", {
							style: "currency",
							currency: "USD",
							maximumFractionDigits: 0,
						})}
					</p>
					<p>
						{((projectSum / 1000000) * 100).toFixed(2)}% completed
					</p>
					<p>
						Avg. MRR:{" "}
						{avgMRR.toLocaleString("en-US", {
							style: "currency",
							currency: "USD",
							maximumFractionDigits: 0,
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
												maximumFractionDigits: 0,
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
			<RevenueVisualizer onProjectHover={setHoveredProject} />
		</main>
	);
}
