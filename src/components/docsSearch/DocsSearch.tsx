"use client";

import { useOramaPage } from "../orama/orama-route";
import OramaSearch from "../orama/search/OramaSearch";
import LocalSearch from "./LocalSearch";

function DocsSearch() {
	const isOramaPage = useOramaPage();
	if (isOramaPage) {
		return <OramaSearch />;
	} else {
		return <LocalSearch />;
	}
}

export default DocsSearch;
