import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../components/shared/ui/button/Button';

const LanguageSwitch = () => {
	const [activeLang, setActiveLang] = useState(
		localStorage.getItem('language') || 'en'
	);

	const [, i18n] = useTranslation();

	const changeLang = () => {
		setActiveLang((lang) => {
			if (lang === 'en') return 'ar';
			if (lang === 'ar') return 'en';
		});
	};

	useEffect(() => {
		toggleDirHtml(activeLang);
		localStorage.setItem('language', activeLang);
		i18n.changeLanguage(activeLang);
		toggleDirHtml(activeLang);
		console.log('changed');
	}, [activeLang, i18n]);

	const toggleDirHtml = (lang) => {
		const dir = {
			en: 'ltr',
			ar: 'rtl',
		};
		document.dir = dir[lang];
		document.documentElement.lang = lang;
	};

	return (
		<Button
			size="icon"
			haveHover={false}
			btnType="dotted"
			clickHandler={changeLang}
		>
			{activeLang === 'en' ? 'ع' : 'En'}
		</Button>
	);
};

export default LanguageSwitch;
