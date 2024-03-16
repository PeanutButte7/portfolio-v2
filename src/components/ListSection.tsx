import { twMerge } from "tailwind-merge";
import { Item } from "@/app/data";
import { list } from "postcss";

interface ListSectionProps {
    title: string;
    items: Item[];
}

export const ListSection = ({ title, items }: ListSectionProps) => {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl">{title}</h2>
            <div className="flex flex-col gap-4">
                {items.map(({ title, description, date, highlight }, index) => (
                    <div key={index} className="flex items-center gap-2.5">
                        <p className="font-semibold">{title}</p>
                        <p className="text-foreground-muted">{description}</p>
                        <hr
                            className={twMerge(
                                "grow",
                                !highlight && "opacity-30",
                            )}
                        />
                        <p className="text-foreground-muted">{date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
