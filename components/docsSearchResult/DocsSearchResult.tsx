import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const StyledSearchResultContainer = styled.div`
	position: fixed;
	top: 160px;
	right: 200px;
	width: 17rem;
	padding: 0.5rem 0;
	border-radius: 8px;
	background-color: ${(props) => props.theme.searchbarResultsBackground};
	backdrop-filter: blur(6px);
	box-shadow: 0px 0px 10px 3px
		${(props) => props.theme.searchbarResultsShadow};
	z-index: 10;
	@media (max-width: 1224px) {
		position: static;
		width: 100%;
	}
`;

const StyledLabel = styled.h3`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0.5rem 1rem;
	margin: 0;
	font-weight: bold;
	color: ${(props) => props.theme.searchResultText};
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		color: ${(props) => props.theme.basic};
		transition: 0.3s;
	}
`;

export const DocsSearchResult: React.FC<any> = ({ searchResults }) => {
	const router = useRouter();
	const [mounted, setMounted] = useState(false);
	const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
	useEffect(() => {
		setMounted(true);
		return () => setMounted(false);
	}, []);

	if (mounted) {
		if (isDesktopOrLaptop) {
			if (searchResults.length > 0) {
				return ReactDOM.createPortal(
					<StyledSearchResultContainer>
						{searchResults.map((result: any) => {
							const { label, path } = result;
							return (
								<StyledLabel
									key={path}
									onMouseDown={() => {
										router.push(`/${path}`);
									}}
								>
									{label}
								</StyledLabel>
							);
						})}
					</StyledSearchResultContainer>,
					document.querySelector("#portal") as HTMLElement
				);
			} else {
				return null;
			}
		} else {
			if (searchResults.length > 0) {
				return (
					<StyledSearchResultContainer>
						{searchResults.map((result: any) => {
							const { label, path } = result;
							return (
								<StyledLabel
									key={path}
									onMouseDown={() => {
										router.push(`/${path}`);
									}}
								>
									{label}
								</StyledLabel>
							);
						})}
					</StyledSearchResultContainer>
				);
			} else {
				return null;
			}
		}
	} else {
		return null;
	}
};
