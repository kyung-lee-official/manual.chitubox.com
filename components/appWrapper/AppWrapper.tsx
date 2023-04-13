import React, { useEffect } from "react";
import { useRouter } from "next/router";
import i18n from "i18n/configs";
import { Theme, useThemeStore } from "stores/theme";
import {
	Language,
	LanguageType,
	getUrlLocale,
	languageList,
	useLanguageStore,
} from "stores/language";

const AppWrapper: React.FC<any> = ({ children }) => {
	const router = useRouter();
	const { language, setLanguage } = useLanguageStore();

	/**
	 * Get the URL locale of current language in Store.
	 * If not exists, set en_US as the default value.
	 */
	let urlLocale = getUrlLocale(language);
	if (!urlLocale) {
		setLanguage("en_US");
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
			 * Sync i18next to Store language. */
			i18n.changeLanguage(language);
		} else {
			if (urlRouteLevel1 !== urlLocale) {
				/** If URL locale != Store language,
				 * set Store language to URL language,
				 * then sync i18next to Store language.
				 **/
				let targetLanguage: Language | undefined = languageList.find(
					(language: LanguageType) => {
						return urlRouteLevel1 === language.urlLocale;
					}
				)?.locale;
				if (targetLanguage) {
					setLanguage(targetLanguage);
				}
			} else {
				/* Only sync i18next to Store language. */
				i18n.changeLanguage(language);
			}
		}
	}, []);

	return <div>{children}</div>;
};

export default AppWrapper;
