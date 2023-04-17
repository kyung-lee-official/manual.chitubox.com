import React, { useContext } from "react";
import styled from "styled-components";
import { DocContext } from "../docsLayout/DocContext";
import { VersionDropdown } from "../versionDropdown/VersionDropdown";
import { LanguageDropdown } from "../languageDropdown/LanguageDropdown";
import { DocsSearch } from "../docsSearch/DocsSearch";
import { DocsSearchResult } from "../docsSearchResult/DocsSearchResult";
import { DocsDrawerInstanceDropdown } from "../docsDrawerInstanceDropdown/DocsDrawerInstanceDropdown";
import { DocsSidebar } from "../docsSidebar/DocsSidebar";
import dynamic from "next/dynamic";

const DynamicThemeSwitcher = dynamic(
	() => import("@/components/icons/ThemeSwitch"),
	{
		ssr: false,
	}
);

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
					<DynamicThemeSwitcher />
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
