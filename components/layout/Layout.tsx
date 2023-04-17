import React, { useMemo } from "react";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { Header } from "../header/Header";
import dynamic from "next/dynamic";

const DynamicFooter = dynamic(() => import("@/components/footer/Footer"), {
	ssr: false,
});

export const Layout: React.FC<any> = ({ children }) => {
	const { t } = useTranslation();
	const header = useMemo(() => <Header />, []);

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
