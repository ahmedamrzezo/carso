import './ExpenseItem.scss';

function ExpenseItem() {
	const expense = {
		name: 'My exp',
		description: 'Desc',
		date: new Date().toDateString()
	};
	// const expenseName = 'My exp';
	return (
		<div className="expense-item">
			<div>
				<h4>{expense.name}</h4>
				<p>{expense.description}</p>
				<small>{expense.date}</small>
			</div>
		</div>
	);
}

export default ExpenseItem;