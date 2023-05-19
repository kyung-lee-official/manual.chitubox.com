import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import Lottie from "lottie-react";
import ThumbUpDark from "./thumbup-dark.json";
import ThumbUpLight from "./thumbup-light.json";
import { ThumbDown } from "../icons/Icons";
import { useTranslation } from "react-i18next";
import { Theme, useThemeStore } from "stores/theme";

export const IsPageUseful = (props: any) => {
	const { meta } = props;
	const router = useRouter();

	const [isClicked, setIsClicked] = useState(false);
	const thumbRef = useRef<any>(null);
	const { theme } = useThemeStore();

	const { t } = useTranslation();

	function click() {
		console.log(meta);
		setIsClicked(true);
	}

	return (
		<div
			className="fixed left-6 bottom-10 flex gap-4 px-4 py-2
            font-semibold text-base text-gray-800 dark:text-gray-200
            bg-gray-50/40 dark:bg-gray-600 backdrop-blur-sm
            shadow-md rounded-md"
		>
			{isClicked ? (
				<div className="font-medium">
					{t("docComponents.isPageUseful.thanks")}
				</div>
			) : (
				<div className="flex items-center gap-4">
					<div className="font-medium">
						{t("docComponents.isPageUseful.question")}
					</div>
					<div
						className="cursor-pointer"
						onClick={() => {
							thumbRef.current.goToAndPlay(0, false);
						}}
					>
						<div className="relative w-6 h-6">
							<div className="absolute w-[100px] h-[100px] top-[-38px] left-[-38px] pointer-events-none">
								<Lottie
									animationData={
										theme === Theme.DARK
											? ThumbUpDark
											: ThumbUpLight
									}
									loop={false}
									autoplay={false}
									lottieRef={thumbRef}
									onComplete={() => {
										setIsClicked(true);
									}}
								/>
							</div>
						</div>
						{/* <ThumbUp /> */}
					</div>
					<div className="cursor-pointer" onClick={click}>
						<ThumbDown />
					</div>
				</div>
			)}
		</div>
	);
};
