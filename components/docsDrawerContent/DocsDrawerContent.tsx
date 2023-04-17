import React, { useContext } from "react";
import styled from "styled-components";
import { DocContext } from "../docsLayout/DocContext";
import { LanguageDropdown } from "../languageDropdown/LanguageDropdown";
import { DocsDrawerInstanceDropdown } from "../docsDrawerInstanceDropdown/DocsDrawerInstanceDropdown";
import { DocsSidebar } from "../docsSidebar/DocsSidebar";
import dynamic from "next/dynamic";

const DynamicThemeSwitcher = dynamic(
	() => import("@/components/icons/ThemeSwitch"),
	{
		ssr: false,
	}
);

const DynamicVersionDropdown = dynamic(
	() => import("@/components/versionDropdown/VersionDropdown"),
	{
		ssr: false,
	}
);

const DynamicDocsSearch = dynamic(
	() => import("@/components/docsSearch/DocsSearch"),
	{
		ssr: false,
	}
);

const DynamicDocsSearchResult = dynamic(
	() => import("@/components/docsSearchResult/DocsSearchResult"),
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
					<DynamicVersionDropdown />
				</StyledPanelItem>
				<StyledPanelItem>
					<DynamicThemeSwitcher />
				</StyledPanelItem>
				<StyledPanelItem>
					<LanguageDropdown />
				</StyledPanelItem>
			</StyledPanel>
			<StyledPanelItem>
				<DynamicDocsSearch />
			</StyledPanelItem>
			<DynamicDocsSearchResult searchResults={searchResults} />
			<DocsDrawerInstanceDropdown />
			<DocsSidebar />
		</StyledContainer>
	);
};
