import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function IndexPage() {
	return (
		<>
			<section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
				<div className="container mx-auto text-center flex flex-col items-center gap-4 max-w-[64rem]">
					<Link
						href={siteConfig.links.x}
						className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm"
					>
						Xをフォローする
					</Link>
					<h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
						Post Writer
					</h1>
					<p className="text-muted-foreground sm:text-lg leading-normal max-w-[42rem]">
						このアプリケーションは、Next.jsでつくられています。ユーザーは自由に投稿を行うことができます。
					</p>
					<div className="space-x-4">
						<Link
							href={"/login"}
							className={cn(buttonVariants({ size: "lg" }))}
						>
							はじめる
						</Link>
						<Link
							href={siteConfig.links.github}
							className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
							target="_blank"
							rel="noreferrer"
						>
							Github
						</Link>
					</div>
				</div>
			</section>

			<section
				id="features"
				className="container mx-auto py-8 md:py-12 lg:py-24 bg-stone-50 space-y-6 px-3 md:px-6 lg:px-10"
			>
				<div className="text-center space-y-6">
					<h2 className="font-extrabold text-3xl md:text-6xl">
						サービスの特徴
					</h2>
					<p className="text-muted-foreground sm:text-lg sm:leading-7">
						マークダウン形式で、ブログの投稿が可能です。
					</p>
				</div>

				<div className="mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[64rem]:">
					<div className="bg-background border p-2 rounded-lg">
						<div className="flex flex-col justify-between p-6 h-[150] lg:h-[160]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="45"
								height="45"
								viewBox="0 0 24 24"
							>
								<title>Next.js Icon</title>
								<path
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 15V9l7.745 10.65A9 9 0 1 1 19 17.657M15 12V9"
								/>
							</svg>
							<div className="space-y-2">
								<h3 className="font-bold">Next.js</h3>
								<p className="text-sm text-muted-foreground">
									AppRouter/Layouts/APIRoutesの技術を使用
								</p>
							</div>
						</div>
					</div>
					<div className="bg-background border p-2 rounded-lg">
						<div className="flex flex-col justify-between p-6 h-[150] lg:h-[160]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="45"
								height="45"
								viewBox="0 0 24 24"
							>
								<title>Next.js Icon</title>
								<path
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 15V9l7.745 10.65A9 9 0 1 1 19 17.657M15 12V9"
								/>
							</svg>
							<div className="space-y-2">
								<h3 className="font-bold">Next.js</h3>
								<p className="text-sm text-muted-foreground">
									AppRouter/Layouts/APIRoutesの技術を使用
								</p>
							</div>
						</div>
					</div>
					<div className="bg-background border p-2 rounded-lg">
						<div className="flex flex-col justify-between p-6 h-[150] lg:h-[160]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="45"
								height="45"
								viewBox="0 0 24 24"
							>
								<title>Next.js Icon</title>
								<path
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 15V9l7.745 10.65A9 9 0 1 1 19 17.657M15 12V9"
								/>
							</svg>
							<div className="space-y-2">
								<h3 className="font-bold">Next.js</h3>
								<p className="text-sm text-muted-foreground">
									AppRouter/Layouts/APIRoutesの技術を使用
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
