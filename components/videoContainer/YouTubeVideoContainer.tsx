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

export const YouTubeVideoContainer: React.FC<any> = ({ children }) => {
	return (
		<StyledVideoContainer>
			<StyledIframe
				src={children.props.src}
				width="100%"
				title="YouTube video player"
				frameBorder={0}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
		</StyledVideoContainer>
	);
};
