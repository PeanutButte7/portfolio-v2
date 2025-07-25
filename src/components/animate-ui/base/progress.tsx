"use client";

import * as React from "react";
import { Progress as ProgressPrimitives } from "@base-ui-components/react/progress";
import { motion, type Transition } from "motion/react";

import { cn } from "@/lib/utils";
import {
    CountingNumber,
    type CountingNumberProps,
} from "@/components/animate-ui/text/counting-number";

type ProgressContextType = {
    value: number | null;
};

const ProgressContext = React.createContext<ProgressContextType | undefined>(
    undefined,
);

const useProgress = (): ProgressContextType => {
    const context = React.useContext(ProgressContext);
    if (!context) {
        throw new Error("useProgress must be used within a Progress");
    }
    return context;
};

type ProgressProps = React.ComponentProps<typeof ProgressPrimitives.Root>;

const Progress = ({ value, ...props }: ProgressProps) => {
    return (
        <ProgressContext.Provider value={{ value }}>
            <ProgressPrimitives.Root
                data-slot="progress"
                value={value}
                {...props}
            >
                {props.children}
            </ProgressPrimitives.Root>
        </ProgressContext.Provider>
    );
};

const MotionProgressIndicator = motion.create(ProgressPrimitives.Indicator);

type ProgressTrackProps = React.ComponentProps<
    typeof ProgressPrimitives.Track
> & {
    transition?: Transition;
    indicatorClassName?: string;
    indicatorStyle?: React.CSSProperties;
};

function ProgressTrack({
    className,
    indicatorClassName,
    indicatorStyle,
    transition = { type: "spring", stiffness: 100, damping: 30 },
    ...props
}: ProgressTrackProps) {
    const { value } = useProgress();

    return (
        <ProgressPrimitives.Track
            data-slot="progress-track"
            className={cn(
                "bg-secondary relative h-1 w-full overflow-hidden rounded-full",
                className,
            )}
            {...props}
        >
            <MotionProgressIndicator
                data-slot="progress-indicator"
                className={cn(
                    "bg-primary h-full w-full flex-1 rounded-full",
                    indicatorClassName,
                )}
                style={indicatorStyle}
                animate={{ width: `${value}%` }}
                transition={transition}
            />
        </ProgressPrimitives.Track>
    );
}

type ProgressLabelProps = React.ComponentProps<typeof ProgressPrimitives.Label>;

function ProgressLabel(props: ProgressLabelProps) {
    return <ProgressPrimitives.Label data-slot="progress-label" {...props} />;
}

type ProgressValueProps = Omit<
    React.ComponentProps<typeof ProgressPrimitives.Value>,
    "render"
> & {
    countingNumberProps?: CountingNumberProps;
};

function ProgressValue({ countingNumberProps, ...props }: ProgressValueProps) {
    const { value } = useProgress();

    return (
        <ProgressPrimitives.Value
            data-slot="progress-value"
            render={
                <CountingNumber
                    number={value ?? 0}
                    transition={{ stiffness: 80, damping: 20 }}
                    {...countingNumberProps}
                />
            }
            {...props}
        />
    );
}

export {
    Progress,
    ProgressTrack,
    ProgressLabel,
    ProgressValue,
    useProgress,
    type ProgressProps,
    type ProgressTrackProps,
    type ProgressLabelProps,
    type ProgressValueProps,
};
