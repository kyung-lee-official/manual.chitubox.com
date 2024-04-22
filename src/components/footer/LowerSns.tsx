"use client";

import {
	DiscordIcon,
	FacebookIcon,
	InstagramIcon,
	TwitterXIcon,
	YoutubeIcon,
} from "../icons/Sns";
import { useMediaQuery } from "react-responsive";
import { MediaQuery } from "@/utils/types";

const LowerSns = () => {
	const isDesktopOrLaptop = useMediaQuery({ query: MediaQuery.lg });

	if (isDesktopOrLaptop) {
		return (
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
		);
	} else {
		return null;
	}
};

export default LowerSns;
