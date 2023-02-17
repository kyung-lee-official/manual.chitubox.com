import { HomePage } from "@/components/homePage";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getUrlLocale } from "../redux/language/slice";

const IndexPage = () => {
	const reduxLanguageState = useSelector(
		(state: RootState) => state.language
	);
	let reduxUrlLocale = getUrlLocale(reduxLanguageState.currentLocale);
	history.replaceState(null, "", reduxUrlLocale);
	return <HomePage />;
};

export default IndexPage;
