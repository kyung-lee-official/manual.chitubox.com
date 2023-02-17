import React from "react";
import styled from "styled-components";

const StyledVideoContainer = styled.div`
	overflow: hidden;
	padding-bottom: 56.25%;
	position: relative;
	height: 0;
	margin: 1rem 0;
`;

const StyledIframe = styled.iframe`
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	position: absolute;
`;

export const BilibiliVideoContainer: React.FC<any> = ({ children }) => {
	return (
		<StyledVideoContainer>
			<StyledIframe
				src={children.props.src}
				frameBorder="no"
				scrolling="no"
				allowFullScreen
				style={{ width: "100%" }}
			/>
		</StyledVideoContainer>
	);
};
