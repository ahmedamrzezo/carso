import { useState } from 'react';
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
		localStorage.setItem('language', activeLang);
		i18n.changeLanguage(activeLang);
	};
	return (
		<Button
			size="dynamic"
			haveHover={false}
			btnType="dotted"
			clickHandler={changeLang}
		>
			{activeLang === 'en' ? 'En' : 'ع'}
		</Button>
	);
};

export default LanguageSwitch;
