"use client";

import { useEffect } from "react";

const KatexHtmlSanitizer = () => {
	function onScroll(e: Event) {
		const katexHtmls = document.getElementsByClassName("katex-html");
		/* Remove all katex-html elements */
		for (let i = 0; i < katexHtmls.length; i++) {
			katexHtmls[i].remove();
		}
	}

	useEffect(() => {
		document.addEventListener("scroll", onScroll);
		return () => {
			document.removeEventListener("scroll", onScroll);
		};
	}, []);
	return null;
};

export default KatexHtmlSanitizer;
