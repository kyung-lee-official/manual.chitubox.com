import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { initialState } from "../storeVersion/slice";
import { ThemeProvider } from "styled-components";
import { changeLanguage, getUrlLocale, languageList } from "../language/slice";
import { ThemeType, dark, light } from "styles/themes";
import { useRouter } from "next/router";
import i18n from "i18n/configs";

const StoreWrapper: React.FC<any> = ({ children }) => {
	const router = useRouter();
	/* Reset and reload Redux Store to localStorage if persisted part is updated. */
	const storeVersion = useSelector((state: RootState) => state.storeVersion);
	if (
		storeVersion.storeVersion !== initialState.storeVersion ||
		storeVersion.storeVersion === undefined
	) {
		localStorage.clear();
		router.reload();
	}

	const reduxTheme = useSelector((state: RootState) => state.theme);
	const theme: ThemeType = reduxTheme.currentTheme === "light" ? light : dark;

	const reduxLanguageState = useSelector(
		(state: RootState) => state.language
	);
	const dispatch = useDispatch();

	/**
	 * Get the URL locale of current language in Redux Store.
	 * If not exists, set en_US as the default value.
	 */
	let reduxUrlLocale = getUrlLocale(reduxLanguageState.currentLocale);
	if (!reduxUrlLocale) {
		dispatch(changeLanguage("en_US"));
	}

	let urlRouteLevel1 = router.pathname.split("/")[1];

	useEffect(() => {
		if (
			urlRouteLevel1 === "" ||
			urlRouteLevel1 === "404" ||
			urlRouteLevel1 === "en" ||
			urlRouteLevel1 === "zh" ||
			urlRouteLevel1 === undefined
		) {
			/** Without locale in route level 1,
			 * for example:
			 * - HomePage without locale
			 * - 404 page
			 * Sync i18next to Redux Store language. */
			i18n.changeLanguage(reduxLanguageState.currentLocale);
		} else {
			if (urlRouteLevel1 != reduxUrlLocale) {
				/** If URL locale != Redux Store language,
				 * set Redux Store language to URL language,
				 * then sync i18next to Redux Store language.
				 **/
				let targetLanguageCode = languageList.find((language: any) => {
					return urlRouteLevel1 === language.urlLocale;
				})?.locale;
				dispatch(changeLanguage(targetLanguageCode as string));
			} else {
				/* Only sync i18next to Redux Store language. */
				i18n.changeLanguage(reduxLanguageState.currentLocale);
			}
		}
	}, []);

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StoreWrapper;
