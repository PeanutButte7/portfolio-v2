import { twMerge } from "tailwind-merge";
import { Item } from "@/app/data";
import { list } from "postcss";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/HoverCard";
import { Anchor } from "@/components/ui/Anchor";
import { IconClick, IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import { DesktopCard } from "@/components/ListSection/DesktopCard";
import { MobileCard } from "@/components/ListSection/MobileCard";
import { Fragment } from "react";

interface ListSectionProps {
    title: string;
    items: Item[];
}

export const ListSection = ({ title, items }: ListSectionProps) => {
    return (
        <div className="flex flex-col gap-2.5">
            <h2 className="text-2xl">{title}</h2>
            <div className="flex flex-col gap-6 md:gap-2.5">
                {items.map((item) => (
                    <Fragment key={item.title}>
                        {/*Desktop*/}
                        <DesktopCard item={item} className="hidden md:flex" />
                        {/*Mobile*/}
                        <MobileCard item={item} className="flex md:hidden" />
                    </Fragment>
                ))}
            </div>
        </div>
    );
};
