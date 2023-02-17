import React, { useContext } from "react";
import styled from "styled-components";
import { DocContext } from "../docsLayout";
import {
	DocsSearch,
	DocsSearchResult,
	LanguageDropdown,
	ThemeSwitch,
	VersionDropdown,
	DocsDrawerInstanceDropdown,
	DocsSidebar,
} from "..";

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
export const DocsDrawerContent: React.FC<any> = () => {
	const { searchResults } = useContext(DocContext);
	return (
		<StyledContainer>
			<StyledPanel>
				<StyledPanelItem>
					<VersionDropdown />
				</StyledPanelItem>
				<StyledPanelItem>
					<ThemeSwitch />
				</StyledPanelItem>
				<StyledPanelItem>
					<LanguageDropdown />
				</StyledPanelItem>
			</StyledPanel>
			<StyledPanelItem>
				<DocsSearch />
			</StyledPanelItem>
			<DocsSearchResult searchResults={searchResults} />
			<DocsDrawerInstanceDropdown />
			<DocsSidebar />
		</StyledContainer>
	);
};
