import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { DocsSidebar, MdxContainer, Toc } from "..";

const StyledContent = styled.div`
	display: flex;
	color: ${(props) => props.theme.textContent};
	min-height: 110vh;
`;

export const DocsContent: React.FC<any> = (props) => {
	const { children } = props;
	const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });

	return (
		<StyledContent>
			{isDesktopOrLaptop ? <DocsSidebar /> : null}
			<MdxContainer>{children}</MdxContainer>
			{isDesktopOrLaptop ? <Toc /> : null}
		</StyledContent>
	);
};
