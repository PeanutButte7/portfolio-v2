import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/HoverCard";
import { twMerge } from "tailwind-merge";
import { IconExternalLink } from "@tabler/icons-react";
import { Item } from "@/app/data";

export const DesktopCard = ({
    item,
    className,
}: {
    item: Item;
    className?: string;
}) => {
    const { title, description, date, highlight, detail } = item;

    return (
        <HoverCard openDelay={200} closeDelay={200}>
            <HoverCardTrigger
                className={twMerge(
                    "relative flex cursor-default items-center gap-2.5 rounded-lg px-2 py-1.5 hover:bg-background-glass-accent",
                    className,
                )}
            >
                <p className="font-semibold">{title}</p>
                <p className="text-foreground-muted">{description}</p>
                <hr className={twMerge("grow", !highlight && "opacity-30")} />
                <p className="text-foreground-muted">{date}</p>
            </HoverCardTrigger>
            {detail && (
                <HoverCardContent
                    side="top"
                    align="start"
                    sideOffset={12}
                    className={twMerge(
                        "flex flex-col gap-4 p-4",
                        detail.image ? "rounded-3xl" : "rounded-2xl",
                    )}
                >
                    {detail.image && (
                        <>
                            <img
                                src={detail.image}
                                alt="Detail Image"
                                className="rounded-2xl"
                            />
                            <hr />
                        </>
                    )}
                    <a
                        href={detail.link}
                        target="_blank"
                        className="group flex items-center justify-between"
                    >
                        {detail.image && (
                            <p className="font-semibold text-foreground-muted">
                                Preview
                            </p>
                        )}
                        <div className="flex w-fit gap-2 text-foreground-muted group-hover:underline">
                            <p>{detail.linkLabel}</p>
                            <IconExternalLink size={16} />
                        </div>
                    </a>
                </HoverCardContent>
            )}
        </HoverCard>
    );
};