import { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { locales } from "../../../messages/Locale";
import { UrlHashPilot } from "@/components/urlHashPilot/UrlHashPilot";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import dynamic from "next/dynamic";
import KatexHtmlSanitizer from "@/components/katexHtmlSanitizer/KatexHtmlSanitizer";

const DynamicDocsSidebar = dynamic(
	() => import("@/components/docsSidebar/DocsSidebar"),
	{
		ssr: false,
	}
);

const DynamicVersionTag = dynamic(
	() => import("@/components/versionTag/VersionTag"),
	{
		ssr: false,
	}
);

const DynamicToc = dynamic(() => import("@/components/toc/Toc"), {
	ssr: false,
});

/* https://nextjs.org/docs/app/api-reference/functions/generate-static-params */
export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
	params: { locale },
}: any): Promise<Metadata> {
	const t = await getTranslations({ locale });
	return {
		icons: {
			icon: "/favicon.ico",
		},
		title: {
			template: "%s | " + t("title"),
			default: t("description") + " | " + t("title"),
		},
	};
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	unstable_setRequestLocale("en-US");

	const messages = useMessages();

	return (
		<html lang="en-US">
			<body className="font-[NotoSansCJKsc-Regular]">
				<UrlHashPilot />
				<NextIntlClientProvider locale={"en-US"} messages={messages}>
					<div id="root-portal"></div>
					<Header />
					<main
						className="flex min-h-svh
						text-neutral-900 dark:text-neutral-200
						dark:bg-black"
					>
						<KatexHtmlSanitizer />
						<DynamicDocsSidebar />
						<div className="flex flex-col w-full min-w-0 max-w-[900px] p-4 mx-auto">
							<DynamicVersionTag />
							{children}
						</div>
						<DynamicToc />
					</main>
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
