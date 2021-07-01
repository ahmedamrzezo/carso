import './Expenses.scss';

import ExpenseItem from "./expense-item/ExpenseItem";

function Expenses() {
	const expenses = [{
		name: 'My exp',
		description: 'Desc',
		date: new Date()
	},
	{
		name: 'My exp2',
		description: 'Desc 2',
		date: new Date()
	}];

	return (
		<div className="expenses-list">
			{expenses.map((expense, id) => <ExpenseItem expense={expense} key={id} />)}
		</div>);
}

export default Expenses;