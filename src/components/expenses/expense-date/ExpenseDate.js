import './ExpenseDate.scss';

function ExpenseDate({ date }) {
	const day = date.toLocaleString('en-GB', { day: '2-digit' });
	const month = date.toLocaleString('en-GB', { month: 'short' });
	const year = date.getFullYear();

	return (
		<div className="date">
			<span className="date__day">
				{day}
			</span>
			<span className="date__body">{month} {year}</span>
		</div>
	);
}

export default ExpenseDate;