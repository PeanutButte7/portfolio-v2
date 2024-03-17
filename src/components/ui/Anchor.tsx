import { twMerge } from "tailwind-merge";
import { HTMLProps, ReactNode } from "react";

interface AnchorInterface extends HTMLProps<HTMLAnchorElement> {
    children: ReactNode;
    className?: string;
}

export const Anchor = ({ children, className, ...props }: AnchorInterface) => {
    return (
        <a
            target="_blank"
            className={twMerge(
                "line line-height flex items-center gap-1 leading-none hover:underline",
                className,
            )}
            {...props}
        >
            {children}
        </a>
    );
};
