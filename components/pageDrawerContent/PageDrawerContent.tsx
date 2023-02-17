import React from "react";
import styled from "styled-components";
import { LanguageDropdown, ThemeSwitch } from "..";

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;
const StyledPanel = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;
const StyledPanelItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

export const PageDrawerContent: React.FC<any> = () => {
	return (
		<StyledContainer>
			<StyledPanel>
				<StyledPanelItem>
					<LanguageDropdown />
				</StyledPanelItem>
			</StyledPanel>
		</StyledContainer>
	);
};
