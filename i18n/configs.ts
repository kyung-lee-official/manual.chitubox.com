import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translation_en_US from "./en-US.json";
import translation_zh_CN from "./zh-CN.json";
import translation_zh_HK from "./zh-HK.json";

/** the translations
* (tip move them in a JSON file and import them,
* or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files) 
*/
const resources = {
	en_US: {
		translation: translation_en_US
	},
	zh_CN: {
		translation: translation_zh_CN
	},
	zh_HK: {
		translation: translation_zh_HK
	}
};

i18n
	/* passes i18n down to react-i18next */
	.use(initReactI18next)
	.init({
		resources,
		/** language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
		 * you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
		 * if you're using a language detector, do not define the lng option
		 * */
		lng: "en_US",

		interpolation: {
			/* react already safes from xss */
			escapeValue: false
		}
	});

export default i18n;
