import { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { UrlHashPilot } from "@/components/urlHashPilot/UrlHashPilot";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import KatexHtmlSanitizer from "@/components/katexHtmlSanitizer/KatexHtmlSanitizer";
import { NotLatestHint } from "@/components/notLatestHint/NotLatestHint";
import { locales } from "@/utils/types";
import { DynamicDocsSidebar } from "@/components/docsSidebar/DynamicDocsSidebar";
import { DynamicVersionTag } from "@/components/versionTag/DynamicVersionTag";
import { DynamicToc } from "@/components/toc/DynamicToc";

/* https://nextjs.org/docs/app/api-reference/functions/generate-static-params */
export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
	params: { locale },
}: any): Promise<Metadata> {
	const t = await getTranslations({ locale });
	return {
		metadataBase: new URL("https://manual.chitubox.com"),
		icons: {
			icon: "/logo.png",
		},
		title: {
			template: "%s | " + t("title"),
			default: t("title"),
		},
		description: t("description"),
		openGraph: {
			title: {
				template: "%s | " + t("title"),
				default: t("title"),
			},
			description: t("description"),
			images: "/logo.png",
		},
	};
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	setRequestLocale("zh-CN");

	const messages = useMessages();

	return (
		<html lang="zh-CN">
			<body className="font-[NotoSansCJKsc-Regular]">
				<UrlHashPilot />
				<NextIntlClientProvider locale={"zh-CN"} messages={messages}>
					<div id="root-portal"></div>
					<Header />
					<main
						className="flex min-h-svh
						text-neutral-900 dark:text-neutral-200
						dark:bg-black"
					>
						<KatexHtmlSanitizer />
						<DynamicDocsSidebar />
						<div className="w-full min-w-0 max-w-[900px] p-4 mx-auto">
							<DynamicVersionTag />
							<NotLatestHint />
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
