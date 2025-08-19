import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export interface RevenueEntry {
    date: string;
    project: string;
    description: string;
    amounts: number[];
}

export interface ExpandedRevenueDataItem extends RevenueEntry {
    amount: number;
}

export interface Dot {
    x: number;
    y: number;
    dotInfo?: ExpandedRevenueDataItem;
}

export interface RevenueVisualizerProps {
    onProjectHover?: (project: string | null) => void;
    expandedRevenueData: ExpandedRevenueDataItem[];
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

export default function RevenueVisualizer({
    onProjectHover,
    expandedRevenueData,
}: RevenueVisualizerProps) {
    const [clickedDot, setClickedDot] = useState<Dot | null>(null);
    const [hoveredDotIndex, setHoveredDotIndex] = useState<number | null>(null);

    // Handle click on dot
    const handleDotClick = (dot: Dot) => {
        setClickedDot(dot === clickedDot ? null : dot);
    };

    const detailCard = useMemo(() => {
        if (!clickedDot?.dotInfo) return null;
        return (
            <div
                className="absolute z-10"
                style={{
                    left: `${clickedDot.x + 30}px`,
                    top: `${clickedDot.y - 50}px`,
                    transform: "translateZ(0)",
                }}
            >
                {/* <DetailCard dotInfo={clickedDot.dotInfo} /> */}
            </div>
        );
    }, [clickedDot]);

    // Generate 1,000 identical $1k dots in concentric circles
    const generateDotPositions = (): Dot[] => {
        const positions: Dot[] = [];
        const centerX = 400;
        const centerY = 400;
        const radialGap = 20; // px between rings
        const approxGap = 20; // px between dots along ring
        const maxRadius = 320;

        // Round to 2 decimal places to avoid hydration mismatches
        const round = (num: number) => Math.round(num * 100) / 100;

        // Consume payment data
        let dotInfoIndex = 0;
        const nextDotInfo = (): ExpandedRevenueDataItem | undefined => {
            const dotInfo = expandedRevenueData[dotInfoIndex];
            dotInfoIndex += 1;
            return dotInfo;
        };

        // Add center dot
        positions.push({ x: centerX, y: centerY, dotInfo: nextDotInfo() });

        let totalDots = 1;
        let currentRadius = radialGap;
        let ringIndex = 0;

        while (totalDots < 1000 && currentRadius <= maxRadius) {
            const circumference = 2 * Math.PI * currentRadius;
            let dotsThisRing = Math.max(
                6,
                Math.round(circumference / approxGap),
            );
            if (totalDots + dotsThisRing > 1000) {
                dotsThisRing = 1000 - totalDots;
            }

            const angleOffset = (ringIndex % 2) * (Math.PI / dotsThisRing);

            for (let i = 0; i < dotsThisRing; i++) {
                const angle = angleOffset + (i / dotsThisRing) * 2 * Math.PI;
                positions.push({
                    x: round(centerX + Math.cos(angle) * currentRadius),
                    y: round(centerY + Math.sin(angle) * currentRadius),
                    dotInfo: nextDotInfo(),
                });
            }

            totalDots += dotsThisRing;
            ringIndex += 1;
            currentRadius += radialGap;
        }

        return positions;
    };

    const dotPositions = generateDotPositions();

    const getDotSize = () => 8;

    const dotElements = useMemo(() => {
        const centerX = 400;
        const centerY = 400;
        const radius = 320; // Approximate radius of the outer circle

        // Find the top point of the outer circle
        const topY = centerY - radius;

        const revenueDotPositions: Dot[] = [];
        const dotSpacing = 24; // Space between dots

        // Calculate how many dots we can fit at the top (leaving some margin)
        const maxDots = Math.floor((radius * 1.8) / dotSpacing);
        const startX =
            centerX -
            ((Math.min(expandedRevenueData.length, maxDots) - 1) * dotSpacing) /
                2;

        // Create positions for revenue dots at the top
        for (let i = 0; i < expandedRevenueData.length; i++) {
            if (i >= maxDots) break; // Don't exceed available space
            revenueDotPositions.push({
                x: startX + i * dotSpacing,
                y: topY + 10, // Slightly below the very top for better visibility
                dotInfo: expandedRevenueData[i],
            });
        }

        // First, create a map of the dots we want to color
        const dotsToColor = new Map<
            number,
            {
                x: number;
                y: number;
                dotInfo: ExpandedRevenueDataItem;
            }
        >();

        // For each revenue dot, find the closest existing dot
        revenueDotPositions.forEach((rd) => {
            let closestDotIndex = -1;
            let minDistance = Infinity;

            dotPositions.forEach((dot, index) => {
                const distance = Math.sqrt(
                    Math.pow(rd.x - dot.x, 2) + Math.pow(rd.y - dot.y, 2),
                );
                if (distance < minDistance && !dotsToColor.has(index)) {
                    minDistance = distance;
                    closestDotIndex = index;
                }
            });

            if (closestDotIndex !== -1 && rd.dotInfo) {
                dotsToColor.set(closestDotIndex, {
                    ...rd,
                    dotInfo: rd.dotInfo,
                });
            }
        });

        return dotPositions.map((dot, index) => {
            const coloredDot = dotsToColor.get(index);
            const project = coloredDot?.dotInfo?.project || null;
            const dotSize = getDotSize();

            return (
                <g key={index}>
                    <circle
                        cx={dot.x}
                        cy={dot.y}
                        className={cn(
                            "dot-element backdrop-blur-lg",
                            !project && "opacity-15",
                        )}
                        style={{
                            fill: project
                                ? `url(#gradient-${project.replace(/[^a-zA-Z0-9]/g, "")})`
                                : "white",
                            stroke: project ? "transparent" : "none",
                            strokeWidth: project ? 2 : 0,
                            transform: "translateZ(0)", // Force GPU acceleration
                            willChange: "transform, opacity",
                        }}
                        onClick={() => handleDotClick(dot)}
                        onMouseEnter={() => {
                            if (project) onProjectHover?.(project);
                            setHoveredDotIndex(index);
                        }}
                        onMouseLeave={() => {
                            onProjectHover?.(null);
                            setHoveredDotIndex(null);
                        }}
                        // eslint-disable-next-line react/jsx-no-duplicate-props
                        r={
                            hoveredDotIndex === index && project
                                ? dotSize * 1.2
                                : dotSize
                        }
                    />
                </g>
            );
        });
    }, [dotPositions]);

    return (
        <div className="relative flex h-full items-center justify-center overflow-hidden">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 800 800"
                className="max-h-full max-w-full"
                preserveAspectRatio="xMidYMid meet"
                style={{
                    pointerEvents: "none", // Disable pointer events on SVG
                }}
            >
                <defs>
                    <radialGradient
                        id="radial-gradient"
                        cx="50%"
                        cy="50%"
                        r="50%"
                        fx="50%"
                        fy="50%"
                    >
                        <stop offset="30%" stopColor="#404040" />
                        <stop offset="100%" stopColor="#262626" />
                    </radialGradient>
                    {/* Project gradients */}
                    {Object.entries(projectColors).map(
                        ([project, { colors }]) => {
                            const gradId = `gradient-${project.replace(/[^a-zA-Z0-9]/g, "")}`;
                            return (
                                <linearGradient
                                    key={gradId}
                                    id={gradId}
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="100%"
                                >
                                    {colors.map((color, i) => (
                                        <stop
                                            key={color}
                                            offset={`${(i / (colors.length - 1)) * 100}%`}
                                            stopColor={color}
                                        />
                                    ))}
                                </linearGradient>
                            );
                        },
                    )}
                </defs>
                <g style={{ pointerEvents: "auto" }}>
                    {" "}
                    {/* Re-enable pointer events only for this group */}
                    {dotElements}
                </g>
            </svg>
            {detailCard}
        </div>
    );
}
