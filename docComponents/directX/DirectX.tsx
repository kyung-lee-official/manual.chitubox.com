import React, { useEffect, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";

export const DirectX = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		margin: "0px 0px -350px 0px",
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
		<motion.img
			ref={ref}
			id="directx"
			src={"/images/docs/en-US/chitubox-basic/2.x.x/001_directx.png"}
			alt="DirectX"
			initial={{ x: 100, opacity: 0 }}
			className="w-[80%] max-w-[400px] mx-auto my-6
            shadow-[0_0_3rem_0_hsla(100,100%,50%,0.7)] rounded-xl"
		/>
	);
};
