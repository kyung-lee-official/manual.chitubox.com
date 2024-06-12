"use client";

import { useLocale } from "next-intl";
import { Banner } from "./Banner";
// import { Banner } from "./Banner.test";
import { Navigator } from "./Navigator";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/utils/tanstack-query";

export const Header = () => {
	const locale = useLocale();

	return (
		<header id="header" className="sticky top-0 z-10">
			<QueryClientProvider client={queryClient}>
				<Banner locale={locale} />
			</QueryClientProvider>
			<Navigator />
		</header>
	);
};
