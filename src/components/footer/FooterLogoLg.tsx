"use client";

import { MediaQuery } from "@/utils/types";
import { useMediaQuery } from "react-responsive";
import FooterLogo from "./FooterLogo";

const FooterLogoLg = ({ size, fill }: any) => {
	const isDesktopOrLaptop = useMediaQuery({ query: MediaQuery.lg });

	if (isDesktopOrLaptop) {
		return (
			<div className="flex items-center h-8 gap-4">
				<FooterLogo />
				<div className="text-neutral-600 dark:text-white text-nowrap">CHITUBOX Docs</div>
			</div>
		);
	} else {
		return null;
	}
};

export default FooterLogoLg;
