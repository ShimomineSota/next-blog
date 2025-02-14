"use client";

import type { NavItem } from "@/types";
import Link from "next/link";
import type React from "react";
import { type JSX, useState } from "react";
import MobileNav from "./mobile-nav";

interface Props {
	items?: NavItem[];
}

export default function MainNav({ items }: Props): JSX.Element {
	const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

	return (
		<div className="flex items-center md:gap-10">
			<Link href={"/"} className="hidden md:flex items-center space-x-2">
				<span className="font-bold">Post Writer</span>
			</Link>
			<nav className="md:flex gap-6 hidden">
				{items?.map((item) => (
					<Link
						key={item.title}
						href={item.href}
						className="text-sm font-medium hover:text-foreground/80"
					>
						{item.title}
					</Link>
				))}
			</nav>
			<button
				type="button"
				className="md:hidden"
				onClick={() => setShowMobileMenu(!showMobileMenu)}
			>
				<span>メニュー</span>
			</button>
			{showMobileMenu && <MobileNav items={items} />}
		</div>
	);
}
