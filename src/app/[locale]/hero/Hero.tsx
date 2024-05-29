"use client";

import { Theme, useThemeStore } from "@/stores/theme";
import { MediaQuery } from "@/utils/types";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { HeroDark, HeroLight } from "./HeroSvg";

const Hero = () => {
	const { theme } = useThemeStore();
	const isLg = useMediaQuery({ query: MediaQuery.lg });

	if (isLg) {
		if (theme === Theme.DARK) {
			return (
				<div className="w-full max-w-[2400px] mx-auto">
					<HeroDark />
				</div>
			);
		} else {
			return (
				<div className="w-full max-w-[2400px] mx-auto">
					<HeroLight />
				</div>
			);
		}
	} else {
		if (theme === Theme.DARK) {
			return (
				<div className="w-full max-w-[2400px] mx-auto">
					<HeroDark />
				</div>
			);
		} else {
			return (
				<div className="w-full max-w-[2400px] mx-auto">
					<HeroLight />
				</div>
			);
		}
	}
};

export default Hero;
