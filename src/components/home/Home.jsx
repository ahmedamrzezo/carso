import { useTranslation } from 'react-i18next';
import Button from '../shared/ui/button/Button';

const Home = () => {
	const { t } = useTranslation();

	return (
		<section className="section">
			<h1 className="section__title text-9xl">
				{t('welcomeTo')} <br />
				<mark className="mark">Expensat</mark>
			</h1>
			<p className="section__description mt-6">
				Here you can add your car expenses and track them to better manage your
				wallet.
			</p>
			<div className="section__content">
				<Button btnType="primary">Get started</Button>
			</div>
		</section>
	);
};

export default Home;
