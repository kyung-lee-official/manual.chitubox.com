import { getFlattenToc } from "helpers/functions";
import React, {
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { DocContext } from "../docsLayout";

const StyledToc = styled.div`
	flex-grow: 0;
	flex-shrink: 0;
	flex-basis: 400px;
`;

const StyledTocAffix = styled.div`
	position: -webkit-sticky;
	position: sticky;
	top: 160px;
	height: 70vh;
	padding: 2rem 1rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const StyledA = styled.a`
	text-decoration: none;
	color: ${(props) => props.theme.tocColor};
	font-weight: 600;
`;

interface StyledTocHeadingProps {
	$isActive: boolean;
	$depth: number;
}

const StyledTocHeading = styled.div<StyledTocHeadingProps>`
	color: ${(props: any) => {
		return props.$isActive
			? props.theme.tocColorActive
			: props.theme.tocColor;
	}};
	margin: ${(props: any) => {
		switch (props.$depth) {
			case 2:
				return "1rem 0 1rem 0";
			case 3:
				return "1rem 0 1rem 0.7rem";
			default:
				break;
		}
	}};
`;

const StyledOnThisPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	margin: 0 2rem;
	font-weight: bold;
	border-radius: 12px;
	color: ${(props) => props.theme.versionNumber};
	background-color: ${(props) => props.theme.versionNumberBackground};
	box-shadow: -4px -5px 7px ${(props) => props.theme.headerItemHighlight},
		4px 5px 7px ${(props) => props.theme.headerItemShadow};
	transition-duration: ${(props) => props.theme.transitionDuration};
`;

const StyledScrollable = styled.div`
	overflow-y: auto;
	height: 70vh;
	&::-webkit-scrollbar {
		width: 5px;
		border-radius: 3px;
		background-color: ${(props) => props.theme.sidebarScrollbar};
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 3px;
		background-color: ${(props) => props.theme.sidebarScrollbarThumb};
	}
	&::-webkit-scrollbar-thumb {
		&:hover {
			border-radius: 3px;
			background-color: ${(props) => props.theme.sidebarScrollbarHover};
		}
	}
`;

const TocHeadings: React.FC<any> = () => {
	const { pageContext } = useContext(DocContext);
	const [activeTocItem, setActiveTocItem] = useState("");
	const toc = pageContext?.toc;
	let h2H3Toc: any;

	const options = useMemo<{
		root: HTMLDivElement | null;
		rootMargin: string;
		threshold: number[];
	}>(() => {
		return {
			root: null,
			rootMargin: "0px",
			threshold: [0.5],
		};
	}, []);

	const callback = useCallback(
		(entries: any, observer: any) => {
			let visibleHeadings: any = [];
			for (const entry of entries) {
				if (entry.isIntersecting) {
					visibleHeadings.push(entry.target.id);
				}
			}
			/* If there is only one visible entry, this is our "active" heading */
			if (visibleHeadings.length === 1) {
				setActiveTocItem(visibleHeadings[0]);
			} else if (visibleHeadings.length > 1) {
				/**
				 * If there are more than one visible entries,
				 * choose the one that is closest to the top of the viewport
				 * */
				const sortedVisibleHeadings = visibleHeadings.sort(
					(a: any, b: any) => {
						return h2H3Toc.indexOf(a) - h2H3Toc.indexOf(b);
					}
				);
				setActiveTocItem(sortedVisibleHeadings[0]);
			}
		},
		[h2H3Toc]
	);

	const observer = useMemo(() => {
		return new IntersectionObserver(callback, options);
	}, [callback, options]);

	useEffect(() => {
		let h2h3Elements: any;
		if (h2H3Toc) {
			h2h3Elements = h2H3Toc.map((heading: any) => {
				return document.querySelector(`[id="${heading.id}"]`);
			});
			for (const element of h2h3Elements) {
				observer.observe(element);
			}
		}
	}, [h2H3Toc, observer]);

	if (toc) {
		const flattenToc = getFlattenToc(toc);
		if (flattenToc) {
			h2H3Toc = flattenToc.filter((heading: any) => {
				return heading.depth === 2 || heading.depth === 3;
			});
		}
		return (
			<StyledScrollable>
				{h2H3Toc?.map((heading: any) => {
					return (
						<StyledA href={`#${heading.id}`} key={heading.id}>
							<StyledTocHeading
								$isActive={activeTocItem === heading.id}
								$depth={heading.depth}
							>
								{heading.value}
							</StyledTocHeading>
						</StyledA>
					);
				})}
			</StyledScrollable>
		);
	} else {
		return null;
	}
};

export const Toc: React.FC<any> = () => {
	const { t } = useTranslation();
	return (
		<StyledToc>
			<StyledTocAffix>
				<StyledOnThisPage>
					{t("docContent.onThisPage")}
				</StyledOnThisPage>
				<TocHeadings />
			</StyledTocAffix>
		</StyledToc>
	);
};
