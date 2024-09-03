"use client";

import { useOramaPage } from "@/components/orama/orama-route";
import LocalSearch from "./LocalSearch";
import OramaMobileSearchResult from "@/components/orama/search/OramaMobileSearchResult";
import { Dispatch, SetStateAction } from "react";

function DocsSearch(props: { setShowMenu: Dispatch<SetStateAction<boolean>> }) {
	const { setShowMenu } = props;
	const isOramaPage = useOramaPage();
	if (isOramaPage) {
		return <OramaMobileSearchResult setShowMenu={setShowMenu} />;
	} else {
		return <LocalSearch setShowMenu={setShowMenu} />;
	}
}

export default DocsSearch;
