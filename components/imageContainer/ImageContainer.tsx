import React from "react";
import styled from "styled-components";

interface StyledWrapperProps {
	$justifyContent: "flex-start" | "center" | "flex-end";
}
const StyledWrapper = styled.div<StyledWrapperProps>`
	display: flex;
	align-items: center;
	justify-content: ${(props) => {
		return props.$justifyContent;
	}};
	margin: 1rem 0;
`;

type ImageContainerType = {
	justifyContent: "flex-start" | "center" | "flex-end";
	children: any;
};
export const ImageContainer: React.FC<ImageContainerType> = ({
	justifyContent,
	children,
}) => {
	return (
		<StyledWrapper $justifyContent={justifyContent}>
			{children}
		</StyledWrapper>
	);
};

ImageContainer.defaultProps = {
	justifyContent: "flex-start",
};
