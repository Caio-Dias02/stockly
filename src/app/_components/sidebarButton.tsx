"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

interface SidebarButtonProps {
    href: string;
    children: React.ReactNode;
}

export const SidebarButton = ({ href, children }: SidebarButtonProps) => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    return (
        <Button variant={isActive(href) ? "secondary" : "ghost"} className="justify-start gap-2" asChild>
            <Link href={href}>
                {children}
            </Link>
        </Button>
    )
}