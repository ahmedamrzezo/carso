import ExpenseDate from '../expense-date/ExpenseDate';
import './ExpenseItem.scss';
import '../../../styles/layout/_card.scss';

function ExpenseItem({ expense }) {
	return (
		<div className="card expense-item">
			<ExpenseDate date={expense.date} />
			<div>
				<h4>{expense.name}</h4>
				<p>{expense.description}</p>
			</div>
		</div>
	);
}

export default ExpenseItem;