import { getFlattenToc } from "helpers/functions";
import React, {
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { useTranslation } from "react-i18next";
import { DocContext } from "../docsLayout/DocContext";

const TocHeading = (props: any) => {
	const { isActive, depth, children } = props;
	return (
		<div
			className={`my-4 ${depth === 3 && "ml-6"}
            ${isActive && "text-blue-500 dark:text-sky-400"}`}
		>
			{children}
		</div>
	);
};

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

	const observer = useRef<IntersectionObserver>();
	useEffect(() => {
		observer.current = new IntersectionObserver(callback, options);
	}, []);

	useEffect(() => {
		let h2h3Elements: any;
		if (h2H3Toc && observer.current) {
			h2h3Elements = h2H3Toc.map((heading: any) => {
				return document.querySelector(`[id="${heading.id}"]`);
			});
			for (const element of h2h3Elements) {
				observer.current.observe(element);
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
			<div className="overflow-y-auto h-[70vh] scrollbar">
				{h2H3Toc?.map((heading: any) => {
					return (
						<a href={`#${heading.id}`} key={heading.id}>
							<TocHeading
								isActive={activeTocItem === heading.id}
								depth={heading.depth}
							>
								{heading.value}
							</TocHeading>
						</a>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
};

export const Toc: React.FC<any> = (props: any) => {
	const { showBanner } = props;

	const { t } = useTranslation();
	return (
		<div className="flex-[0_0_350px]">
			<div
				className={`sticky ${
					showBanner ? "top-[184px]" : "top-24"
				} h-[70vh] flex flex-col gap-4 px-4`}
			>
				<div
					className="flex justify-center items-center max-w-max h-8 px-8 mx-auto
                    font-medium 
                    text-sm text-gray-700 dark:text-gray-300
                    bg-gray-50 dark:bg-gray-700
                    shadow rounded-full"
				>
					{t("docContent.onThisPage")}
				</div>
				<TocHeadings />
			</div>
		</div>
	);
};
