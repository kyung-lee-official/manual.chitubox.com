import Link from "next/link";
import dynamic from "next/dynamic";
import { BasicLogo2022 } from "../icons/Icons";
import ThemeSwitch from "../icons/ThemeSwitch";

const DynamicInstanceTitles = dynamic(
	() => import("@/components/header/InstanceTitles"),
	{
		ssr: false,
	}
);

const DynamicDocsSearch = dynamic(
	() => import("@/components/docsSearch/DocsSearch"),
	{
		ssr: false,
	}
);

const DynamicVersionDropdown = dynamic(
	() => import("@/components/versionDropdown/VersionDropdown"),
	{
		ssr: false,
	}
);

const DynamicLanguageMenu = dynamic(
	() => import("@/components/languageMenu/LanguageMenu"),
	{
		ssr: false,
	}
);

const DynamicMobileMenuEntry = dynamic(
	() => import("@/components/header/mobileMenu/MobileMenuEntry"),
	{
		ssr: false,
	}
);

export const Navigator = (props: any) => {

	return (
		<div
			className={`flex justify-between items-center h-16
			px-4 
			sm:px-6
			md:px-10
			lg:px-10
			xl:px-20
			gap-4 lg:gap-10
			text-neutral-800 dark:text-neutral-200
			bg-white dark:bg-black
			border-b-[1px] border-solid border-neutral-200 dark:border-neutral-800`}
		>
			<Link href="/">
				<BasicLogo2022 size={40} />
			</Link>
			{/* <Link
				href="/"
				className="flex justify-center items-center gap-2 no-underline"
			>
				{t("title")}
			</Link> */}
			<DynamicInstanceTitles />
			<div className="flex-1" /> {/* Placeholder */}
			<div className="flex gap-6">
				<DynamicDocsSearch />
				<DynamicVersionDropdown />
				<ThemeSwitch />
				<DynamicLanguageMenu />
			</div>
			<DynamicMobileMenuEntry />
		</div>
	);
};
