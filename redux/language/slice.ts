import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import i18n from "i18next";

interface LanguageState {
	currentLocale: string,
	languageList: { label: string, locale: string, urlLocale: string; }[];
}

export const languageList = [
	{ label: "English", locale: "en_US", urlLocale: "en-US" },
	{ label: "简体中文", locale: "zh_CN", urlLocale: "zh-CN" }
];

const initialState: LanguageState = {
	currentLocale: "en_US",
	languageList: languageList
};

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

export const languageSlice = createSlice({
	name: "language",
	initialState,
	reducers: {
		changeLanguage: (state: LanguageState, action: PayloadAction<string>) => {
			state.currentLocale = action.payload;
			i18n.changeLanguage(action.payload);
		}
	}
});

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
