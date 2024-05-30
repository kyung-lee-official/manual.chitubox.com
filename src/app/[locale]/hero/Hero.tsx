"use client";

import { Theme, useThemeStore } from "@/stores/theme";
import { MediaQuery } from "@/utils/types";
import { useMediaQuery } from "react-responsive";
import { HeroDark, HeroLight } from "./HeroSvg";
import { MobileHeroLight } from "./MobileHeroLight";
import { MobileHeroDark } from "./MobileHeroDark";

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
					<MobileHeroDark />
				</div>
			);
		} else {
			return (
				<div className="w-full max-w-[2400px] mx-auto">
					<MobileHeroLight />
				</div>
			);
		}
	}
};

export default Hero;
