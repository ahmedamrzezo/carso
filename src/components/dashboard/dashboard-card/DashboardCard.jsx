const DashboardCard = ({ title, dataSource }) => {
	return (
		<div className="card">
			<h2 className="card__title">{title}</h2>

			<div className="flex flex-col gap-y-4 mt-12">
				{dataSource.map((data) => (
					<div key={data} className="">
						{data}
					</div>
				))}
			</div>
		</div>
	);
};

export default DashboardCard;
