import { getFlattenToc } from "helpers/functions";
import React, { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { DocsSearchResult, GoSearch } from "..";
import { DocContext } from "../docsLayout";

const StyledSearchBarContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`;

interface StyledInputProps {
	$isDesktopOrLaptop: boolean;
}
const StyledInput = styled.input<StyledInputProps>`
	height: 38px;
	width: 48px;
	padding: 0.2rem 0.5rem;
	border: 0px;
	border-radius: 16px;
	color: ${(props) => props.theme.searchbarText};
	background-color: ${(props) => {
		if (props.$isDesktopOrLaptop) {
			return props.theme.searchbarBackground;
		} else {
			return `rgba(0, 0, 0, 0)`;
		}
	}};
	cursor: pointer;
	transition-duration: 0.3s;
	outline: none;
	font-size: 1.1rem;
	font-weight: 900;
	&:hover {
		box-shadow: -3px -3px 8px ${(props) => props.theme.headerItemHighlight},
			3px 3px 8px ${(props) => props.theme.headerItemShadow};
		background-color: ${(props) => {
			if (props.$isDesktopOrLaptop) {
				return props.theme.searchbarFocusedBackground;
			} else {
				return `rgba(0, 0, 0, 0)`;
			}
		}};
		transition-duration: ${(props) => props.theme.transitionDuration};
	}
	&:focus {
		width: 15rem;
		padding-left: 1rem;
		box-shadow: -3px -3px 8px ${(props) => props.theme.headerItemHighlight},
			3px 3px 8px ${(props) => props.theme.headerItemShadow};
		cursor: text;
		transition-duration: ${(props) => props.theme.transitionDuration};
	}
	&::placeholder {
		color: ${(props) => props.theme.searchbarPlaceholder};
	}
`;

const StyledSearchIconWrapper = styled.div`
	position: absolute;
	top: 5px;
	right: 10px;
	height: 38px;
	fill: ${(props) => props.theme.textTitle};
	pointer-events: none;
`;

export const DocsSearch: React.FC<any> = () => {
	const { flattenPagesContext, searchResults, setSearchResults } =
		useContext(DocContext);
	const [showPlaceHolder, setShowPlaceHolder] = useState<boolean>(false);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });

	function onSearchTermChange(event: any) {
		setSearchTerm(event.target.value.toLowerCase());
	}

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
		<StyledSearchBarContainer>
			<form
				onSubmit={(e) => {
					// Prevent form submission when enter is pressed inside input
					e.preventDefault();
				}}
			>
				<StyledInput
					type="search"
					name="search"
					id="search"
					value={searchTerm}
					placeholder={showPlaceHolder ? "Search" : ""}
					onChange={onSearchTermChange}
					autoComplete="off"
					onFocus={() => {
						setShowPlaceHolder(true);
					}}
					onBlur={() => {
						setSearchTerm("");
						setShowPlaceHolder(false);
					}}
					$isDesktopOrLaptop={isDesktopOrLaptop}
				/>
				<StyledSearchIconWrapper>
					<GoSearch size={"28px"} />
				</StyledSearchIconWrapper>
			</form>
			{isDesktopOrLaptop ? (
				<DocsSearchResult searchResults={searchResults} />
			) : null}
		</StyledSearchBarContainer>
	);
};
