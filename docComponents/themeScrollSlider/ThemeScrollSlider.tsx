import {
	motion,
	useMotionValueEvent,
	useScroll,
	useSpring,
	useTransform,
} from "framer-motion";
import React, { useRef, useState } from "react";

export const ThemeScrollSlider = () => {
	const maskWidth = 50;
	const xDeviation = 30;
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["30% start", "70% end"],
	} as any);
	const scrollYProgressSpring = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});
	const [upperLeftProgressState, setUpperLeftProgressState] =
		useState<number>(-maskWidth);
	const [upperRightProgressState, setUpperRightProgressState] =
		useState<number>(0);
	const [lowerRightProgressState, setLowerRightProgressState] =
		useState<number>(-xDeviation);
	const [lowerLeftProgressState, setLowerLeftProgressState] =
		useState<number>(-maskWidth - xDeviation);

	const upperLeftProgress = useTransform(
		scrollYProgressSpring,
		[1, 0],
		[-maskWidth, 100 + xDeviation]
	);
	const upperRightProgress = useTransform(
		scrollYProgressSpring,
		[1, 0],
		[0, 100 + maskWidth + xDeviation]
	);
	const lowerRightProgress = useTransform(
		scrollYProgressSpring,
		[1, 0],
		[-xDeviation, 100 + maskWidth]
	);
	const lowerLeftProgress = useTransform(
		scrollYProgressSpring,
		[1, 0],
		[-maskWidth - xDeviation, 100]
	);

	useMotionValueEvent(upperLeftProgress, "change", (latest) => {
		setUpperLeftProgressState(latest);
	});
	useMotionValueEvent(upperRightProgress, "change", (latest) => {
		setUpperRightProgressState(latest);
	});
	useMotionValueEvent(lowerRightProgress, "change", (latest) => {
		setLowerRightProgressState(latest);
	});
	useMotionValueEvent(lowerLeftProgress, "change", (latest) => {
		setLowerLeftProgressState(latest);
	});

	return (
		<motion.div
			className="flex flex-col justify-center items-center w-full drop-shadow-[0_0_10px_hsla(0,0%,0%,0.7)] my-8"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
		>
			<div className="relative max-w-[960px]" ref={ref}>
				<img
					src="/images/docs/en-US/chitubox-basic/2.x.x/001-theme-dark.png"
					alt=""
					width={"100%"}
				/>
				<div
					className="absolute top-0 flex width-full m-auto"
					style={{
						clipPath: `polygon(${upperLeftProgressState}% 0,
							${upperRightProgressState}% 0,
							${lowerRightProgressState}% 100%,
							${lowerLeftProgressState}% 100%)`,
					}}
				>
					<img
						src="/images/docs/en-US/chitubox-basic/2.x.x/001-theme-light.png"
						alt=""
						width={"100%"}
					/>
				</div>
			</div>
		</motion.div>
	);
};
