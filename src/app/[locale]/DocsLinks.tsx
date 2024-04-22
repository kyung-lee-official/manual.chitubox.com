"use client";

import { useLocale } from "next-intl";
import Link from "next/link";

const LinkWrapper = (props: { href: string; children: React.ReactNode }) => {
	const { href, children } = props;
	return (
		<Link
			href={href}
			className="flex justify-center items-center px-5 py-3
			text-sm text-white
			border-[1px] border-neutral-600 hover:border-neutral-400
			rounded-full duration-200"
		>
			{children}
		</Link>
	);
};

const DocsLinks = (props: {
	chituboxBasic: string;
	chituboxPro: string;
	chituManager: string;
	faq: string;
}) => {
	const { chituboxBasic, chituboxPro, chituManager, faq } = props;
	const locale = useLocale();
	return (
		<div
			className="lg:flex lg:justify-center lg:items-center lg:gap-8 p-8
			grid
			grid-cols-1
			md:grid-cols-2
			gap-4
			bg-black"
		>
			<LinkWrapper href={`/${locale}/chitubox-basic/latest/introduction`}>
				{chituboxBasic}
			</LinkWrapper>
			<LinkWrapper href={`/${locale}/chitubox-pro/latest/introduction`}>
				{chituboxPro}
			</LinkWrapper>
			<LinkWrapper href={`/${locale}/chitu-manager/latest/introduction`}>
				{chituManager}
			</LinkWrapper>
			<LinkWrapper href={`/${locale}/faq/latest/chitubox-basic-faq`}>
				{faq}
			</LinkWrapper>
		</div>
	);
};

export default DocsLinks;
