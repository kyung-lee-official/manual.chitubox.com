import React, { useMemo } from "react";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("@/components/header/Header"), {
	ssr: false,
});

const DynamicFooter = dynamic(() => import("@/components/footer/Footer"), {
	ssr: false,
});

export const Layout: React.FC<any> = ({ children }) => {
	const { t } = useTranslation();
	const header = useMemo(() => <DynamicHeader />, []);

	return (
		<main>
			<Head>
				<link rel="icon" href="favicon.ico"></link>
				<title>{t("header.title")}</title>
				<meta
					name="description"
					content={"The user manual of CHITUBOX"}
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="CHITUBOX Docs" />
				<meta
					property="og:description"
					content="The user manual of CHITUBOX"
				/>
				<meta property="og:image" content={"/images/pages/logo.svg"} />
				<meta property="og:image:width" content="400" />
				<meta property="og:image:height" content="400" />
				<meta property="og:url" content="https://manual.chitubox.com" />
			</Head>
			{header}
			{children}
			<DynamicFooter />
		</main>
	);
};
