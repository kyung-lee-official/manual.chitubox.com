import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getFlattenToc } from "@/utils/data";
import { DocsSearchResult } from "./DocsSearchResult";
import { useDocsContext } from "@/utils/hooks";

export const DocsSearch = (props: {
	setShowMenu: Dispatch<SetStateAction<boolean>>;
}) => {
	const { setShowMenu } = props;

	const { docInstanceContext, flattenPagesContext } = useDocsContext();

	const [searchTerm, setSearchTerm] = useState<string>("");
	const [searchResults, setSearchResults] = useState<any>([]);

	function onSearchTermChange(event: any) {
		setSearchTerm(event.target.value.toLowerCase());
	}

	useEffect(() => {
		if (searchTerm !== "" && docInstanceContext && flattenPagesContext) {
			const searchResults = flattenPagesContext.filter(
				(flattenPagesContext: any) => {
					if (
						flattenPagesContext.label
							.toLowerCase()
							.indexOf(searchTerm) !== -1
					) {
						return true;
					} else if (flattenPagesContext.toc) {
						/* TOC is not empty */
						const flattenToc = getFlattenToc(
							flattenPagesContext.toc
						);
						if (flattenToc) {
							return flattenToc.some((heading: any) => {
								return (
									heading.value
										.toLowerCase()
										.indexOf(searchTerm) !== -1
								);
							});
						} else {
							return false;
						}
					} else {
						/* TOC is empty */
						return false;
					}
				}
			);
			setSearchResults(searchResults);
		} else {
			setSearchResults([]);
		}
	}, [searchTerm, setSearchResults]);

	if (docInstanceContext) {
		return (
			<div className="flex flex-col gap-4">
				<form
					onSubmit={(e) => {
						/* Prevent form submissions when enter is pressed inside input */
						e.preventDefault();
					}}
				>
					<input
						className={`w-full h-8 px-3
						text-neutral-600 dark:text-neutral-300
						bg-neutral-100 dark:bg-neutral-800
						rounded-md outline-none
						transition-all`}
						type="search"
						name="search"
						id="search"
						value={searchTerm}
						placeholder={"Search"}
						onChange={onSearchTermChange}
						autoComplete="off"
					/>
				</form>
				<DocsSearchResult
					searchResults={searchResults}
					setShowMenu={setShowMenu}
				/>
			</div>
		);
	}
};
