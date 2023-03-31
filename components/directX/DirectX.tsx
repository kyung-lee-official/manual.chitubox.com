import React, { useEffect, useRef } from "react";
import { ImageContainer } from "..";
import { animate, motion, useInView } from "framer-motion";
import styled from "styled-components";

const StyledAntdImage = styled(motion.img)`
	border-radius: 10px;
	margin: auto;
	box-shadow: 0 0 3rem 0 hsla(100, 100%, 50%, 0.7);
`;

export const DirectX = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		margin: "0px 0px -280px 0px",
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
		<ImageContainer justifyContent="center">
			<StyledAntdImage
				ref={ref}
				id="directx"
				src={"/images/docs/en-US/chitubox-basic/2.x.x/001_directx.png"}
				alt="DirectX"
				width={"80%"}
				style={{ maxWidth: "400px" }}
				initial={{ x: 100, opacity: 0 }}
			/>
		</ImageContainer>
	);
};
