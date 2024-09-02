"use client";

import { MediaQuery } from "@/utils/types";
import { useMediaQuery } from "react-responsive";
import FooterLogo from "./FooterLogo";
import {
	DiscordIcon,
	FacebookIcon,
	TwitterXIcon,
	InstagramIcon,
	YoutubeIcon,
} from "../icons/Sns";

const FooterTop = () => {
	const isLg = useMediaQuery({ query: MediaQuery.lg });
	if (isLg) {
		return null;
	} else {
		return (
			<div className="flex justify-between flex-wrap w-full gap-8">
				<div className="flex items-center h-8 gap-4">
					<FooterLogo />
					<div className="text-neutral-600 dark:text-neutral-100 text-nowrap">
						CHITUBOX Docs
					</div>
				</div>
				<div className="flex items-center gap-4">
					<a href="https://discord.com/invite/E45UFqGPZh">
						<DiscordIcon size={16} />
					</a>
					<a href="https://www.facebook.com/chitubox">
						<FacebookIcon size={16} />
					</a>
					<a href="https://twitter.com/chitubox">
						<TwitterXIcon size={16} />
					</a>
					<a href="https://www.instagram.com/chitubox_official/">
						<InstagramIcon size={16} />
					</a>
					<a href="https://www.youtube.com/@chituboxofficial987">
						<YoutubeIcon size={16} />
					</a>
				</div>
			</div>
		);
	}
};

export default FooterTop;
