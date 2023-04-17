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
			</Head>
			{header}
			{children}
			<DynamicFooter />
		</main>
	);
};
