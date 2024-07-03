"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import Subtitle from "./Subtitle";

const DocsCard = (props: { href: string; title: string }) => {
	const { href, title } = props;
	return (
		<div
			className="flex flex-col items-start p-8 gap-4
			bg-white/50 dark:bg-neutral-800/60
			rounded-xl hover:shadow-lg duration-200"
		>
			<div className="flex items-center gap-4">
				<div
					className="w-2 h-10
					bg-[#0C88E0]
					rounded-full"
				></div>
				<Link
					href={href}
					className="flex justify-start items-center w-full
					text-lg font-bold
					text-neutral-600 hover:text-neutral-900
					dark:text-neutral-200 dark:hover:text-neutral-50
					duration-200"
				>
					{title}
				</Link>
			</div>
			<Subtitle docInstanceName={title} />
		</div>
	);
};

const Docsboard = (props: {
	chituboxBasic: string;
	chituboxPro: string;
	chituManager: string;
	chituboxPrintingTest: string;
	faq: string;
}) => {
	const {
		chituboxBasic,
		chituboxPro,
		chituManager,
		chituboxPrintingTest,
		faq,
	} = props;
	const locale = useLocale();
	return (
		<div
			className="flex justify-center
			my-4
			sm:my-6
			md:my-10
			lg:my-10
			xl:my-20"
		>
			<div
				className="grid
				grid-cols-1
				sm:grid-cols-2
				md:grid-cols-2
				lg:grid-cols-3
				xl:grid-cols-4
				w-full max-w-[2400px]
				gap-4
				sm:gap-6
				md:gap-10"
			>
				<DocsCard
					href={`/${locale}/chitubox-basic/latest/introduction`}
					title={chituboxBasic}
				/>
				<DocsCard
					href={`/${locale}/chitubox-pro/latest/introduction`}
					title={chituboxPro}
				/>
				<DocsCard
					href={`/${locale}/chitu-manager/latest/introduction`}
					title={chituManager}
				/>
				<DocsCard
					href={`/${locale}/faq/latest/chitubox-basic-faq`}
					title={faq}
				/>
				<DocsCard
					href={`/${locale}/chitubox-printing-test/latest/overview-of-the-standard-model`}
					title={chituboxPrintingTest}
				/>
			</div>
		</div>
	);
};

export default Docsboard;
