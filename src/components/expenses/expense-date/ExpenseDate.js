import './ExpenseDate.scss';

function ExpenseDate({ children, date }) {
	const day = new Date(date).toLocaleString('en-GB', { day: '2-digit' });
	const month = new Date(date).toLocaleString('en-GB', { month: 'short' });
	const year = new Date(date).getFullYear();

	return (
		<div className="bg-primary_light_color flex flex-wrap items-center justify-center p-4 w-48 h-48 rounded-xl">
			{date &&
				<div>
					<span className="font-bold w-full text-center text-8xl">{day}</span>
					<br />
					<span className="text-4xl text-gray-500">{month} {year}</span>
				</div>}
			{!date && children}
		</div>
	);
}

export default ExpenseDate;