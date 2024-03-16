import Link, { LinkProps } from "next/link";
import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";

interface AnchorInterface extends LinkProps {
    children: ReactNode;
    className?: string;
}

export const Anchor = ({ children, className, ...props }: AnchorInterface) => {
    return (
        <Link
            className={twMerge(
                "line line-height flex items-center gap-1 leading-none hover:underline",
                className,
            )}
            {...props}
        >
            {children}
        </Link>
    );
};
