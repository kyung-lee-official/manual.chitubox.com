import i18n from "i18next";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type LanguageType = {
	label: string;
	locale: Language;
	urlLocale: string;
};

export const languageList: LanguageType[] = [
	{ label: "English", locale: "en_US", urlLocale: "en-US" },
	{ label: "简体中文", locale: "zh_CN", urlLocale: "zh-CN" },
	{ label: "繁体中文", locale: "zh_HK", urlLocale: "zh-HK" }
];

export function getLocale(urlLocale: string) {
	return languageList.find((language: any) => {
		return language.urlLocale === urlLocale;
	})?.locale;
}

export function getUrlLocale(locale: string) {
	return languageList.find((language: any) => {
		return language.locale === locale;
	})?.urlLocale;
}

export type Language = "en_US" | "zh_CN" | "zh_HK";

type State = {
	language: Language;
};

type Action = {
	setLanguage: (language: Language) => void;
};

export const useLanguageStore = create<State & Action>()(
	devtools(
		persist(
			(set) => ({
				language: "en_US",
				setLanguage: (language: Language) => {
					i18n.changeLanguage(language);
					return set((state) => {
						return { language: language };
					});
				}
			}),
			{
				name: "language-storage"
			}
		),
		{
			name: "language"
		}
	)
);
