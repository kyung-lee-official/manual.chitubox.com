import React, { useEffect, useRef } from "react";
import { ImageContainer, RmaIcon } from "..";
import { animate, motion, useInView } from "framer-motion";

export const Rma = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		margin: "0px 0px -300px 0px",
		once: true,
	});

	useEffect(() => {
		if (isInView) {
			animate(
				"#rmaIcon",
				{ x: [-100, 0], opacity: [0, 1] },
				{ type: "spring" }
			);
		}
	}, [isInView]);

	return (
		<ImageContainer justifyContent="center">
			<motion.div
				ref={ref}
				id="rmaIcon"
				initial={{ x: -100, opacity: 0 }}
			>
				<RmaIcon size={256} />
			</motion.div>
		</ImageContainer>
	);
};
