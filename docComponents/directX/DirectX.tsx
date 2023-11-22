import React, { useEffect, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import { WindowsIcon } from "@/components/icons/Icons";

export const DirectX = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		margin: "0px 0px -500px 0px",
		once: true,
	});

	useEffect(() => {
		if (isInView) {
			animate(
				"#directx",
				{ x: [100, 0], opacity: [0, 1] },
				{ type: "spring" }
			);
		}
	}, [isInView]);

	return (
		<motion.div
			ref={ref}
			id="directx"
			className="relative mx-auto my-6 flex justify-center items-center
            drop-shadow-[0_0_60px_hsla(199.3700787401575,95.4887218045113%,73.92156862745098%,0.9)] rounded-xl"
			initial={{ x: 100, opacity: 0 }}
		>
			<WindowsIcon size={192} fill={"#7dd3fc"} />
			<div
				className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center
                font-bold text-8xl text-white drop-shadow-2xl opacity-90"
			>
				DirectX
			</div>
		</motion.div>
	);
};
