import { twMerge } from "tailwind-merge";
import { HTMLProps, ReactNode, forwardRef } from "react";
import Link from "next/link";

interface AnchorProps extends Omit<HTMLProps<HTMLAnchorElement>, "href"> {
    children: ReactNode;
    isLink?: boolean;
    className?: string;
    href?: string;
}

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
    ({ children, className, isLink, href = "#", ...props }, ref) => {
        const classes = twMerge(
            "line line-height flex items-center gap-1 leading-none hover:underline",
            className,
        );

        if (isLink) {
            return (
                <Link
                    href={href}
                    className={classes}
                    // @ts-ignore
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    {...props}
                >
                    {children}
                </Link>
            );
        }

        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={classes}
                ref={ref}
                {...props}
            >
                {children}
            </a>
        );
    },
);

Anchor.displayName = "Anchor";
