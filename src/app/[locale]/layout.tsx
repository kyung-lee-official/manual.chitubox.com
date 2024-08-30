import type { Metadata } from "next";
import "../globals.css";
import { notFound, useParams } from "next/navigation";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Locale, locales } from "../../../messages/Locale";
import { UrlHashPilot } from "@/components/urlHashPilot/UrlHashPilot";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import Ask from "@/components/orama/ask/Ask";

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
			images: "https://manual.chitubox.com/images/docs/og_logo.png",
		},
	};
}

export default async function RootLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: Locale };
}) {
	/* Validate that the incoming `locale` parameter is valid */
	if (!locales.includes(locale)) notFound();

	unstable_setRequestLocale(locale);

	return (
		<html lang={locale}>
			<body className="font-[NotoSansCJKsc-Regular]">
				<UrlHashPilot />
				<div id="root-portal"></div>
				<Header />
				<main className="dark:bg-black">{children}</main>
				<Footer />
				<Ask />
			</body>
		</html>
	);
}
