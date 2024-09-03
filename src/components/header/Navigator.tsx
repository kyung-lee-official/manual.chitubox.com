import Link from "next/link";
import dynamic from "next/dynamic";
import { BasicLogo2022 } from "../icons/Icons";
import ThemeSwitch from "../icons/ThemeSwitch";
import { useTranslations } from "next-intl";

const DynamicFieldTitles = dynamic(
	() => import("@/components/header/FieldTitles"),
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
	const t = useTranslations();

	return (
		<nav
			className={`flex justify-between items-center h-16
			px-4 lg:px-16
			gap-4 lg:gap-10
			text-neutral-800 dark:text-neutral-200
			bg-white dark:bg-black
			border-b-[1px] border-solid border-neutral-200 dark:border-neutral-800`}
		>
			<Link href="/" className="flex items-center gap-4">
				<BasicLogo2022 size={40} />
				<div className="text-xl">{t("title")}</div>
			</Link>
			<DynamicFieldTitles />
			<div className="flex-1" /> {/* Placeholder */}
			<div className="flex gap-6">
				<DynamicDocsSearch />
				<DynamicVersionDropdown />
				<ThemeSwitch />
				<DynamicLanguageMenu />
			</div>
			<DynamicMobileMenuEntry docs={t("header.docs")} />
		</nav>
	);
};
