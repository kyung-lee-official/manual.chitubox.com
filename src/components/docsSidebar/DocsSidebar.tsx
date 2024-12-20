"use client";

import { useEffect, useState } from "react";
import { DocsMenu } from "../docsMenu/DocsMenu";
import { useMediaQuery } from "react-responsive";
import { FieldType, MediaQuery } from "@/utils/types";
import { usePageContext } from "@/utils/hooks";

const DocsSidebar = () => {
	const [headerHeight, setHeaderHeight] = useState("0px");

	const pgCtx = usePageContext();
	let type: FieldType = "book";
	if (pgCtx && "type" in pgCtx) {
		type = pgCtx.type;
	}

	useEffect(() => {
		const header = document.getElementById("header");
		if (!header) return;
		const resizeObserver = new ResizeObserver(() => {
			/* Do what you want to do when the size of the element changes */
			setHeaderHeight(`${header.clientHeight}px`);
		});
		resizeObserver.observe(header);
		return () => resizeObserver.disconnect(); /* clean up */
	}, []);

	const isLg = useMediaQuery({ query: MediaQuery.lg });

	if (isLg) {
		if (type === "book") {
			return (
				<div
					className="flex-[0_0_300px]
					border-r-[1px] border-neutral-200 dark:border-neutral-800
					duration-300"
				>
					<div
						className={`sticky overflow-auto scrollbar`}
						style={{
							top: headerHeight,
							height: `calc(100vh - ${headerHeight})`,
						}}
					>
						<DocsMenu />
					</div>
				</div>
			);
		} else {
			return null;
		}
	} else {
		return null;
	}
};

export default DocsSidebar;
