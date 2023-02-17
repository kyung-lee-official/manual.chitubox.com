import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

interface StyledVideoContainerProps {
	$HeightWidthRatio: number;
}
const StyledVideoContainer = styled.div<StyledVideoContainerProps>`
	overflow: hidden;
	padding-bottom: ${(props) => props.$HeightWidthRatio * 100 + "%"};
	position: relative;
	height: 0;
	margin: 1rem 0;
`;
const StyledHorizontalIframe = styled.iframe`
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	position: absolute;
`;

interface StyledVerticalVideoContainerPropsForDesktop {
	$height: number;
}
const StyledVerticalVideoContainerForDesktop = styled.div<StyledVerticalVideoContainerPropsForDesktop>`
	display: flex;
	justify-content: center;
	height: ${(props) => props.$height + "px"};
`;

export const FacebookVideoContainer: React.FC<any> = ({ children }) => {
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1224px)",
	});

	if (isDesktopOrLaptop) {
		if (children.props.width > children.props.height) {
			return (
				<StyledVideoContainer
					$HeightWidthRatio={
						children.props.height / children.props.width
					}
				>
					<StyledHorizontalIframe
						src={children.props.src}
						frameBorder={0}
					/>
				</StyledVideoContainer>
			);
		} else {
			return (
				<StyledVerticalVideoContainerForDesktop
					$height={children.props.height}
				>
					{children}
				</StyledVerticalVideoContainerForDesktop>
			);
		}
	} else {
		return (
			<StyledVideoContainer
				$HeightWidthRatio={children.props.height / children.props.width}
			>
				<StyledHorizontalIframe
					src={children.props.src}
					frameBorder={0}
				/>
			</StyledVideoContainer>
		);
	}
};
