import { useEffect, useRef, useState } from "react";
import { GoSearch } from "../icons/Icons";
import { MediaQuery } from "@/utils/types";
import { getFlattenToc } from "@/utils/data";
import { useMediaQuery } from "react-responsive";
import dynamic from "next/dynamic";
import { useDocsContext } from "@/utils/hooks";

const DynamicDocsSearchResult = dynamic(
	() => import("@/components/docsSearch/DocsSearchResult"),
	{
		ssr: false,
	}
);

const DocsSearch = () => {
	const { docInstanceContext, flattenPagesContext } = useDocsContext();

	const searchIconRef = useRef<any>(null);
	const [showInput, setShowInput] = useState<boolean>(false);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [searchResults, setSearchResults] = useState<any>([]);

	function onSearchTermChange(event: any) {
		setSearchTerm(event.target.value.toLowerCase());
	}

	useEffect(() => {
		function handleClickOutside(event: any) {
			if (
				searchIconRef.current &&
				!searchIconRef.current.contains(event.target) &&
				!event.target.classList.contains("search-input")
			) {
				setShowInput(false);
			}
		}
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [searchIconRef]);

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

	const isDesktopOrLaptop = useMediaQuery({ query: MediaQuery.lg });
	if (isDesktopOrLaptop && docInstanceContext) {
		return (
			<div className="relative flex justify-center items-center">
				<div
					ref={searchIconRef}
					className="cursor-pointer"
					onClick={() => {
						setShowInput(true);
					}}
				>
					<GoSearch size={32} />
				</div>
				<div
					className="absolute top-0 right-10
					flex flex-col justify-start items-end gap-6"
				>
					<form
						onSubmit={(e) => {
							/* Prevent form submissions when enter is pressed inside input */
							e.preventDefault();
						}}
					>
						<input
							className={`search-input
							${showInput ? "w-64" : "w-0"} h-8 ${showInput && "px-6"}
							text-neutral-600 dark:text-neutral-300
							bg-neutral-200 dark:bg-neutral-800
							rounded-full ${showInput ? "opacity-100" : "opacity-0"} outline-none
							transition-all duration-300`}
							type="search"
							name="search"
							id="search"
							value={searchTerm}
							placeholder={"Search"}
							onChange={onSearchTermChange}
							autoComplete="off"
							onBlur={() => {
								setSearchTerm("");
							}}
						/>
					</form>
					<DynamicDocsSearchResult searchResults={searchResults} />
				</div>
			</div>
		);
	} else {
		return null;
	}
};

export default DocsSearch;
