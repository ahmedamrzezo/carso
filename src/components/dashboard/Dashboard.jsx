import { useCallback, useEffect, useState } from 'react';
import useHttp from '../../hooks/use-http';
import Spinner from '../shared/ui/spinner/Spinner';
import DashboardCard from './dashboard-card/DashboardCard';

const Dashboard = () => {
	const [categories, setCategories] = useState([]);

	const [categoriesLoading, , fetchCategories] = useHttp();

	const getCategories = useCallback(async () => {
		const categs = await fetchCategories({
			endpoint: '/categories',
			method: 'GET',
		});
		setCategories(categs);
	}, [fetchCategories]);

	useEffect(() => getCategories(), [getCategories]);

	return (
		<section className="section">
			<h1 className="section__title">Dashboard</h1>
			<p className="section__description">
				Here you can find the overall spending
			</p>

			<div className="section__content grid grid-cols-2 gap-x-6 gap-y-12">
				{categoriesLoading && <Spinner />}
				{!categoriesLoading &&
					categories.map((cat) => (
						<DashboardCard
							key={cat.id}
							title={cat.name.en}
							dataSource={[1, 2, 3, 4]}
						></DashboardCard>
					))}
			</div>
		</section>
	);
};

export default Dashboard;
