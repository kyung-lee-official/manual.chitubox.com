"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import Subtitle from "./Subtitle";

const DocsCard = (props: { href: string; title: string }) => {
	const { href, title } = props;
	return (
		<div
			className="flex flex-col items-start
			bg-white dark:bg-neutral-800
			rounded-xl hover:shadow-lg duration-200"
		>
			<Link
				href={href}
				className="flex justify-start items-center w-full px-5 py-3
				dark:text-neutral-300 dark:hover:text-neutral-200
				duration-200"
			>
				{title}
			</Link>
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
		<div className="flex justify-center">
			<div
				className="grid
				grid-cols-1
				md:grid-cols-2
				lg:grid-cols-3
				w-full max-w-[1200px] px-4 py-16 gap-10"
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
					href={`/${locale}/chitubox-printing-test/latest/overview-of-the-standard-model`}
					title={chituboxPrintingTest}
				/>
				<DocsCard
					href={`/${locale}/faq/latest/chitubox-basic-faq`}
					title={faq}
				/>
			</div>
		</div>
	);
};

export default Docsboard;
