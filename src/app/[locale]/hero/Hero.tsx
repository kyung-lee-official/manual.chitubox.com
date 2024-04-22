"use client";

import { Theme, useThemeStore } from "@/stores/theme";
import { MediaQuery } from "@/utils/types";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
	const { theme } = useThemeStore();
	const isLg = useMediaQuery({ query: MediaQuery.lg });

	if (isLg) {
		if (theme === Theme.DARK) {
			return (
				<div className="flex w-full justify-center items-center">
					<Image
						src="/images/pages/hero/hero-dark.jpg"
						width={1920}
						height={720}
						alt="hero"
					/>
				</div>
			);
		} else {
			return (
				<div className="flex w-full justify-center items-center">
					<Image
						src="/images/pages/hero/hero-light.jpg"
						width={1920}
						height={720}
						alt="hero"
					/>
				</div>
			);
		}
	} else {
		if (theme === Theme.DARK) {
			return (
				<div className="flex w-full justify-center items-center">
					<Image
						src="/images/pages/hero/mobile-hero-dark.png"
						width={700}
						height={320}
						alt="hero"
					/>
				</div>
			);
		} else {
			return (
				<div className="flex w-full justify-center items-center">
					<Image
						src="/images/pages/hero/mobile-hero-light.png"
						width={700}
						height={320}
						alt="hero"
					/>
				</div>
			);
		}
	}
};

export default Hero;
