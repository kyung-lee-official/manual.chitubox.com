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
				<div
					className="w-full max-w-[2400px] mx-auto
					rounded-xl shadow-[0px_0px_100px_#0369a13c] overflow-hidden"
				>
					<HeroDark />
				</div>
			);
		} else {
			return (
				<div
					className="w-full max-w-[2400px] mx-auto
					rounded-xl shadow-[0px_0px_100px_#0369a13c] overflow-hidden"
				>
					<HeroLight />
				</div>
			);
		}
	} else {
		if (theme === Theme.DARK) {
			return (
				<div
					className="w-full max-w-[2400px] mx-auto
					rounded-xl shadow-[0px_0px_100px_#0369a13c] overflow-hidden"
				>
					<MobileHeroDark />
				</div>
			);
		} else {
			return (
				<div
					className="w-full max-w-[2400px] mx-auto
					rounded-xl shadow-[0px_0px_100px_#0369a13c] overflow-hidden"
				>
					<MobileHeroLight />
				</div>
			);
		}
	}
};

export default Hero;
