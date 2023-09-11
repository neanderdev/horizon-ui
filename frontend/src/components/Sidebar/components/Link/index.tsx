import "./style.css";

import * as LinkRouter from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface LinkProps extends LinkRouter.LinkProps {
    title: string;
    icon: ReactNode;
    shouldMatchExactHref?: boolean;
}

export function Link({ title, icon, shouldMatchExactHref = false, ...rest }: LinkProps) {
    const pathname = usePathname();

    let isActive = false;

    if (shouldMatchExactHref && (pathname === rest.href || pathname === rest.as)) {
        isActive = true;
    }

    if (!shouldMatchExactHref && (
        pathname.startsWith(String(rest.href)) ||
        pathname.startsWith(String(rest.as))
    )) {
        isActive = true;
    }

    return (
        <LinkRouter.default href={rest.href} className={`${isActive ? 'active' : ''}`}>
            {icon}

            {title}
        </LinkRouter.default>
    );
}
