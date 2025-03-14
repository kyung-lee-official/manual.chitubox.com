"use client";

import React, { useEffect, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import { RmaIcon } from "../../components/icons/Icons";

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
		<div className="flex justify-center w-full">
			<motion.div
				ref={ref}
				id="rmaIcon"
				initial={{ x: -100, opacity: 0 }}
			>
				<RmaIcon size={256} />
			</motion.div>
		</div>
	);
};
