// import i18n from "i18next";

// import Backend from "i18next-xhr-backend";

// import { initReactI18next } from "react-i18next";

// i18n
// 	// .use(Backend)
// 	.use(initReactI18next)
// 	.init({
// 		resources: {
// 			en: {
// 				translation: English
// 			},
// 			ar: {
// 				translation: Arabic
// 			},
// 		},
// 		lng: "en",   //default language
// 		fallbackLng: "en", //when specified language translations not present 
// 		//then fallbacklang translations loaded.
// 		debug: true,
// 		backend: {
// 			/* translation file path */
// 			loadPath: "../public/assets/{{ns}}/{{lng}}.json",
// 		},
// 		/* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
// 		ns: ["translations"],
// 		defaultNS: "translations",
// 		keySeparator: false,
// 		interpolation: {
// 			escapeValue: false,
// 			formatSeparator: ",",
// 		},
// 		react: {
// 			wait: true,
// 		},
// 	});


// export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// import Backend from 'i18next-http-backend';

import English from '../src/public/locales/en.json';
import Arabic from '../src/public/locales/ar.json';

const resources = {
	en: {
		translation: English
	},
	ar: {
		translation: Arabic
	},
};

// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
		// you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
		// if you're using a language detector, do not define the lng option

		interpolation: {
			escapeValue: false // react already safes from xss
		}
	});


export default i18n;