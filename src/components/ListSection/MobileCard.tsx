import { twMerge } from "tailwind-merge";
import { IconExternalLink } from "@tabler/icons-react";
import { Item } from "@/app/data";
import { Anchor } from "@/components/ui/Anchor";

export const MobileCard = ({
    item,
    className,
}: {
    item: Item;
    className?: string;
}) => {
    const { title, description, date, highlight, detail } = item;

    return (
        <div
            className={twMerge(
                "relative flex cursor-default flex-col gap-2 rounded-lg px-2 py-1.5",
                className,
            )}
        >
            <div className="flex w-full items-center gap-2.5">
                <p className="font-semibold">{title}</p>
                <hr className={twMerge("grow", !highlight && "opacity-30")} />
                <p className="text-foreground-muted">{date}</p>
            </div>
            <div className="flex items-end justify-between gap-2">
                <p className="shrink text-balance text-foreground-muted">
                    {description}
                </p>
                {detail && (
                    <Anchor
                        href={detail.link}
                        className="flex w-fit gap-2 text-nowrap break-keep rounded-md bg-background-glass-accent px-2 py-1 text-xs text-foreground-muted group-hover:underline"
                    >
                        <p className="text-nowrap break-keep">
                            {detail.linkLabel}
                        </p>
                        <IconExternalLink size={14} className="shrink-0" />
                    </Anchor>
                )}
            </div>
        </div>
    );
};
