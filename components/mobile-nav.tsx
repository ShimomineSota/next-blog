import { siteConfig } from "@/config/site";
import type { NavItem } from "@/types";
import Link from "next/link";
import type { FC, JSX } from "react";

interface Props {
	items?: NavItem[];
}

export default function MobileNav({ items }: Props): JSX.Element {
	return (
		<div className="fixed top-16 inset-0 p-6 z-50 md:hidden animate-in slide-in-from-bottom-80">
			<div className="grid gap-6 p-4 bg-popover text-popover-foreground shadow-md">
				<Link href={"/"} className="font-bold">
					{siteConfig.name}
				</Link>
				<nav className="text-sm flex gap-4">
					{items?.map((item) => (
						<Link
							key={item.title}
							href={item.href}
							className="p-2 font-medium hover:underline"
						>
							{item.title}
						</Link>
					))}
				</nav>
			</div>
		</div>
	);
}
