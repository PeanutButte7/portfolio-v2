import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { addGlowGradient } from "@/components/ui/BorderBox/addGlowGradient";
import { Dimensions, observeSize } from "@/components/ui/BorderBox/observeSize";

interface BorderBoxProps {
    children: ReactNode;
    radius?: string;
    innerClassName?: string;
    outerClassName?: string;
    gradient?: {
        start?: {
            stopColor: string;
            stopOpacity: number;
        };
        end?: {
            stopColor: string;
            stopOpacity: number;
        };
    };
}

export const BorderBox = ({
    children,
    radius = "0.875rem",
    innerClassName,
    outerClassName,
    gradient = {
        start: {
            stopColor: "#B0B0B0",
            stopOpacity: 0.6,
        },
        end: {
            stopColor: "#B0B0B0",
            stopOpacity: 0.6,
        },
    },
}: BorderBoxProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const glowRectRef = useRef<SVGRectElement>(null);
    const radialGradientRef = useRef<SVGRadialGradientElement>(null);
    const borderGradientRef = useRef<SVGLinearGradientElement>(null);

    const [dimensions, setDimensions] = useState<Dimensions>({
        width: 0,
        height: 0,
    });
    const [radialGradientId, setRadialGradientId] = useState("");
    const [borderGradientId, setBorderGradientId] = useState("");

    useEffect(() => {
        setBorderGradientId(`linearGradient-${Math.random().toString()}`);
        setRadialGradientId(`radialGradient-${Math.random().toString()}`);
    }, []);

    useEffect(() => {
        if (
            !svgRef.current ||
            !ref.current ||
            !glowRectRef.current ||
            !radialGradientRef.current
        )
            return;

        const cleanupResize = observeSize(ref.current, setDimensions);
        const cleanupGlow = addGlowGradient(
            svgRef.current,
            glowRectRef.current,
            radialGradientRef.current,
        );

        return () => {
            cleanupResize();
            cleanupGlow();
        };
    }, [svgRef, ref, glowRectRef, radialGradientRef]);

    return (
        <div className={twMerge("relative", outerClassName)}>
            <svg
                ref={svgRef}
                viewBox={`0 0 ${dimensions.width + 1} ${dimensions.height + 1}`}
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-border"
                style={{
                    pointerEvents: "none",
                    position: "absolute",
                    width:
                        dimensions.width === 0 ? "initial" : dimensions.width,
                    height:
                        dimensions.height === 0 ? "initial" : dimensions.height,
                }}
            >
                <defs>
                    <linearGradient
                        id={borderGradientId}
                        ref={borderGradientRef}
                        x1="100%"
                        y1="80%"
                        x2="0%"
                        y2="0%"
                    >
                        <stop
                            offset="0%"
                            style={{
                                stopColor: gradient?.end?.stopColor,
                                stopOpacity: gradient?.end?.stopOpacity,
                            }}
                        />
                        <stop
                            offset="100%"
                            style={{
                                stopColor: gradient?.start?.stopColor,
                                stopOpacity: gradient?.start?.stopOpacity,
                            }}
                        />
                    </linearGradient>
                    <radialGradient
                        id={radialGradientId}
                        ref={radialGradientRef}
                        cx="50%"
                        cy="50%"
                        r="80%"
                        fx="50%"
                        fy="50%"
                    >
                        <stop
                            offset="0%"
                            style={{
                                stopColor: "#fff",
                                stopOpacity: 1,
                                transition: "stop-opacity 1s",
                            }}
                        />
                        <stop
                            offset="100%"
                            style={{
                                stopColor: "#fff",
                                stopOpacity: 0,
                                transition: "stop-opacity 1s",
                            }}
                        />
                    </radialGradient>
                </defs>
                <rect
                    x="1"
                    y="1"
                    width={dimensions.width ? dimensions.width - 1 : 0}
                    height={dimensions.height ? dimensions.height - 1 : 0}
                    fill="none"
                    strokeWidth="1"
                    stroke={`url(#${borderGradientId})`}
                    rx={radius}
                    ry={radius}
                />
                <rect
                    ref={glowRectRef}
                    x="1"
                    y="1"
                    width={dimensions.width ? dimensions.width - 1 : 0}
                    height={dimensions.height ? dimensions.height - 1 : 0}
                    fill="none"
                    strokeWidth="1"
                    stroke={`url(#${radialGradientId})`}
                    rx={radius}
                    ry={radius}
                    style={{ transition: "all 0.2s" }}
                />
            </svg>
            <div ref={ref} className={innerClassName}>
                {children}
            </div>
        </div>
    );
};
