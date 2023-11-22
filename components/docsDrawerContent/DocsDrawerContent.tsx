import React, { useContext } from "react";
import { DocContext } from "../docsLayout/DocContext";
import { LanguageDropdown } from "../languageDropdown/LanguageDropdown";
import { DocsDrawerInstanceDropdown } from "../docsDrawerInstanceDropdown/DocsDrawerInstanceDropdown";
import { DocsSidebar } from "../docsSidebar/DocsSidebar";
import dynamic from "next/dynamic";

const DynamicThemeSwitch = dynamic(
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

const PanelItem = (props: any) => {
	const { children } = props;
	return (
		<div className="flex justify-center items-center cursor-pointer">
			{children}
		</div>
	);
};

export const DocsDrawerContent: React.FC<any> = () => {
	const { searchResults } = useContext(DocContext);
	return (
		<div className="flex flex-col gap-8">
			<div className="flex justify-evenly items-center">
				<PanelItem>
					<DynamicVersionDropdown />
				</PanelItem>
				<PanelItem>
					<DynamicThemeSwitch />
				</PanelItem>
				<PanelItem>
					<LanguageDropdown />
				</PanelItem>
			</div>
			<PanelItem>
				<DynamicDocsSearch />
			</PanelItem>
			<DynamicDocsSearchResult searchResults={searchResults} />
			<DocsDrawerInstanceDropdown />
			<DocsSidebar />
		</div>
	);
};
