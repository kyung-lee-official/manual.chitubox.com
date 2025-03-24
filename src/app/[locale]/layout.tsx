import type { Metadata } from "next";
import "../globals.css";
import { notFound } from "next/navigation";
import {
	getMessages,
	getTranslations,
	setRequestLocale,
} from "next-intl/server";
import { UrlHashPilot } from "@/components/urlHashPilot/UrlHashPilot";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { Ask } from "@/components/qwen/ask/Ask";
import { Locale, locales } from "@/utils/types";
import { NextIntlClientProvider } from "next-intl";

/* https://nextjs.org/docs/app/api-reference/functions/generate-static-params */
export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
	const { locale } = await params;
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
			images: "https://manual.chitubox.com/images/docs/og_logo.png",
		},
	};
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: Locale }>;
}) {
	/* Validate that the incoming `locale` parameter is valid */
	const { locale } = await params;
	if (!locales.includes(locale)) {
		notFound();
	}

	setRequestLocale(locale);
	const messages = await getMessages();

	return (
		<html lang={locale}>
			<body className="font-[NotoSansCJKsc-Regular]">
				<UrlHashPilot />
				<div id="root-portal"></div>
				<NextIntlClientProvider messages={messages}>
					<Header />
					<main className="dark:bg-black">{children}</main>
					<Ask />
				</NextIntlClientProvider>
				<Footer />
			</body>
		</html>
	);
}
