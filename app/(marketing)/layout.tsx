import MainNav from "@/components/main-nav";
import { buttonVariants } from "@/components/ui/button";
import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { type PropsWithChildren } from "react";

export default function MarketingLayout({ children }: PropsWithChildren) {
	return (
		<div>
			<header className="container mx-auto z-40 bg-background">
				<div className="h-20 px-3 sm:px-10 py-6 flex items-center justify-between">
					<MainNav items={marketingConfig.MainNav} />
					<nav>
						<Link
							href={"/login"}
							className={cn(
								buttonVariants({ variant: "secondary", size: "sm" }),
								"px-4",
							)}
						>
							ログイン
						</Link>
					</nav>
				</div>
			</header>
			<main>{children}</main>
		</div>
	);
}
