import React, { useMemo, useRef } from "react";
import { Banner, Header } from "..";
import { Footer } from "../footer";
import Head from "next/head";
import { useTranslation } from "react-i18next";

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
			<Footer />
		</main>
	);
};
