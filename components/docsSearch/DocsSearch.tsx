import { getFlattenToc } from "helpers/functions";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { DocContext } from "../docsLayout/DocContext";
import { GoSearch } from "../icons/Icons";
import dynamic from "next/dynamic";

const DynamicDocsSearchResult = dynamic(
	() => import("@/components/docsSearchResult/DocsSearchResult"),
	{
		ssr: false,
	}
);

const DocsSearch: React.FC<any> = () => {
	const { flattenPagesContext, searchResults, setSearchResults } =
		useContext(DocContext);
	const searchIconRef = useRef<any>(null);
	const [showInput, setShowInput] = useState<boolean>(false);
	const [searchTerm, setSearchTerm] = useState<string>("");

	function onSearchTermChange(event: any) {
		setSearchTerm(event.target.value.toLowerCase());
	}

	const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1280px)" });
	const [isDesktop, setIsDesktop] = useState(isDesktopOrLaptop);
	useEffect(() => {
		setIsDesktop(isDesktopOrLaptop);
	}, [isDesktopOrLaptop]);

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
		if (searchTerm !== "") {
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
						return (
							getFlattenToc(flattenPagesContext.toc).filter(
								(heading: any) => {
									return (
										heading.value
											.toLowerCase()
											.indexOf(
												searchTerm.toLowerCase()
											) != -1
									);
								}
							).length != 0
						);
					} else {
						/* TOC is empty */
						return false;
					}
				}
			);
			setSearchResults(searchResults);
		} else {
			setSearchResults("");
		}
	}, [searchTerm, flattenPagesContext, setSearchResults]);

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
			<form
				className="absolute right-10"
				onSubmit={(e) => {
					/* Prevent form submissions when enter is pressed inside input */
					e.preventDefault();
				}}
			>
				<input
					className={`search-input
                    ${showInput ? "w-64" : "w-0"} h-8 ${showInput && "px-6"}
                    font-medium text-base text-gray-600 dark:text-gray-300
                    bg-gray-200 dark:bg-gray-700
                    rounded-full ${
						showInput ? "opacity-100" : "opacity-0"
					} outline-none placeholder:text-lg
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
			{isDesktop && (
				<DynamicDocsSearchResult searchResults={searchResults} />
			)}
		</div>
	);
};

export default DocsSearch;
